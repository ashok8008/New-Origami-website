"use client";

import { useEffect, useRef } from "react";

/**
 * InteractiveDotGrid — ramp.com-style proximity-reactive dot field.
 *
 * Renders a canvas of evenly-spaced dots; dots within ~radius of the cursor
 * fade up in opacity and shift in colour, the rest stay subtle. GPU-friendly
 * (pure 2D canvas, no per-dot DOM nodes), falls back to a static dotted bg
 * on touch devices and respects prefers-reduced-motion.
 *
 * Props:
 *   spacing  px between dots (default 28)
 *   radius   highlight radius around cursor (default 160)
 *   dotColor base dot rgb (default "10,10,10")
 *   accent   highlight rgb on hover (default "225,6,0")
 *   className additional classes for the wrapping div
 */
export default function InteractiveDotGrid({
  spacing = 28,
  radius = 160,
  dotColor = "10,10,10",
  accent = "225,6,0",
  className = "",
}) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    if (reduce || touch) {
      // Render a single static frame; skip the animation loop.
      drawStatic();
      return;
    }

    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    function resize() {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawStatic() {
      const c = canvasRef.current;
      const cx = c.getContext("2d");
      const rect = wrap.getBoundingClientRect();
      const dp = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.floor(rect.width * dp);
      c.height = Math.floor(rect.height * dp);
      c.style.width = `${rect.width}px`;
      c.style.height = `${rect.height}px`;
      cx.setTransform(dp, 0, 0, dp, 0, 0);
      cx.clearRect(0, 0, rect.width, rect.height);
      cx.fillStyle = `rgba(${dotColor},0.18)`;
      for (let y = spacing / 2; y < rect.height; y += spacing) {
        for (let x = spacing / 2; x < rect.width; x += spacing) {
          cx.beginPath();
          cx.arc(x, y, 1, 0, Math.PI * 2);
          cx.fill();
        }
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my, active } = mouseRef.current;
      const r2 = radius * radius;
      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          let proximity = 0;
          if (active) {
            const dx = x - mx;
            const dy = y - my;
            const d2 = dx * dx + dy * dy;
            if (d2 < r2) proximity = 1 - d2 / r2;
          }
          const baseAlpha = 0.16;
          const alpha = baseAlpha + proximity * 0.74;
          const size = 1 + proximity * 1.8;
          if (proximity > 0.05) {
            // Blend towards accent when close
            ctx.fillStyle = `rgba(${accent},${alpha})`;
          } else {
            ctx.fillStyle = `rgba(${dotColor},${alpha})`;
          }
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      rafRef.current = requestAnimationFrame(frame);
    }

    function onMove(e) {
      const rect = wrap.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    }
    function onLeave() {
      mouseRef.current.active = false;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    wrap.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [spacing, radius, dotColor, accent]);

  return (
    <div
      ref={wrapRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      data-testid="interactive-dot-grid"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
