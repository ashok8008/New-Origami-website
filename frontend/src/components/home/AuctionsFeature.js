import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Gavel } from "lucide-react";

export default function AuctionsFeature() {
  return (
    <section
      className="relative py-24 md:py-32 border-b border-ink-line bg-ink text-white overflow-hidden"
      data-testid="auctions-feature"
    >
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(232, 56, 44, 0.45) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -left-40 -top-40 w-[640px] h-[640px] sunburst pointer-events-none opacity-50" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-end">
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
            <Gavel className="w-3.5 h-3.5" /> /// Auctions practice — flagship vertical
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            We build the<br />
            <span className="text-signal">auction houses</span><br />
            of the next century.
          </h2>
          <p className="mt-8 max-w-2xl text-white/75 text-lg leading-relaxed">
            For three centuries, Sotheby&apos;s and Christie&apos;s shaped how
            the world buys art and culture. We engineer the digital-native
            successors. Reference stack: <span className="text-white font-semibold">Microsoft Azure</span>,
            {" "}<span className="text-white font-semibold">.NET 8</span>,
            {" "}<span className="text-white font-semibold">Next.js 14</span>,
            {" "}<span className="text-white font-semibold">PostgreSQL</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/auctions" className="btn-pill btn-primary text-base px-7 py-4">
              Explore the practice <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work/hiphopgrails"
              className="btn-pill bg-white/10 text-white hover:bg-white/20 border border-white/15 text-base px-7 py-4"
            >
              Flagship — HipHopGrails
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="border border-white/15 bg-white/5 backdrop-blur-sm p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-6">
              /// Reference architecture
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                ["Cloud", "Azure"],
                ["Backend", ".NET 8"],
                ["Database", "PostgreSQL"],
                ["Web", "Next.js 14"],
                ["Realtime", "SignalR"],
                ["Mobile", "iOS · Android"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {k}
                  </div>
                  <div className="mt-1.5 font-display font-bold text-white text-base">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/10">
              <Image
                src="/brand/clients/hiphopgrails.svg"
                alt="HipHopGrails"
                width={170}
                height={36}
                className="h-7 w-auto invert"
              />
              <span className="text-white/50 text-[12px] font-mono uppercase tracking-[0.2em]">
                / live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
