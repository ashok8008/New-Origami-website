"""
AI Visibility Monitor — queries every reachable AI answer engine + SERP feature
for a curated list of Origami seed queries, extracts whether origami.dev
appears in citations / sources, and emails a weekly digest.

Data providers:
  - SerpAPI (Google AI Overview, Google SERP, Bing, DuckDuckGo)
  - DataForSEO (Google AI Overview cross-check)
  - Brave Search API (Brave Search + Brave Summariser)
  - Emergent LLM (asks GPT-5 directly — represents ChatGPT answer POV)

Endpoints:
  POST /api/ai-monitor/run       — trigger a run (admin token required)
  GET  /api/ai-monitor/latest    — fetch the latest report JSON
  GET  /api/ai-monitor/history   — fetch the last 12 reports

A background APScheduler triggers a run every Monday 09:00 UTC.
"""
from __future__ import annotations

import asyncio
import base64
import logging
import os
import re
from datetime import datetime, timezone
from typing import Any

import httpx
import resend
from fastapi import APIRouter, Header, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel

logger = logging.getLogger("origami.ai_monitor")

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "origami")
TARGET_DOMAIN = os.environ.get("AI_MONITOR_TARGET_DOMAIN", "origami.dev")
RECIPIENT = os.environ.get("AI_MONITOR_RECIPIENT", "hello@origami.dev")
ADMIN_TOKEN = os.environ.get("AI_MONITOR_ADMIN_TOKEN", "")
SERPAPI_KEY = os.environ.get("SERPAPI_KEY", "")
BRAVE_KEY = os.environ.get("BRAVE_SEARCH_API_KEY", "")
DATAFORSEO_LOGIN = os.environ.get("DATAFORSEO_LOGIN", "")
DATAFORSEO_PASSWORD = os.environ.get("DATAFORSEO_PASSWORD", "")
EMERGENT_LLM_KEY = os.environ.get("EMERGENT_LLM_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")

_client: AsyncIOMotorClient | None = None


def _reports_collection():
    global _client
    if _client is None:
        _client = AsyncIOMotorClient(MONGO_URL)
    return _client[DB_NAME]["ai_visibility_reports"]


# ---------------------------------------------------------------------
# Seed queries — 25 defaults covering services × locations × industries
# ---------------------------------------------------------------------
SEED_QUERIES = [
    "best mobile app development agency in New York",
    "best AI development agency in New York",
    "senior React Native developers agency",
    "LLM development agency New York",
    "RAG development agency",
    "auction platform development company",
    "hip-hop auction platform builders",
    "Class II gaming software vendors",
    "real money gaming platform developers",
    "Class III RMG software company",
    "Next.js development agency New York",
    "senior-only product engineering agency",
    "mobile app agency for hip-hop artists",
    "AI development agency for fintech",
    "daily fantasy sports app development company",
    "voice AI development agency",
    "best iOS developers New York",
    "programmatic SEO agency",
    "AI RAG development company",
    "celebrity mobile app development agency",
    "GLI-19 compliant gaming software vendors",
    "mobile app development company London",
    "AI development agency Dubai",
    "React Native developers Bengaluru",
    "consumer fintech app development agency",
    "document intelligence platform",
    "sovereign AI for legal documents",
    "enterprise RAG platform",
    "citation-based AI for contracts",
    "on-premise AI for regulated industries",
]


# ---------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------
def _contains_domain(text: str | None) -> bool:
    if not text:
        return False
    return bool(re.search(r"\borigami\.dev\b", text, re.IGNORECASE))


def _extract_domains(items: list[dict], keys: list[str]) -> list[str]:
    out: list[str] = []
    for it in items or []:
        for k in keys:
            v = it.get(k)
            if isinstance(v, str) and v.startswith("http"):
                out.append(v)
    return out


