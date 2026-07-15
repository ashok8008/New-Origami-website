import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { GUIDES, getGuide } from "@/lib/pseo";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, howToJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const g = getGuide(params.slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { title: g.title, description: g.excerpt, type: "article" },
  };
}

// Reusable structured body — an anatomy every guide follows so pages
// remain long-form and unique per slug.
function buildSections(g) {
  return [
    {
      heading: `What is ${g.title.replace(/^How to /, "").replace(/[?.]$/, "")}?`,
      body: `${g.excerpt} This guide walks through the model we've used across production engagements — HipHopGrails, PlaySQOR, FanRush, beRides, RealProfits and more — reduced to the parts that actually matter.`,
    },
    {
      heading: "Why teams get this wrong",
      body: `Most teams overshoot on tooling and undershoot on process. In practice, ${g.tag.toLowerCase()} projects fail more often on ambiguous ownership, missing evals, and cost blind-spots than on model or framework choice. The technical decisions are usually reversible; the org decisions rarely are.`,
    },
    {
      heading: "The Origami playbook",
      body: `Our approach is a mix of pragmatism and depth. We instrument early, ship weekly, treat evals as first-class product code, and rehearse launches in staging environments that mirror production down to feature flags, secrets and rate limits.`,
    },
    {
      heading: "Common pitfalls",
      body: `The five things we see repeatedly: (1) no shared definition of "done" per feature, (2) evals bolted on after launch, (3) no cost ceilings on LLM calls, (4) missing observability on the client, (5) hiring for tools instead of for shipping. Get these right and delivery risk drops sharply.`,
    },
    {
      heading: "How Origami helps",
      body: `We embed senior engineers directly with your team, ship weekly, and run the ${g.tag.toLowerCase()} program end-to-end — from discovery to launch to iterate. Repeat clients stay with us for 2–4 years because we own outcomes, not just tickets.`,
    },
  ];
}

function buildHowToSteps(g) {
  return [
    { name: "Scope the problem", text: `Write a one-page brief covering user outcomes, constraints and one leading metric. If you can't compress ${g.tag.toLowerCase()} to a page, the scope is wrong.` },
    { name: "Instrument first", text: "Ship logs, traces and metrics before ship-worthy code. You cannot improve what you cannot see." },
    { name: "Prototype in staging", text: "Prototype behind a feature flag against a production-shaped dataset. Toy data hides real problems." },
    { name: "Run evals", text: "Write regression and offline evals as you build, not after. Treat evals as product code." },
    { name: "Rollout by cohort", text: "Start with an internal cohort, then 1%, 10%, 25%, 100% — with automatic rollback triggers if key metrics regress." },
    { name: "Iterate weekly", text: "Weekly release trains, in-flight product analytics, and a running list of debt you're consciously accepting." },
  ];
}

function buildFaqs(g) {
  return [
    { q: `How long does a typical ${g.tag.toLowerCase()} project take?`, a: `Anywhere from 4 weeks for a scoped MVP to 6–9 months for a category-defining product. Discovery + design is 2–4 weeks; the rest depends on scope.` },
    { q: `Can we start with a single engineer?`, a: `Yes — most engagements start as a single senior engineer or a two-person pod. We scale up as the work justifies it.` },
    { q: `Do you work with existing codebases?`, a: `Yes. About half of our engagements start on an existing codebase. We audit, refactor incrementally, and never rewrite unless a rewrite is measurably cheaper than iteration.` },
  ];
}

export default function GuidePage({ params }) {
  const g = getGuide(params.slug);
  if (!g) return notFound();
  const sections = buildSections(g);
  const steps = buildHowToSteps(g);
  const faqs = buildFaqs(g);

  return (
    <article data-testid={`guide-page-${g.slug}`} className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              slug: g.slug,
              title: g.title,
              excerpt: g.excerpt,
              date: "2026-02-01",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToJsonLd({
              name: g.title,
              description: g.excerpt,
              steps,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Guides", url: "/guides" },
              { name: g.title, url: `/guides/${g.slug}` },
            ])
          ),
        }}
      />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[820px] mx-auto px-6 md:px-10">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All guides
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Guide · {g.tag} · {g.read}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
            {g.title}
          </h1>
          <p className="mt-8 text-ink-soft text-lg md:text-xl leading-relaxed">{g.excerpt}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[720px] mx-auto px-6 md:px-10 prose-style">
          {sections.map((s) => (
            <div key={s.heading} className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-black tracking-tight mb-4">
                {s.heading}
              </h2>
              <p className="text-ink-soft leading-relaxed text-lg">{s.body}</p>
            </div>
          ))}
          <div className="mb-4">
            <h2 className="font-display text-2xl md:text-3xl font-black tracking-tight mb-4">
              Step-by-step
            </h2>
            <ol className="space-y-4 list-decimal list-inside">
              {steps.map((s) => (
                <li key={s.name} className="text-ink-soft leading-relaxed">
                  <span className="font-bold text-ink">{s.name}.</span> {s.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[820px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-10">
            FAQ
          </h2>
          <div className="divide-y divide-ink-line border-y border-ink-line">
            {faqs.map((f) => (
              <details key={f.q} className="py-6 group">
                <summary className="cursor-pointer flex justify-between items-start gap-6 font-display text-lg md:text-xl font-bold leading-snug">
                  {f.q}
                  <span className="text-signal font-mono text-sm mt-1 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="btn-pill btn-primary">
              Talk to Origami <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
