import { ImageResponse } from "next/og";

// iOS home-screen icon — bold "O." mark on white, matches site logo.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "'Arial Black', Impact, sans-serif",
          fontWeight: 900,
          fontSize: 140,
          color: "#0A0A0A",
          letterSpacing: "-6px",
        }}
      >
        O<span style={{ color: "#E10600" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