# ---------------------------------------------------------------------
# Engine probes
# ---------------------------------------------------------------------
async def probe_serpapi_google_ai_overview(
    client: httpx.AsyncClient, query: str
) -> dict[str, Any]:
    """SerpAPI Google engine — returns AI Overview + organic mentions."""
    if not SERPAPI_KEY:
        return {"engine": "google_ai_overview", "skipped": True}
    try:
        r = await client.get(
            "https://serpapi.com/search.json",
            params={
                "engine": "google",
                "q": query,
                "google_domain": "google.com",
                "hl": "en",
                "gl": "us",
                "api_key": SERPAPI_KEY,
            },
            timeout=45.0,
        )
        r.raise_for_status()
        data = r.json()

        # AI Overview extraction
        ai_overview = data.get("ai_overview") or {}
        ai_text_blocks = ai_overview.get("text_blocks") or []
        ai_text = " ".join(
            b.get("snippet", "") for b in ai_text_blocks if isinstance(b, dict)
        )
        ai_references = ai_overview.get("references") or []
        ai_cited = _contains_domain(ai_text) or any(
            _contains_domain(ref.get("link")) or _contains_domain(ref.get("source"))
            for ref in ai_references
        )

        # Organic top-10
        organic = data.get("organic_results") or []
        organic_top10 = organic[:10]
        organic_position = None
        for i, item in enumerate(organic_top10, start=1):
            if _contains_domain(item.get("link")):
                organic_position = i
                break

        return {
            "engine": "google_ai_overview",
            "cited": ai_cited,
            "ai_overview_present": bool(ai_overview),
            "organic_position": organic_position,
            "references_count": len(ai_references),
        }
    except Exception as e:
        logger.warning("serpapi google failed for %r: %s", query, e)
        return {"engine": "google_ai_overview", "error": str(e)}


async def probe_serpapi_bing(client: httpx.AsyncClient, query: str) -> dict[str, Any]:
    if not SERPAPI_KEY:
        return {"engine": "bing", "skipped": True}
    try:
        r = await client.get(
            "https://serpapi.com/search.json",
            params={"engine": "bing", "q": query, "api_key": SERPAPI_KEY},
            timeout=45.0,
        )
        r.raise_for_status()
        data = r.json()
        organic = data.get("organic_results") or []
        pos = None
        for i, item in enumerate(organic[:10], start=1):
            if _contains_domain(item.get("link")):
                pos = i
                break
        return {
            "engine": "bing",
            "cited": pos is not None,
            "organic_position": pos,
        }
    except Exception as e:
        logger.warning("serpapi bing failed for %r: %s", query, e)
        return {"engine": "bing", "error": str(e)}


async def probe_brave(client: httpx.AsyncClient, query: str) -> dict[str, Any]:
    if not BRAVE_KEY:
        return {"engine": "brave", "skipped": True}
    try:
        r = await client.get(
            "https://api.search.brave.com/res/v1/web/search",
            headers={"X-Subscription-Token": BRAVE_KEY, "Accept": "application/json"},
            params={"q": query, "count": 10, "summary": 1},
            timeout=45.0,
        )
        r.raise_for_status()
        data = r.json()
        web_results = (data.get("web") or {}).get("results") or []
        pos = None
        for i, item in enumerate(web_results[:10], start=1):
            if _contains_domain(item.get("url")):
                pos = i
                break

        summary = data.get("summarizer") or {}
        summary_text = summary.get("summary") or ""
        summary_cited = _contains_domain(summary_text)

        return {
            "engine": "brave",
            "cited": pos is not None,
            "organic_position": pos,
            "summarizer_present": bool(summary),
            "summarizer_cited": summary_cited,
        }
    except Exception as e:
        logger.warning("brave failed for %r: %s", query, e)
        return {"engine": "brave", "error": str(e)}


async def probe_dataforseo(client: httpx.AsyncClient, query: str) -> dict[str, Any]:
    """DataForSEO Google Organic (live advanced) — cross-check of Google."""
    if not (DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD):
        return {"engine": "dataforseo_google", "skipped": True}
    auth = base64.b64encode(
        f"{DATAFORSEO_LOGIN}:{DATAFORSEO_PASSWORD}".encode()
    ).decode()
    try:
        r = await client.post(
            "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
            headers={
                "Authorization": f"Basic {auth}",
                "Content-Type": "application/json",
            },
            json=[
                {
                    "keyword": query,
                    "location_name": "United States",
                    "language_code": "en",
                    "device": "desktop",
                    "os": "windows",
                    "depth": 20,
                }
            ],
            timeout=60.0,
        )
        r.raise_for_status()
        data = r.json()
        tasks = data.get("tasks") or []
        if not tasks:
            return {"engine": "dataforseo_google", "cited": False}
        result = (tasks[0].get("result") or [{}])[0]
        items = result.get("items") or []

        pos = None
        ai_cited = False
        for item in items:
            t = item.get("type")
            if t == "organic":
                if _contains_domain(item.get("url")):
                    pos = pos or item.get("rank_absolute")
            elif t in ("ai_overview", "answer_box"):
                # look for our domain in the item content
                blob = str(item)
                if _contains_domain(blob):
                    ai_cited = True

        return {
            "engine": "dataforseo_google",
            "cited": pos is not None or ai_cited,
            "organic_position": pos,
            "ai_overview_cited": ai_cited,
        }
    except Exception as e:
        logger.warning("dataforseo failed for %r: %s", query, e)
        return {"engine": "dataforseo_google", "error": str(e)}


