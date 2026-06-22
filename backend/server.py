import os
import asyncio
import logging
from datetime import datetime, timezone

import resend
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

from new_joiner import router as new_joiner_router

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("origami")

resend.api_key = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "hello@origami.dev")

app = FastAPI(title="Origami Softwares API")

app.include_router(new_joiner_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/")
def root():
    return {"service": "origami-softwares", "status": "ok"}


@app.get("/api/health")
def health():
    return {"status": "healthy"}


class EnquiryRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    company: str = Field(default="", max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)
    source: str = Field(default="website", max_length=50)


def _build_html(req: EnquiryRequest) -> str:
    safe_message = req.message.replace("\n", "<br>")
    company_row = (
        f'<tr><td style="padding:8px 0;color:#6B6B6B;font-family:Inter,Arial,sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;width:120px;">Company</td><td style="padding:8px 0;color:#0D0D0D;font-family:Inter,Arial,sans-serif;font-size:15px;">{req.company}</td></tr>'
        if req.company
        else ""
    )
    return f"""
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#FAFAF7;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid rgba(13,13,13,0.08);">
        <tr><td style="padding:32px 32px 16px;border-bottom:1px solid rgba(13,13,13,0.08);">
          <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.25em;color:#E8382C;text-transform:uppercase;">/// New enquiry</div>
          <h1 style="margin:8px 0 0;font-family:Inter,Arial,sans-serif;font-size:28px;font-weight:900;color:#0D0D0D;letter-spacing:-0.02em;">From {req.name}</h1>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;width:120px;">Name</td><td style="padding:8px 0;color:#0D0D0D;font-size:15px;">{req.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:8px 0;color:#0D0D0D;font-size:15px;"><a href="mailto:{req.email}" style="color:#E8382C;text-decoration:none;">{req.email}</a></td></tr>
            {company_row}
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;">Source</td><td style="padding:8px 0;color:#0D0D0D;font-size:15px;">{req.source}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 32px;border-top:1px solid rgba(13,13,13,0.08);">
          <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.25em;color:#E8382C;text-transform:uppercase;margin-bottom:12px;">/// Message</div>
          <div style="color:#3A3A3A;font-size:15px;line-height:1.7;">{safe_message}</div>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#FAFAF7;border-top:1px solid rgba(13,13,13,0.08);">
          <div style="color:#6B6B6B;font-size:12px;font-family:'Courier New',monospace;letter-spacing:0.18em;text-transform:uppercase;">origami.dev — sent {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>
""".strip()


@app.post("/api/enquiry")
async def submit_enquiry(req: EnquiryRequest):
    if not resend.api_key:
        logger.error("RESEND_API_KEY missing")
        raise HTTPException(status_code=500, detail="Email service is not configured.")

    subject = f"New enquiry from {req.name}" + (f" — {req.company}" if req.company else "")
    params = {
        "from": SENDER_EMAIL,
        "to": [RECIPIENT_EMAIL],
        "reply_to": req.email,
        "subject": subject,
        "html": _build_html(req),
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        email_id = email.get("id") if isinstance(email, dict) else None
        logger.info("enquiry sent id=%s from=%s", email_id, req.email)
        return {"status": "success", "id": email_id}
    except Exception as exc:
        logger.exception("Failed to send enquiry email: %s", exc)
        raise HTTPException(status_code=502, detail="Failed to send enquiry. Please try again or email hello@origami.dev directly.")
