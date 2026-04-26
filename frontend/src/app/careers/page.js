import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CAREERS } from "@/lib/content";

export const metadata = {
  title: "Careers — Origami",
  description:
    "Join a senior-only team building digital platforms for hip-hop, gaming and cultural icons.",
};

const PERKS = [
  { title: "Senior-only roster", text: "No pyramid teams. You'll work with operators, not managers." },
  { title: "Global & remote-first", text: "Work from anywhere. We collaborate async, with clear anchor hours." },
  { title: "Interesting problems", text: "Regulated gaming, cultural commerce, fintech — rarely boring." },
  { title: "Real ownership", text: "You own outcomes, not tickets. We trust people to make decisions." },
  { title: "Deep focus", text: "Maker time is protected. We don't schedule meetings for meetings." },
  { title: "Hands-on leadership", text: "Our leads are still in the code, the designs, and the post-mortems." },
];

export default function CareersPage() {
  return (
    <div data-testid="careers-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-40 top-24 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Careers
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Join a team
            <br />
            <span className="text-signal">shipping culture.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            We build for artists, operators and cultural brands. If you&apos;ve
            shipped real production systems and you like a small, senior
            team — read on.
          </p>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Why Origami
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                The short version.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              A studio that takes craft seriously, pays senior rates, and
              protects your time.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {PERKS.map((p, i) => (
              <div key={p.title} className="bg-white p-8 md:p-10" data-testid={`perk-${i}`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-10 font-display text-xl md:text-2xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed text-[15px]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Open roles
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                Now hiring.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-muted">
              Don&apos;t see a role that fits? Email{" "}
              <a href="mailto:hello@origami.dev?subject=Careers%20enquiry" className="text-signal underline-offset-4 hover:underline">
                hello@origami.dev
              </a>.
            </div>
          </div>

          <ul className="divide-y divide-ink-line border-t border-b border-ink-line">
            {CAREERS.map((r, i) => (
              <li
                key={r.role}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                data-testid={`role-${i}`}
              >
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    {r.role}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-ink-muted text-sm">
                    <MapPin className="w-4 h-4 text-signal" /> {r.location} · {r.type}
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-line px-3 py-1 text-xs text-ink-soft"
                    >
                      <span className="w-1 h-1 bg-signal rounded-full" /> {t}
                    </span>
                  ))}
                </div>
                <div className="md:col-span-2 md:flex md:justify-end">
                  <Link
                    href={`mailto:hello@origami.dev?subject=${encodeURIComponent(
                      `Application — ${r.role}`
                    )}`}
                    className="btn-pill btn-ghost text-sm"
                  >
                    Apply <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