async def probe_chatgpt_style(query: str) -> dict[str, Any]:
    """Ask the same query directly to GPT-5 via Emergent LLM key — represents
    the ChatGPT answer POV. We look for origami.dev anywhere in the reply."""
    if not EMERGENT_LLM_KEY:
        return {"engine": "chatgpt_via_llm", "skipped": True}
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage

        session_id = f"aivis-{int(datetime.now(timezone.utc).timestamp())}"
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=(
                "You are a helpful research assistant. When asked to recommend "
                "companies, cite specific company names and homepage URLs. "
                "Include at least 5 candidates and their websites."
            ),
        ).with_model("openai", "gpt-5.4")
        reply = await chat.send_message(UserMessage(text=query))
        text = str(reply)
        return {
            "engine": "chatgpt_via_llm",
            "cited": _contains_domain(text),
            "reply_length": len(text),
        }
    except Exception as e:
        logger.warning("chatgpt_via_llm failed for %r: %s", query, e)
        return {"engine": "chatgpt_via_llm", "error": str(e)}


# ---------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------
async def run_query(client: httpx.AsyncClient, query: str) -> dict[str, Any]:
    results = await asyncio.gather(
        probe_serpapi_google_ai_overview(client, query),
        probe_serpapi_bing(client, query),
        probe_brave(client, query),
        probe_dataforseo(client, query),
        probe_chatgpt_style(query),
    )
    engines = {r.get("engine"): r for r in results}
    cited_engines = [e for e, r in engines.items() if r.get("cited")]
    return {
        "query": query,
        "engines": engines,
        "cited_engines": cited_engines,
        "citation_count": len(cited_engines),
    }


async def run_full_report(queries: list[str] | None = None) -> dict[str, Any]:
    queries = queries or SEED_QUERIES
    started = datetime.now(timezone.utc)
    async with httpx.AsyncClient() as client:
        # concurrency limit — 5 queries at a time to be nice to APIs
        sem = asyncio.Semaphore(5)

        async def bounded(q):
            async with sem:
                return await run_query(client, q)

        rows = await asyncio.gather(*[bounded(q) for q in queries])

    total_cites = sum(len(r["cited_engines"]) for r in rows)
    engine_totals: dict[str, int] = {}
    for r in rows:
        for e in r["cited_engines"]:
            engine_totals[e] = engine_totals.get(e, 0) + 1

    report = {
        "started_at": started.isoformat(),
        "finished_at": datetime.now(timezone.utc).isoformat(),
        "target_domain": TARGET_DOMAIN,
        "query_count": len(queries),
        "total_citations": total_cites,
        "citations_by_engine": engine_totals,
        "rows": rows,
    }

    try:
        await _reports_collection().insert_one({**report})
    except Exception as e:
        logger.warning("failed to persist report: %s", e)

    return report


