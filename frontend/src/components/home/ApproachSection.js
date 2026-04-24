import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { APPROACH } from "@/lib/content";

export default function ApproachSection() {
  return (
    <section
      className="relative py-24 md:py-32 border-b border-ink-line bg-white overflow-hidden"
      data-testid="approach-section"
    >
      <div className="absolute inset-0 dotted opacity-40 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Our approach
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              How we work.
              <br />
              <span className="text-signal">Listen. Architect. Ship. Scale.</span>
            </h2>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-ink-line">
          {APPROACH.map((a, i) => (
            <li
              key={a.n}
              className={`py-10 md:py-14 px-6 md:px-10 ${
                i !== 0 ? "md:border-l" : ""
              } border-ink-line`}
              data-testid={`approach-${a.n}`}
            >
              <div className="font-mono text-sm text-signal">{a.n}</div>
              <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                {a.title}
              </h3>
              <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">
                {a.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Link href="/approach" className="btn-pill btn-ghost">
            Read our approach in full <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
