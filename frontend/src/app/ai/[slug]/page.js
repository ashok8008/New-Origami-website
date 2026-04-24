import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { AI_PRACTICE, getAIUseCase } from "@/lib/content";

export function generateStaticParams() {
  return AI_PRACTICE.useCases.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }) {
  const u = getAIUseCase(params.slug);
  if (!u) return {};
  return {
    title: `${u.title} — AI Practice`,
    description: u.text,
    alternates: { canonical: `/ai/${u.slug}` },
  };
}

export default function AIUseCasePage({ params }) {
  const u = getAIUseCase(params.slug);
  if (!u) return notFound();

  return (
    <div data-testid={`ai-usecase-page-${u.slug}`}>
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> AI Practice
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {u.slug}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            {u.title}
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {u.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {u.models.map((m) => (
              <span
                key={m}
                className="inline-flex items-center rounded-full border border-ink-line px-3 py-1.5 text-xs text-ink-soft"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// How we deliver
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
              Production AI,<br /><span className="text-signal">not demo-AI.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 text-ink-soft text-lg leading-relaxed space-y-4">
            <p>
              Every AI feature we ship is wrapped in the same discipline as
              the rest of our production systems — offline evals, online
              evals, tracing, cost budgets and rollback.
            </p>
            <p>
              We pick the right model per job (OpenAI GPT-5, Anthropic Claude
              Sonnet 4.5, Google Gemini 3, Gemini Nano Banana for images) and
              we stay portable — no vendor lock-in.
            </p>
            <p>
              You own the prompts, the eval sets, the observability, and the
              infra. We leave you a system you can run, not a black box.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper-50 border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Ready to ship AI that<br /><span className="text-signal">survives production?</span>
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Start a conversation <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
