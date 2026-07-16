"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export default function DemoRequestForm({ productSlug = "document-intelligence" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    docTypes: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(`${API}/api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: productSlug }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.detail || "Submission failed");
      }
      setStatus("done");
    } catch (err) {
      setError(err.message || "Something went wrong. Email hello@origami.dev.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className="p-8 border border-signal bg-white text-ink"
        data-testid="demo-request-success"
      >
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
          <Check className="w-4 h-4" /> Request received
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 text-ink-soft leading-relaxed">
          A senior Origami engineer will reach out within one business day at{" "}
          <span className="font-semibold text-ink">{form.email}</span> with next
          steps and a proposed demo slot.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 p-6 md:p-8 border border-ink-line bg-white"
      data-testid="demo-request-form"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            className="input"
            data-testid="demo-form-name"
          />
        </Field>
        <Field label="Work email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="input"
            data-testid="demo-form-email"
          />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            className="input"
            data-testid="demo-form-company"
          />
        </Field>
        <Field label="Your role">
          <input
            type="text"
            value={form.role}
            onChange={update("role")}
            className="input"
            placeholder="e.g. GC, Head of Compliance"
            data-testid="demo-form-role"
          />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Team size">
          <select
            value={form.teamSize}
            onChange={update("teamSize")}
            className="input"
            data-testid="demo-form-teamsize"
          >
            <option value="">Select…</option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>201–1,000</option>
            <option>1,000+</option>
          </select>
        </Field>
        <Field label="Document types">
          <select
            value={form.docTypes}
            onChange={update("docTypes")}
            className="input"
            data-testid="demo-form-doctypes"
          >
            <option value="">Select…</option>
            <option>Contracts &amp; MSAs</option>
            <option>Policies &amp; SOPs</option>
            <option>Regulations &amp; standards</option>
            <option>Clinical / medical records</option>
            <option>Loan / underwriting files</option>
            <option>Mixed / all of the above</option>
          </select>
        </Field>
      </div>
      <Field label="What are you hoping to solve?">
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="input resize-y"
          placeholder="One paragraph — what does 'a good answer' look like for your team?"
          data-testid="demo-form-message"
        />
      </Field>

      {error && (
        <div className="text-signal text-sm" data-testid="demo-form-error">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-pill btn-primary self-start"
        data-testid="demo-form-submit"
      >
        {status === "submitting" ? "Sending…" : "Request a demo"}{" "}
        <ArrowUpRight className="w-4 h-4" />
      </button>
      <p className="text-[11px] text-ink-muted mt-2 font-mono uppercase tracking-[0.2em]">
        Single-tenant · Data never leaves your walls · Reply within 1 business day
      </p>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted mb-1.5">
        {label}
        {required && <span className="text-signal ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
