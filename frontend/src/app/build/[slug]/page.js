import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import {
  TECH_STACKS,
  getStack,
  getService,
  getProject,
  CLIENTS,
} from "@/lib/content";

export function generateStaticParams() {
  return TECH_STACKS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getStack(params.slug);
  if (!s) return {};
  return {
    title: `${s.name} — Build with`,
    description: s.body,
    alternates: { canonical: `/build/${s.slug}` },
  };
}

export default function StackPage({ params }) {
  const s = getStack(params.slug);
  if (!s) return notFound();

  const service = getService(s.relatedService);

  return (
    <div data-testid={`stack-page-${s.slug}`}>
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/build"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All stacks
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {s.category} · {s.overline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            {s.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {s.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
              Start a {s.name} project <ArrowUpRight className="w-5 h-5" />
            </Link>
            {service ? (
              <Link href={`/services/${service.slug}`} className="btn-pill btn-ghost text-base px-7 py-4">
                {service.title}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// What we ship with {s.name}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
              How we use it<br /><span className="text-signal">in production.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ul className="space-y-5">
              {s.bullets.map((b) => (
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

      {s.relatedWork.length > 0 ? (
        <section className="py-16 md:py-24 border-b border-ink-line bg-paper-50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// {s.name} in production
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-3xl">
              Where it shipped.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
              {s.relatedWork.map((slug) => {
                const p = getProject(slug);
                const client = CLIENTS.find((c) => c.file.startsWith(slug));
                if (!p) return null;
                return (
                  <Link
                    key={slug}
                    href={`/work/${slug}`}
                    className="group bg-white hover:bg-paper-50 p-6 md:p-8 transition-colors flex flex-col min-h-[200px]"
                    data-testid={`stack-related-${slug}`}
                  >
                    <div className="h-10 flex items-center">
                      {client ? (
                        <Image src={`/brand/clients/${client.file}`} alt={p.name} width={client.width} height={40} className="h-7 w-auto" />
                      ) : (
                        <span className="font-display font-bold text-lg">{p.name}</span>
                      )}
                    </div>
                    <p className="mt-6 text-ink-soft text-[14px] leading-relaxed">{p.oneLiner}</p>
                    <div className="mt-auto pt-4 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-ink group-hover:text-signal transition-colors">
                      Case study <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
