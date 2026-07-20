import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import { CONTACT, TECH_STACKS } from "@/lib/content";
import { HUBS, getHub, allHubKeywords } from "@/lib/hubs";
import { CITIES } from "@/lib/pseo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, jsonLdScript } from "@/lib/seo";

export function generateStaticParams() {
  return HUBS.map((h) => ({ hub: h.slug }));
}

export function generateMetadata({ params }) {
  const h = getHub(params.hub);
  if (!h) return {};
  return {
    title: h.seoTitle,
    description: h.lede,
    keywords: allHubKeywords(h),
    alternates: { canonical: `/${h.slug}` },
    openGraph: { title: h.seoTitle, description: h.lede, url: `https://www.origami.dev/${h.slug}` },
  };
}

export default function HubPage({ params }) {
  const h = getHub(params.hub);
  if (!h) return notFound();

  const faqs = buildHubFaqs(h);

  return (
    <div data-testid={`hub-${h.slug}`}>
      <script {...jsonLdScript(serviceJsonLd({ slug: h.slug, title: h.title, description: h.lede }))} />
      <script {...jsonLdScript(faqJsonLd(faqs))} />
      <script {...jsonLdScript(breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: h.title, url: `/${h.slug}` },
      ]))} />

      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {h.tagline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest max-w-5xl">
            {h.hero}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {h.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary" data-testid={`hub-${h.slug}-cta`}>
              Book a scoping call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${CONTACT.email}`} className="btn-pill btn-ghost">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* Category matrix */}
      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Capabilities
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-12">
            What we build.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {h.categories.map((c) => (
              <div
                key={c.name}
                className="p-6 border border-ink-line hover:border-signal transition-colors"
                data-testid={`hub-category-${c.name.toLowerCase().replace(/\W+/g, "-")}`}
              >
                <h3 className="font-display text-lg md:text-xl font-black tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacks */}
      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Stack
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-8">
            The stack we ship with.
          </h2>
          <div className="flex flex-wrap gap-2">
            {TECH_STACKS.slice(0, 14).map((s) => (
              <Link
                key={s.slug}
                href={`/build/${s.slug}`}
                className="text-sm px-3 py-1.5 border border-ink-line hover:border-signal hover:text-signal transition-colors bg-white"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City links */}
      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// By city
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-10">
            {h.title} in your city.
          </h2>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${h.slug}/in/${c.slug}`}
                className="text-sm px-3 py-1.5 border border-ink-line hover:border-signal hover:text-signal transition-colors"
                data-testid={`hub-city-${c.slug}`}
              >
                {h.title} in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// FAQ
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[0.95] tracking-tightest mb-10">
            Frequently asked.
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

function buildHubFaqs(h) {
  const isAi = h.slug === "ai-development-services";
  return [
    {
      q: isAi
        ? "What does Origami build under AI development services?"
        : "What does custom software development at Origami include?",
      a: isAi
        ? `Everything from AI POCs and MVPs to full generative-AI products, LLM-based platforms, RAG systems, agentic workflows, voice AI agents and computer vision pipelines — deployed on OpenAI GPT-5, Anthropic Claude Sonnet 4.5, Google Gemini 3 and open-weight models. Every engagement includes evals, cost ceilings and observability.`
        : `Full-stack bespoke software — mobile (iOS/Android/React Native/Flutter), web (Next.js/React), backend (FastAPI/Node.js/.NET), SaaS multi-tenancy, enterprise integrations, and cloud platform engineering (AWS/Azure/GCP). Weekly releases, direct engineer access, senior-only.`,
    },
    {
      q: `How is Origami different from other ${h.title.toLowerCase()} companies?`,
      a: `We're senior-only — no juniors on client work. Repeat clients stay with us for 2–4 years because we own outcomes, ship weekly, and treat evals + observability + cost ceilings as first-class product code, not afterthoughts.`,
    },
    {
      q: `How much does ${h.title.toLowerCase()} cost?`,
      a: `Discovery + design engagements start around $40k. MVP builds from $120k. Dedicated senior engineers from $9,500/month. We share a fixed-price proposal within a week of a 30-minute scoping call.`,
    },
    {
      q: `How quickly can we start?`,
      a: `Most engagements kick off within 2–3 weeks. AI POC / MVP builds ship in 6–8 weeks. Full-scale custom software builds run 3–9 months depending on scope.`,
    },
    {
      q: `What kinds of clients do you work with?`,
      a: `Culture-forward consumer brands, VC-backed startups, regulated enterprises (legal, banking, healthcare, real-money gaming), celebrity/creator platforms, and marketplaces. Reference clients include HipHopGrails, PlaySQOR, FanRush, beRides, RealProfits, Wholosophy, Nick Cooper and TrueWrld.`,
    },
    {
      q: isAi
        ? "Which AI models do you use?"
        : "Which technologies do you build with?",
      a: isAi
        ? "Multi-model by default: OpenAI GPT-5, Anthropic Claude Sonnet 4.5, Google Gemini 3, plus open-weight models (Llama, Mistral, Qwen) where cost or sovereignty justifies. Vector search on pgvector, Pinecone or Weaviate. Evals on Braintrust or custom harnesses."
        : "React Native, iOS Swift, Android Kotlin, Flutter, Next.js, React, Node.js, FastAPI, .NET 8, Azure, AWS, GCP, Postgres, MongoDB, Snowflake, Vercel and Cloudflare.",
    },
    {
      q: `Where is Origami based?`,
      a: `Head office at 641 Lexington Avenue, 14th Floor, New York, NY 10022. Development centre in HSR Layout, Bengaluru, India. We serve clients globally across 20 cities.`,
    },
  ];
}
