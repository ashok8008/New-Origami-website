import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { INSIGHTS, getInsight } from "@/lib/content";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const i = getInsight(params.slug);
  if (!i) return {};
  return {
    title: i.title,
    description: i.excerpt,
    alternates: { canonical: `/insights/${i.slug}` },
  };
}

// Long-form placeholder body — will be replaced with real editorial content.
const BODY_BLOCKS = [
  "We work in a lot of different shapes — mobile apps, AI features, real-money gaming, auction platforms — but a handful of ideas keep coming up across every engagement.",
  "Production is the only benchmark worth chasing. Demos ship themselves. The work is in what survives three weeks of real traffic, one incident, and the first critical review.",
  "A good team is measured by how fast it recovers from surprise — not how rarely it's surprised. Observability, evals, rollback, telemetry — they're not nice-to-haves. They're the product.",
  "We lean into senior teams because context compounds. The fifth hour of work is twenty times more valuable than the first when the people involved have already shipped this shape of product before.",
  "And, finally: the brands we work with are built by people who love culture. The work of the engineering team is to give that love somewhere to live, at internet scale, without getting in the way.",
];

export default function InsightPage({ params }) {
  const i = getInsight(params.slug);
  if (!i) return notFound();

  return (
    <div data-testid={`insight-page-${i.slug}`}>
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All insights
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {i.tag} · {i.date} · {i.read}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            {i.title}
          </h1>
          <p className="mt-8 text-ink-soft text-lg md:text-xl leading-relaxed">{i.excerpt}</p>
        </div>
      </section>

      <article className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[760px] mx-auto px-6 md:px-10 space-y-6 text-ink-soft text-lg leading-[1.75]">
          {BODY_BLOCKS.map((b, idx) => (
            <p key={idx}>{b}</p>
          ))}
          <div className="pt-8 border-t border-ink-line">
            <Link href="/contact" className="btn-pill btn-primary text-sm">
              Work with us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
