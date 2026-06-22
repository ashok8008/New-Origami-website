"""
New-joiner intake API.

Storage root configurable via NEW_JOINER_STORAGE_ROOT (default /app/data).
Per-joiner folder lives at {ROOT}/new-joiners/{Full Name} - {YYYY-MM-DD}/
"""
from __future__ import annotations

import asyncio
import json
import logging
import os
import re
import unicodedata
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
from typing import Any

import resend
from fastapi import APIRouter, HTTPException, Request, UploadFile
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
)
from starlette.datastructures import UploadFile as StarletteUploadFile

from autosave import drafts_collection

logger = logging.getLogger("origami.new_joiner")
router = APIRouter()

STORAGE_ROOT = Path(os.environ.get("NEW_JOINER_STORAGE_ROOT", "/app/data"))
HR_EMAIL = os.environ.get("HR_EMAIL", "hr@origami.dev")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
COMPANY_NAME = os.environ.get("COMPANY_NAME", "Origami")

MAX_FILE_BYTES = 10 * 1024 * 1024
MAX_TOTAL_BYTES = 300 * 1024 * 1024
ALLOWED_EXT = {".pdf", ".jpg", ".jpeg", ".png"}

FILE_PLAN: dict[str, tuple[str, str]] = {
    "marks_10th": ("Educational Certificates", "10th_marks_card"),
    "marks_12th": ("Educational Certificates", "12th_marks_card"),
    "degree_marks": ("Educational Certificates", "degree_marks_card"),
    "pan_card": ("Identity Documents", "pan_card"),
    "aadhaar_card": ("Identity Documents", "aadhaar_card"),
    "passport_copy": ("Identity Documents", "passport_copy"),
    "experience_1": ("Employment History", "experience_letter_employer1"),
    "relieving_1": ("Employment History", "relieving_letter_employer1"),
    "experience_2": ("Employment History", "experience_letter_employer2"),
    "relieving_2": ("Employment History", "relieving_letter_employer2"),
    "experience_3": ("Employment History", "experience_letter_employer3"),
    "relieving_3": ("Employment History", "relieving_letter_employer3"),
    "payslip_1": ("Payslips", "payslip_month1"),
    "payslip_2": ("Payslips", "payslip_month2"),
    "payslip_3": ("Payslips", "payslip_month3"),
    "address_proof": ("Address Proof", "address_proof"),
    "photos[]": ("Photos", "passport_photo"),
}
REQUIRED_FILES = {
    "marks_10th", "marks_12th", "degree_marks", "pan_card", "aadhaar_card",
    "experience_1", "relieving_1", "payslip_1", "payslip_2", "payslip_3",
    "address_proof", "photos[]",
}
OPTIONAL_FILE_LABELS = {
    "passport_copy": "Passport copy",
    "experience_2": "Experience letter — Employer 2",
    "relieving_2": "Relieving letter — Employer 2",
    "experience_3": "Experience letter — Employer 3",
    "relieving_3": "Relieving letter — Employer 3",
}
FILE_LABELS = {
    "marks_10th": "10th marks card",
    "marks_12th": "12th / PUC marks card",
    "degree_marks": "Degree marks card",
    "pan_card": "PAN card",
    "aadhaar_card": "Aadhaar card",
    "experience_1": "Experience letter — Employer 1",
    "relieving_1": "Relieving letter — Employer 1",
    "payslip_1": "Payslip — last month",
    "payslip_2": "Payslip — 2nd last month",
    "payslip_3": "Payslip — 3rd last month",
    "address_proof": "Current address proof",
    "photos[]": "Passport-size photographs",
    **OPTIONAL_FILE_LABELS,
}

REQUIRED_TEXT_FIELDS = (
    "salutation full_name gender email date_of_joining department mobile_number "
    "blood_group nationality highest_qualification "
    "pan_number aadhaar_number "
    "bank_name account_holder account_number ifsc_code uan_number "
    "current_address permanent_address "
    "emergency_name emergency_phone emergency_relationship "
    "pro_ref1_name pro_ref1_company pro_ref1_designation pro_ref1_phone pro_ref1_email "
    "pro_ref2_name pro_ref2_company pro_ref2_designation pro_ref2_phone pro_ref2_email "
    "per_ref1_name per_ref1_relationship per_ref1_phone per_ref1_email "
    "per_ref2_name per_ref2_relationship per_ref2_phone per_ref2_email"
).split()

