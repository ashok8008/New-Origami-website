import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { AI_PRACTICE, INDUSTRIES } from "@/lib/content";
import { buildAiSolutionPages } from "@/lib/pseo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const PAGES = buildAiSolutionPages(AI_PRACTICE.useCases, INDUSTRIES);

export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }));
}

function getPage(slug) {
  return PAGES.find((p) => p.slug === slug) || null;
}

export function generateMetadata({ params }) {
  const p = getPage(params.slug);
  if (!p) return {};
  return {
    title: `${p.useCaseTitle} for ${p.industryName} — AI Development`,
    description: p.description,
    alternates: { canonical: `/ai-solutions/${p.slug}` },
    openGraph: { title: p.title, description: p.description },
  };
}

export default function AiSolutionDetail({ params }) {
  const p = getPage(params.slug);
  if (!p) return notFound();

  const faqs = [
    { q: `Can Origami build ${p.useCaseTitle.toLowerCase()} for ${p.industryName.toLowerCase()}?`, a: `Yes. Origami has been shipping ${p.useCaseTitle.toLowerCase()} for ${p.industryName.toLowerCase()} operators since 2020. We ground every AI feature in real product surfaces — no demoware.` },
    { q: `Which models do you use?`, a: `We are multi-model. Typical stacks include OpenAI GPT-5, Anthropic Claude Sonnet 4.5, and Google Gemini 3 — routed per workload with cost ceilings and evals wrapped around every call.` },
    { q: `How do you handle data and privacy for ${p.industryName}?`, a: `RAG-grounded, tenant-isolated retrieval; PII redaction where required; regional processing where regulations demand it; and full observability on every LLM call.` },
    { q: `How quickly can we go live?`, a: `A scoped ${p.useCaseTitle.toLowerCase()} pilot typically ships in 4–8 weeks. Production hardening (evals, rate limits, cost caps, monitoring) is another 2–4 weeks.` },
  ];

  return (
    <div data-testid={`ai-solution-${p.slug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              slug: p.slug,
              title: p.title,
              description: p.description,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "AI", url: "/ai" },
              { name: "AI Solutions", url: "/ai-solutions" },
              { name: p.title, url: `/ai-solutions/${p.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All AI solutions
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// AI · {p.industryName}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            {p.useCaseTitle} for {p.industryName}.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {p.useCaseText} Applied to {p.industryBlurb.toLowerCase()}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary">
              Book a call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href={`/ai/${p.useCaseSlug}`} className="btn-pill btn-ghost">
              {p.useCaseTitle} capabilities
            </Link>
            <Link href={`/industries/${p.industrySlug}`} className="btn-pill btn-ghost">
              {p.industryName} POV
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
              /// What we build
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Production AI, not demoware.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              {p.useCaseText} We wrap it in the evals, observability and cost ceilings that make {p.useCaseTitle.toLowerCase()} viable for {p.industryName.toLowerCase()} operators — not just impressive in a demo.
            </p>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-3">
              /// Included
            </div>
            <ul className="space-y-3">
              {[
                "Multi-model routing (GPT-5, Claude 4.5, Gemini 3)",
                "RAG grounded in your data",
                "Cost ceilings and rate-limit handling",
                "Offline + online evals",
                "PII redaction and safety layering",
                "Full observability on every LLM call",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-signal mt-1 shrink-0" />
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
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
        </div>
      </section>
    </div>
  );
}
