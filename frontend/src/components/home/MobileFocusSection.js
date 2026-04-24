import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MobileFocusSection() {
  const highlights = [
    {
      k: "10+",
      l: "Years shipping native apps",
      copy: "iOS, Android, React Native and Flutter — from first tap to store launch.",
    },
    {
      k: "60fps",
      l: "Performance budget, not a hope",
      copy: "Cold-start under 1.5s, smooth scroll, instrumented from day one.",
    },
    {
      k: "7+",
      l: "Repeat & referral clients",
      copy: "HipHopGrails, FanRush, Acquire.bet, VideoShops, Nick Cooper, TrueWrld, Wholosophy.",
    },
  ];
  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-paper-50 relative overflow-hidden"
      data-testid="mobile-focus-section"
    >
      <div className="absolute -left-40 top-10 w-[520px] h-[520px] sunburst pointer-events-none opacity-60" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-start">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Mobile apps & application development
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
            Mobile is where<br />
            the brand <span className="text-signal">gets loved</span>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-md">
            We&apos;re very good at mobile apps — because most of our work starts as
            one. Native iOS and Android, React Native, Flutter — with the design,
            AI and backend teams attached.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services/mobile-app-development"
              className="btn-pill btn-primary"
              data-testid="mobile-cta-primary"
            >
              Mobile practice <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/work" className="btn-pill btn-ghost">
              Mobile case studies
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          {highlights.map((h) => (
            <div key={h.l} className="bg-white p-6 md:p-8 min-h-[220px]" data-testid={`mobile-stat-${h.k}`}>
              <div className="font-display text-4xl md:text-5xl font-black tracking-tight text-ink">
                {h.k}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                {h.l}
              </div>
              <p className="mt-4 text-[14px] text-ink-muted leading-relaxed">{h.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
