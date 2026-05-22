/**
 * Lightweight analytics helpers for tracking conversion events.
 * Fires events into BOTH:
 *   - Plausible (`window.plausible(name, { props })`) — privacy-friendly dashboard
 *   - GTM dataLayer (`window.dataLayer.push({event, ...})`) — GA4 + Ads + audiences
 * Safe to call from server components (it no-ops) — it only runs in the browser.
 */
export function trackEvent(name, props = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, { props });
    }
  } catch {
    /* noop */
  }
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...props });
  } catch {
    /* noop */
  }
}
