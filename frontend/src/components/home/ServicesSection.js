import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

export default function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-paper-50"
      data-testid="services-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// What we do
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Full-stack, senior-led,<br />
              <span className="text-signal">culture-first.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
            Eight practices that overlap on purpose. Small, senior teams that
            cover the full product lifecycle.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {SERVICES.map((s) => (
            <Link
              key={s.code}
              href={`/services/${s.slug}`}
              className="group bg-white p-6 md:p-8 hover:bg-paper-50 transition-colors flex flex-col min-h-[240px]"
              data-testid={`service-card-${s.code}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {s.code} / {s.short}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-8 font-display text-xl md:text-2xl font-bold tracking-tight leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-ink-muted leading-relaxed text-[14px]">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
