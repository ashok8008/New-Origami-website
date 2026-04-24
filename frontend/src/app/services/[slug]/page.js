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

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} — Services`,
    description: s.desc,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServiceDetailPage({ params }) {
  const s = getService(params.slug);
  if (!s) return notFound();
  const detail = SERVICE_DETAIL[s.slug] || { pills: [], bullets: [], relatedWork: [], headline: s.title, body: s.desc };

  return (
    <div data-testid={`service-page-${s.slug}`}>
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
