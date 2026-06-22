"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2, Upload, X } from "lucide-react";
import OrigamiLogo from "@/components/OrigamiLogo";

const STEPS = [
  "Personal",
  "Documents",
  "Financial & contact",
  "References",
];

const ACCEPT = ".pdf,.jpg,.jpeg,.png";

const FILE_FIELDS = [
  { name: "marks_10th", label: "10th marks card", required: true },
  { name: "marks_12th", label: "12th / Pre-University marks card", required: true },
  { name: "degree_marks", label: "Degree marks card", required: true },
  { name: "pan_card", label: "PAN card", required: true },
  { name: "aadhaar_card", label: "Aadhaar card", required: true },
  { name: "photos[]", label: "Passport-sized photographs (3 copies)", required: true, multiple: true },
  { name: "experience_1", label: "Experience letter — Employer 1", required: true },
  { name: "relieving_1", label: "Relieving letter — Employer 1", required: true },
  { name: "experience_2", label: "Experience letter — Employer 2 (optional)" },
  { name: "relieving_2", label: "Relieving letter — Employer 2 (optional)" },
  { name: "experience_3", label: "Experience letter — Employer 3 (optional)" },
  { name: "relieving_3", label: "Relieving letter — Employer 3 (optional)" },
  { name: "payslip_1", label: "Last month payslip", required: true },
  { name: "payslip_2", label: "2nd last month payslip", required: true },
  { name: "payslip_3", label: "3rd last month payslip", required: true },
  { name: "passport_copy", label: "Passport copy (optional)" },
  { name: "address_proof", label: "Current address proof", required: true },
];

const PERSONAL_FIELDS = [
  { name: "full_name", label: "Full name", type: "text" },
  { name: "email", label: "Personal email", type: "email" },
  { name: "date_of_joining", label: "Date of joining", type: "date" },
  { name: "department", label: "Department", type: "text" },
  { name: "mobile_number", label: "Mobile number", type: "tel" },
];

const FINANCIAL_FIELDS = [
  ["Bank details", [
    { name: "bank_name", label: "Bank name" },
    { name: "account_holder", label: "Account holder name" },
    { name: "account_number", label: "Account number" },
    { name: "ifsc_code", label: "IFSC code" },
  ]],
  ["Provident fund", [
    { name: "uan_number", label: "UAN number" },
  ]],
  ["Emergency contact", [
    { name: "emergency_name", label: "Name" },
    { name: "emergency_phone", label: "Phone" },
    { name: "emergency_relationship", label: "Relationship" },
  ]],
];

const REFERENCE_GROUPS = [
  ["Professional reference 1", "pro_ref1", true],
  ["Professional reference 2", "pro_ref2", true],
  ["Personal reference 1", "per_ref1", false],
  ["Personal reference 2", "per_ref2", false],
];

const REF_PRO_FIELDS = ["name", "company", "designation", "phone", "email"];
const REF_PER_FIELDS = ["name", "relationship", "phone", "email"];

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || "";

function Label({ children, required }) {
  return (
    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft mb-2">
      {children}{required ? <span className="text-signal"> *</span> : null}
    </label>
  );
}

function TextInput({ name, type = "text", required, value, onChange, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      value={value || ""}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
      data-testid={`input-${name}`}
      className="w-full px-4 py-3 bg-white border border-ink-line rounded-lg outline-none focus:border-signal text-base"
    />
  );
}

function TextArea({ name, value, onChange, rows = 3 }) {
  return (
    <textarea
      name={name}
      rows={rows}
      value={value || ""}
      onChange={(e) => onChange(name, e.target.value)}
      data-testid={`input-${name}`}
      className="w-full px-4 py-3 bg-white border border-ink-line rounded-lg outline-none focus:border-signal text-base"
    />
  );
}

