import Link from "next/link";
import { ArrowUpRight, Check, Newspaper, Shield } from "lucide-react";
import { MEDIA } from "@/lib/content";

export const metadata = {
  title: "Media & Publishers Practice — Programmatic, Contextual & Content Commerce",
  description:
    "Origami builds the programmatic, contextual and content-commerce layer for premium publishers — luxury travel networks, regional lifestyle titles and trusted family-media groups. Header bidding, RTB, brand-safe contextual targeting and yield optimization. Zero PII, sub-100ms auctions.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Origami Media & Publishers Practice",
    description:
      "Header bidding, RTB, contextual targeting and content commerce — for the premium-publisher tier.",
    type: "website",
  },
};

export default function MediaPage() {
  const { hero, thesis, stats, capabilities, trojanHorse, audience, stack, engagement } = MEDIA;

  return (
    <div data-testid="media-page">
      {/* HERO — dark, authoritative */}
      <section className="relative pt-36 md:pt-44 pb-24 border-b border-ink-line overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.45) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -right-48 -top-48 w-[720px] h-[720px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
            <Newspaper className="w-3.5 h-3.5" /> /// {hero.overline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest whitespace-pre-line max-w-5xl">
            {hero.title}
          </h1>
          <p className="mt-10 max-w-3xl text-white/75 text-lg md:text-xl leading-relaxed">
            {hero.body}
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4" data-testid="media-cta-primary">
              Get a yield audit <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="#how-we-get-in"
              className="btn-pill bg-white/10 text-white hover:bg-white/20 border border-white/15 text-base px-7 py-4"
            >
              How we get in
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ink-line border-x border-ink-line">
            {stats.map((s) => (
              <div
                key={s.l}
                className="bg-white p-6 md:p-8 min-h-[180px] flex flex-col"
                data-testid={`media-stat-${s.l.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="font-display text-2xl md:text-3xl font-black text-ink leading-tight tracking-tight">
                  {s.k}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  {s.l}
                </div>
                <p className="mt-auto pt-4 text-[12px] text-ink-muted leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THESIS — editorial pull-quote */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-6">
            /// {thesis.overline}
          </div>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tightest leading-[1.05] text-ink">
            {thesis.title}
          </p>
          <p className="mt-10 text-ink-soft text-lg md:text-xl leading-relaxed">
            {thesis.body}
          </p>
        </div>
      </section>

      {/* WHO WE BUILD FOR — publisher tier */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50 relative overflow-hidden">
        <div className="absolute -left-40 top-10 w-[520px] h-[520px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-14 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// {audience.overline}
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                {audience.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              {audience.note}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {audience.brands.map((b) => (
              <div
                key={b.name}
                className="bg-white p-8 md:p-10 flex flex-col"
                data-testid={`media-target-${b.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">
                  Tier reference
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  {b.name}
                </h3>
                <div className="mt-6 space-y-3 text-[14px]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted shrink-0 w-20">Parent</span>
                    <span className="text-ink-soft">{b.parent}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted shrink-0 w-20">Focus</span>
                    <span className="text-ink-soft">{b.focus}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted shrink-0 w-20">Position</span>
                    <span className="text-ink-soft">{b.positioning}</span>
                  </div>
                  {b.sister !== "—" && (
                    <div className="flex items-baseline gap-3 pt-2 border-t border-ink-line">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted shrink-0 w-20">Sister</span>
                      <span className="text-ink-muted text-[13px]">{b.sister}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// What we build
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                Nine layers of the<br />modern <span className="text-signal">monetization stack.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              From the prebid call that fires before the page paints to the
              first-party data layer that earns when third-party cookies
              don&apos;t — we build it all, and we build it portable.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="bg-white p-8 md:p-10 min-h-[260px] flex flex-col"
                data-testid={`media-cap-${i}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {String(i + 1).padStart(2, "0")} / Capability
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TROJAN HORSE — how we get in */}
      <section
        id="how-we-get-in"
        className="py-24 md:py-32 border-b border-ink-line bg-ink text-white relative overflow-hidden scroll-mt-24"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" /> /// {trojanHorse.overline}
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                {trojanHorse.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 text-white/70 text-lg leading-relaxed self-end">
              {trojanHorse.body}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-16">
            {trojanHorse.steps.map((s) => (
              <div
                key={s.n}
                className="bg-ink p-6 md:p-8 min-h-[260px] flex flex-col"
                data-testid={`trojan-step-${s.n}`}
              >
                <div className="font-display text-5xl md:text-6xl font-black text-signal leading-none">
                  {s.n}
                </div>
                <h3 className="mt-8 font-display text-xl md:text-2xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed text-[14px]">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {trojanHorse.objections.map((o, i) => (
              <div key={i} className="bg-ink p-8 flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-4">
                  Objection {i + 1}
                </div>
                <p className="font-display text-lg md:text-xl font-bold leading-tight">
                  &ldquo;{o.q}&rdquo;
                </p>
                <p className="mt-4 text-white/65 text-[14px] leading-relaxed">
                  {o.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE STACK */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Reference architecture
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                {stack.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 text-ink-soft text-lg leading-relaxed self-end">
              {stack.body}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
            {stack.layers.map((l) => (
              <div key={l.label} className="bg-white p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">
                  {l.label}
                </div>
                <div className="mt-3 font-display text-xl md:text-2xl font-bold tracking-tight text-ink">
                  {l.name}
                </div>
                <p className="mt-3 text-ink-muted text-[14px] leading-relaxed">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// How we engage
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest max-w-3xl">
            Three steps. No surprises.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {engagement.map((e, i) => (
              <div
                key={e.title}
                className="bg-white p-8 md:p-10 min-h-[260px] flex flex-col"
                data-testid={`media-engagement-${i}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                    {String(i + 1).padStart(2, "0")} / Phase
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {e.duration}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-paper-50 border-b border-ink-line relative overflow-hidden">
        <div className="absolute -right-48 -top-48 w-[640px] h-[640px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Run a yield audit
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              We don&apos;t need your data.<br />
              <span className="text-signal">We need 14 days.</span>
            </h2>
            <p className="mt-6 text-ink-soft text-lg max-w-2xl">
              Send us 50–100 representative URLs. We&apos;ll come back with a
              numbered yield-opportunity report — fill rate, latency, header-bidding
              posture, brand-safety gaps and a $-per-month estimate. No data
              exchange. No commitment.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
              Request the audit <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
