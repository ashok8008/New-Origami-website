import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/content";

export default function CaseStudiesSection() {
  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-white"
      data-testid="case-studies-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Selected work
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Built for culture-forward brands.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
            A small cross-section of what we&apos;ve shipped — from celebrity
            auction destinations to certified real-money gaming platforms.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES.map((c, i) => (
            <article
              key={c.title}
              className="relative border border-ink-line bg-paper-50 p-8 md:p-12 hover:border-signal transition-colors group"
              data-testid={`case-card-${i}`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  <span className="w-1.5 h-1.5 bg-signal" />
                  {c.tag}
                </span>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted hover:text-signal transition-colors"
                  >
                    Visit live <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                    NDA
                  </span>
                )}
              </div>

              <h3 className="mt-10 font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                {c.title}
              </h3>
              <p className="mt-3 text-ink-soft text-lg">{c.subtitle}</p>
              <p className="mt-5 text-ink-muted leading-relaxed">{c.desc}</p>

              <div className="mt-10 grid grid-cols-3 gap-px bg-ink-line">
                {c.metrics.map(([k, v]) => (
                  <div key={k} className="bg-paper-50 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                      {k}
                    </div>
                    <div className="mt-2 font-display font-semibold text-ink text-sm md:text-base">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/services" className="btn-pill btn-primary">
            Explore services <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/games" className="btn-pill btn-ghost">
            Class II &amp; Class III gaming
          </Link>
        </div>
      </div>
    </section>
  );
}
