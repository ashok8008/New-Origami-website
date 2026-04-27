import Script from "next/script";

/**
 * Plausible Analytics — privacy-friendly, no cookies, no banner needed.
 * Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in /app/frontend/.env to enable.
 * Defaults to "origami.dev" so production tracks itself; in preview/staging
 * the script will silently 404 if the domain isn't registered in Plausible —
 * no harm done.
 */
export default function PlausibleAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "origami.dev";
  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.js";
  return (
    <Script
      defer
      src={src}
      data-domain={domain}
      strategy="afterInteractive"
      data-testid="plausible-script"
    />
  );
}
