export const siteLinks = {
  twitch: "https://www.twitch.tv/peptechdev",
  devDadTwitch: "https://www.twitch.tv/thedevdad",
  email: "mailto:jesse@peptechstudios.com?subject=Contact%20from%20peptech.dev",
  schedule: "https://calendly.com/jesse-peplinski/30min",
  github: "https://github.com/JessePeplinski",
  linkedin: "https://linkedin.com/in/jessepeplinski",
  x: "https://x.com/peptechdev",
  instagram: "https://instagram.com/peptechdev",
  tiktok: "https://tiktok.com/@peptechdev",
  indiePage: "https://indiepa.ge/peptechdev",
  personal: "https://jessepeplinski.com",
  pepTechStudios: "https://peptechstudios.com",
  trySignalHire: "https://trysignalhire.com",
  launchLoop: "https://trylaunchloop.com",
};

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#builder-radar", label: "Radar" },
  { href: "/#stream-notes", label: "Stream Notes" },
  { href: "/#ideas", label: "Ideas" },
  { href: "/merch", label: "Merch" },
];

export const socialLinks = [
  { href: siteLinks.github, label: "GitHub", icon: "github" },
  { href: siteLinks.x, label: "X", icon: "x" },
  { href: siteLinks.instagram, label: "Instagram", icon: "instagram" },
  { href: siteLinks.tiktok, label: "TikTok", icon: "tiktok" },
] as const;

export type Project = {
  name: string;
  summary: string;
  href: string;
  collaborator?: {
    name: string;
    href: string;
  };
};

export const activeStreamProjects: Project[] = [
  {
    name: "TrySignalHire",
    summary:
      "The main solo stream project right now. I am building it because hiring with AI is getting weird, noisy, and hard to trust.",
    href: siteLinks.trySignalHire,
  },
  {
    name: "LaunchLoop",
    summary:
      "A duo stream project around building, launching, and talking through product ideas in public.",
    href: siteLinks.launchLoop,
    collaborator: {
      name: "@thedevdad",
      href: siteLinks.devDadTwitch,
    },
  },
];

export type BuilderRadarItem = {
  name: string;
  href: string;
  note: string;
};

export const builderRadarItems: BuilderRadarItem[] = [
  {
    name: "EverList",
    href: "https://everlist.dev/",
    note:
      "Discoverability infrastructure for SaaS founders who want long-term visibility across Google, AI search, and recommendation systems.",
  },
  {
    name: "RoleNavigator",
    href: "https://rolenavigator.com/",
    note:
      "Automated job search tool that scans listings, scores roles against your resume, and keeps the application pipeline organized.",
  },
  {
    name: "ClimbX",
    href: "https://climbx.so/",
    note:
      "AI partner for learning from X content, drafting posts, and building a creator growth loop.",
  },
  {
    name: "Builders Map",
    href: "https://builders-map.com/",
    note:
      "A map for finding startup founders, indie hackers, and SaaS builders nearby.",
  },
  {
    name: "iBuildInPublic",
    href: "https://www.ibuildinpublic.com/",
    note:
      "A home base concept for solo SaaS builders sharing progress, launches, customer signal, and open asks.",
  },
  {
    name: "incPhone",
    href: "https://incphone.com/",
    note:
      "Business phone numbers, texting, call routing, and AI transcription for service businesses.",
  },
];

export const streamNotes = [
  {
    date: "May 26, 2026 (solo)",
    bullets: [
      "TrySignalHire day. The goal was basically: make the candidate flow less janky and keep myself from turning it into a planning spiral.",
      "Looked at resume upload, danger-zone account cleanup, and the stream workout counters.",
      "Useful takeaway: one real product slice per stream is the right constraint.",
    ],
  },
  {
    date: "May 23, 2026 (solo)",
    bullets: [
      "Worked on the new landing page for trylaunchloop.com.",
      "Launched a new story page.",
      "Still rough, but the direction is better: less generic SaaS copy, more of what DevDad and I are actually trying to build.",
    ],
  },
];

export const streamIdeas = [
  "Keep a tiny public backlog of stream ideas so the next stream has a real starting point.",
  "Do short post-stream notes: what I tried, what shipped, what got punted.",
  "Let chat pick between a few small next steps once the stream has enough rhythm.",
  "Use duo streams for product/story work that benefits from another builder pushing back.",
  "Maybe merch eventually, but only if it is funny or useful enough to justify existing.",
];
