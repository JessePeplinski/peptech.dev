import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://peptech.dev/sitemap.xml",
    host: "https://peptech.dev",
  };
}