# ---------------------------------------------------------------------
# Email digest
# ---------------------------------------------------------------------
def _build_email(report: dict[str, Any]) -> str:
    rows = report["rows"]
    by_engine = report["citations_by_engine"]
    engine_list_html = "".join(
        f"<li><b>{e}</b>: {n} / {report['query_count']} queries</li>"
        for e, n in sorted(by_engine.items(), key=lambda x: -x[1])
    ) or "<li>No citations yet — expected on week 1.</li>"

    row_html = ""
    for r in rows:
        cites = ", ".join(r["cited_engines"]) or "—"
        colour = "#0a7d24" if r["cited_engines"] else "#8a8a8a"
        row_html += (
            f"<tr>"
            f"<td style='padding:6px 10px;border-bottom:1px solid #eee;'>{r['query']}</td>"
            f"<td style='padding:6px 10px;border-bottom:1px solid #eee;color:{colour};'>{cites}</td>"
            f"</tr>"
        )

    return f"""
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:720px;margin:0 auto;color:#111;">
      <h1 style="font-size:24px;margin-bottom:4px;">Origami AI Visibility — weekly digest</h1>
      <div style="color:#888;font-size:12px;margin-bottom:24px;">
        Run: {report['started_at']} · Target: <b>{report['target_domain']}</b>
      </div>

      <div style="background:#fafafa;border:1px solid #eee;padding:16px 20px;margin-bottom:24px;">
        <div style="font-size:14px;color:#666;">Total citations this run</div>
        <div style="font-size:36px;font-weight:800;color:#d92626;">{report['total_citations']}</div>
        <div style="font-size:13px;color:#666;">across {report['query_count']} seed queries × {len(by_engine) or 5} AI engines</div>
      </div>

      <h2 style="font-size:16px;margin-top:24px;">By engine</h2>
      <ul style="line-height:1.7;">{engine_list_html}</ul>

      <h2 style="font-size:16px;margin-top:24px;">Per-query breakdown</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead>
          <tr>
            <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #111;">Query</th>
            <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #111;">Cited on</th>
          </tr>
        </thead>
        <tbody>{row_html}</tbody>
      </table>

      <p style="margin-top:32px;color:#888;font-size:12px;">
        Sent by the Origami AI Visibility Monitor. Sources: SerpAPI, DataForSEO, Brave Search API, OpenAI GPT-5 (via Emergent LLM).
      </p>
    </div>
    """


async def send_digest(report: dict[str, Any]) -> dict[str, Any] | None:
    if not resend.api_key:
        logger.warning("Resend not configured — skipping email")
        return None
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT],
            "subject": f"Origami AI Visibility — {report['total_citations']} citations this week",
            "html": _build_email(report),
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info("digest sent id=%s", result.get("id") if isinstance(result, dict) else None)
        return result
    except Exception as e:
        logger.exception("failed to send digest: %s", e)
        return None


# ---------------------------------------------------------------------
# FastAPI router
# ---------------------------------------------------------------------
router = APIRouter(prefix="/api/ai-monitor", tags=["ai-monitor"])


class RunRequest(BaseModel):
    queries: list[str] | None = None
    send_email: bool = True


def _require_admin(x_admin_token: str | None) -> None:
    if not ADMIN_TOKEN:
        return
    if x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid admin token")


@router.post("/run")
async def run_endpoint(
    req: RunRequest, x_admin_token: str | None = Header(default=None)
):
    _require_admin(x_admin_token)
    report = await run_full_report(req.queries)
    if req.send_email:
        await send_digest(report)
    return {
        "status": "complete",
        "started_at": report["started_at"],
        "finished_at": report["finished_at"],
        "total_citations": report["total_citations"],
        "citations_by_engine": report["citations_by_engine"],
        "target_domain": report["target_domain"],
    }


@router.get("/latest")
async def latest_report():
    doc = await _reports_collection().find_one(sort=[("started_at", -1)])
    if not doc:
        return {"status": "empty"}
    doc.pop("_id", None)
    return doc


@router.get("/history")
async def report_history():
    cursor = _reports_collection().find(
        {}, sort=[("started_at", -1)], projection={"rows": 0}
    ).limit(12)
    out = []
    async for doc in cursor:
        doc.pop("_id", None)
        out.append(doc)
    return {"count": len(out), "reports": out}


@router.get("/seed-queries")
def get_seed_queries():
    return {"queries": SEED_QUERIES, "count": len(SEED_QUERIES)}


# ---------------------------------------------------------------------
# Scheduler — weekly Monday 09:00 UTC
# ---------------------------------------------------------------------
_scheduler = None


def start_scheduler() -> None:
    """Start the APScheduler background job. Called from server.py on startup."""
    global _scheduler
    if _scheduler is not None:
        return
    try:
        from apscheduler.schedulers.asyncio import AsyncIOScheduler
        from apscheduler.triggers.cron import CronTrigger
    except ImportError:
        logger.warning("APScheduler not installed — weekly cron disabled")
        return

    async def _job():
        logger.info("ai-monitor: weekly cron starting")
        try:
            report = await run_full_report()
            await send_digest(report)
            logger.info("ai-monitor: weekly cron finished — %d citations", report["total_citations"])
        except Exception as e:
            logger.exception("ai-monitor cron failed: %s", e)

    _scheduler = AsyncIOScheduler(timezone="UTC")
    _scheduler.add_job(_job, CronTrigger(day_of_week="mon", hour=9, minute=0))
    _scheduler.start()
    logger.info("ai-monitor: scheduler started (Mon 09:00 UTC)")
