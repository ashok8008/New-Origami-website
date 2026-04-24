import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "Services — Origami",
  description:
    "Auctions, Class II/III gaming, web & mobile, design, data and dedicated engineering teams.",
};

const DETAIL = {
  "Auctions & Fan Drops": {
    pills: ["Bidding engines", "Consignment", "Payouts", "Identity", "Mobile-first"],
    bullets: [
      "End-to-end auction platforms with timed, live and drop mechanics",
      "Consignment and seller workflows for celebrities, labels and curators",
      "KYC/identity, escrow and payouts (Stripe, Adyen, specialist rails)",
      "Ops tooling: inventory, moderation, and event operations",
    ],
  },
  "Class II & Class III Games": {
    pills: ["Bingo-based", "RNG", "RGS", "GLI-aligned", "PAM integrations"],
    bullets: [
      "Server-drawn Class II bingo-based mechanics for tribal operators",
      "Class III RNG titles with third-party math studio integrations",
      "RGS, wallet, PAM, geolocation and responsible-gaming integrations",
      "Operator tooling: campaigns, jackpots, loyalty, telemetry",
    ],
  },
  "Web & Mobile Products": {
    pills: ["React/Next", "React Native", "Flutter", "iOS/Android"],
    bullets: [
      "Native, hybrid and cross-platform mobile apps",
      "React/Next.js front-ends tied to your APIs and back-office",
      "Design systems and component libraries that scale across teams",
      "Performance budgets and accessibility built-in",
    ],
  },
  "Design & Brand": {
    pills: ["Product UX", "Motion", "Design systems", "Brand"],
    bullets: [
      "Product design — information architecture, flows, interaction",
      "Interface design with a POV on typography and motion",
      "Brand systems for culture-forward brands and artists",
      "Prototyping for validation before engineering spend",
    ],
  },
  "Data & BI": {
    pills: ["Warehouse", "Pipelines", "Dashboards", "Telemetry"],
    bullets: [
      "Data warehouse design and ingestion pipelines",
      "Revenue, product and player telemetry dashboards",
      "Event tracking and instrumentation standards",
      "Lightweight ML where it actually moves the number",
    ],
  },
  "Staffing & Dedicated Teams": {
    pills: ["T&M", "Dedicated", "Build Your Team", "NDA standard"],
    bullets: [
      "Time & Material — smaller jobs, smaller liability",
      "Dedicated full-time developers exclusive to your project",
      "Build Your Team — stand up an offshore delivery team at 50–70% less",
      "Senior-only roster: 3+ years average experience",
    ],
  },
};

export default function ServicesPage() {
  return (
    <div data-testid="services-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[640px] h-[640px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tightest max-w-4xl">
            Every surface, engineered by people who ship.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Six practices that overlap on purpose. We staff small, senior
            teams — and we cover the full lifecycle.
          </p>
        </div>
      </section>

      {/* DETAIL GRID */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-10">
          {SERVICES.map((s, i) => {
            const d = DETAIL[s.title] || { pills: [], bullets: [] };
            return (
              <article
                key={s.code}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-t border-ink-line"
                data-testid={`service-row-${s.code}`}
              >
                <div className="md:col-span-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                    {s.code} / Practice
                  </div>
                  <h2 className="mt-6 font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                  {d.pills.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {d.pills.map((p) => (
                        <span
                          key={p}
                          className="inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1.5 text-xs text-ink-soft"
                        >
                          <span className="w-1.5 h-1.5 bg-signal rounded-full" />
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                  {d.bullets.length > 0 && (
                    <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {d.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[15px] text-ink-soft">
                          <span className="mt-[7px] w-1.5 h-1.5 bg-signal shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-paper-50 border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Have a roadmap?
            <br />
            <span className="text-signal">We&apos;ll help you ship it.</span>
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Start a project <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
