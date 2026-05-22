"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Global click-event delegation. Any element (or descendant) with
 *   data-track="event_name"
 * will fire a `trackEvent(event_name)` on click — pushing into both
 * Plausible custom events and the GTM dataLayer simultaneously.
 *
 * Extra props can be passed via:
 *   data-track-prop-<key>="<value>"
 *
 * Example:
 *   <Link data-track="cta_start_project" data-track-prop-source="hero">…</Link>
 */
export default function ClickTracker() {
  useEffect(() => {
    function handler(e) {
      const el = e.target.closest("[data-track]");
      if (!el) return;
      const name = el.getAttribute("data-track");
      if (!name) return;
      const props = {};
      for (const attr of el.attributes) {
        if (attr.name.startsWith("data-track-prop-")) {
          props[attr.name.replace("data-track-prop-", "")] = attr.value;
        }
      }
      trackEvent(name, props);
    }
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);
  return null;
}
