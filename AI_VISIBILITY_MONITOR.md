# Origami AI Visibility Monitor

Cross-engine AI answer-engine + SERP citation monitor for `origami.dev`.

## What it does

Every Monday at **09:00 UTC**, a scheduled job runs 25 seed queries against 5 engines and emails a weekly digest to `AI_MONITOR_RECIPIENT`:

| Engine | Provider | What we check |
|---|---|---|
| Google AI Overview | SerpAPI | Whether `origami.dev` appears in the AI Overview references or text |
| Google Organic (cross-check) | DataForSEO | Whether `origami.dev` ranks in top 20 |
| Bing SERP | SerpAPI | Whether `origami.dev` ranks in top 10 |
| Brave Search + Brave AI Summariser | Brave Search API | Whether `origami.dev` appears in results or summariser |
| ChatGPT-style answer | GPT-5 via Emergent LLM key | Whether GPT-5 cites `origami.dev` when asked directly |

## API

### `POST /api/ai-monitor/run`
Trigger a run manually. Requires `X-Admin-Token: <AI_MONITOR_ADMIN_TOKEN>`.

```bash
curl -X POST https://api.origami.dev/api/ai-monitor/run \
  -H "Content-Type: application/json" \
  -H "X-Admin-Token: origami-monitor-2026" \
  -d '{"send_email": true}'
```

Optional body: `{"queries": ["custom query 1", ...], "send_email": false}`.

### `GET /api/ai-monitor/latest`
Latest full report JSON.

### `GET /api/ai-monitor/history`
Last 12 report summaries (without per-query rows).

### `GET /api/ai-monitor/seed-queries`
Read the 25 seed queries.

## IndexNow priority-push

### `POST /api/indexnow/priority`
Pushes a curated 50-URL list (home, all services, all industries, top guides, top cities) to Bing, Yandex, Naver, Seznam and the generic IndexNow relay.

```bash
curl -X POST https://api.origami.dev/api/indexnow/priority
```

Run this after every big content deploy.

### `POST /api/indexnow` (arbitrary URLs)
```bash
curl -X POST https://api.origami.dev/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls":["https://www.origami.dev/insights/new-post"]}'
```

## Configuration (backend/.env)

```
SERPAPI_KEY=...                       # https://serpapi.com  (Google AI Overview + Bing)
BRAVE_SEARCH_API_KEY=...              # https://api.search.brave.com  (Brave + Summariser)
DATAFORSEO_LOGIN=...                  # https://app.dataforseo.com  (Google cross-check)
DATAFORSEO_PASSWORD=...
EMERGENT_LLM_KEY=sk-emergent-...      # ChatGPT-style POV via GPT-5
AI_MONITOR_TARGET_DOMAIN=origami.dev
AI_MONITOR_RECIPIENT=hello@origami.dev  # (currently ashok@theredclub.com until Resend domain verified)
AI_MONITOR_ADMIN_TOKEN=origami-monitor-2026
INDEXNOW_KEY=3e8d2c8a947c7deb58f2387b467082bf
INDEXNOW_HOST=www.origami.dev
```

## Interpreting the digest

Week 1 you'll likely see **0 citations** — that's the honest baseline. Origami currently has 39 organic keywords per Semrush. Growth curve to expect:

- Weeks 1–2: 0 citations (baseline)
- Weeks 3–6: Bing + Brave start ranking a couple queries (indexation catching up)
- Weeks 6–12: Google AI Overview picks up long-tail citations for `/glossary/*` and `/guides/*` pages
- Weeks 12+: ChatGPT/GPT-5 starts citing origami.dev directly

## Historical data

All reports are persisted to MongoDB `origami.ai_visibility_reports`. Track the trend on `total_citations` and `citations_by_engine` week-over-week.

## Cost per run

Approximate spend per weekly run (25 queries):
- SerpAPI: 50 searches (25 Google + 25 Bing) ≈ $0.75
- DataForSEO: 25 SERP requests ≈ $0.05
- Brave Search: 25 requests (free tier — 2,000/mo free)
- Emergent LLM (GPT-5): 25 messages ≈ $0.30
- **Total: ~$1.10/week ≈ $5/month**
