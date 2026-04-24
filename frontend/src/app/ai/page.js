import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AI_PRACTICE, getProject, CLIENTS } from "@/lib/content";
import Image from "next/image";

export const metadata = {
  title: "AI Practice — LLM, RAG, Agents, Voice & Vision",
  description:
    "Origami's AI practice. Production LLM apps, RAG, agentic workflows, voice agents and vision pipelines — grounded in your data.",
  alternates: { canonical: "/ai" },
};

export default function AIPage() {
  const { hero, useCases, proof } = AI_PRACTICE;
  return (
    <div data-testid="ai-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.45) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -right-48 -top-48 w-[640px] h-[640px] sunburst pointer-events-none opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {hero.overline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest whitespace-pre-line max-w-5xl">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4" data-testid="ai-cta-primary">
              Talk to our AI team <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/ai-and-llm-products"
              className="btn-pill bg-white/10 text-white hover:bg-white/20 border border-white/15 text-base px-7 py-4"
            >
              AI services
            </Link>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-14 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// What we build
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                Six shapes of production AI.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              We pick models per job — OpenAI, Anthropic, Google — and wrap them
              in the evals, observability and cost controls production demands.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {useCases.map((u) => (
              <Link
                key={u.slug}
                href={`/ai/${u.slug}`}
                className="group bg-white hover:bg-paper-50 p-8 md:p-10 min-h-[280px] flex flex-col transition-colors"
                data-testid={`ai-usecase-card-${u.slug}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                    / {u.slug}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {u.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed text-[15px]">{u.text}</p>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {u.models.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center rounded-full border border-ink-line px-2.5 py-1 text-[11px] text-ink-soft"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// AI in production, right now
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest max-w-3xl">
            Where our AI work lives today.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {proof.map((p) => {
              const project = getProject(p.client);
              const client = CLIENTS.find((c) => c.file.startsWith(p.client));
              if (!project) return null;
              return (
                <Link
                  key={p.client}
                  href={`/work/${project.slug}`}
                  className="group bg-white hover:bg-paper-50 p-8 md:p-10 transition-colors flex flex-col min-h-[240px]"
                  data-testid={`ai-proof-${p.client}`}
                >
                  <div className="h-10 flex items-center">
                    {client ? (
                      <Image
                        src={`/brand/clients/${client.file}`}
                        alt={project.name}
                        width={client.width}
                        height={40}
                        className="h-7 w-auto text-ink"
                      />
                    ) : (
                      <span className="font-display text-xl font-bold">{project.name}</span>
                    )}
                  </div>
                  <p className="mt-8 text-ink text-lg leading-relaxed font-display font-bold">
                    {p.what}
                  </p>
                  <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.2em] text-signal">
                    Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white border-b border-ink-line relative overflow-hidden">
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Have an AI roadmap?
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              We&apos;ll help you ship it —<br />
              <span className="text-signal">without the demo-tax.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
              Book an AI intro <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