function FileField({ field, files, setFile }) {
  const fs = files[field.name] || [];
  return (
    <div className="border border-ink-line bg-white rounded-lg p-4">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="font-display text-base font-bold text-ink">
            {field.label}
            {field.required ? <span className="text-signal"> *</span> : null}
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
            onChange={(e) => setFile(field.name, Array.from(e.target.files || []), !!field.multiple)}
          />
        </label>
      </div>
      {fs.length > 0 ? (
        <ul className="mt-2 space-y-1">
          {fs.map((f, i) => (
            <li key={i} className="flex items-center justify-between text-sm bg-paper-50 px-3 py-2 rounded">
              <span className="truncate text-ink-soft">{f.name} <span className="text-ink-muted">· {Math.round(f.size / 1024)} KB</span></span>
              <button
                type="button"
                onClick={() => setFile(field.name, fs.filter((_, j) => j !== i), !!field.multiple)}
                aria-label="Remove file"
                className="text-ink-muted hover:text-signal"
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function NewJoineePage() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState({});
  const [files, setFiles] = useState({});
  const [permSame, setPermSame] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onText = (name, v) => setText((t) => ({ ...t, [name]: v }));

  const onFile = (name, list, multiple) => {
    setFiles((f) => ({
      ...f,
      [name]: multiple ? [...(f[name] || []), ...list].slice(0, 10) : list.slice(0, 1),
    }));
  };

  const stepValid = useMemo(() => {
    if (step === 0) return PERSONAL_FIELDS.every((f) => (text[f.name] || "").trim());
    if (step === 1) {
      return FILE_FIELDS.every((f) => !f.required || (files[f.name] && files[f.name].length > 0));
    }
    if (step === 2) {
      const baseOk = ["bank_name", "account_holder", "account_number", "ifsc_code", "uan_number",
        "current_address", "emergency_name", "emergency_phone", "emergency_relationship"]
        .every((k) => (text[k] || "").trim());
      const permOk = permSame || (text.permanent_address || "").trim();
      return baseOk && permOk;
    }
    if (step === 3) {
      const reqd = [
        ...REF_PRO_FIELDS.map((k) => `pro_ref1_${k}`),
        ...REF_PRO_FIELDS.map((k) => `pro_ref2_${k}`),
        ...REF_PER_FIELDS.map((k) => `per_ref1_${k}`),
        ...REF_PER_FIELDS.map((k) => `per_ref2_${k}`),
      ];
      return reqd.every((k) => (text[k] || "").trim());
    }
    return false;
  }, [step, text, files, permSame]);

  async function submit() {
    setError("");
    setSubmitting(true);

    const fd = new FormData();
    for (const [k, v] of Object.entries(text)) fd.append(k, v ?? "");

    // Permanent-address handling
    if (permSame) {
      fd.set("permanent_address", text.current_address || "");
      fd.set("permanent_same_as_current", "true");
    } else {
      fd.set("permanent_same_as_current", "false");
    }

    // Files
    for (const field of FILE_FIELDS) {
      const fs = files[field.name] || [];
      for (const f of fs) fd.append(field.name, f);
    }

    try {
      const res = await fetch(`${BACKEND}/api/newjoinee`, { method: "POST", body: fd });
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
            Your documents have been submitted successfully. Our HR team will
            review them and reach out if anything is missing.
          </p>
          <Link href="/" className="btn-pill btn-ghost mt-10 inline-flex">Back to Origami</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper" data-testid="newjoinee-page">
      {/* Top bar */}
      <header className="border-b border-ink-line bg-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" aria-label="Origami home" className="flex items-center">
            <OrigamiLogo variant="dark" className="text-2xl" />
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            New joiner intake
          </div>
        </div>
      </header>

      {/* Progress */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3" data-testid="step-label">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </div>
        <div className="h-1.5 bg-ink-line rounded-full overflow-hidden">
          <div
            className="h-full bg-signal transition-all"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); if (step < STEPS.length - 1) setStep(step + 1); else submit(); }}
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
                <TextInput name={f.name} type={f.type} required value={text[f.name]} onChange={onText} />
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
              All accepted in PDF, JPG or PNG. Maximum 10 MB per file. Optional fields can be skipped.
            </p>
            {FILE_FIELDS.map((f) => (
              <FileField key={f.name} field={f} files={files} setFile={onFile} />
            ))}
          </section>
        )}

        {step === 2 && (
          <section className="space-y-8" data-testid="step-2">
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-2">
              Financial &<br /><span className="text-signal">contact details.</span>
            </h1>
            {FINANCIAL_FIELDS.map(([groupTitle, group]) => (
              <div key={groupTitle}>
                <h2 className="font-display text-lg font-bold mb-4">{groupTitle}</h2>
                <div className="space-y-4">
                  {group.map((g) => (
                    <div key={g.name}>
                      <Label required>{g.label}</Label>
                      <TextInput name={g.name} value={text[g.name]} onChange={onText} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h2 className="font-display text-lg font-bold mb-4">Addresses</h2>
              <div className="space-y-4">
                <div>
                  <Label required>Current address</Label>
                  <TextArea name="current_address" value={text.current_address} onChange={onText} />
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={permSame}
                    onChange={(e) => setPermSame(e.target.checked)}
                    data-testid="check-perm-same"
                    className="w-4 h-4 accent-signal"
                  />
                  Permanent address same as current
                </label>
                {!permSame && (
                  <div>
                    <Label required>Permanent address</Label>
                    <TextArea name="permanent_address" value={text.permanent_address} onChange={onText} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-8" data-testid="step-3">
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] mb-2">
              Your<br /><span className="text-signal">references.</span>
            </h1>
            {REFERENCE_GROUPS.map(([title, prefix, isPro]) => {
              const fields = isPro ? REF_PRO_FIELDS : REF_PER_FIELDS;
              return (
                <div key={prefix}>
                  <h2 className="font-display text-lg font-bold mb-4">{title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fields.map((k) => (
                      <div key={k}>
                        <Label required>{k.charAt(0).toUpperCase() + k.slice(1)}</Label>
                        <TextInput name={`${prefix}_${k}`} value={text[`${prefix}_${k}`]} onChange={onText} type={k === "email" ? "email" : k === "phone" ? "tel" : "text"} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {error && (
          <div className="bg-signal/10 border border-signal/40 text-signal px-4 py-3 rounded-lg text-sm" data-testid="submit-error">
            {error}
          </div>
        )}

        {/* Nav buttons */}
        <div className="pt-6 flex items-center justify-between gap-4 border-t border-ink-line">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0 || submitting}
            className="btn-pill btn-ghost disabled:opacity-30"
            data-testid="btn-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              type="submit"
              disabled={!stepValid}
              className="btn-pill btn-primary disabled:opacity-40"
              data-testid="btn-next"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={!stepValid || submitting}
              className="btn-pill btn-primary disabled:opacity-40"
              data-testid="btn-submit"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" />Uploading…</>
              ) : (
                <>Submit <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
