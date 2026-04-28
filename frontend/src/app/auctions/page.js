import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Gavel } from "lucide-react";
import { AUCTIONS, getProject, CLIENTS } from "@/lib/content";

export const metadata = {
  title: "Auctions Practice — Engineering the next generation of auction houses",
  description:
    "Origami builds the digital auction houses of the next century — bidding engines, live-stream floors, consignment ops, escrow and compliance. Reference stack: Azure, .NET, Next.js, PostgreSQL. The team behind HipHopGrails, the Sotheby's of hip-hop.",
  alternates: { canonical: "/auctions" },
  openGraph: {
    title: "Origami Auctions Practice",
    description:
      "Auction houses, engineered. From HipHopGrails to celebrity drops — Azure, .NET, Next.js, PostgreSQL.",
    type: "website",
  },
};

export default function AuctionsPage() {
  const { hero, positioning, stats, capabilities, stack, formats, proof } = AUCTIONS;

  return (
    <div data-testid="auctions-page">
      {/* HERO — dark, editorial */}
      <section className="relative pt-36 md:pt-44 pb-24 border-b border-ink-line overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.45) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -right-48 -top-48 w-[720px] h-[720px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
            <Gavel className="w-3.5 h-3.5" /> /// {hero.overline}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8.5rem] font-black leading-[0.92] tracking-tightest whitespace-pre-line max-w-5xl">
            {hero.title}
          </h1>
          <p className="mt-10 max-w-3xl text-white/75 text-lg md:text-xl leading-relaxed">
            {hero.body}
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-pill btn-primary text-base px-7 py-4"
              data-testid="auctions-cta-primary"
            >
              Build with us <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="https://hiphopgrails.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-white/10 text-white hover:bg-white/20 border border-white/15 text-base px-7 py-4"
              data-testid="auctions-cta-flagship"
            >
              See the flagship — HipHopGrails <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* POSITIONING — editorial pull-quote */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-6">
            /// Positioning
          </div>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tightest leading-[1.05] text-ink">
            {positioning.title}
          </p>
          <p className="mt-10 text-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {positioning.body}
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ink-line border-x border-ink-line">
            {stats.map((s) => (
              <div
                key={s.l}
                className="bg-white p-6 md:p-8 min-h-[180px] flex flex-col"
                data-testid={`auctions-stat-${s.k.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="font-display text-xl md:text-2xl font-black text-ink leading-tight tracking-tight">
                  {s.k}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  {s.l}
                </div>
                <p className="mt-auto pt-4 text-[12px] text-ink-muted leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP CALLOUT — HipHopGrails */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50 relative overflow-hidden">
        <div className="absolute -left-40 top-10 w-[520px] h-[520px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Flagship — HipHopGrails
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              The Sotheby&apos;s<br />of <span className="text-signal">hip-hop.</span>
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-md">
              The first auction destination of its kind for hip-hop memorabilia
              and celebrity drops. Often imitated, never matched. We designed
              the brand, engineered the platform end-to-end and run the
              live-event tooling for every drop.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work/hiphopgrails" className="btn-pill btn-primary">
                Read the case study <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://hiphopgrails.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-ghost"
              >
                Visit live
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="border border-ink-line bg-white p-10 md:p-14">
              <Image
                src="/brand/clients/hiphopgrails.svg"
                alt="HipHopGrails"
                width={360}
                height={56}
                className="h-12 md:h-14 w-auto"
              />
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
                {[
                  ["Cloud", "Azure"],
                  ["Backend", ".NET 8"],
                  ["Database", "PostgreSQL"],
                  ["Web", "Next.js 14"],
                  ["Mobile", "iOS · Android"],
                  ["Realtime", "SignalR"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-white p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                      {k}
                    </div>
                    <div className="mt-1.5 font-display font-bold text-ink text-base">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Capabilities
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                Every layer of an<br />auction house, <span className="text-signal">built.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              From the bid that lands in the last 0.3 seconds to the wire-transfer
              that settles 90 days later — we&apos;ve engineered every layer that
              modern auction houses depend on.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="bg-white p-8 md:p-10 min-h-[260px] flex flex-col"
                data-testid={`auctions-cap-${i}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {String(i + 1).padStart(2, "0")} / Capability
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUCTION FORMATS */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-14 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Formats we ship
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                Four formats. One platform.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              Timed, live-streamed, drops and private sale — each format is a
              first-class citizen with its own UX, ops tooling and audit trail.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
            {formats.map((f) => (
              <div key={f.title} className="bg-white p-8 min-h-[280px] flex flex-col">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-tight">
                  {f.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[14px] text-ink-soft">
                      <Check className="w-4 h-4 text-signal mt-1 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE STACK — heavy duty section */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-ink text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Reference architecture
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                {stack.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 text-white/70 text-lg leading-relaxed self-end">
              {stack.body}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {stack.layers.map((l) => (
              <div key={l.label} className="bg-ink hover:bg-[#161616] p-6 md:p-8 transition-colors">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">
                  {l.label}
                </div>
                <div className="mt-3 font-display text-xl md:text-2xl font-bold tracking-tight">
                  {l.name}
                </div>
                <p className="mt-3 text-white/55 text-[14px] leading-relaxed">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / OTHER WORK */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Proof
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest max-w-3xl">
            Where the auction practice ships.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {proof.map((slug) => {
              const p = getProject(slug);
              const client = CLIENTS.find((c) => c.file.startsWith(slug));
              if (!p) return null;
              return (
                <Link
                  key={slug}
                  href={`/work/${slug}`}
                  className="group bg-white hover:bg-paper transition-colors p-8 md:p-10 flex flex-col min-h-[240px]"
                  data-testid={`auctions-proof-${slug}`}
                >
                  <div className="h-10 flex items-center">
                    {client ? (
                      <Image
                        src={`/brand/clients/${client.file}`}
                        alt={p.name}
                        width={client.width}
                        height={40}
                        className="h-7 w-auto"
                      />
                    ) : (
                      <span className="font-display text-xl font-bold">{p.name}</span>
                    )}
                  </div>
                  <p className="mt-8 text-ink text-lg leading-relaxed font-display font-bold">
                    {p.oneLiner}
                  </p>
                  <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.2em] text-signal">
                    Case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white border-b border-ink-line relative overflow-hidden">
        <div className="absolute -right-48 -top-48 w-[640px] h-[640px] sunburst pointer-events-none opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Building an auction house?
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              We&apos;ll engineer it —<br />
              <span className="text-signal">end to end.</span>
            </h2>
            <p className="mt-6 text-ink-soft text-lg max-w-2xl">
              Music. Sport. Fashion. Watches. Whisky. Memorabilia. If it goes
              under the hammer, we&apos;ve probably already built the platform
              that runs it. Tell us what you&apos;re putting up for sale.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
            <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
              Start a conversation <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
