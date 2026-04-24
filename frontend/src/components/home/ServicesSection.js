import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

// Bento spans to break symmetry
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
];

export default function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32 border-b border-white/10 bg-ink-950"
      data-testid="services-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
              /// Our Services
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Every <span className="text-signal">digital</span> surface,<br /> considered.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-6 text-white/70 text-lg leading-relaxed">
            From first wireframes to post-launch observability — we cover the
            full product lifecycle. Each of these practices is led by senior
            operators and tightly integrated, so handoffs don&apos;t drop.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)]">
          {SERVICES.map((s, i) => (
            <a
              key={s.code}
              href="/services/web-design"
              className={`group relative bg-ink-850 border border-white/10 p-8 md:p-10 flex flex-col justify-between ${SPANS[i % SPANS.length]} hover:border-white/40 transition-colors`}
              data-testid={`service-card-${s.code}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                  {s.code} / Practice
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight mt-8">
                  {s.title}
                </h3>
                <p className="mt-4 text-white/65 text-sm md:text-base leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
