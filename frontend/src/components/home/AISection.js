import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";
import { AI_PRACTICE } from "@/lib/content";

export default function AISection() {
  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-ink text-white relative overflow-hidden"
      data-testid="ai-section"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(232, 56, 44, 0.4) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" /> /// AI practice
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              AI that ships<br />
              <span className="text-signal">behind your login.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-white/70 text-lg leading-relaxed">
            LLM apps, RAG, agents, voice and vision — grounded in your data,
            wrapped in the evals and observability production demands.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {AI_PRACTICE.useCases.slice(0, 6).map((u) => (
            <Link
              key={u.slug}
              href={`/ai/${u.slug}`}
              className="group bg-ink hover:bg-[#161616] p-8 md:p-10 min-h-[220px] flex flex-col"
              data-testid={`ai-usecase-${u.slug}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {u.slug}
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                {u.title}
              </h3>
              <p className="mt-3 text-white/60 leading-relaxed text-[15px]">{u.text}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/ai" className="btn-pill btn-primary">
            Explore AI practice <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/ai-and-llm-products"
            className="btn-pill bg-white/10 text-white hover:bg-white/20 border border-white/15"
          >
            AI services
          </Link>
        </div>
      </div>
    </section>
  );
}
