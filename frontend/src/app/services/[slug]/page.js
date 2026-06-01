import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import {
  SERVICES,
  SERVICE_DETAIL,
  getService,
  getProject,
  CLIENTS,
} from "@/lib/content";
import {
  serviceJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const SERVICE_FAQS = {
  "mobile-app-development": [
    { q: "What does a mobile app development project with Origami cost?", a: "Typical engagements start at $80–150K for an MVP (iOS + Android, 8–14 weeks, senior pod of 3–4 engineers). Multi-platform production builds with backend, payments and identity range $200K–$1.2M. We work fixed-scope and time-and-materials. Every quote is owned by a senior engineer, not a salesperson." },
    { q: "Do you build native iOS / Android, React Native, or Flutter?", a: "All four. We pick based on the product, not the framework. Camera, gaming and pixel-perfect creative tools go native. Content, commerce and CRUD-shaped apps go React Native. Brand-led, motion-rich UIs sometimes get Flutter. We've shipped 9+ production mobile apps across all four stacks." },
    { q: "How long does it take to ship a production mobile app?", a: "8–14 weeks for a serious MVP on the App Store and Play Store. 5–9 months for a full platform with backend, real-money or regulated layers. Faster than most agencies because every engineer is senior — no juniors to supervise." },
    { q: "Where are you based and do you work with US clients?", a: "Headquartered in New York (641 Lexington Ave, 14th Floor) with a senior dev team in Bengaluru, India. Most of our clients are US-based (HipHopGrails, PlaySQOR, RealProfits, FanRush, beRides). We work in US time zones." },
  ],
  "ai-and-llm-products": [
    { q: "What kind of AI products do you build?", a: "Production AI features wrapped in evals, tracing, cost ceilings and rollback — not demos. RAG-grounded chatbots, AI co-pilots (RealProfits, Wholosophy), agentic workflows, voice and vision features. We work across OpenAI, Anthropic Claude, Google Gemini and open-source models." },
    { q: "Do you do RAG, fine-tuning, or both?", a: "RAG first for almost every problem — it's faster to ship, easier to evaluate and easier to update. We reach for fine-tuning when the problem is genuinely about style, domain-specific structured output, or hard latency targets that RAG can't meet." },
    { q: "How do you handle hallucinations and AI safety in production?", a: "Eval sets before launch (50-200 input/output pairs scored on every prompt change), online evals on a rolling traffic sample, PII redaction at the boundary, safety classifiers before and after generation, and feature-flag-controlled rollback on every prompt. Detailed in our insights essay on shipping LLM features." },
    { q: "What does an AI development project typically cost?", a: "AI-feature engagements start at $40–80K for a focused production feature (8–12 weeks, senior AI + product engineer). Full AI-native product builds range $150K–$600K. We never charge for time spent on demos that won't survive production." },
  ],
  "auctions-and-fan-drops": [
    { q: "What auction platforms have you built?", a: "HipHopGrails is the flagship — the breakout auction destination for hip-hop memorabilia and celebrity drops, often described as the Sotheby's of the streets. End-to-end on .NET 8 + Azure + Next.js + React Native + PostgreSQL." },
    { q: "What's special about engineering an auction platform?", a: "The bidding engine is the product, not a CRUD app with a countdown. You need sub-100ms broadcast, server-authoritative state, anti-snipe and soft-close logic, immutable audit trails that survive subpoena, and live-event run-of-show tooling. We've solved all of it." },
    { q: "Why .NET and Azure for auctions instead of Node and AWS?", a: "Azure SignalR Service handles 100k+ concurrent WebSocket connections out of the box. Azure AD B2C gives you per-jurisdiction KYC-bound identity. Azure SQL with always-encrypted columns gives you audit-grade compliance. For regulated high-value auctions, this stack is years ahead of the alternatives." },
  ],
  "class-ii-and-class-iii-games": [
    { q: "What's the difference between Class II and Class III gaming?", a: "Class II is bingo-derived games regulated under IGRA — outcomes are server-drawn from a shared player pool, even when the presentation looks like slots. Class III is RNG-driven casino-style games regulated by state gaming commissions. We've built both, on a single shared platform layer." },
    { q: "Are you GLI-aligned?", a: "Yes. Our gaming platform builds (PlaySQOR, Acquire.bet, tribal Class II operators) are engineered for GLI testing-lab certification — RNG, audit trails, RG controls, geo-fencing, KYC and AML are wired in at the boundary, not bolted on later." },
    { q: "Do you build for tribal operators, commercial operators, or both?", a: "Both. We've shipped tribal Class II platforms under IGRA compliance and Class III platforms for state-licensed operators. Most clients run a unified platform with both content types — Class II content in tribal markets, Class III in licensed states." },
  ],
  "web-development": [
    { q: "Do you only build Next.js?", a: "Next.js 14 App Router is our default — Server Components, edge runtimes, Core Web Vitals targets (LCP < 1.5s, INP < 200ms). We also ship Remix and headless-CMS-driven builds when the workload fits. For traditional content sites, sometimes the right answer is plain HTML on a CDN." },
    { q: "What backend stacks do you pair with the front end?", a: "Node + Postgres for most product builds. Python + FastAPI for AI-native services. .NET + Azure for regulated, real-time or high-value workloads. We pick based on the workload, not the team's last gig." },
    { q: "Do you build marketing sites or product surfaces or both?", a: "Both, with separate teams. The marketing-site team is design-led and ships on Next.js + a headless CMS. The product-surface team is engineering-led and ships on the same stack with full backend, auth and operator tooling." },
  ],
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} Agency`,
    description: `${s.desc} Senior engineers. NYC + Bengaluru. Trusted by HipHopGrails, PlaySQOR, FanRush, beRides.`,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServiceDetailPage({ params }) {
  const s = getService(params.slug);
  if (!s) return notFound();
  const detail = SERVICE_DETAIL[s.slug] || { pills: [], bullets: [], relatedWork: [], headline: s.title, body: s.desc };
  const faqs = SERVICE_FAQS[s.slug] || [];

  return (
    <div data-testid={`service-page-${s.slug}`}>
      <script {...jsonLdScript(serviceJsonLd({ slug: s.slug, title: s.title, description: s.desc }))} />
      <script {...jsonLdScript(breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: s.title, url: `/services/${s.slug}` },
      ]))} />
      {faqs.length > 0 ? (
        <script {...jsonLdScript(faqJsonLd(faqs))} />
      ) : null}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {s.code} · Service
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            {detail.headline || s.title}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {detail.body || s.desc}
          </p>
          {detail.pills && detail.pills.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {detail.pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1.5 text-xs text-ink-soft"
                >
                  <span className="w-1.5 h-1.5 bg-signal rounded-full" />
                  {p}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {detail.bullets && detail.bullets.length > 0 ? (
        <section className="py-20 md:py-28 border-b border-ink-line bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// What we deliver
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                The things we&apos;ll<br /><span className="text-signal">actually ship.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="space-y-5">
                {detail.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-ink-soft text-lg leading-relaxed border-t border-ink-line pt-5"
                  >
                    <Check className="w-5 h-5 text-signal mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {detail.relatedWork && detail.relatedWork.length > 0 ? (
        <section className="py-16 md:py-24 border-b border-ink-line bg-paper-50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Related work
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
              Places this shipped.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
              {detail.relatedWork.slice(0, 3).map((slug) => {
                const p = getProject(slug);
                const client = CLIENTS.find((c) => c.file.startsWith(slug));
                if (!p) return null;
                return (
                  <Link
                    key={slug}
                    href={`/work/${slug}`}
                    className="group bg-white hover:bg-paper-50 p-8 md:p-10 flex flex-col min-h-[220px] transition-colors"
                    data-testid={`service-related-${slug}`}
                  >
                    <div className="h-10 flex items-center">
                      {client ? (
                        <Image
                          src={`/brand/clients/${client.file}`}
                          alt={p.name}
                          width={client.width}
                          height={40}
                          className="h-8 w-auto"
                        />
                      ) : (
                        <span className="font-display font-bold text-xl">{p.name}</span>
                      )}
                    </div>
                    <p className="mt-8 text-ink-soft text-[15px] leading-relaxed">{p.oneLiner}</p>
                    <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.2em] text-ink group-hover:text-signal transition-colors">
                      Case study <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {faqs.length > 0 ? (
        <section className="py-20 md:py-28 border-b border-ink-line bg-white" data-testid={`service-faqs-${s.slug}`}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// FAQ
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                Common<br /><span className="text-signal">questions.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 divide-y divide-ink-line">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group py-6 cursor-pointer"
                  data-testid={`faq-${s.slug}-${i}`}
                >
                  <summary className="flex items-start justify-between gap-4 list-none">
                    <h3 className="font-display text-lg md:text-2xl font-bold tracking-tight leading-snug text-ink">
                      {f.q}
                    </h3>
                    <span className="font-mono text-signal text-2xl shrink-0 leading-none mt-1 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 text-ink-soft text-base md:text-lg leading-[1.75]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 md:py-28 bg-white border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Ready to kick this off?<br />
            <span className="text-signal">Let&apos;s scope it.</span>
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Start a conversation <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