# Server-side validation regexes (mirroring the front end)
PAN_RE = re.compile(r"^[A-Z]{5}[0-9]{4}[A-Z]$")
IFSC_RE = re.compile(r"^[A-Z]{4}0[A-Z0-9]{6}$")
AADHAAR_RE = re.compile(r"^\d{12}$")
UAN_RE = re.compile(r"^\d{12}$")
ACCOUNT_RE = re.compile(r"^\d{9,18}$")


def _slugify(s: str) -> str:
    s = unicodedata.normalize("NFKC", s).strip()
    s = re.sub(r"[\\/\x00-\x1f<>:\"|?*]+", "", s)
    return re.sub(r"\s+", " ", s).strip() or "unnamed"


def _safe_ext(filename: str | None) -> str:
    ext = Path(filename or "").suffix.lower()
    return ext if ext in ALLOWED_EXT else ".bin"


def _build_pdf(data: dict[str, Any]) -> bytes:
    """Generate the {Full Name} - Details.pdf summary of all text data."""
    buf = BytesIO()
    doc = SimpleDocTemplate(
        buf, pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=18 * mm,
    )
    styles = getSampleStyleSheet()
    title_st = ParagraphStyle(
        "Title", parent=styles["Title"], fontName="Helvetica-Bold",
        fontSize=22, leading=26, textColor=colors.HexColor("#0D0D0D"), spaceAfter=4,
    )
    accent_st = ParagraphStyle(
        "Accent", parent=styles["Normal"], fontName="Courier-Bold",
        fontSize=9, leading=11, textColor=colors.HexColor("#E8382C"), spaceAfter=2,
    )
    meta_st = ParagraphStyle(
        "Meta", parent=styles["Normal"], fontName="Helvetica-Oblique",
        fontSize=9, leading=11, textColor=colors.HexColor("#6B6B6B"), spaceAfter=14,
    )
    h2_st = ParagraphStyle(
        "H2", parent=styles["Heading2"], fontName="Helvetica-Bold",
        fontSize=12, leading=16, textColor=colors.HexColor("#0D0D0D"),
        spaceBefore=10, spaceAfter=6,
    )

    elements: list[Any] = []
    elements.append(Paragraph("/// New joiner details", accent_st))
    elements.append(Paragraph(data["full_name"], title_st))
    elements.append(Paragraph(
        f"Submitted {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}",
        meta_st,
    ))

    def kv_table(title: str, rows: list[tuple[str, Any]]) -> None:
        elements.append(Paragraph(title, h2_st))
        body = [[k, str(v or "—")] for k, v in rows]
        t = Table(body, colWidths=[55 * mm, 115 * mm])
        t.setStyle(TableStyle([
            ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
            ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 9.5),
            ("TEXTCOLOR", (0, 0), (0, -1), colors.HexColor("#6B6B6B")),
            ("TEXTCOLOR", (1, 0), (1, -1), colors.HexColor("#0D0D0D")),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("LINEBELOW", (0, 0), (-1, -1), 0.4, colors.HexColor("#E5E5E5")),
        ]))
        elements.append(t)

    # Mask aadhaar in the PDF for at-rest privacy: show last 4 only
    aadhaar_full = (data.get("aadhaar_number") or "").strip()
    aadhaar_masked = f"●●●● ●●●● {aadhaar_full[-4:]}" if len(aadhaar_full) == 12 else aadhaar_full

    kv_table("Personal", [
        ("Salutation", data.get("salutation")),
        ("Full name", data.get("full_name")),
        ("Gender", data.get("gender")),
        ("Personal email", data.get("email")),
        ("Date of joining", data.get("date_of_joining")),
        ("Department", data.get("department")),
        ("Mobile number", data.get("mobile_number")),
        ("Blood group", data.get("blood_group")),
        ("Nationality", data.get("nationality")),
        ("Highest qualification", data.get("highest_qualification")),
    ])

    kv_table("Identity", [
        ("PAN number", data.get("pan_number")),
        ("Aadhaar number (masked)", aadhaar_masked),
    ])

    kv_table("Bank details", [
        ("Bank (selected)", data.get("bank_name")),
        ("Bank (from IFSC)", data.get("bank_branch_official")),
        ("Branch name", data.get("branch_name")),
        ("Branch address", data.get("branch_address")),
        ("MICR code", data.get("micr_code")),
        ("Account holder name", data.get("account_holder")),
        ("Account number", data.get("account_number")),
        ("IFSC code", data.get("ifsc_code")),
    ])

    kv_table("Provident fund", [("UAN number", data.get("uan_number"))])

    kv_table("Addresses", [
        ("Current address", data.get("current_address")),
        ("Permanent address", data.get("permanent_address")),
        ("Same as current", "Yes" if str(data.get("permanent_same_as_current")).lower() in ("true", "1", "on", "yes") else "No"),
    ])

    kv_table("Emergency contact", [
        ("Name", data.get("emergency_name")),
        ("Phone", data.get("emergency_phone")),
        ("Relationship", data.get("emergency_relationship")),
    ])

    for tag, prefix, fields in [
        ("Professional reference 1", "pro_ref1", ["name", "company", "designation", "phone", "email"]),
        ("Professional reference 2", "pro_ref2", ["name", "company", "designation", "phone", "email"]),
        ("Personal reference 1", "per_ref1", ["name", "relationship", "phone", "email"]),
        ("Personal reference 2", "per_ref2", ["name", "relationship", "phone", "email"]),
    ]:
        kv_table(tag, [(f.capitalize(), data.get(f"{prefix}_{f}")) for f in fields])

    elements.append(Spacer(1, 8))
    elements.append(Paragraph(
        f"This document was generated by the {COMPANY_NAME} new-joiner intake portal.",
        meta_st,
    ))
    doc.build(elements)
    return buf.getvalue()


