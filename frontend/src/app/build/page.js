import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TECH_STACKS } from "@/lib/content";

export const metadata = {
  title: "Build with — Tech Stack Capabilities",
  description:
    "Origami's tech stack capabilities — React Native, iOS Swift, Android Kotlin, Flutter, Next.js, Node, Python FastAPI, Postgres, OpenAI, Claude, Gemini.",
  alternates: { canonical: "/build" },
};

const CATEGORIES = ["Mobile", "Web", "Backend", "Data", "AI"];

export default function BuildPage() {
  return (
    <div data-testid="build-page">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Build with
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            The stack<br /><span className="text-signal">we ship on.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Twelve technologies we use in production every week. Pick one and
            see how we deploy it — with the case studies, performance budgets
            and architectural choices behind each.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-16">
          {CATEGORIES.map((cat) => {
            const items = TECH_STACKS.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-6">
                  /// {cat}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/build/${s.slug}`}
                      className="group bg-white hover:bg-paper-50 p-6 md:p-8 min-h-[200px] flex flex-col transition-colors"
                      data-testid={`build-card-${s.slug}`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                          / {s.overline}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight">
                        {s.name}
                      </h3>
                      <p className="mt-3 text-ink-muted leading-relaxed text-[14px]">{s.body.split(".")[0]}.</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
