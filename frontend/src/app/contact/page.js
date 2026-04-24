"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Check } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    // Trigger mailto so the user's email client carries the conversation forward.
    window.location.href = `mailto:contact@myorigami.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-6">
            /// Contact
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest">
            Let&apos;s talk about<br />
            your next <span className="text-signal">build</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
            Tell us a little about what you&apos;re working on and we&apos;ll
            come back within one business day with a shortlist of questions and
            next steps.
          </p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="py-24 md:py-32 border-b border-white/10">
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
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                  What are you working on?
                </div>
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  placeholder="A couple of lines about the product, stage and timeline..."
                  className="w-full bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                  data-testid="contact-message"
                />
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-4 text-base hover:bg-signal hover:text-white transition-colors"
                  data-testid="contact-submit"
                >
                  Send enquiry <ArrowUpRight className="w-5 h-5" />
                </button>
                {sent && (
                  <span
                    className="inline-flex items-center gap-2 text-sm text-signal font-mono uppercase tracking-[0.2em]"
                    data-testid="contact-success"
                  >
                    <Check className="w-4 h-4" /> Draft prepared in your mail client
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* DETAILS */}
          <aside className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-8">
              /// Direct
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4" data-testid="contact-email-row">
                <Mail className="w-5 h-5 text-signal mt-1" />
                <div>
                  <div className="font-display text-lg font-semibold">Email</div>
                  <a href="mailto:contact@myorigami.co" className="text-white/70 hover:text-white">
                    contact@myorigami.co
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-signal mt-1" />
                <div>
                  <div className="font-display text-lg font-semibold">Call US</div>
                  <div className="text-white/70">+1 858 429 9159</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-signal mt-1" />
                <div>
                  <div className="font-display text-lg font-semibold">Call IN</div>
                  <div className="text-white/70">+91 761 878 0865</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-signal mt-1" />
                <div>
                  <div className="font-display text-lg font-semibold">Headquarters</div>
                  <div className="text-white/70">
                    312N Milton Ave, Campbell, California, 95008, US
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-12 p-6 border border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">
                NDA standard
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                We sign your NDA before the first call. Sensitive projects
                are handled with access control and IP-protective contracts.
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
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
        {label}
      </div>
      <input
        {...props}
        data-testid={testid}
        className="w-full bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
      />
    </label>
  );
}
