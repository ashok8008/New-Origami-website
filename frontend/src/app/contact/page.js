"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Check, Loader2, Linkedin } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || ""}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-page" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
      trackEvent("contact_form_submitted", { source: "contact-page" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Network error. Please try again.");
      trackEvent("contact_form_error", { source: "contact-page" });
    }
  };

  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-40 top-20 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Contact
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Let&apos;s talk about<br />
            your next <span className="text-signal">build.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Tell us a little about what you&apos;re working on — auction,
            gaming, product or staffing. We&apos;ll come back within one
            business day with a shortlist of questions and next steps.
          </p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-12">
          {/* FORM */}
          <div className="col-span-12 lg:col-span-7">
            <form onSubmit={submit} className="space-y-8" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={update("name")}
                  required
                  testid="contact-name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  testid="contact-email"
                />
              </div>
              <Field
                label="Company"
                value={form.company}
                onChange={update("company")}
                testid="contact-company"
              />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-2">
                  What are you working on?
                </div>
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  placeholder="A couple of lines about the product, stage and timeline..."
                  className="w-full bg-white border border-ink-line rounded-lg px-4 py-3 text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors"
                  data-testid="contact-message"
                />
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-pill btn-primary text-base px-7 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  data-testid="contact-submit"
                >
                  {status === "sending" ? (
                    <>Sending… <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send enquiry <ArrowUpRight className="w-5 h-5" /></>
                  )}
                </button>
                {status === "sent" && (
                  <span
                    className="inline-flex items-center gap-2 text-sm text-signal font-mono uppercase tracking-[0.2em]"
                    data-testid="contact-success"
                  >
                    <Check className="w-4 h-4" /> Enquiry sent — we&apos;ll be in touch.
                  </span>
                )}
                {status === "error" && (
                  <span
                    className="text-sm text-signal font-mono uppercase tracking-[0.2em]"
                    data-testid="contact-error"
                  >
                    {error}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* DETAILS */}
          <aside className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l border-ink-line">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-8">
              /// Direct
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4" data-testid="contact-email-row">
                <Mail className="w-5 h-5 text-signal mt-1" />
                <div>
                  <div className="font-display text-lg font-semibold">Email</div>
                  <a href={`mailto:${CONTACT.email}`} className="text-ink-soft hover:text-ink">
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              {CONTACT.linkedin && (
                <li className="flex items-start gap-4" data-testid="contact-linkedin-row">
                  <Linkedin className="w-5 h-5 text-signal mt-1" />
                  <div>
                    <div className="font-display text-lg font-semibold">LinkedIn</div>
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-soft hover:text-ink"
                    >
                      Follow Origami Consulting LLC
                    </a>
                  </div>
                </li>
              )}
              {CONTACT.phones.map((p) => (
                <li key={p.label} className="flex items-start gap-4" data-testid={`contact-phone-${p.label.toLowerCase()}`}>
                  <Phone className="w-5 h-5 text-signal mt-1" />
                  <div>
                    <div className="font-display text-lg font-semibold">Call {p.label}</div>
                    <a href={p.href} className="text-ink-soft hover:text-ink">{p.number}</a>
                  </div>
                </li>
              ))}
              {CONTACT.offices.map((o) => (
                <li key={o.label} className="flex items-start gap-4" data-testid="contact-office">
                  <MapPin className="w-5 h-5 text-signal mt-1" />
                  <div>
                    <div className="font-display text-lg font-semibold">{o.label}</div>
                    <div className="text-ink-soft leading-relaxed">
                      {o.lines.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 border border-ink-line rounded-lg bg-paper-50">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-3">
                NDA standard
              </div>
              <p className="text-ink-soft text-sm leading-relaxed">
                We sign your NDA before the first call. Sensitive projects are
                handled with access control and IP-protective contracts.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, testid, ...props }) {
  return (
    <label className="block">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-2">
        {label}
      </div>
      <input
        {...props}
        data-testid={testid}
        className="w-full bg-white border border-ink-line rounded-lg px-4 py-3 text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors"
      />
    </label>
  );
}
