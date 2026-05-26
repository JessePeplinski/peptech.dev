import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "peptech.dev - Jesse Peplinski",
    short_name: "peptech.dev",
    description: siteMeta.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0f1a",
    theme_color: "#0a0f1a",
    icons: [
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
