import { siteLinks } from "@/lib/site";

export const siteUrl = "https://peptech.dev";

export const siteMeta = {
  name: "peptech.dev",
  title: "peptech.dev - Jesse Peplinski",
  description:
    "Jesse Peplinski builds AI products in public live on Twitch. Follow active projects, raw stream notes, and developer experiments from peptech.dev.",
  socialDescription:
    "AI product builds, stream notes, and developer experiments from Jesse Peplinski.",
  author: "Jesse Peplinski",
  handle: "@peptechdev",
  locale: "en_US",
  location: {
    name: "Syracuse, NY",
    latitude: "43.0481",
    longitude: "-76.1474",
  },
  keywords: [
    "Jesse Peplinski",
    "peptech.dev",
    "peptechdev",
    "AI products",
    "build in public",
    "Twitch developer stream",
    "software engineer",
    "AI-assisted software development",
    "SaaS projects",
    "TrySignalHire",
    "LaunchLoop",
    "Syracuse software engineer",
  ],
};
export const sameAsLinks = [
  siteLinks.twitch,
  siteLinks.github,
  siteLinks.linkedin,
  siteLinks.x,
  siteLinks.instagram,
  siteLinks.tiktok,
  siteLinks.personal,
  siteLinks.pepTechStudios,
];

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#jesse-peplinski`,
      name: siteMeta.author,
      alternateName: "peptechdev",
      url: siteUrl,
      image: `${siteUrl}/images/headshot.png`,
      jobTitle: "Software Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Syracuse",
        addressRegion: "NY",
        addressCountry: "US",
      },
      knowsAbout: [
        "AI-assisted software development",
        "AI products",
        "Build in public",
        "Developer tooling",
        "Next.js",
        "Product engineering",
        "SaaS",
        "Twitch streaming",
      ],
      sameAs: sameAsLinks,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteMeta.name,
      url: siteUrl,
      description: siteMeta.description,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#jesse-peplinski`,
      },
    },
  ],
};
