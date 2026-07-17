"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2, Upload, X, Plus, Info } from "lucide-react";
import OrigamiLogo from "@/components/OrigamiLogo";

const STEPS = ["Personal", "Documents", "Financial & contact", "References"];
const ACCEPT = ".pdf,.jpg,.jpeg,.png";
const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || "";

const OPTIONS = {
  salutation: ["Mr", "Mrs", "Ms", "Dr", "Other"],
  gender: ["Male", "Female", "Non-binary", "Prefer not to say"],
  department: [
    "Engineering & Software Development", "DevOps & Infrastructure", "QA & Quality Assurance",
    "UI / UX Design", "Data & AI", "Product Management", "Project Management & Delivery",
    "IT Support & Systems", "Sales & Business Development", "Marketing & Growth",
    "Content & SEO", "Customer Success & Support", "Finance & Accounts", "Human Resources",
    "Legal & Compliance", "Operations", "Administration & Office Management",
  ],
  blood_group: ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"],
  nationality: ["Indian", "Other"],
  highest_qualification: ["10th", "12th / PUC", "Diploma", "Bachelor's", "Master's", "PhD", "Other"],
  bank_name: ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB", "Bank of Baroda", "Canara Bank", "IndusInd", "Yes Bank", "Federal Bank", "IDFC First", "Union Bank", "Other"],
  emergency_relationship: ["Spouse", "Parent", "Sibling", "Child", "Friend", "Other"],
  per_ref_relationship: ["Friend", "Neighbour", "Former Colleague", "Mentor", "Family Friend", "Other"],
};

const PERSONAL_FIELDS = [
  { name: "salutation", label: "Salutation", type: "select", options: OPTIONS.salutation },
  { name: "full_name", label: "Full name", type: "text" },
  { name: "gender", label: "Gender", type: "select", options: OPTIONS.gender },
  { name: "email", label: "Personal email", type: "email" },
  { name: "date_of_joining", label: "Date of joining", type: "date" },
  { name: "department", label: "Department", type: "select", options: OPTIONS.department },
  { name: "mobile_number", label: "Mobile number", type: "tel" },
  { name: "blood_group", label: "Blood group", type: "select", options: OPTIONS.blood_group },
  { name: "nationality", label: "Nationality", type: "select", options: OPTIONS.nationality },
  { name: "highest_qualification", label: "Highest qualification", type: "select", options: OPTIONS.highest_qualification },
];

const FILE_FIELDS_BASE = [
  { name: "marks_10th", label: "10th marks card", required: true },
  { name: "marks_12th", label: "12th / Pre-University marks card", required: true },
  { name: "degree_marks", label: "Degree marks card", required: true },
  { name: "pan_card", label: "PAN card", required: true },
  { name: "aadhaar_card", label: "Aadhaar card", required: true },
  { name: "photos[]", label: "Passport-sized photographs (3 copies)", required: true, multiple: true },
  { name: "experience_1", label: "Experience letter — Employer 1", required: true },
  { name: "relieving_1", label: "Relieving letter — Employer 1", required: true },
  { name: "payslip_1", label: "Last month payslip", required: true },
  { name: "payslip_2", label: "2nd last month payslip", required: true },
  { name: "payslip_3", label: "3rd last month payslip", required: true },
  { name: "address_proof", label: "Current address proof", required: true },
  { name: "passport_copy", label: "Passport copy", optional: true },
];
const EMPLOYER_2_FIELDS = [
  { name: "experience_2", label: "Experience letter — Employer 2", optional: true },
  { name: "relieving_2", label: "Relieving letter — Employer 2", optional: true },
];
const EMPLOYER_3_FIELDS = [
  { name: "experience_3", label: "Experience letter — Employer 3", optional: true },
  { name: "relieving_3", label: "Relieving letter — Employer 3", optional: true },
];

const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const IFSC_RE = /^[A-Z]{4}0[A-Z0-9]{6}$/;
const DIGITS_12 = /^\d{12}$/;
const ACCOUNT_RE = /^\d{9,18}$/;

