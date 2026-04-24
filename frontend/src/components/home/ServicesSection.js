import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

const LINKS = {
  "01": "/services",
  "02": "/games",
  "03": "/services",
  "04": "/services",
  "05": "/services",
  "06": "/services",
};

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
              Full-stack, senior-led, culture-first.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
            We cover the whole product lifecycle — from first wireframes to
            compliance-grade production platforms. Small, senior teams that
            ship.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          {SERVICES.map((s) => (
            <Link
              key={s.code}
              href={LINKS[s.code] || "/services"}
              className="group bg-white p-8 md:p-10 hover:bg-paper-50 transition-colors flex flex-col min-h-[260px]"
              data-testid={`service-card-${s.code}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {s.code} / Practice
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
