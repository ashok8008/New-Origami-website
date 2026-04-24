import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CLIENTS } from "@/lib/content";

export const metadata = {
  title: "Work — Case Studies | Origami",
  description:
    "Selected work from Origami — mobile apps, AI products, auction platforms and real-money gaming. FanRush, HipHopGrails, Acquire.bet, VideoShops, Nick Cooper, TrueWrld, Wholosophy.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div data-testid="work-page">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-48 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Selected work
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            The apps.<br />The platforms.<br /><span className="text-signal">The receipts.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            A slice of the products we&apos;ve shipped — most of them for repeat
            and referral clients, end-to-end from first wireframe through
            store launch and iteration.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-6">
          {PROJECTS.map((p, i) => {
            const client = CLIENTS.find((c) => c.file.startsWith(p.slug));
            return (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-t border-ink-line hover:bg-paper-50 transition-colors px-2 md:px-4"
                data-testid={`work-row-${p.slug}`}
              >
                <div className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.25em] text-signal md:pt-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-4">
                  <div className="h-10 flex items-center">
                    {client ? (
                      <Image
                        src={`/brand/clients/${client.file}`}
                        alt={p.name}
                        width={client.width}
                        height={40}
                        className="h-8 w-auto"
                      />
                    ) : null}
                  </div>
                  <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                    {p.tag}
                    {p.repeat ? <span className="ml-3 text-signal">· Repeat client</span> : null}
                  </div>
                </div>
                <div className="md:col-span-7 flex flex-col">
                  <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-ink-soft text-lg leading-relaxed max-w-2xl">
                    {p.oneLiner}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.role.slice(0, 5).map((r) => (
                      <span
                        key={r}
                        className="inline-flex items-center rounded-full border border-ink-line px-3 py-1.5 text-[11px] text-ink-soft"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.2em] text-ink group-hover:text-signal transition-colors">
                    Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper-50 border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Got something<br />
            <span className="text-signal">worth shipping?</span>
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Start a project <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