function Label({ children, required, optional }) {
  return (
    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft mb-2">
      {children}
      {required ? <span className="text-signal"> *</span> : null}
      {optional ? <span className="text-ink-muted normal-case ml-1 tracking-normal">(optional)</span> : null}
    </label>
  );
}

function FieldError({ msg }) {
  if (!msg) return null;
  return <div className="mt-1.5 text-signal text-xs" data-testid="field-error">{msg}</div>;
}

function TextInput({ name, type = "text", value, onChange, onBlur, placeholder, readOnly, maxLength, inputMode, pattern, autoComplete, min, max }) {
  return (
    <input
      name={name}
      type={type}
      value={value || ""}
      onChange={(e) => onChange(name, e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      readOnly={readOnly}
      maxLength={maxLength}
      inputMode={inputMode}
      pattern={pattern}
      autoComplete={autoComplete}
      min={min}
      max={max}
      data-testid={`input-${name}`}
      className={`w-full px-4 py-3 border rounded-lg outline-none text-base ${
        readOnly ? "bg-paper-50 text-ink-soft border-ink-line" : "bg-white border-ink-line focus:border-signal"
      }`}
    />
  );
}

function SelectInput({ name, value, onChange, onBlur, options }) {
  return (
    <select
      name={name}
      value={value || ""}
      onChange={(e) => onChange(name, e.target.value)}
      onBlur={onBlur}
      data-testid={`select-${name}`}
      className="w-full px-4 py-3 bg-white border border-ink-line rounded-lg outline-none focus:border-signal text-base"
    >
      <option value="" disabled>Choose…</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function TextArea({ name, value, onChange, onBlur, rows = 3, readOnly }) {
  return (
    <textarea
      name={name}
      rows={rows}
      value={value || ""}
      onChange={(e) => onChange(name, e.target.value)}
      onBlur={onBlur}
      readOnly={readOnly}
      data-testid={`input-${name}`}
      className={`w-full px-4 py-3 border rounded-lg outline-none text-base ${
        readOnly ? "bg-paper-50 text-ink-soft border-ink-line" : "bg-white border-ink-line focus:border-signal"
      }`}
    />
  );
}

function FileField({ field, files, setFile }) {
  const fs = files[field.name] || [];
  return (
    <div className="border border-ink-line bg-white rounded-lg p-4">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <div className="font-display text-base font-bold text-ink truncate">
            {field.label}
            {field.required ? <span className="text-signal"> *</span> : null}
            {field.optional ? <span className="text-ink-muted normal-case ml-2 text-xs font-medium">(optional)</span> : null}
          </div>
          <div className="text-ink-muted text-xs mt-1">PDF, JPG or PNG · 10 MB max</div>
        </div>
        <label className="btn-pill btn-ghost cursor-pointer text-sm whitespace-nowrap" data-testid={`upload-${field.name}`}>
          <Upload className="w-4 h-4" />
          Choose {field.multiple ? "files" : "file"}
          <input
            type="file"
            hidden
            multiple={!!field.multiple}
            accept={ACCEPT}
            onChange={(e) => setFile(field, Array.from(e.target.files || []))}
          />
        </label>
      </div>
      {fs.length > 0 && (
        <ul className="mt-2 space-y-1">
          {fs.map((f, i) => (
            <li key={i} className="flex items-center justify-between text-sm bg-paper-50 px-3 py-2 rounded">
              <span className="truncate text-ink-soft">
                {f.name} <span className="text-ink-muted">· {Math.round(f.size / 1024)} KB</span>
              </span>
              <button
                type="button"
                onClick={() => setFile(field, fs.filter((_, j) => j !== i), { remove: true })}
                aria-label="Remove file"
                className="text-ink-muted hover:text-signal"
                data-testid={`remove-${field.name}-${i}`}
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const REFERENCE_GROUPS = [
  { title: "Professional reference 1", prefix: "pro_ref1", isPro: true },
  { title: "Professional reference 2", prefix: "pro_ref2", isPro: true },
  { title: "Personal reference 1", prefix: "per_ref1", isPro: false },
  { title: "Personal reference 2", prefix: "per_ref2", isPro: false },
];

export default function EmployeeOnboardingHub() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState({});
  const [files, setFiles] = useState({});
  const [permSame, setPermSame] = useState(false);
  const [showEmp2, setShowEmp2] = useState(false);
  const [showEmp3, setShowEmp3] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [ifscLoading, setIfscLoading] = useState(false);
  const [draftPrompt, setDraftPrompt] = useState(null);
  const [bootChecked, setBootChecked] = useState(false);

  const textRef = useRef(text); textRef.current = text;
  const stepRef = useRef(step); stepRef.current = step;
  const permSameRef = useRef(permSame); permSameRef.current = permSame;

  const setT = useCallback((name, v) => setText((t) => ({ ...t, [name]: v })), []);

  // === AUTOSAVE: check for existing draft on mount ===
  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        const res = await fetch(`${BACKEND}/api/onboarding/draft`, { credentials: "include" });
        if (!res.ok) { setBootChecked(true); return; }
        const j = await res.json();
        if (aborted) return;
        if (j?.draft && Object.keys(j.draft.form_data || {}).length > 0) {
          setDraftPrompt(j.draft);
        }
      } catch { /* ignore */ }
      setBootChecked(true);
    })();
    return () => { aborted = true; };
  }, []);

  function resumeDraft() {
    if (!draftPrompt) return;
    const fd = draftPrompt.form_data || {};
    setText(fd);
    setPermSame(fd.permanent_same_as_current === "true" || fd.permanent_same_as_current === true);
    setShowEmp2(!!fd._show_emp2);
    setShowEmp3(!!fd._show_emp3);
    setStep(draftPrompt.step || 0);
    setDraftPrompt(null);
  }

  async function startFresh() {
    try { await fetch(`${BACKEND}/api/onboarding/draft`, { method: "DELETE", credentials: "include" }); } catch { /* ignore */ }
    setDraftPrompt(null);
  }

  // === AUTOSAVE: post to backend with debounce / heartbeat ===
  const saveNow = useCallback(async (s, t) => {
    try {
      await fetch(`${BACKEND}/api/onboarding/autosave`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          step: s,
          form_data: { ...t, _show_emp2: showEmp2, _show_emp3: showEmp3 },
        }),
      });
    } catch { /* ignore */ }
  }, [showEmp2, showEmp3]);

  const onFieldBlur = useCallback(() => { saveNow(stepRef.current, textRef.current); }, [saveNow]);

  useEffect(() => {
    if (!bootChecked || draftPrompt || done) return;
    const id = setInterval(() => { saveNow(stepRef.current, textRef.current); }, 30000);
    return () => clearInterval(id);
  }, [bootChecked, draftPrompt, done, saveNow]);

  // === Permanent address mirror ===
  useEffect(() => {
    if (permSame) setText((t) => ({ ...t, permanent_address: t.current_address || "" }));
  }, [permSame, text.current_address]);

  // === Field-level transforms / validators ===
  function handlePanChange(v) {
    const up = v.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
    setT("pan_number", up);
    setErrors((e) => ({ ...e, pan_number: up && !PAN_RE.test(up) ? "Invalid PAN format (e.g. ABCDE1234F)" : "" }));
  }

  // Date-of-joining bounds: 30 days ago → 2 years from today.
  // Guard against manual year entry like "0001" or "262222".
  const todayISO = new Date().toISOString().slice(0, 10);
  const dojMin = (() => {
    const d = new Date(); d.setDate(d.getDate() - 30);
    return d.toISOString().slice(0, 10);
  })();
  const dojMax = (() => {
    const d = new Date(); d.setFullYear(d.getFullYear() + 2);
    return d.toISOString().slice(0, 10);
  })();

  function handleDojChange(_name, v) {
    // v is a native YYYY-MM-DD string; browsers happily allow 5–6 digit years.
    // Reject anything whose year isn't exactly 4 digits.
    if (!v) {
      setT("date_of_joining", "");
      setErrors((e) => ({ ...e, date_of_joining: "" }));
      return;
    }
    const m = /^(\d{1,6})-(\d{2})-(\d{2})$/.exec(v);
    if (!m || m[1].length !== 4) {
      setErrors((e) => ({ ...e, date_of_joining: "Enter a valid date (year must be 4 digits)" }));
      return; // do NOT commit an invalid value
    }
    if (v < dojMin || v > dojMax) {
      setT("date_of_joining", v);
      setErrors((e) => ({ ...e, date_of_joining: `Date must be between ${dojMin} and ${dojMax}` }));
      return;
    }
    setT("date_of_joining", v);
    setErrors((e) => ({ ...e, date_of_joining: "" }));
  }

  function handleAadhaarChange(v) {
    const digits = v.replace(/\D/g, "").slice(0, 12);
    setT("aadhaar_number", digits);
    setErrors((e) => ({ ...e, aadhaar_number: digits && !DIGITS_12.test(digits) ? "Aadhaar must be exactly 12 digits" : "" }));
  }
  function handleAccountChange(name, v) {
    const digits = v.replace(/\D/g, "").slice(0, 18);
    setT(name, digits);
    setErrors((e) => {
      const next = { ...e };
      if (name === "account_number") next.account_number = digits && !ACCOUNT_RE.test(digits) ? "Account number must be 9–18 digits" : "";
      if (text.account_number && text.account_number_confirm) {
        next.account_number_confirm = text.account_number !== text.account_number_confirm ? "Account numbers do not match" : "";
      }
      return next;
    });
  }
  function handleAccountConfirmChange(v) {
    const digits = v.replace(/\D/g, "").slice(0, 18);
    setT("account_number_confirm", digits);
    setErrors((e) => ({ ...e, account_number_confirm: digits && digits !== text.account_number ? "Account numbers do not match" : "" }));
  }
  function handleUanBlur() {
    const v = text.uan_number || "";
    setErrors((e) => ({ ...e, uan_number: v && !DIGITS_12.test(v) ? "UAN must be exactly 12 digits" : "" }));
  }
  function handleUanChange(v) {
    setT("uan_number", v.replace(/\D/g, "").slice(0, 12));
  }
  async function handleIfscBlur() {
    const v = (text.ifsc_code || "").toUpperCase();
    if (!v) return;
    if (!IFSC_RE.test(v)) {
      setErrors((e) => ({ ...e, ifsc_code: "Invalid IFSC format (e.g. HDFC0001234)" }));
      return;
    }
    setErrors((e) => ({ ...e, ifsc_code: "" }));
    setIfscLoading(true);
    try {
      const res = await fetch(`https://ifsc.razorpay.com/${v}`);
      if (!res.ok) throw new Error("Invalid IFSC code. Please check and try again.");
      const j = await res.json();
      setText((t) => ({
        ...t,
        bank_branch_official: j.BANK || "",
        branch_name: j.BRANCH || "",
        branch_address: j.ADDRESS || "",
        micr_code: j.MICR || "",
      }));
    } catch (err) {
      setErrors((e) => ({ ...e, ifsc_code: err.message || "Invalid IFSC code. Please check and try again." }));
    } finally {
      setIfscLoading(false);
    }
  }
  function handleIfscChange(v) {
    const up = v.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 11);
    setT("ifsc_code", up);
    setErrors((e) => ({ ...e, ifsc_code: "" }));
  }

  // === File handling with validation ===
  const setFile = useCallback((field, list, opts = {}) => {
    setError("");
    if (!opts.remove) {
      for (const f of list) {
        const ext = ("." + (f.name.split(".").pop() || "").toLowerCase());
        if (![".pdf", ".jpg", ".jpeg", ".png"].includes(ext)) {
          setError(`${f.name}: only PDF, JPG or PNG allowed.`);
          return;
        }
        if (f.size > 10 * 1024 * 1024) {
          setError(`${f.name}: file too large. Maximum size is 10MB.`);
          return;
        }
      }
    }
    setFiles((cur) => {
      if (opts.remove) return { ...cur, [field.name]: list };
      return { ...cur, [field.name]: field.multiple ? [...(cur[field.name] || []), ...list].slice(0, 10) : list.slice(0, 1) };
    });
  }, []);

  // === Step validation + progress ===
  function fileFieldsForStep1() {
    let f = [...FILE_FIELDS_BASE];
    if (showEmp2) f = f.concat(EMPLOYER_2_FIELDS);
    if (showEmp3) f = f.concat(EMPLOYER_3_FIELDS);
    return f;
  }
  const step1Pct = useMemo(() => {
    const total = PERSONAL_FIELDS.length + 2; // + pan, aadhaar (declared on step 2 normally — but step 0 is just personal)
    const required = PERSONAL_FIELDS;
    const filled = required.filter((f) => (text[f.name] || "").trim()).length;
    return Math.round((filled / required.length) * 100);
  }, [text]);
  const step2Pct = useMemo(() => {
    const required = FILE_FIELDS_BASE.filter((f) => f.required);
    const filledFiles = required.filter((f) => (files[f.name] || []).length > 0).length;
    const idsFilled = (text.pan_number && PAN_RE.test(text.pan_number) ? 1 : 0)
      + (text.aadhaar_number && DIGITS_12.test(text.aadhaar_number) ? 1 : 0);
    return Math.round(((filledFiles + idsFilled) / (required.length + 2)) * 100);
  }, [files, text]);
  const step3Required = ["bank_name", "ifsc_code", "account_holder", "account_number", "account_number_confirm", "uan_number",
    "current_address", "emergency_name", "emergency_phone", "emergency_relationship"];
  const step3Pct = useMemo(() => {
    let filled = step3Required.filter((k) => (text[k] || "").trim()).length;
    const permOk = permSame || (text.permanent_address || "").trim();
    if (permOk) filled += 1;
    return Math.round((filled / (step3Required.length + 1)) * 100);
  }, [text, permSame]);
  const step4Required = useMemo(() => [
    ...["name", "company", "designation", "phone", "email"].map((k) => `pro_ref1_${k}`),
    ...["name", "company", "designation", "phone", "email"].map((k) => `pro_ref2_${k}`),
    ...["name", "relationship", "phone", "email"].map((k) => `per_ref1_${k}`),
    ...["name", "relationship", "phone", "email"].map((k) => `per_ref2_${k}`),
  ], []);
  const step4Pct = useMemo(() => {
    const filled = step4Required.filter((k) => (text[k] || "").trim()).length;
    return Math.round((filled / step4Required.length) * 100);
  }, [text, step4Required]);

  const stepPct = [step1Pct, step2Pct, step3Pct, step4Pct][step] ?? 0;

  const stepValid = useMemo(() => {
    if (step === 0) return step1Pct === 100;
    if (step === 1) {
      return step2Pct === 100 && PAN_RE.test(text.pan_number || "") && DIGITS_12.test(text.aadhaar_number || "");
    }
    if (step === 2) {
      const baseOk = step3Required.every((k) => (text[k] || "").trim());
      const permOk = permSame || (text.permanent_address || "").trim();
      const valid = IFSC_RE.test(text.ifsc_code || "") && ACCOUNT_RE.test(text.account_number || "")
        && (text.account_number === text.account_number_confirm) && DIGITS_12.test(text.uan_number || "");
      return baseOk && permOk && valid;
    }
    if (step === 3) return step4Pct === 100;
    return false;
  }, [step, step1Pct, step2Pct, step3Pct, step4Pct, text, permSame, step3Required]);

  const overallPct = Math.round(((step + stepPct / 100) / STEPS.length) * 100);

  async function goNext() {
    if (step < STEPS.length - 1) {
      const next = step + 1;
      setStep(next);
      await saveNow(next, text);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      await submit();
    }
  }

  async function submit() {
    setError("");
    setSubmitting(true);
    const fd = new FormData();
    for (const [k, v] of Object.entries(text)) {
      if (k === "account_number_confirm" || k.startsWith("_")) continue;
      fd.append(k, v ?? "");
    }
    if (permSame) {
      fd.set("permanent_address", text.current_address || "");
      fd.set("permanent_same_as_current", "true");
    } else {
      fd.set("permanent_same_as_current", "false");
    }
    const allFiles = fileFieldsForStep1();
    for (const field of allFiles) {
      const fs = files[field.name] || [];
      for (const f of fs) fd.append(field.name, f);
    }
    try {
      const res = await fetch(`${BACKEND}/api/newjoinee`, { method: "POST", body: fd, credentials: "include" });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.detail || `Submission failed (${res.status})`);
      }
      setDone(true);
    } catch (e) {
      setError(e.message || "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-6 py-24" data-testid="newjoinee-thanks">
        <div className="max-w-xl text-center">
          <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-signal text-white mb-6">
            <Check className="w-8 h-8" />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-5">
            All done<span className="text-signal">.</span>
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Your documents have been submitted successfully. A confirmation email is on its way to you, and our HR team will reach out if anything is missing.
          </p>
          <Link href="/" className="btn-pill btn-ghost mt-10 inline-flex">Back to Origami</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper" data-testid="newjoinee-page">
      <header className="border-b border-ink-line bg-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" aria-label="Origami home" className="flex items-center">
            <OrigamiLogo variant="dark" className="text-2xl" />
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            Employee onboarding hub
          </div>
        </div>
      </header>

      {/* Resume banner */}
      {draftPrompt && (
        <div className="border-b border-ink-line bg-paper-50" data-testid="resume-banner">
          <div className="max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4 justify-between">
            <div className="flex items-start gap-2 text-sm text-ink">
              <Info className="w-4 h-4 text-signal mt-0.5 shrink-0" />
              <div>You have an unfinished submission. Would you like to continue where you left off?</div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={resumeDraft} className="btn-pill btn-primary text-sm" data-testid="btn-resume">Continue</button>
              <button type="button" onClick={startFresh} className="btn-pill btn-ghost text-sm" data-testid="btn-fresh">Start fresh</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3" data-testid="step-label">
          Step {step + 1} of {STEPS.length} — {STEPS[step]} — {stepPct}% complete
        </div>
        <div className="h-1.5 bg-ink-line rounded-full overflow-hidden">
          <div className="h-full bg-signal transition-all" style={{ width: `${overallPct}%` }} data-testid="progress-bar" />
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); if (stepValid && !submitting) goNext(); }}
        className="max-w-3xl mx-auto px-6 py-10 space-y-6"
      >
        {step === 0 && (
          <section className="space-y-5" data-testid="step-0">
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-2">
              Tell us about<br /><span className="text-signal">yourself.</span>
            </h1>
            {PERSONAL_FIELDS.map((f) => (
              <div key={f.name}>
                <Label required>{f.label}</Label>
                {f.type === "select" ? (
                  <SelectInput name={f.name} value={text[f.name]} onChange={setT} onBlur={onFieldBlur} options={f.options} />
                ) : f.name === "date_of_joining" ? (
                  <>
                    <TextInput
                      name={f.name}
                      type="date"
                      value={text[f.name]}
                      onChange={handleDojChange}
                      onBlur={onFieldBlur}
                      min={dojMin}
                      max={dojMax}
                    />
                    <FieldError msg={errors.date_of_joining} />
                  </>
                ) : (
                  <TextInput name={f.name} type={f.type} value={text[f.name]} onChange={setT} onBlur={onFieldBlur} />
                )}
              </div>
            ))}
          </section>
        )}

        {step === 1 && (
          <section className="space-y-4" data-testid="step-1">
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-3">
              Upload your<br /><span className="text-signal">documents.</span>
            </h1>
            <p className="text-ink-soft text-[15px] leading-relaxed mb-4">
              All accepted in PDF, JPG or PNG. Maximum 10 MB per file.
            </p>

            {/* PAN number text + card */}
            <div>
              <Label required>PAN number</Label>
              <TextInput name="pan_number" value={text.pan_number} onChange={(_, v) => handlePanChange(v)} onBlur={onFieldBlur}
                maxLength={10} placeholder="ABCDE1234F" autoComplete="off" />
              <FieldError msg={errors.pan_number} />
            </div>
            <FileField field={{ name: "pan_card", label: "PAN card upload", required: true }} files={files} setFile={setFile} />

            {/* Aadhaar number text + card */}
            <div>
              <Label required>Aadhaar number</Label>
              <TextInput name="aadhaar_number"
                value={text.aadhaar_number ? `${text.aadhaar_number.slice(0, 4)}${text.aadhaar_number.length > 4 ? " ●●●● ●●●●" : ""}` : ""}
                onChange={(_, v) => handleAadhaarChange(v)} onBlur={onFieldBlur}
                maxLength={20} inputMode="numeric" placeholder="12-digit Aadhaar" autoComplete="off" />
              <FieldError msg={errors.aadhaar_number} />
            </div>
            <FileField field={{ name: "aadhaar_card", label: "Aadhaar card upload", required: true }} files={files} setFile={setFile} />

            {/* Remaining doc fields */}
            {FILE_FIELDS_BASE.filter((f) => !["pan_card", "aadhaar_card"].includes(f.name)).map((f) => (
              <FileField key={f.name} field={f} files={files} setFile={setFile} />
            ))}

            {/* Employer 2 collapse */}
            {!showEmp2 ? (
              <button type="button" onClick={() => setShowEmp2(true)} className="btn-pill btn-ghost w-full justify-center" data-testid="btn-add-emp2">
                <Plus className="w-4 h-4" /> Add another employer
              </button>
            ) : (
              EMPLOYER_2_FIELDS.map((f) => <FileField key={f.name} field={f} files={files} setFile={setFile} />)
            )}
            {showEmp2 && !showEmp3 && (
              <button type="button" onClick={() => setShowEmp3(true)} className="btn-pill btn-ghost w-full justify-center" data-testid="btn-add-emp3">
                <Plus className="w-4 h-4" /> Add another employer
              </button>
            )}
            {showEmp3 && EMPLOYER_3_FIELDS.map((f) => <FileField key={f.name} field={f} files={files} setFile={setFile} />)}
          </section>
        )}

        {step === 2 && (
          <section className="space-y-8" data-testid="step-2">
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-2">
              Financial &<br /><span className="text-signal">contact details.</span>
            </h1>

            <div>
              <h2 className="font-display text-lg font-bold mb-4">Bank details</h2>
              <div className="space-y-4">
                <div>
                  <Label required>Bank</Label>
                  <SelectInput name="bank_name" value={text.bank_name} onChange={setT} onBlur={onFieldBlur} options={OPTIONS.bank_name} />
                </div>
                <div>
                  <Label required>IFSC code</Label>
                  <div className="relative">
                    <TextInput name="ifsc_code" value={text.ifsc_code} onChange={(_, v) => handleIfscChange(v)} onBlur={handleIfscBlur}
                      maxLength={11} placeholder="HDFC0001234" autoComplete="off" />
                    {ifscLoading && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Loader2 className="w-4 h-4 animate-spin text-ink-muted" />
                      </div>
                    )}
                  </div>
                  <FieldError msg={errors.ifsc_code} />
                </div>
                {(text.branch_name || text.branch_address || text.bank_branch_official) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-paper-50 border border-ink-line rounded-lg text-[13px]" data-testid="ifsc-resolved">
                    <div><div className="text-ink-muted font-mono uppercase text-[10px] tracking-[0.18em]">Bank (from IFSC)</div><div>{text.bank_branch_official || "—"}</div></div>
                    <div><div className="text-ink-muted font-mono uppercase text-[10px] tracking-[0.18em]">Branch</div><div>{text.branch_name || "—"}</div></div>
                    <div className="md:col-span-2"><div className="text-ink-muted font-mono uppercase text-[10px] tracking-[0.18em]">Address</div><div>{text.branch_address || "—"}</div></div>
                    <div><div className="text-ink-muted font-mono uppercase text-[10px] tracking-[0.18em]">MICR</div><div>{text.micr_code || "—"}</div></div>
                  </div>
                )}
                <div>
                  <Label required>Account holder name</Label>
                  <TextInput name="account_holder" value={text.account_holder} onChange={setT} onBlur={onFieldBlur} />
                </div>
                <div>
                  <Label required>Account number</Label>
                  <TextInput name="account_number" value={text.account_number} onChange={(_, v) => handleAccountChange("account_number", v)} onBlur={onFieldBlur}
                    inputMode="numeric" autoComplete="off" />
                  <FieldError msg={errors.account_number} />
                </div>
                <div>
                  <Label required>Confirm account number</Label>
                  <TextInput name="account_number_confirm" value={text.account_number_confirm} onChange={(_, v) => handleAccountConfirmChange(v)} onBlur={onFieldBlur}
                    inputMode="numeric" autoComplete="off" />
                  <FieldError msg={errors.account_number_confirm} />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold mb-4">Provident fund</h2>
              <Label required>UAN number</Label>
              <TextInput name="uan_number" value={text.uan_number} onChange={(_, v) => handleUanChange(v)} onBlur={handleUanBlur}
                maxLength={12} inputMode="numeric" autoComplete="off" />
              <FieldError msg={errors.uan_number} />
            </div>

            <div>
              <h2 className="font-display text-lg font-bold mb-4">Emergency contact</h2>
              <div className="space-y-4">
                <div><Label required>Name</Label><TextInput name="emergency_name" value={text.emergency_name} onChange={setT} onBlur={onFieldBlur} /></div>
                <div><Label required>Phone</Label><TextInput name="emergency_phone" type="tel" value={text.emergency_phone} onChange={setT} onBlur={onFieldBlur} /></div>
                <div><Label required>Relationship</Label>
                  <SelectInput name="emergency_relationship" value={text.emergency_relationship} onChange={setT} onBlur={onFieldBlur} options={OPTIONS.emergency_relationship} />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold mb-4">Addresses</h2>
              <div className="space-y-4">
                <div><Label required>Current address</Label>
                  <TextArea name="current_address" value={text.current_address} onChange={setT} onBlur={onFieldBlur} />
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" checked={permSame} onChange={(e) => setPermSame(e.target.checked)} data-testid="check-perm-same" className="w-4 h-4 accent-signal" />
                  Same as current address
                </label>
                <div>
                  <Label required>Permanent address</Label>
                  <TextArea name="permanent_address" value={permSame ? (text.current_address || "") : text.permanent_address} onChange={setT} onBlur={onFieldBlur} readOnly={permSame} />
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-8" data-testid="step-3">
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-2">
              Your<br /><span className="text-signal">references.</span>
            </h1>
            {REFERENCE_GROUPS.map(({ title, prefix, isPro }) => {
              const fields = isPro ? ["name", "company", "designation", "phone", "email"] : ["name", "relationship", "phone", "email"];
              return (
                <div key={prefix}>
                  <h2 className="font-display text-lg font-bold mb-4">{title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fields.map((k) => {
                      const fieldName = `${prefix}_${k}`;
                      const label = k.charAt(0).toUpperCase() + k.slice(1);
                      if (!isPro && k === "relationship") {
                        return (
                          <div key={k}>
                            <Label required>{label}</Label>
                            <SelectInput name={fieldName} value={text[fieldName]} onChange={setT} onBlur={onFieldBlur} options={OPTIONS.per_ref_relationship} />
                          </div>
                        );
                      }
                      return (
                        <div key={k}>
                          <Label required>{label}</Label>
                          <TextInput name={fieldName} value={text[fieldName]} onChange={setT} onBlur={onFieldBlur}
                            type={k === "email" ? "email" : k === "phone" ? "tel" : "text"} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {error && (
          <div className="bg-signal/10 border border-signal/40 text-signal px-4 py-3 rounded-lg text-sm" data-testid="submit-error">{error}</div>
        )}

        <div className="pt-6 flex items-center justify-between gap-4 border-t border-ink-line">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0 || submitting}
            className="btn-pill btn-ghost disabled:opacity-30"
            data-testid="btn-back"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button
            type="submit"
            disabled={!stepValid || submitting}
            className="btn-pill btn-primary disabled:opacity-40"
            data-testid={step === STEPS.length - 1 ? "btn-submit" : "btn-next"}
          >
            {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" />Uploading…</>) :
              step === STEPS.length - 1 ? (<>Submit <ArrowRight className="w-4 h-4" /></>) :
              (<>Next <ArrowRight className="w-4 h-4" /></>)}
          </button>
        </div>
      </form>
    </main>
  );
}
