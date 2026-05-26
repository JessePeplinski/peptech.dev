import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#0a0f1a",
          color: "#f1f5f9",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter, Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "76px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#FFA500",
            fontSize: 30,
            fontWeight: 800,
            marginBottom: 70,
          }}
        >
          peptech.dev
        </div>
        <div
          style={{
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: 0,
            lineHeight: 1,
            maxWidth: 920,
          }}
        >
          Jesse Peplinski builds AI products in public.
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: 34,
            lineHeight: 1.35,
            marginTop: 34,
            maxWidth: 780,
          }}
        >
          Live on Twitch: active projects, raw stream notes, and developer
          experiments.
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #FFA500, #e76d2c)",
            borderRadius: 999,
            bottom: 74,
            height: 14,
            left: 76,
            position: "absolute",
            width: 230,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
