import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";

export default function IndustriesSection() {
  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-paper-50"
      data-testid="industries-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Industries
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Where our work lives.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
            A decade of shipping across industries gives us strong opinions
            where it matters — and humility where it doesn&apos;t.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          {INDUSTRIES.map((ind, i) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group bg-white p-8 md:p-10 hover:bg-paper-50 transition-colors"
              data-testid={`industry-card-${ind.slug}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                {ind.name}
              </h3>
              <p className="mt-3 text-ink-muted text-[15px]">{ind.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
