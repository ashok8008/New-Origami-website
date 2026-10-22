import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "A studio that builds digital platforms for hip-hop, real-money gaming and cultural icons.",
};

const VALUES = [
  {
    n: "01",
    title: "Craft over churn",
    text:
      "We protect the work from urgency, opinion and theatre — then ship relentlessly.",
  },
  {
    n: "02",
    title: "Culture first",
    text:
      "We don't just serve culture-forward brands. We hire from their audiences, and we build like fans.",
  },
  {
    n: "03",
    title: "Measured by impact",
    text:
      "We track the metric that actually moves the business — not the number of tickets closed.",
  },
];

const TIMELINE = [
  ["2013", "Founded by a small team in California."],
  ["2016", "Opened delivery centre in India."],
  ["2019", "Crossed 100 shipped products across fintech, health, commerce."],
  ["2022", "Launched IT staffing & dedicated team practice."],
  ["2024", "Built HipHopGrails — an auction destination for hip-hop memorabilia."],
  ["2025", "Expanded Class II & Class III gaming platform practice."],
];

const FOUNDERS = [
  {
    name: "Ashok Reddy Gummalla",
    role: "Co-founder & CEO",
    bio: "A decade of operator-level experience with leading commerce brands across e-commerce, digital growth and customer acquisition. Ashok sets Origami's direction, owns partnerships and growth, and turns ambitious product ideas into measurable business outcomes.",
  },
  {
    name: "Yashwanth Reddy",
    role: "Co-founder & CTO",
    photo: "/founders/yashwanth-reddy.webp",
    bio: "A career spanning media, entertainment and payment processing — environments where seamless experience and reliability are non-negotiable. Yashwanth leads Origami's engineering and architecture, turning complex problems into platforms built to scale.",
  },
  {
    name: "Aparna Chodavarapu",
    role: "Co-founder & CFO",
    photo: "/founders/aparna-chodavarapu.webp",
    bio: "Engineering and team-leadership roots across aerospace, automotive and technology. Aparna runs Origami's financial strategy and operations with a pragmatic, detail-driven approach — focused on building a business that compounds.",
  },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-24 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-40 top-20 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// About Origami
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            A studio for
            <br />
            <span className="text-signal">culture-forward brands.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Origami is a web, mobile and real-money gaming studio based in
            California and India. Over the last decade we&apos;ve built products
            across fintech, healthcare, gaming, ecommerce and hip-hop — and a
            staffing practice that helps teams scale without losing velocity.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Values
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                What we won&apos;t compromise on.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-white p-8 md:p-10">
                <div className="font-mono text-sm text-signal">{v.n}</div>
                <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white relative overflow-hidden" data-testid="about-founders">
        <div className="absolute -right-40 top-20 w-[520px] h-[520px] sunburst pointer-events-none opacity-80" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Founders
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                The people behind<br />
                <span className="text-signal">Origami.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
              Three perspectives. One shared ambition — build things that
              matter, for teams that take craft seriously.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="group bg-white p-8 md:p-10 flex flex-col"
                data-testid={`founder-${f.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-paper-50 border-b-2 border-signal">
                  {f.photo ? (
                    <Image
                      src={f.photo}
                      alt={`${f.name}, ${f.role} at Origami`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      data-testid={`founder-photo-${f.name.split(" ")[0].toLowerCase()}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                      Portrait coming soon
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight underline decoration-signal decoration-2 underline-offset-[6px]">
                  {f.name}
                </h3>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {f.role}
                </div>
                <p className="mt-6 text-ink-soft text-[15px] leading-relaxed">
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Timeline
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                How we got here.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-ink-line border border-ink-line">
            {TIMELINE.map(([year, text]) => (
              <div key={year} className="bg-white p-6 md:p-8">
                <div className="font-display text-3xl md:text-4xl font-black text-signal">
                  {year}
                </div>
                <div className="mt-5 text-ink-muted text-sm leading-relaxed">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-pill btn-primary">
              Work with us <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link href="/careers" className="btn-pill btn-ghost">
              Join our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
