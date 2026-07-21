import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { faqJsonLd, breadcrumbJsonLd, jsonLdScript, serviceJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Pricing — Custom Software, Mobile & AI Development Cost | Origami",
  description:
    "Transparent pricing for custom software, mobile app and AI development. Discovery from $40k, MVP builds from $120k, dedicated senior engineers from $9,500/month. Fixed-price proposals within a week.",
  alternates: { canonical: "/pricing" },
  keywords: [
    "custom software development cost",
    "custom software development pricing",
    "mobile app development cost",
    "mobile app development pricing",
    "how much does mobile app development cost",
    "how much does custom software cost",
    "AI development cost",
    "AI development pricing",
    "how much does AI development cost",
    "RAG development cost",
    "LLM app development cost",
    "SaaS development cost",
    "enterprise software development cost",
    "dedicated developer cost",
    "hire dedicated developers pricing",
    "MVP development cost",
    "AI agent development cost",
    "voice AI development cost",
    "custom software development quote",
    "mobile app development quote",
  ],
};

const TIERS = [
  {
    name: "Discovery + Design",
    from: "$40k",
    duration: "3–4 weeks",
    desc: "Scoping, product strategy, high-fidelity design of the core loop, technical spikes and a fixed-price proposal for the build phase.",
    for: "Founders and product teams who need to de-risk scope before writing a single line of code.",
    incl: [
      "Product brief + user research",
      "High-fidelity Figma of core flows",
      "Technical spikes on risky unknowns",
      "Fixed-price build proposal at the end",
      "1 senior PM + 1 senior designer + 1 senior engineer",
    ],
  },
  {
    name: "MVP Build",
    from: "$120k",
    duration: "8–12 weeks",
    desc: "Real, production-shipped MVP with paying users at the end — not a Figma demo. Weekly demos, direct engineer access, deployed on real infrastructure.",
    for: "VC-backed founders and product teams shipping to a first paying customer in a quarter.",
    incl: [
      "Full core-loop implementation",
      "Auth, payments, email, deploy pipeline",
      "Weekly demos and staging environment",
      "Design partner rollout in weeks 9–10",
      "Public launch + first paying customer in week 12",
    ],
    featured: true,
  },
  {
    name: "Dedicated Senior Engineer",
    from: "$9,500 /mo",
    duration: "Ongoing",
    desc: "One senior engineer, embedded with your team full-time. Time-zone aligned, transparent Jira/Linear, direct access, no account layer.",
    for: "Teams who want to extend engineering capacity without hiring — a single senior on a monthly retainer.",
    incl: [
      "1 senior engineer (6+ years, shipped to production)",
      "Time-zone aligned working hours",
      "Weekly demos + retro cadence",
      "Full IP transfer on all work product",
      "30-day replacement guarantee",
    ],
  },
  {
    name: "Dedicated Pod",
    from: "$38k /mo",
    duration: "Ongoing",
    desc: "Full cross-functional pod — 2 senior engineers, 1 senior designer, 1 product lead — embedded with your team.",
    for: "Growth-stage companies replacing an entire product engineering team, or building a new product line inside a larger org.",
    incl: [
      "2 senior engineers + designer + PM",
      "Design, engineering and product ownership",
      "Weekly demos + monthly steering",
      "Slack-embedded with your team",
      "SLA + on-call for production incidents",
    ],
  },
  {
    name: "AI POC / MVP",
    from: "$60k",
    duration: "6–8 weeks",
    desc: "Ship an AI feature — RAG, LLM app, agent, voice, or vision — in production behind a feature flag, with evals and cost ceilings from day one.",
    for: "Teams testing an AI product hypothesis quickly without committing to a full build.",
    incl: [
      "Model routing across GPT-5, Claude 4.5, Gemini 3",
      "RAG grounded in your data",
      "Offline + online evals",
      "Cost ceilings + observability",
      "Human-in-the-loop where required",
    ],
  },
  {
    name: "Enterprise / Regulated",
    from: "Custom",
    duration: "6–24 months",
    desc: "Long-form engagements for regulated industries — healthcare (HIPAA), banking (SOC 2, PCI), gaming (GLI-19), or defence. Single-tenant, sovereign deployments including our Document Intelligence product.",
    for: "Regulated enterprises where the AI or software touches PHI, PCI or classified data.",
    incl: [
      "BAA + SOC 2 + HITRUST-ready architectures",
      "Single-tenant / on-prem / air-gapped",
      "Audit-log framework from day one",
      "Compliance-first engineering",
      "Full reference client under NDA",
    ],
  },
];

