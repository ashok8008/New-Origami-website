"""
IP-keyed autosave for /newjoinee. Stores form drafts (text + step) in MongoDB.
TTL index on `last_saved_at` purges drafts older than 7 days automatically.
"""
from __future__ import annotations

import logging
import os
from datetime import datetime, timezone
from typing import Any, Optional

from fastapi import APIRouter, Request
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field

logger = logging.getLogger("origami.autosave")

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "origami")
TTL_DAYS = 7

_client: Optional[AsyncIOMotorClient] = None
_collection = None
_indexes_built = False


async def drafts_collection():
    """Return the drafts collection, lazily connecting + building indexes."""
    global _client, _collection, _indexes_built
    # Re-read at call time so dotenv-loaded values are respected
    mongo_url = MONGO_URL or os.environ.get("MONGO_URL")
    if not mongo_url:
        return None
    if _collection is None:
        _client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=2000)
        _collection = _client[os.environ.get("DB_NAME", DB_NAME)]["onboarding_drafts"]
    if not _indexes_built:
        try:
            await _collection.create_index("ip", unique=True)
            await _collection.create_index(
                "last_saved_at",
                expireAfterSeconds=TTL_DAYS * 24 * 3600,
            )
            _indexes_built = True
        except Exception:  # noqa: BLE001
            logger.exception("Failed to ensure draft indexes")
    return _collection


router = APIRouter(prefix="/api/onboarding", tags=["onboarding-drafts"])


def _client_ip(request: Request) -> str:
    xff = request.headers.get("x-forwarded-for", "")
    if xff:
        return xff.split(",")[0].strip()
    real = request.headers.get("x-real-ip")
    if real:
        return real.strip()
    return request.client.host if request.client else "unknown"


class AutosaveRequest(BaseModel):
    step: int = Field(0, ge=0, le=10)
    form_data: dict[str, Any] = Field(default_factory=dict)


@router.post("/autosave")
async def autosave(req: Request, payload: AutosaveRequest):
    col = await drafts_collection()
    if col is None:
        return {"status": "skipped", "reason": "no-db"}
    ip = _client_ip(req)
    now = datetime.now(timezone.utc)
    # Strip any file-like values defensively; we only persist text/dropdown data
    safe = {k: v for k, v in payload.form_data.items() if not isinstance(v, (bytes, bytearray))}
    await col.update_one(
        {"ip": ip},
        {"$set": {"ip": ip, "step": payload.step, "form_data": safe, "last_saved_at": now}},
        upsert=True,
    )
    return {"status": "saved", "ip_hint": ip[:7] + "…"}


@router.get("/draft")
async def get_draft(req: Request):
    col = await drafts_collection()
    if col is None:
        return {"draft": None}
    ip = _client_ip(req)
    doc = await col.find_one({"ip": ip}, {"_id": 0})
    if not doc:
        return {"draft": None}
    return {"draft": {"step": doc.get("step", 0), "form_data": doc.get("form_data", {}),
                      "last_saved_at": doc.get("last_saved_at").isoformat() if doc.get("last_saved_at") else None}}


@router.delete("/draft")
async def delete_draft(req: Request):
    col = await drafts_collection()
    if col is None:
        return {"status": "skipped"}
    ip = _client_ip(req)
    result = await col.delete_one({"ip": ip})
    return {"status": "deleted", "count": result.deleted_count}
