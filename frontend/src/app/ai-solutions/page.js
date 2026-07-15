import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AI_PRACTICE, INDUSTRIES } from "@/lib/content";
import { buildAiSolutionPages } from "@/lib/pseo";

const PAGES = buildAiSolutionPages(AI_PRACTICE.useCases, INDUSTRIES);

export const metadata = {
  title: "AI Solutions — LLMs, RAG, Agents, Voice & Vision for Every Industry",
  description:
    "Production AI solutions across LLM apps, RAG, agents, voice and vision — tailored for hip-hop, gaming, celebrity, commerce, health, fintech, travel, automotive and creator economy.",
  alternates: { canonical: "/ai-solutions" },
};

export default function AiSolutionsIndex() {
  return (
    <div data-testid="ai-solutions-index">
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// AI Solutions
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest max-w-5xl">
            AI, applied to<br /><span className="text-signal">your industry.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {PAGES.length} production AI use-cases across {AI_PRACTICE.useCases.length} capabilities and {INDUSTRIES.length} industries — grounded in real reference builds.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-14">
          {AI_PRACTICE.useCases.map((uc) => (
            <div key={uc.slug}>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-2">
                /// {uc.title}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-black tracking-tight mb-6">
                {uc.text}
              </h2>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((ind) => {
                  const slug = `${uc.slug}-for-${ind.slug}`;
                  return (
                    <Link
                      key={slug}
                      href={`/ai-solutions/${slug}`}
                      className="text-xs md:text-sm px-3 py-1.5 border border-ink-line hover:border-signal hover:text-signal transition-colors"
                      data-testid={`ai-solution-link-${slug}`}
                    >
                      {ind.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="pt-8">
            <Link href="/contact" className="btn-pill btn-primary">
              Talk to Origami AI <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
