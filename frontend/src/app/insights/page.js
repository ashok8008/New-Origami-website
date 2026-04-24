import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/lib/content";

export const metadata = {
  title: "Insights — Notes on Mobile, AI, Gaming & Culture | Origami",
  description:
    "Notes from the Origami team on mobile apps, AI, real-money gaming, auctions and culture-forward product engineering.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <div data-testid="insights-page">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Insights
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Notes from<br /><span className="text-signal">the shipping floor.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Plain-language writing on mobile, AI, real-money gaming, auctions
            and culture-forward product engineering — by the people who ship.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 divide-y divide-ink-line">
          {INSIGHTS.map((i) => (
            <Link
              key={i.slug}
              href={`/insights/${i.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 hover:bg-paper-50 transition-colors px-2 md:px-4"
              data-testid={`insight-row-${i.slug}`}
            >
              <div className="md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                {i.date}
                <div className="mt-1 text-signal">{i.tag}</div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl md:text-4xl font-black tracking-tightest leading-[1.05] group-hover:text-signal transition-colors">
                  {i.title}
                </h2>
                <p className="mt-3 text-ink-soft text-[15px] md:text-base leading-relaxed max-w-2xl">
                  {i.excerpt}
                </p>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  {i.read}
                </div>
              </div>
              <div className="md:col-span-1 md:flex md:justify-end md:items-start">
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
