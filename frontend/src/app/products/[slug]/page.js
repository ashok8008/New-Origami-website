import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  ShieldCheck,
  Quote,
  Coins,
  Layers,
  Lock,
  Search,
  CheckCircle2,
} from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import { PRODUCTS, CONTACT } from "@/lib/content";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScript,
  serviceJsonLd,
} from "@/lib/seo";

const PRODUCT_SLUGS = ["document-intelligence"];

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  const title = `${p.name} — ${p.tagline}`;
  const description = `${p.positioning} ${p.hero}`;
  return {
    title,
    description,
    keywords: p.keywords,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.origami.dev/products/${p.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function productJsonLd(p) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.origami.dev/products/${p.slug}#product`,
    name: p.name,
    description: p.positioning + " " + p.hero,
    brand: { "@type": "Organization", name: "Origami", "@id": "https://www.origami.dev/#organization" },
    category: "Enterprise AI / Document Intelligence Platform",
    url: `https://www.origami.dev/products/${p.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0",
      priceValidUntil: "2027-12-31",
      url: `https://www.origami.dev/products/${p.slug}#book`,
    },
  };
}

export default function ProductDetail({ params }) {
  const p = getProduct(params.slug);
  if (!p) return notFound();

  const faqs = [
    {
      q: `What is ${p.name}?`,
      a: `${p.name} is an Origami-built enterprise document intelligence platform. It turns your contracts, policies and regulations into a Q&A expert that gives verdicts (Yes / No / It depends / Not addressed) with page-level citations back to the original documents. Sovereign, single-tenant deployment; embeddings run on your infrastructure.`,
    },
    {
      q: `How is ${p.name} different from ChatGPT or generic RAG?`,
      a: `Three ways: (1) Grounded — it will say "Not addressed in the documents" instead of hallucinating. (2) Sovereign — single-tenant, on-prem or private cloud, data never used for training. (3) Cost-transparent — a four-tier engine (semantic cache → cheap → mid → premium) routes most questions cheaply and shows the route + exact cost on every answer.`,
    },
    {
      q: `Where does ${p.name} deploy?`,
      a: `Single-tenant on infrastructure you control — your VPC on AWS / Azure / GCP, or on-prem. Embeddings and the retrieval index stay in your environment. Optional air-gapped mode for regulated deployments.`,
    },
    {
      q: `Which document types does it support?`,
      a: `PDFs, Word documents, scanned images (OCR), structured spreadsheets, contracts, MSAs, policies, SOPs, regulations, clinical records, underwriting files, RFPs and RFP responses.`,
    },
    {
      q: `What LLMs does it use?`,
      a: `Multi-model by design. The four-tier engine routes across a semantic cache, a cheap open-weight model (Llama / Mistral) for standard queries, a mid-tier model (Claude Haiku / GPT-5 Mini) for complex extraction, and a premium model (Claude Sonnet 4.5 / GPT-5) only when the query justifies it.`,
    },
    {
      q: `How long does implementation take?`,
      a: `Typical pilot: 2–4 weeks. Production rollout with SSO, audit trails, redaction and role-based access: 6–10 weeks. Reference clients are live in banking, insurance and legal.`,
    },
    {
      q: `Is ${p.name} compliant with SOC 2, HIPAA, GDPR?`,
      a: `Yes. Single-tenant deployment inside your compliance perimeter. SOC 2, HIPAA and GDPR-ready by architecture. On-prem and air-gapped deployments available for the most sensitive workloads.`,
    },
    {
      q: `Do I own my data?`,
      a: `Yes. Full data ownership, zero third-party training, exportable at any time. Embeddings and vector indexes live in your infrastructure.`,
    },
  ];

  return (
    <div data-testid={`product-page-${p.slug}`}>
      <script {...jsonLdScript(productJsonLd(p))} />
      <script {...jsonLdScript(serviceJsonLd({ slug: `products/${p.slug}`, title: p.name, description: p.positioning }))} />
      <script {...jsonLdScript(faqJsonLd(faqs))} />
      <script {...jsonLdScript(breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: p.name, url: `/products/${p.slug}` },
      ]))} />

      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.35) 1.1px, transparent 1.1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              /// Origami Product
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-4">
              {p.tagline}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.92] tracking-tightest">
              Your documents,<br />
              turned into an expert<br />
              <span className="text-signal">you can prove.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
              {p.hero}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#book" className="btn-pill btn-primary" data-testid="product-cta-book">
                Book a demo <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#how" className="btn-pill btn-ghost">
                See how it works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-muted">
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-signal" /> {p.status}</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-signal" /> Data never leaves your walls</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-signal" /> Every answer cited</span>
            </div>
          </div>

          {/* Ask card */}
          <div className="col-span-12 md:col-span-5 self-end">
            <div className="relative bg-white border border-ink-line shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-6 md:p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-3">
                Ask · your knowledge base
              </div>
              <p className="font-display text-lg md:text-xl font-bold leading-snug text-ink">
                <span className="text-ink-muted">Q.</span> Can we terminate the vendor agreement early without penalty?
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 border border-signal text-signal font-mono text-[11px] uppercase tracking-[0.2em]">
                It depends
              </div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[15px]">
                Early termination for convenience is permitted, but the agreement requires 90 days&apos; written notice and settlement of fees accrued to the termination date. Termination for cause carries no penalty if the breach is uncured after the notice window.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-paper border border-ink-line">
                  <Quote className="w-3 h-3 text-signal" /> MSA · p.14
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-paper border border-ink-line">
                  <Quote className="w-3 h-3 text-signal" /> Schedule C — Fees · p.31
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-ink-muted">
                <Coins className="w-3 h-3 text-signal" /> Semantic cache · ₹0.00 · 0.48s
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <p className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest max-w-3xl">
            The answers your teams need are buried in{" "}
            <span className="text-signal">thousands of PDFs</span> nobody has time to read.
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              { title: "The guesswork tax", body: "People act on half-remembered rules, ask the wrong person, or wait days for someone who's read the document." },
              { title: "The stale-law risk", body: "A regulation was superseded two years ago — but it's still the version being quoted in a decision today." },
              { title: "The AI trust gap", body: "Generic chatbots sound confident and cite nothing. In a regulated business, an unprovable answer is worthless." },
            ].map((c) => (
              <div key={c.title} className="border-t border-ink-line pt-6">
                <h3 className="font-display text-xl md:text-2xl font-black tracking-tight">{c.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three guarantees */}
      <section id="how" className="py-20 md:py-28 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Why it earns trust
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest max-w-3xl">
            Three guarantees built into every answer.
          </h2>
          <p className="mt-5 text-ink-soft max-w-2xl leading-relaxed">
            Not features bolted on — the operating principles the whole system is designed around.
          </p>

          <div className="mt-14 space-y-14">
            {[
              {
                num: "01",
                head: "Grounded & cited",
                title: "It can prove every word.",
                body: "Answers lead with a verdict — Yes, No, It depends, or “Not addressed in the documents” — then back it with page-level citations. Click one, the original opens at that exact page. When the source is silent, it says so.",
                icon: Quote,
              },
              {
                num: "02",
                head: "Sovereign & private",
                title: "Your data never leaves.",
                body: "Single-tenant, on infrastructure you control. Embeddings run locally on your own hardware. Nothing is used for training, and no third party learns from your contracts. The version security and legal actually approve.",
                icon: Lock,
              },
              {
                num: "03",
                head: "Cost-transparent",
                title: "It avoids the expensive AI on purpose.",
                body: "A four-tier engine (semantic cache → cheap open-weight → mid-tier → premium) answers most questions without ever calling a frontier model. Every answer shows its route and exact cost. Predictable unit economics, at scale.",
                icon: Coins,
              },
            ].map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.num} className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3 font-mono text-[13px] uppercase tracking-[0.25em] text-signal">
                    {g.num} — {g.head}
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex items-start gap-4">
                      <Icon className="w-8 h-8 text-signal shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-black tracking-tightest">{g.title}</h3>
                        <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">{g.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Who it&apos;s for
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest max-w-3xl">
            Built for teams where an unprovable answer is worthless.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Legal & General Counsel", body: "Contract Q&A, MSA reviews, obligation extraction, risk-flagging across the portfolio." },
              { name: "Compliance & Risk", body: "Policy Q&A, regulatory change monitoring, control-mapping to standards (SOC 2, ISO, HIPAA)." },
              { name: "Banking & Insurance", body: "Underwriting file review, claims decisioning, loan-document extraction, KYC file summarisation." },
              { name: "Healthcare & Pharma", body: "SOP Q&A, clinical protocol lookup, medical-records extraction, HIPAA-safe deployments." },
            ].map((w) => (
              <div key={w.name} className="p-6 border border-ink-line">
                <div className="flex items-center gap-2 text-signal">
                  <Layers className="w-4 h-4" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Vertical</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-black tracking-tight">{w.name}</h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Capabilities
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest max-w-3xl">
            What ships in the box.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-4">
            {[
              "Verdict-first answers (Yes / No / It depends / Not addressed)",
              "Page-level citations with click-through to the original PDF",
              "Semantic cache — near-instant answers on repeat questions",
              "Four-tier cost-aware LLM routing",
              "Single-tenant deployment (VPC, on-prem or air-gapped)",
              "Embeddings run on your infrastructure",
              "SSO (SAML / OIDC), role-based access, audit trails",
              "PII redaction and configurable retention",
              "Regulatory change monitoring (bring your standards library)",
              "Multi-model — Llama, Mistral, Claude, GPT-5, Gemini",
              "Bring-your-own-key or fully managed",
              "API + web app + Slack + Teams surfaces",
            ].map((c) => (
              <div key={c} className="flex items-start gap-3 py-3 border-b border-ink-line">
                <CheckCircle2 className="w-4 h-4 text-signal mt-1 shrink-0" />
                <span className="text-ink">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client (NDA) */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-ink text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Reference client
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest max-w-3xl">
            Live inside a regulated enterprise.<br />
            <span className="text-white/50">Name under NDA.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            Deployed in production for a top-tier regulated enterprise — reviewing thousands of contracts, policies and regulatory documents daily. Single-tenant on their private cloud, air-gapped from public internet. Full reference available under NDA on request.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              { k: "10k+", v: "documents ingested" },
              { k: "1.2M+", v: "queries answered" },
              { k: "94%", v: "answered from cache or cheap-tier" },
              { k: "0", v: "hallucinated citations" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl md:text-5xl font-black tracking-tightest text-signal">{s.k}</div>
                <div className="mt-2 text-white/60 text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// FAQ
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest mb-10">
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

      {/* Book demo */}
      <section id="book" className="py-20 md:py-28 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
              /// Book a demo
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tightest">
              See it on <span className="text-signal">your</span> documents.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              30 minutes with a senior Origami engineer. We&apos;ll show you the four-tier routing, page-level citations and sovereign deployment — and if you send us a sample document set under NDA, we&apos;ll run three of your real questions on it live.
            </p>
            <ul className="mt-8 space-y-3 text-ink">
              <li className="flex items-start gap-3"><Search className="w-4 h-4 text-signal mt-1 shrink-0" /> See your questions answered on your docs</li>
              <li className="flex items-start gap-3"><Lock className="w-4 h-4 text-signal mt-1 shrink-0" /> NDA signed before any document is shared</li>
              <li className="flex items-start gap-3"><Coins className="w-4 h-4 text-signal mt-1 shrink-0" /> Transparent cost model, per-answer</li>
            </ul>
            <p className="mt-8 text-sm text-ink-muted">
              Prefer email? <a href={`mailto:${CONTACT.email}`} className="text-signal hover:underline">{CONTACT.email}</a>
            </p>
          </div>
          <div className="md:col-span-7">
            <DemoRequestForm productSlug={p.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
