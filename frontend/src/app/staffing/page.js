import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Users, Rocket } from "lucide-react";
import { MEDIA } from "@/lib/content";

const PILLS = [
  "First-time-right",
  "3+ yrs avg experience",
  "Your choice of team",
  "NDA standard",
  "15-day notice",
  "Wearable & web",
];

const BENEFITS = [
  { title: "Reduce hiring time", text: "Skip the job ads, market search and interview rounds." },
  { title: "The right fit", text: "Contract or permanent — matched to your domain and stage." },
  { title: "Ramp up or down", text: "Add resources for a sprint, scale back for quiet quarters." },
  { title: "Reduce churn", text: "Training, retention and succession — we handle the people ops." },
  { title: "Senior expertise", text: "Seasoned engineers who&apos;ve shipped in your industry." },
  { title: "Certified leads", text: "Project leaders ready to drive delivery from day one." },
  { title: "Deep bench", text: "Architects, analysts, specialists — available on demand." },
  { title: "Full-stack coverage", text: "PMs, BAs, devs, QA, network, support — one partner." },
];

const MODELS = [
  {
    icon: Clock,
    title: "Time & Material",
    text:
      "Smaller jobs, smaller liability. Pay for the hours it takes to complete — ideal for short pieces or exploratory work.",
  },
  {
    icon: Users,
    title: "Dedicated Hiring",
    text:
      "Hire developers on a full-time monthly basis — exclusively on your project. Best for long-running roadmaps.",
  },
  {
    icon: Rocket,
    title: "Build Your Team",
    text:
      "Stand up an offshore team that runs alongside your HQ — reducing cost 50–70% without sacrificing seniority.",
  },
];

const PROCESS = [
  { title: "Requirement gathering", text: "We study the business, scope and available resources." },
  { title: "Candidate matching", text: "We shortlist by expertise, domain knowledge and availability." },
  { title: "Client interview", text: "You interview our shortlist — full transparency throughout." },
  { title: "Contract signing", text: "We agree on scope, pricing, duration and working model." },
  { title: "Onboarding", text: "Team intros, access, roles and ownership — kick-off within days." },
];

export default function StaffingPage() {
  return (
    <div data-testid="staffing-page">
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-6">
              /// IT Staff Augmentation
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest">
              Hire highly-skilled
              <br />
              developers & <span className="text-signal">designers</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
              The right-sized team is critical to shipping. Our IT staffing
              services bring the speed, seniority and flexibility your team
              needs to scale quickly and complete development on time.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-signal" />
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-4 text-base hover:bg-signal hover:text-white transition-colors"
                data-testid="staffing-cta"
              >
                Tell us who you need
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[4/5] border border-white/10 overflow-hidden">
              <Image
                src={MEDIA.officeTeam1}
                alt="Origami team"
                fill
                sizes="40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 flex items-center justify-between">
                <span>Team / senior</span>
                <span className="text-signal">● active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Roles we place
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                In-demand and on-demand talent
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              "Custom Software Development",
              "Mobile Application Development",
              "Web Application Development",
              "Desktop Application Development",
              "E-commerce Development",
              "Cloud Development",
              "Blockchain Development",
              "DevOps Engineers",
              "Quality Assurance",
            ].map((r, i) => (
              <div key={r} className="bg-ink-950 p-8 md:p-10 hover:bg-ink-850 transition-colors">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-semibold tracking-tight">
                  {r}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-ink-850">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Benefits
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                What staff aug changes for your team
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="bg-ink-850 p-8" data-testid={`staff-benefit-${i}`}>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                  ●
                </div>
                <h3 className="mt-6 font-display text-lg md:text-xl font-semibold leading-snug">
                  {b.title}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Engagement models
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Three ways to work with us
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MODELS.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="border border-white/10 bg-ink-950 p-8 md:p-10 hover:border-signal transition-colors"
                  data-testid={`model-${i}`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-6 h-6 text-signal" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Model {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-white/65 leading-relaxed">{m.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-ink-850">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Process
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Our staffing process
              </h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {PROCESS.map((p, i) => (
              <li
                key={p.title}
                className="bg-ink-850 p-6 md:p-8"
                data-testid={`staff-process-${i}`}
              >
                <div className="font-mono text-signal text-[10px] uppercase tracking-[0.3em]">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 font-display text-lg md:text-xl font-semibold leading-snug">
                  {p.title}
                </div>
                <div className="mt-3 text-white/55 text-sm">{p.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
