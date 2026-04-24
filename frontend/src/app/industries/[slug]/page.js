import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import {
  INDUSTRIES,
  getIndustry,
  getService,
  getProject,
  CLIENTS,
} from "@/lib/content";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  return {
    title: `${ind.name} — Industry | Origami`,
    description: ind.blurb,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

export default function IndustryPage({ params }) {
  const ind = getIndustry(params.slug);
  if (!ind) return notFound();

  return (
    <div data-testid={`industry-page-${ind.slug}`}>
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All industries
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {ind.note}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            {ind.name}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {ind.blurb}
          </p>
        </div>
      </section>

      {/* SERVICES FOR INDUSTRY */}
      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Services we bring to {ind.name.toLowerCase()}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
            What we typically deliver.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {ind.services.map((slug) => {
              const s = getService(slug);
              if (!s) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group bg-white hover:bg-paper-50 p-8 md:p-10 transition-colors flex flex-col min-h-[240px]"
                  data-testid={`industry-service-${slug}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                      {s.code}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ink-muted leading-relaxed text-[14px]">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS FOR INDUSTRY */}
      {ind.clients.length > 0 ? (
        <section className="py-16 md:py-24 border-b border-ink-line bg-paper-50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Selected work
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
              Who we&apos;ve built for.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
              {ind.clients.map((slug) => {
                const p = getProject(slug);
                const client = CLIENTS.find((c) => c.file.startsWith(slug));
                if (!p) return null;
                return (
                  <Link
                    key={slug}
                    href={`/work/${slug}`}
                    className="group bg-white hover:bg-paper-50 p-8 md:p-10 transition-colors flex flex-col min-h-[220px]"
                    data-testid={`industry-client-${slug}`}
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Building in {ind.name.toLowerCase()}?<br />
            <span className="text-signal">Let&apos;s talk.</span>
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Start a conversation <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
