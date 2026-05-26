import { Code2, IdCard, MessagesSquare, Radio } from "lucide-react";

export const siteLinks = {
  twitch: "https://www.twitch.tv/peptechdev",
  devDadTwitch: "https://www.twitch.tv/thedevdad",
  email: "mailto:jesse@peptechstudios.com?subject=Contact%20from%20peptech.dev",
  schedule: "https://calendly.com/jesse-peplinski/30min",
  github: "https://github.com/JessePeplinski",
  linkedin: "https://linkedin.com/in/jessepeplinski",
  x: "https://x.com/peptechdev",
  personal: "https://jessepeplinski.com",
  pepTechStudios: "https://peptechstudios.com",
  trySignalHire: "https://trysignalhire.com",
  launchLoop: "https://trylaunchloop.com",
};

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#stream-notes", label: "Stream Notes" },
  { href: "/#ideas", label: "Ideas" },
  { href: "/merch", label: "Merch" },
];

export const socialLinks = [
  { href: siteLinks.twitch, label: "Twitch", icon: Radio },
  { href: siteLinks.github, label: "GitHub", icon: Code2 },
  { href: siteLinks.linkedin, label: "LinkedIn", icon: IdCard },
  { href: siteLinks.x, label: "X", icon: MessagesSquare },
];

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