const FAQS = [
  { q: "How much does custom software development cost with Origami?", a: "Discovery + Design engagements start at $40,000. MVP builds start at $120,000. Ongoing dedicated senior engineers start at $9,500/month. Full-scale enterprise builds range from $500,000 to $5,000,000+ depending on scope, regulation and integration complexity. We share a fixed-price proposal within a week of a 30-minute scoping call." },
  { q: "How much does mobile app development cost?", a: "A typical iOS + Android MVP built on React Native, Expo or native (Swift + Kotlin) ranges from $120,000 to $250,000 depending on backend complexity, third-party integrations and design polish. A single-platform MVP can start at $80,000." },
  { q: "How much does AI development cost?", a: "An AI POC or MVP — RAG, LLM app, agent, voice or vision — starts at $60,000 for a 6–8 week engagement. Full production AI features with evals, observability and cost ceilings typically land in the $150,000 to $400,000 range. Ongoing AI product engineering runs on the dedicated senior engineer or pod pricing." },
  { q: "How much does RAG development cost?", a: "A production RAG system (chunking, embeddings, hybrid retrieval, reranking, evals, observability) typically costs $80,000 to $180,000 for the initial build. Enterprise sovereign / on-prem deployments — like our Document Intelligence product — are quoted custom depending on data volume, compliance requirements and integrations." },
  { q: "How much does an LLM app cost to build?", a: "Custom LLM applications range from $60,000 (POC) to $250,000+ (production feature with evals, structured outputs, cost ceilings and multi-model routing across GPT-5, Claude Sonnet 4.5 and Gemini 3)." },
  { q: "Do you offer fixed-price contracts?", a: "Yes for Discovery + Design and MVP Build engagements. Ongoing dedicated engineer and pod engagements are monthly retainers with 30-day terms." },
  { q: "What's your engagement minimum?", a: "Smallest engagement is one senior engineer for one month at $9,500. Smallest fixed-scope project is a Discovery + Design engagement at $40,000." },
  { q: "How quickly can you start?", a: "Discovery engagements typically kick off within 2 weeks of contract signature. MVP builds start within 3 weeks. Dedicated engineers can often be embedded within 5 business days." },
  { q: "What's your replacement policy?", a: "If a senior engineer isn't the right fit for your engagement in the first 30 days, we swap them at no cost." },
  { q: "Do you sign BAAs, SOC 2 and HITRUST agreements?", a: "Yes. We work with clients in regulated industries — healthcare (HIPAA + BAA), banking (SOC 2, PCI), and gaming (GLI-19). Our regulated engagements include compliance scaffolding from day one." },
  { q: "Where is Origami based?", a: "Head office at 641 Lexington Avenue, 14th Floor, New York, NY 10022. Development centre in HSR Layout, Bengaluru, India. We serve clients globally across 20 cities in the US, UK, Canada, UAE, Singapore and India." },
];

export default function PricingPage() {
  return (
    <div data-testid="pricing-page">
      <script {...jsonLdScript(faqJsonLd(FAQS))} />
      <script {...jsonLdScript(breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Pricing", url: "/pricing" },
      ]))} />
      <script {...jsonLdScript(serviceJsonLd({
        slug: "pricing",
        title: "Origami Pricing — Custom Software, Mobile & AI Development",
        description: "Transparent pricing for custom software, mobile app and AI development.",
      }))} />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Pricing
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest max-w-5xl">
            Transparent pricing.<br />
            <span className="text-signal">Senior engineers only.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Six engagement models, one operating principle: senior engineers on client work, no juniors, weekly releases, direct access. Fixed-price where it makes sense, monthly retainers where it doesn&apos;t. Full proposal within a week of a 30-minute call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary" data-testid="pricing-cta-book">
              Book a scoping call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${CONTACT.email}`} className="btn-pill btn-ghost">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`p-8 border ${t.featured ? "border-signal bg-paper" : "border-ink-line bg-white"} relative`}
                data-testid={`pricing-tier-${t.name.toLowerCase().replace(/\W+/g, "-")}`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-8 bg-signal text-white text-[10px] font-mono uppercase tracking-[0.25em] px-3 py-1">
                    Most Popular
                  </div>
                )}
                <h2 className="font-display text-2xl font-black tracking-tight">{t.name}</h2>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black tracking-tightest text-signal">
                    {t.from}
                  </span>
                  <span className="text-ink-muted text-sm">from · {t.duration}</span>
                </div>
                <p className="mt-4 text-ink-soft text-sm leading-relaxed">{t.desc}</p>
                <p className="mt-4 text-[13px] text-ink font-medium leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted block mb-1">For</span>
                  {t.for}
                </p>
                <ul className="mt-5 space-y-2 pt-5 border-t border-ink-line">
                  {t.incl.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// FAQ · pricing
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[0.95] tracking-tightest mb-10">
            Frequently asked about pricing.
          </h2>
          <div className="divide-y divide-ink-line border-y border-ink-line">
            {FAQS.map((f) => (
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

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
              /// Talk to an engineer
            </div>
            <p className="font-display text-2xl md:text-3xl font-black tracking-tightest max-w-2xl">
              Get a fixed-price proposal within a week.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-pill btn-primary">
              Book a call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/work" className="btn-pill btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
