import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CLASS_GAMES } from "@/lib/content";

export const metadata = {
  alternates: { canonical: "/games" },
  title: "Class II & Class III Games",
  description:
    "Server-drawn Class II bingo mechanics and Class III RNG real-money gaming platforms for tribal and commercial operators.",
};

export default function GamesPage() {
  const { hero, split, capabilities } = CLASS_GAMES;
  return (
    <div data-testid="games-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="absolute -right-48 bottom-0 w-[560px] h-[560px] sunburst pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {hero.overline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest whitespace-pre-line max-w-5xl">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4" data-testid="games-cta">
              Talk to our gaming team <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLASS II / CLASS III SPLIT */}
      <section className="border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2">
          {[split.classII, split.classIII].map((col, idx) => (
            <div
              key={col.label}
              className={`py-20 md:py-28 ${
                idx === 0 ? "md:pr-12 md:border-r border-ink-line" : "md:pl-12"
              }`}
              data-testid={`games-col-${idx}`}
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                <span className="inline-block w-6 h-px bg-signal" />
                {col.label}
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black leading-[1] tracking-tightest max-w-md">
                {col.title}
              </h2>
              <ul className="mt-10 space-y-4">
                {col.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                    <Check className="w-5 h-5 text-signal mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Capabilities
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                What a complete platform needs.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              We build what regulated real-money gaming actually requires — not
              a demo.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {capabilities.map((c, i) => (
              <div key={c.title} className="bg-white p-8 md:p-10" data-testid={`capability-${i}`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-10 font-display text-xl md:text-2xl font-bold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed text-[15px]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE CTA */}
      <section id="compliance-call" className="py-24 md:py-32 bg-white border-b border-ink-line relative overflow-hidden">
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Compliance-first
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Audit-ready from day one.
            </h2>
            <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
              Our gaming delivery teams work with GLI-aligned processes, built-in
              audit trails, responsible-gaming controls and documented
              reportable events. We work with your compliance, legal and lab of
              record — not around them.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:flex-col md:items-end gap-3">
            <a
              href="mailto:hello@origami.dev?subject=Class%20II%2FIII%20compliance%20call"
              className="btn-pill btn-primary text-base px-7 py-4"
              data-testid="games-compliance-call"
            >
              Book a compliance call <ArrowUpRight className="w-5 h-5" />
            </a>
            <Link href="/contact" className="btn-pill btn-ghost text-sm">
              Or request an intro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
