import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { INSIGHTS, getInsight } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

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
    openGraph: {
      title: i.title,
      description: i.excerpt,
      type: "article",
      publishedTime: i.date,
      authors: ["Origami"],
      tags: [i.tag],
    },
  };
}

function Block({ block }) {
  if (block.type === "h2") {
    return (
      <h2 className="font-display text-2xl md:text-3xl font-black tracking-tightest leading-tight text-ink mt-12 mb-2">
        {block.text}
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="list-none space-y-3 my-2 pl-0">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-[10px] w-1.5 h-1.5 bg-signal shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p>{block.text}</p>;
}

export default function InsightPage({ params }) {
  const i = getInsight(params.slug);
  if (!i) return notFound();

  const others = INSIGHTS.filter((x) => x.slug !== i.slug).slice(0, 3);

  return (
    <div data-testid={`insight-page-${i.slug}`}>
      <script {...jsonLdScript(articleJsonLd({ slug: i.slug, title: i.title, excerpt: i.excerpt, date: i.date }))} />
      <script {...jsonLdScript(breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Insights", url: "/insights" },
        { name: i.title, url: `/insights/${i.slug}` },
      ]))} />
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
        <div className="max-w-[760px] mx-auto px-6 md:px-10 text-ink-soft text-lg leading-[1.8] space-y-5">
          {(i.body || []).map((b, idx) => (
            <Block key={idx} block={b} />
          ))}
          <div className="pt-12 mt-12 border-t border-ink-line flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
              Want this kind of work on your roadmap?
            </div>
            <Link href="/contact" className="btn-pill btn-primary text-sm" data-testid="insight-cta">
              Work with us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 ? (
        <section className="py-16 md:py-24 bg-paper-50 border-b border-ink-line">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// More from the team
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
              Read next.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/insights/${o.slug}`}
                  className="group bg-white hover:bg-paper-50 p-8 transition-colors flex flex-col min-h-[200px]"
                  data-testid={`insight-related-${o.slug}`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                    {o.tag} · {o.read}
                  </span>
                  <h3 className="mt-6 font-display text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:text-signal transition-colors">
                    {o.title}
                  </h3>
                  <div className="mt-auto pt-4 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-ink group-hover:text-signal">
                    Read <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
