import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, MapPin, Phone, Mail } from "lucide-react";
import { CLIENTS, PROJECTS } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "Mobile App, AI & Platform Development Agency",
  description:
    "Origami is a senior-only mobile app, AI and platform development agency headquartered in New York (641 Lexington Ave). We ship iOS, Android, React Native, LLM, RAG and gaming platforms for US brands — HipHopGrails, PlaySQOR, FanRush, beRides, RealProfits.",
  alternates: { canonical: "/new-york" },
};

const NYC_FAQS = [
  {
    q: "Where in New York is Origami based?",
    a: "Our headquarters is at 641 Lexington Avenue, 14th Floor, New York, NY 10022 — in Midtown East, two blocks from Grand Central. Our senior dev team is in Bengaluru, India. We staff every engagement out of New York, with US-hours coverage from both offices.",
  },
  {
    q: "What kind of clients do you work with in New York and the US?",
    a: "We work primarily with US-based culture, media, fintech, gaming and commerce brands. Our New York case studies include HipHopGrails (auctions), PlaySQOR (real-money gaming), FanRush (creator-economy MarTech), RealProfits (retail trading AI), VideoShops (shoppable commerce) and others.",
  },
  {
    q: "Do you take meetings in person in NYC?",
    a: "Yes. We meet at 641 Lexington Avenue or anywhere in Midtown / Flatiron / SoHo. For early-stage projects we usually run a 90-minute scoping session in person, then move to async + weekly video for the engagement itself.",
  },
  {
    q: "What does a typical New York mobile app engagement cost?",
    a: "MVP iOS + Android builds with a senior pod of 3–4 engineers start at $80K-150K (8-14 weeks). Full platform builds with backend, payments and identity range $200K-$1.2M. We work fixed-scope and time-and-materials. Every quote is owned by a senior engineer, not a salesperson.",
  },
  {
    q: "How big is the team?",
    a: "Around 40 engineers, designers and product people — every one of them senior (8+ years, shipped production platforms). We have stayed at this size on purpose. Senior people don't scale the way juniors do, and we'd rather keep the bar high than chase the headcount story.",
  },
  {
    q: "Why senior-only delivery instead of the agency pyramid model?",
    a: "Senior-only is more expensive per hour and cheaper per outcome. There is less rework, less management overhead, fewer surprises in production. A 2-3 senior pod typically ships more in a quarter than a 6-8 person pyramid team ships in a year. Our seven years of repeat clients tell us serious teams want this trade.",
  },
];

const NYC_PROJECTS = ["hiphopgrails", "playsqor", "fanrush", "realprofits", "videoshops", "berides"]
  .map((slug) => PROJECTS.find((p) => p.slug === slug))
  .filter(Boolean);

const SERVICES_LIST = [
  { title: "Mobile App Development", slug: "mobile-app-development" },
  { title: "AI & LLM Products", slug: "ai-and-llm-products" },
  { title: "Auctions & Fan Drops", slug: "auctions-and-fan-drops" },
  { title: "Class II & Class III Games", slug: "class-ii-and-class-iii-games" },
  { title: "Web Development", slug: "web-development" },
  { title: "Design & Brand", slug: "design-and-brand" },
];

export default function NewYorkPage() {
  return (
    <div data-testid="new-york-page">
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "New York", url: "/new-york" },
          ])
        )}
      />
      <script {...jsonLdScript(faqJsonLd(NYC_FAQS))} />

      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Origami · New York
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            A senior-only<br />
            mobile, AI &<br />
            <span className="text-signal">platform agency.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Origami is a New York mobile app, AI and platform development agency.
            We&apos;ve been building production-grade products for US culture, media,
            gaming, fintech and commerce brands since 2018 — every engineer senior,
            every engagement direct.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-pill btn-primary text-base px-7 py-4"
              data-track="cta_start_project"
              data-track-prop-source="new-york"
            >
              Start a project <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work"
              className="btn-pill btn-ghost text-base px-7 py-4"
            >
              See our work <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* HQ details */}
      <section className="py-16 md:py-20 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          <div className="bg-white p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">HQ</div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-signal mt-1 shrink-0" />
              <div>
                <div className="font-display text-xl font-bold">New York</div>
                <div className="text-ink-soft mt-1 leading-relaxed">
                  641 Lexington Avenue,<br />14th Floor<br />
                  New York, NY 10022
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">Phone</div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-signal mt-1 shrink-0" />
              <a href="tel:+19707105120" className="font-display text-xl font-bold hover:text-signal">
                +1 (970) 710 5120
              </a>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">Email</div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-signal mt-1 shrink-0" />
              <a href="mailto:hello@origami.dev" className="font-display text-xl font-bold hover:text-signal">
                hello@origami.dev
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services we offer NY clients */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// What we ship for NY clients
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
            Six practices, one<br /><span className="text-signal">senior team.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {SERVICES_LIST.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white hover:bg-paper-50 p-8 md:p-10 flex items-center justify-between transition-colors"
              >
                <span className="font-display text-lg md:text-xl font-bold tracking-tight group-hover:text-signal transition-colors">
                  {s.title}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NY case studies */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// New York case studies
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
            What we&apos;ve built<br /><span className="text-signal">from NY.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {NYC_PROJECTS.map((p) => {
              const client = CLIENTS.find((c) => c.file.startsWith(p.slug));
              return (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group bg-white hover:bg-paper-50 p-8 md:p-10 flex flex-col min-h-[220px] transition-colors"
                  data-testid={`ny-work-${p.slug}`}
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

      {/* FAQ */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-paper-50" data-testid="ny-faqs">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// FAQ
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
              Questions from<br />
              <span className="text-signal">NY founders.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 divide-y divide-ink-line">
            {NYC_FAQS.map((f, i) => (
              <details key={i} className="group py-6 cursor-pointer" data-testid={`ny-faq-${i}`}>
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Building in NY?<br />
            <span className="text-signal">Let&apos;s scope it.</span>
          </h2>
          <Link
            href="/contact"
            className="btn-pill btn-primary text-base px-7 py-4"
            data-track="cta_start_project"
            data-track-prop-source="new-york-footer"
          >
            Start a conversation <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
