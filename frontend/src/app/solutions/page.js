import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SOLUTIONS, INDUSTRIES, getService } from "@/lib/content";

export const metadata = {
  title: "Solutions — Service × Industry",
  description:
    "How Origami pairs each service with each industry — mobile apps for real-money gaming, AI for fintech, and more.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <div data-testid="solutions-page">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Solutions
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            What we ship,<br />
            <span className="text-signal">where we ship it.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Each Origami service mapped against each industry we serve.
            {" "}{SOLUTIONS.length} combinations — pick yours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-16">
          {INDUSTRIES.map((ind) => {
            const items = SOLUTIONS.filter((s) => s.industrySlug === ind.slug);
            return (
              <div key={ind.slug}>
                <div className="flex items-baseline justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-2">
                      /// {ind.note}
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                      {ind.name}
                    </h2>
                  </div>
                  <Link href={`/industries/${ind.slug}`} className="link-slide text-[14px] font-medium text-ink hover:text-signal">
                    Industry overview <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
                  {items.map((sol) => {
                    const service = getService(sol.serviceSlug);
                    return (
                      <Link
                        key={sol.slug}
                        href={`/solutions/${sol.slug}`}
                        className="group bg-white hover:bg-paper-50 p-6 md:p-8 min-h-[180px] flex flex-col transition-colors"
                        data-testid={`solution-card-${sol.slug}`}
                      >
                        <div className="flex items-start justify-between">
                          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                            {service?.code}
                          </span>
                          <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <h3 className="mt-6 font-display text-xl md:text-2xl font-bold tracking-tight leading-tight">
                          {service?.title}
                        </h3>
                        <p className="mt-2 text-ink-muted text-[13px]">for {ind.name}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
