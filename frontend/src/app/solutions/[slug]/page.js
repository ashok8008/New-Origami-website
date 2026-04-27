import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import {
  SOLUTIONS,
  getSolution,
  getService,
  getIndustry,
  getProject,
  CLIENTS,
  SERVICE_DETAIL,
} from "@/lib/content";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const sol = getSolution(params.slug);
  if (!sol) return {};
  return {
    title: sol.title,
    description: sol.body,
    alternates: { canonical: `/solutions/${sol.slug}` },
  };
}

export default function SolutionPage({ params }) {
  const sol = getSolution(params.slug);
  if (!sol) return notFound();

  const service = getService(sol.serviceSlug);
  const industry = getIndustry(sol.industrySlug);
  const detail = SERVICE_DETAIL[sol.serviceSlug] || { bullets: [], pills: [] };
  const clients = (industry?.clients || []).slice(0, 3);

  return (
    <div data-testid={`solution-page-${sol.slug}`}>
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All solutions
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {service?.title} × {industry?.name}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.95] tracking-tightest max-w-5xl">
            {sol.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {sol.body}
          </p>
          {detail.pills.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {detail.pills.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1.5 text-xs text-ink-soft">
                  <span className="w-1.5 h-1.5 bg-signal rounded-full" />
                  {p}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {detail.bullets.length > 0 ? (
        <section className="py-16 md:py-24 border-b border-ink-line bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// What we deliver
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                Tailored to<br /><span className="text-signal">{industry?.name.toLowerCase()}.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="space-y-4">
                {detail.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink-soft text-base leading-relaxed border-t border-ink-line pt-4">
                    <Check className="w-5 h-5 text-signal mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {clients.length > 0 ? (
        <section className="py-16 md:py-24 border-b border-ink-line bg-paper-50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Already shipped here
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
              Brands we work with in {industry?.name.toLowerCase()}.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
              {clients.map((slug) => {
                const p = getProject(slug);
                const client = CLIENTS.find((c) => c.file.startsWith(slug));
                if (!p) return null;
                return (
                  <Link
                    key={slug}
                    href={`/work/${slug}`}
                    className="group bg-white hover:bg-paper-50 p-6 md:p-8 transition-colors flex flex-col min-h-[200px]"
                  >
                    <div className="h-10 flex items-center">
                      {client ? (
                        <Image src={`/brand/clients/${client.file}`} alt={p.name} width={client.width} height={40} className="h-7 w-auto" />
                      ) : (
                        <span className="font-display font-bold text-lg">{p.name}</span>
                      )}
                    </div>
                    <p className="mt-6 text-ink-soft text-[14px] leading-relaxed">{p.oneLiner}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 md:py-28 bg-white border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            {service?.title} for {industry?.name.toLowerCase()}?<br />
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
