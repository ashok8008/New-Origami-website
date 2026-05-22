import Link from "next/link";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { HERO } from "@/lib/content";
import InteractiveDotGrid from "@/components/InteractiveDotGrid";

export default function HeroSection() {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-paper"
      data-testid="hero-section"
    >
      {/* Interactive dot grid (ramp.com-style proximity highlight) */}
      <InteractiveDotGrid spacing={26} radius={170} className="opacity-90" />
      {/* Sunburst rays - left */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[640px] h-[640px] sunburst pointer-events-none" />
      {/* Sunburst rays - bottom right */}
      <div className="absolute -right-48 -bottom-48 w-[640px] h-[640px] sunburst pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <h1 className="font-display font-black tracking-tightest leading-[0.92] text-[clamp(3rem,11vw,11rem)] text-signal">
            {HERO.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-12 md:mt-16 max-w-2xl">
            <p className="font-display font-bold text-signal text-[clamp(1.25rem,2vw,1.75rem)] leading-tight">
              {HERO.overline}.
            </p>
            <p className="mt-6 text-ink-soft text-lg md:text-xl leading-relaxed">
              {HERO.body}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-pill btn-primary text-base px-7 py-4"
              data-testid="hero-cta-primary"
              data-track="cta_start_project"
              data-track-prop-source="hero"
            >
              Start a project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/mobile-app-development"
              className="btn-pill btn-ghost text-base px-7 py-4"
              data-testid="hero-cta-secondary"
            >
              Mobile app practice
              <ArrowDownRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ai"
              className="btn-pill btn-ghost text-base px-7 py-4"
              data-testid="hero-cta-tertiary"
            >
              AI practice
              <ArrowDownRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
