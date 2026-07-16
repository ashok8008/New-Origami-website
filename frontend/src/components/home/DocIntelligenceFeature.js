import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Quote, Coins } from "lucide-react";

export default function DocIntelligenceFeature() {
  return (
    <section
      className="relative py-24 md:py-32 border-b border-ink-line bg-paper text-ink overflow-hidden"
      data-testid="doc-intelligence-feature"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(232, 56, 44, 0.35) 1.1px, transparent 1.1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            /// Origami Product · Document Intelligence
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            Your documents,<br />
            turned into an expert<br />
            <span className="text-signal">you can prove.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            Ask anything across your contracts, policies and regulations in plain language. Get a clear verdict, the exact source and page, and the precise cost — grounded only in your documents, never invented. <span className="text-ink font-semibold">Sovereign. Cited. Cost-transparent.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products/document-intelligence#book"
              className="btn-pill btn-primary"
              data-testid="doc-intel-cta-primary"
            >
              Book a demo <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/document-intelligence"
              className="btn-pill btn-ghost"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-muted">
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-signal" /> Live in production</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-signal" /> Data never leaves your walls</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-signal" /> Every answer cited</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="relative bg-white border border-ink-line shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-6 md:p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-3">
              Ask · your knowledge base
            </div>
            <p className="font-display text-lg md:text-xl font-bold leading-snug text-ink">
              <span className="text-ink-muted">Q.</span> Can we terminate the vendor agreement early without penalty?
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 border border-signal text-signal font-mono text-[11px] uppercase tracking-[0.2em]">
              It depends
            </div>
            <p className="mt-4 text-ink-soft leading-relaxed text-[15px]">
              Early termination for convenience is permitted, but the agreement requires 90 days&apos; written notice and settlement of fees accrued to the termination date. Termination for cause carries no penalty if the breach is uncured after the notice window.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-paper border border-ink-line">
                <Quote className="w-3 h-3 text-signal" /> Master Services Agreement · p.14
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-paper border border-ink-line">
                <Quote className="w-3 h-3 text-signal" /> Schedule C — Fees · p.31
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-ink-muted">
              <Coins className="w-3 h-3 text-signal" />
              Semantic cache · ₹0.00 · 0.48s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
