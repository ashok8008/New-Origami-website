import { ImageResponse } from "next/og";

/**
 * Reusable OG/Twitter card renderer for Origami.
 *
 * Renders a 1200×630 PNG with the brand wordmark, an eyebrow label
 * (category / case-study tag), a big headline, and an optional subtitle.
 *
 * Used by every per-page `opengraph-image.js` and `twitter-image.js`
 * so all shared links get a unique, on-brand social card.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function renderOGCard({ eyebrow = "Origami Practice", title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAF7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "'Arial Black', Impact, sans-serif",
          position: "relative",
        }}
      >
        {/* Red accent bar — top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#E10600",
            display: "flex",
          }}
        />
        {/* Soft red corner blob */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "#FEE9E7",
            display: "flex",
          }}
        />

        {/* Top: wordmark + eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 44,
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-2px",
            }}
          >
            Origami<span style={{ color: "#E10600" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              border: "2px solid #0A0A0A",
              borderRadius: 999,
              fontSize: 18,
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#0A0A0A",
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Middle: headline + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            zIndex: 2,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: title.length > 36 ? 78 : 96,
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-4px",
              lineHeight: 1.0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {title.split("\n").map((line, idx, arr) => (
              <span key={idx} style={{ display: "flex" }}>
                {line}
                {idx === arr.length - 1 ? (
                  <span style={{ color: "#E10600" }}>.</span>
                ) : null}
              </span>
            ))}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 28,
                color: "#4A4A4A",
                fontFamily: "Arial, sans-serif",
                fontWeight: 500,
                maxWidth: 960,
                lineHeight: 1.3,
                display: "flex",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Bottom: site URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#666",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ display: "flex", width: 14, height: 14, background: "#E10600" }} />
            <span>Mobile · AI · Auctions · Gaming · Fintech</span>
          </div>
          <div style={{ display: "flex", color: "#0A0A0A" }}>origami.dev</div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
