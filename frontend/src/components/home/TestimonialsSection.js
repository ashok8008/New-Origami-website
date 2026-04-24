"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export default function TestimonialsSection() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[i];

  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-white relative overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="absolute -right-40 -top-40 w-[480px] h-[480px] sunburst pointer-events-none opacity-60" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// What they say
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Senior partners.
              <br />
              Honest work.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-start gap-2">
            <button
              onClick={() => setI((x) => (x - 1 + total) % total)}
              className="w-12 h-12 rounded-full border border-ink-line flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
              aria-label="Previous testimonial"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setI((x) => (x + 1) % total)}
              className="w-12 h-12 rounded-full border border-ink-line flex items-center justify-center hover:bg-signal hover:border-signal hover:text-white transition-colors"
              aria-label="Next testimonial"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8" data-testid="testimonial-current">
          <div className="col-span-12 md:col-span-10">
            <div className="font-display text-signal text-6xl md:text-8xl leading-none">“</div>
            <blockquote className="-mt-6 font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-ink">
              {current.quote}
            </blockquote>
            <div className="mt-12 flex items-end justify-between flex-wrap gap-4 border-t border-ink-line pt-6">
              <div>
                <div className="font-display text-lg font-semibold">{current.author}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mt-1">
                  {current.org}
                </div>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
