import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { PROJECTS, getProject, CLIENTS } from "@/lib/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — Case Study`,
    description: p.oneLiner,
    alternates: { canonical: `/work/${p.slug}` },
  };
}

export default function ProjectPage({ params }) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  const client = CLIENTS.find((c) => c.file.startsWith(p.slug));
  const next = PROJECTS[(PROJECTS.findIndex((x) => x.slug === p.slug) + 1) % PROJECTS.length];

  return (
    <div data-testid={`work-page-${p.slug}`}>
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All work
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {p.tag}
            {p.repeat ? <span className="ml-3 text-ink-muted">· Repeat client</span> : null}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            {p.name}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {p.oneLiner}
          </p>
          {p.url ? (
            <div className="mt-8">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-sm"
                data-testid="project-visit"
              >
                Visit live site <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ) : null}
        </div>
      </section>

      {/* LOGO + SUMMARY */}
      <section className="py-16 md:py-20 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-4">
            {client ? (
              <div className="border border-ink-line bg-paper-50 aspect-[5/2] flex items-center justify-center">
                <Image
                  src={`/brand/clients/${client.file}`}
                  alt={p.name}
                  width={client.width}
                  height={40}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
            ) : null}
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-ink-soft text-lg md:text-xl leading-relaxed">{p.summary}</p>
          </div>
        </div>
      </section>

      {/* METRICS + ROLE + STACK */}
      <section className="border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line">
          <div className="bg-white p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
              Our role
            </div>
            <ul className="mt-6 space-y-2">
              {p.role.map((r) => (
                <li key={r} className="flex items-start gap-2 text-ink-soft text-[15px]">
                  <Check className="w-4 h-4 text-signal mt-1 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
              Stack
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-ink-line px-3 py-1.5 text-xs text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
              At a glance
            </div>
            <dl className="mt-6 space-y-3">
              {p.metrics.map(([k, v]) => (
                <div key={k} className="flex items-start justify-between gap-4 border-t border-ink-line pt-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">{k}</dt>
                  <dd className="font-display font-semibold text-ink text-sm text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// What we shipped
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
              Highlights from the<br /><span className="text-signal">engagement.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ul className="space-y-5">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-ink-soft text-lg leading-relaxed border-t border-ink-line pt-5"
                >
                  <Check className="w-5 h-5 text-signal mt-1.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEXT + CTA */}
      <section className="py-20 md:py-28 bg-paper-50 border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Up next
            </div>
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex items-baseline gap-4"
              data-testid="project-next"
            >
              <h3 className="font-display text-4xl md:text-6xl font-black tracking-tightest leading-[0.95] group-hover:text-signal transition-colors">
                {next.name}
              </h3>
              <ArrowUpRight className="w-7 h-7 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </Link>
            <p className="mt-4 text-ink-soft text-lg max-w-2xl">{next.oneLiner}</p>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
              Start a project <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