def _hr_email_html(data: dict, folder_rel: str, files: list[str]) -> str:
    rows = "".join(
        f'<tr><td style="padding:6px 12px;color:#6B6B6B;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;width:160px;">{k}</td>'
        f'<td style="padding:6px 12px;color:#0D0D0D;font-size:14px;">{v or "—"}</td></tr>'
        for k, v in [
            ("Name", f"{data.get('salutation','')} {data.get('full_name','')}".strip()),
            ("Email", data.get("email")),
            ("Mobile", data.get("mobile_number")),
            ("Department", data.get("department")),
            ("Joining date", data.get("date_of_joining")),
        ]
    )
    return f"""
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#FAFAF7;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid rgba(13,13,13,0.08);">
        <tr><td style="padding:28px 32px 12px;border-bottom:1px solid rgba(13,13,13,0.08);">
          <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.25em;color:#E8382C;text-transform:uppercase;">/// New joiner submission</div>
          <h1 style="margin:8px 0 0;font-size:26px;font-weight:900;color:#0D0D0D;letter-spacing:-0.02em;">{data.get('full_name')}</h1>
        </td></tr>
        <tr><td style="padding:18px 20px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">{rows}</table></td></tr>
        <tr><td style="padding:18px 32px;border-top:1px solid rgba(13,13,13,0.08);background:#FAFAF7;">
          <div style="color:#6B6B6B;font-size:13px;line-height:1.7;">
            Saved on server at <code style="font-family:'Courier New',monospace;color:#0D0D0D;">{folder_rel}</code><br>
            {len(files)} file(s) uploaded · Details.pdf generated
          </div>
        </td></tr>
      </table>
    </td></tr></table></body></html>""".strip()


