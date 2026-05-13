import { ImageResponse } from "next/og";

// Social card for LinkedIn, Twitter/X, iMessage, Slack, etc.
// 1200 × 630 is the canonical OG size.
export const alt =
  "Origami — Mobile apps, AI & platforms for culture-forward brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        {/* Soft red corner accent */}
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

        {/* Top: wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 48,
            fontWeight: 900,
            color: "#0A0A0A",
            letterSpacing: "-2px",
            zIndex: 2,
          }}
        >
          Origami<span style={{ color: "#E10600" }}>.</span>
        </div>

        {/* Middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-5px",
              lineHeight: 1.0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>We build what</span>
            <span style={{ display: "flex" }}>
              culture runs<span style={{ color: "#E10600" }}>.</span>
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#4A4A4A",
              fontFamily: "Arial, sans-serif",
              fontWeight: 500,
              maxWidth: 920,
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            Mobile apps, AI & platforms for culture-forward brands. Senior
            engineers who ship.
          </div>
        </div>

        {/* Bottom: meta strip */}
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
          <div style={{ display: "flex", gap: 24 }}>
            <span>Mobile</span>
            <span style={{ color: "#E10600" }}>•</span>
            <span>AI</span>
            <span style={{ color: "#E10600" }}>•</span>
            <span>Auctions</span>
            <span style={{ color: "#E10600" }}>•</span>
            <span>Gaming</span>
            <span style={{ color: "#E10600" }}>•</span>
            <span>Fintech</span>
          </div>
          <div style={{ display: "flex", color: "#0A0A0A" }}>origami.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
