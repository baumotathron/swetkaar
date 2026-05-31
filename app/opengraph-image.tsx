import { ImageResponse } from "next/og";

export const alt = "Swetkaar AI — AI Creative Agency for Branding, AI Ad Films & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social/OG card generated at build time (no external asset needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #14141f 60%, #0a0a0f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#fdc500",
          }}
        >
          Swetkaar AI
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          AI Creative Agency
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 44,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          Branding · AI Ad Films · Automation
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            alignItems: "center",
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 9999, background: "#fdc500", marginRight: 16 }} />
          www.swetkaar.com
        </div>
      </div>
    ),
    { ...size }
  );
}