def _confirmation_email_html(data: dict, received: list[str], skipped: list[str]) -> str:
    received_li = "".join(f"<li>{x}</li>" for x in received) or "<li>—</li>"
    skipped_li = "".join(f"<li>{x}</li>" for x in skipped) or "<li>None</li>"
    return f"""
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#FAFAF7;font-family:Inter,Arial,sans-serif;color:#0D0D0D;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid rgba(13,13,13,0.08);">
        <tr><td style="padding:32px 32px 8px;">
          <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.25em;color:#E8382C;text-transform:uppercase;">/// Documents received</div>
          <h1 style="margin:8px 0 0;font-size:26px;font-weight:900;letter-spacing:-0.02em;">Thanks {data.get('full_name','').split(' ')[0]} —</h1>
          <h2 style="margin:0 0 16px;font-size:20px;font-weight:900;color:#E8382C;letter-spacing:-0.02em;">we got everything.</h2>
        </td></tr>
        <tr><td style="padding:0 32px 16px;color:#3A3A3A;font-size:15px;line-height:1.7;">
          This is a confirmation that your onboarding documents for {COMPANY_NAME} have been received. Our HR team will review and reach out if anything is missing.
        </td></tr>
        <tr><td style="padding:0 32px 16px;">
          <h3 style="margin:0 0 8px;font-size:14px;font-family:'Courier New',monospace;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.15em;">Documents received</h3>
          <ul style="margin:0 0 16px 20px;padding:0;color:#0D0D0D;font-size:14px;line-height:1.7;">{received_li}</ul>
          <h3 style="margin:0 0 8px;font-size:14px;font-family:'Courier New',monospace;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.15em;">Optional items not uploaded</h3>
          <ul style="margin:0 0 16px 20px;padding:0;color:#0D0D0D;font-size:14px;line-height:1.7;">{skipped_li}</ul>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#FAFAF7;border-top:1px solid rgba(13,13,13,0.08);color:#6B6B6B;font-size:12px;font-family:'Courier New',monospace;letter-spacing:0.18em;text-transform:uppercase;">{COMPANY_NAME} — onboarding</td></tr>
      </table>
    </td></tr></table></body></html>""".strip()


async def _send_email(params: dict) -> str | None:
    if not resend.api_key:
        logger.error("RESEND_API_KEY missing — email not sent")
        return None
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        return result.get("id") if isinstance(result, dict) else None
    except Exception as exc:  # noqa: BLE001
        logger.exception("Email send failed: %s", exc)
        return None


def _validate_text_fields(data: dict[str, Any]) -> None:
    if not PAN_RE.match(data.get("pan_number", "")):
        raise HTTPException(422, "Invalid PAN number format.")
    if not IFSC_RE.match(data.get("ifsc_code", "")):
        raise HTTPException(422, "Invalid IFSC code format.")
    if not AADHAAR_RE.match(data.get("aadhaar_number", "")):
        raise HTTPException(422, "Aadhaar number must be exactly 12 digits.")
    if not UAN_RE.match(data.get("uan_number", "")):
        raise HTTPException(422, "UAN number must be exactly 12 digits.")
    if not ACCOUNT_RE.match(data.get("account_number", "")):
        raise HTTPException(422, "Account number must be 9–18 digits.")


