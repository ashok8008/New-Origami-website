"""
IndexNow priority-push helper — submits a curated list of top URLs from
origami.dev to all IndexNow-compatible engines in one call.
"""
from __future__ import annotations

import logging
import os
from typing import Any

import httpx

logger = logging.getLogger("origami.indexnow")

HOST = os.environ.get("INDEXNOW_HOST", "www.origami.dev")
KEY = os.environ.get("INDEXNOW_KEY", "3e8d2c8a947c7deb58f2387b467082bf")

ENDPOINTS = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
    "https://searchadvisor.naver.com/indexnow",
    "https://indexnow.seznam.cz/indexnow",
]


def _priority_urls() -> list[str]:
    """Curated ~50-URL priority list — home, services, industries, top guides,
    hire index, ai practice, key city landings."""
    base = f"https://{HOST}"
    urls = [
        f"{base}/",
        f"{base}/about",
        f"{base}/services",
        f"{base}/ai",
        f"{base}/ai-solutions",
        f"{base}/work",
        f"{base}/industries",
        f"{base}/auctions",
        f"{base}/media",
        f"{base}/games",
        f"{base}/build",
        f"{base}/solutions",
        f"{base}/compare",
        f"{base}/insights",
        f"{base}/guides",
        f"{base}/glossary",
        f"{base}/hire",
        f"{base}/locations",
        f"{base}/approach",
        f"{base}/careers",
        f"{base}/contact",
    ]
    services = [
        "mobile-app-development", "ai-and-llm-products", "auctions-and-fan-drops",
        "class-ii-and-class-iii-games", "web-development", "design-and-brand",
        "data-and-bi", "dedicated-teams",
    ]
    urls += [f"{base}/services/{s}" for s in services]

    industries = [
        "hip-hop-and-music", "real-money-gaming", "celebrity-and-creator-economy",
        "commerce-and-retail", "health-and-wellness", "fintech-and-payments",
        "travel-and-lifestyle", "automotive-and-aftermarket", "martech-and-creator-economy",
    ]
    urls += [f"{base}/industries/{i}" for i in industries]

    cities = [
        "new-york", "los-angeles", "san-francisco", "london", "dubai",
        "singapore", "bengaluru", "toronto", "chicago", "austin",
    ]
    urls += [f"{base}/locations/{c}" for c in cities]

    guides = [
        "how-to-build-a-rag-application",
        "chatgpt-seo-and-ai-visibility",
        "build-an-auction-platform",
        "class-ii-vs-class-iii-gaming",
        "hire-mobile-app-developers",
        "programmatic-seo-for-b2b",
    ]
    urls += [f"{base}/guides/{g}" for g in guides]
    return urls


async def push_priority() -> dict[str, Any]:
    if not KEY:
        raise RuntimeError("INDEXNOW_KEY not configured")
    urls = _priority_urls()
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": f"https://{HOST}/{KEY}.txt",
        "urlList": urls,
    }
    results: dict[str, Any] = {}
    async with httpx.AsyncClient(timeout=20.0) as client:
        for endpoint in ENDPOINTS:
            try:
                r = await client.post(
                    endpoint,
                    json=payload,
                    headers={"Content-Type": "application/json"},
                )
                results[endpoint] = {"status": r.status_code}
            except Exception as exc:
                results[endpoint] = {"error": str(exc)}
    logger.info("indexnow priority push count=%d results=%s", len(urls), results)
    return {"pushed": len(urls), "endpoints": results, "sample": urls[:5]}
