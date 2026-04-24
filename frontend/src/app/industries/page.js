import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";

export const metadata = {
  title: "Industries — Origami",
  description:
    "Industries Origami serves: hip-hop & music, real-money gaming, celebrity & creator economy, commerce, wellness, fintech.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <div data-testid="industries-page">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Industries
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Where our work<br /><span className="text-signal">lives.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            A decade of shipping across industries gives us strong opinions
            where it matters — and humility where it doesn&apos;t.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          {INDUSTRIES.map((ind, i) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group bg-white hover:bg-paper-50 p-8 md:p-12 min-h-[260px] flex flex-col transition-colors"
              data-testid={`industries-card-${ind.slug}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {String(i + 1).padStart(2, "0")} / {ind.note}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h2 className="mt-10 font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                {ind.name}
              </h2>
              <p className="mt-4 text-ink-soft text-[15px] leading-relaxed max-w-md">
                {ind.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
