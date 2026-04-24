"use client";

import { useState } from "react";
import Image from "next/image";
import { TECH, MEDIA } from "@/lib/content";

export default function TechSection() {
  const tabs = Object.keys(TECH);
  const [active, setActive] = useState(tabs[0]);

  return (
    <section
      className="relative py-24 md:py-32 border-b border-white/10 overflow-hidden"
      data-testid="tech-section"
    >
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <Image src={MEDIA.techPattern} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
              /// Technology Expertise
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Best-in-class tools.<br />
              <span className="text-signal">State-of-the-art</span> approach.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6 text-white/70 text-lg leading-relaxed">
            We&apos;re pragmatic about tools — we pick what ships reliably and
            hires well. Here&apos;s a cross-section of the stacks we work with
            every day.
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 border border-white/10 mb-px">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 md:px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors border-r border-white/10 last:border-r-0 ${
                active === t
                  ? "bg-white text-black"
                  : "bg-ink-850 text-white/70 hover:text-white"
              }`}
              data-testid={`tech-tab-${t.toLowerCase()}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="border border-white/10 border-t-0 bg-ink-850 p-8 md:p-12 min-h-[280px]" data-testid="tech-tab-content">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            {active} / {TECH[active].length} tools
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TECH[active].map((tool) => (
              <div
                key={tool}
                className="group border border-white/10 bg-ink-950 hover:border-signal transition-colors p-5 flex items-center justify-between"
              >
                <span className="font-display text-base md:text-lg font-semibold">
                  {tool}
                </span>
                <span className="font-mono text-[10px] text-white/30 group-hover:text-signal transition-colors">
                  ●
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