@router.post("/api/newjoinee")
async def submit_new_joiner(request: Request):
    form = await request.form()

    # Text validation
    data: dict[str, Any] = {}
    for f in REQUIRED_TEXT_FIELDS:
        v = form.get(f)
        if v is None or (isinstance(v, str) and v.strip() == ""):
            raise HTTPException(422, f"Missing required field: {f}")
        data[f] = v.strip() if isinstance(v, str) else v

    # Optional fields preserved as-is
    for k in (
        "permanent_same_as_current",
        "bank_branch_official", "branch_name", "branch_address", "micr_code",
    ):
        data[k] = form.get(k)

    _validate_text_fields(data)

    # Folder
    full_name = _slugify(data["full_name"])
    folder_name = f"{full_name} - {datetime.now(timezone.utc).strftime('%Y-%m-%d')}"
    root_rel = Path("new-joiners") / folder_name
    root_abs = STORAGE_ROOT / root_rel
    if root_abs.exists():
        suffix = datetime.now(timezone.utc).strftime('%H%M%S')
        root_abs = root_abs.with_name(f"{folder_name} ({suffix})")
        root_rel = root_rel.with_name(root_abs.name)
    root_abs.mkdir(parents=True, exist_ok=False)
    for subdir in {v[0] for v in FILE_PLAN.values()}:
        (root_abs / subdir).mkdir(exist_ok=True)

    saved: list[str] = []
    received_fields: set[str] = set()
    total_bytes = 0

    for key, value in form.multi_items():
        if not isinstance(value, (UploadFile, StarletteUploadFile)):
            continue
        plan = FILE_PLAN.get(key)
        if plan is None:
            continue
        subdir, stem = plan
        ext = _safe_ext(value.filename)
        if ext == ".bin":
            raise HTTPException(415, f"{value.filename}: only PDF/JPG/PNG accepted.")
        await value.seek(0)
        contents = await value.read()
        size = len(contents)
        if size == 0:
            continue
        if size > MAX_FILE_BYTES:
            raise HTTPException(413, f"{value.filename} exceeds 10 MB limit.")
        total_bytes += size
        if total_bytes > MAX_TOTAL_BYTES:
            raise HTTPException(413, "Total upload size exceeds 300 MB.")
        if key.endswith("[]"):
            n = len([p for p in (root_abs / subdir).iterdir() if p.stem.startswith(stem)])
            target = root_abs / subdir / f"{stem}_{n + 1}{ext}"
        else:
            target = root_abs / subdir / f"{stem}{ext}"
        target.write_bytes(contents)
        saved.append(str(target.relative_to(STORAGE_ROOT)))
        received_fields.add(key)

    missing = REQUIRED_FILES - received_fields
    if missing:
        try:
            for p in root_abs.rglob("*"):
                if p.is_file():
                    p.unlink()
            for p in sorted(root_abs.rglob("*"), reverse=True):
                if p.is_dir():
                    p.rmdir()
            root_abs.rmdir()
        except Exception:  # noqa: BLE001
            logger.exception("Cleanup after validation failure failed")
        raise HTTPException(422, f"Missing required files: {', '.join(sorted(missing))}")

    # Generate PDF
    pdf_bytes = _build_pdf(data)
    pdf_path = root_abs / f"{full_name} - Details.pdf"
    pdf_path.write_bytes(pdf_bytes)

    manifest = {
        "submitted_at": datetime.now(timezone.utc).isoformat(),
        "data": data,
        "files": saved,
        "pdf": str(pdf_path.relative_to(STORAGE_ROOT)),
    }
    (root_abs / "_manifest.json").write_text(json.dumps(manifest, indent=2, default=str))

    # Build email body lists
    received_labels = [FILE_LABELS.get(k, k) for k in sorted(received_fields)]
    skipped = [
        FILE_LABELS[k] for k in OPTIONAL_FILE_LABELS
        if k not in received_fields
    ]

    # 1) Notify HR
    hr_email_id = await _send_email({
        "from": SENDER_EMAIL,
        "to": [HR_EMAIL],
        "reply_to": data.get("email") or HR_EMAIL,
        "subject": f"New joiner submission — {data['full_name']}",
        "html": _hr_email_html(data, str(root_rel), saved),
    })

    # 2) Confirmation to joiner
    joiner_email_id = await _send_email({
        "from": SENDER_EMAIL,
        "to": [data["email"]],
        "reply_to": HR_EMAIL,
        "subject": f"Your documents have been received — {COMPANY_NAME}",
        "html": _confirmation_email_html(data, received_labels, skipped),
    })

    # Delete the autosave draft (best-effort)
    try:
        col = await drafts_collection()
        if col is not None:
            ip = (request.headers.get("x-forwarded-for", "").split(",")[0].strip()
                  or (request.client.host if request.client else ""))
            if ip:
                await col.delete_one({"ip": ip})
    except Exception:  # noqa: BLE001
        logger.exception("Draft cleanup failed (non-fatal)")

    logger.info("new_joiner saved name=%s folder=%s files=%d", data["full_name"], root_rel, len(saved))
    return {
        "status": "success",
        "folder": str(root_rel),
        "files_saved": len(saved),
        "hr_email_id": hr_email_id,
        "joiner_email_id": joiner_email_id,
    }
