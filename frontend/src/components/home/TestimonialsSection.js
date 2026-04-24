"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="py-24 md:py-32 border-b border-white/10 bg-ink-850"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
              /// Clients
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              We go <span className="text-signal">above</span>
              <br /> and beyond, together.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-4 flex md:justify-end items-start gap-2">
            <button
              onClick={() => setI((x) => (x - 1 + total) % total)}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Previous testimonial"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setI((x) => (x + 1) % total)}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-signal hover:border-signal hover:text-white transition-colors"
              aria-label="Next testimonial"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8" data-testid="testimonial-current">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="font-display text-signal text-6xl md:text-8xl leading-none">“</div>
            <blockquote className="-mt-6 font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white">
              {current.quote}
            </blockquote>
            <div className="mt-12 flex items-end justify-between flex-wrap gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="font-display text-lg font-semibold">{current.author}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mt-1">
                  {current.org}
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
