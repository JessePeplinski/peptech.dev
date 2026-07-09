export const siteLinks = {
  twitch: "https://www.twitch.tv/peptechdev",
  devDadTwitch: "https://www.twitch.tv/thedevdad",
  email: "mailto:jesse@peptechstudios.com?subject=Contact%20from%20peptech.dev",
  schedule: "https://calendly.com/jesse-peplinski/30min",
  github: "https://github.com/JessePeplinski",
  linkedin: "https://linkedin.com/in/jessepeplinski",
  x: "https://x.com/jessepeplinski",
  instagram: "https://instagram.com/peptechdev",
  tiktok: "https://tiktok.com/@peptechdev",
  indiePage: "https://indiepa.ge/peptechdev",
  personal: "https://jessepeplinski.com",
  pepTechStudios: "https://peptechstudios.com",
  tryLaunchLoop: "https://trylaunchloop.com",
  theBlackRelay: "https://theblackrelay.com",
  shopMyFarmersMarket: "https://shopmyfarmersmarket.com",
};

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#builder-radar", label: "Radar" },
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
    name: "TryLaunchLoop",
    summary:
      "A product that turns GitHub commits and product context into review-ready social posts, so builders can keep shipping without forgetting to share the work.",
    href: siteLinks.tryLaunchLoop,
    collaborator: {
      name: "@thedevdad",
      href: siteLinks.devDadTwitch,
    },
  },
  {
    name: "The Black Relay",
    summary:
      "A low-poly third-person war game where factions scavenge batteries, power an abandoned relay network, hunt for a hidden Beacon, and survive the machines drawn to the signal.",
    href: siteLinks.theBlackRelay,
  },
  {
    name: "Shop My Farmers Market",
    summary:
      "A local food marketplace that helps shoppers find nearby farms, see what is fresh, and reserve food for pickup while helping farmers stay discoverable without giving up margin.",
    href: siteLinks.shopMyFarmersMarket,
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
