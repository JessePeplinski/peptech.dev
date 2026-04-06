export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface TimelinePhase {
  number: number;
  icon: string;
  title: string;
  description: string;
  duration: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  buildTime: string;
  date: string;
  url: string;
  cta: string;
}

export const mission: string[] = [
  "Technology should make running your business easier, not harder. I help local businesses save time, save money, and create great experiences for their customers.",
  "Your website is the front door to your business. It's the first thing a new customer sees, and it needs to work. I know you're busy — that's exactly why I focus on technology that just works.",
];

export const aboutMe: string[] = [
  "I created my first website for a local sandwich shop in 2015. The owners didn't have time to focus on their digital needs — that's where I stepped in. When the site launched, it helped them reach new customers and generate more revenue. Seeing their reaction meant the world.",
  "I also have 8+ years of experience working with enterprise CMS systems like Sitecore and AEM Sites. I know the pain points. I know what works and what doesn't. I was building websites well before AI emerged onto the scene — AI simply enables me to build them faster now.",
  "I've also been on the other side — hiring someone to build a website. We went weeks over schedule and over budget. As a small business owner, you shouldn't need to go through a project manager, a designer, and a developer just to get a simple answer. That model just doesn't work with a limited budget. So you'll work with me — directly.",
  "I typically start by building you a website. It's the fastest way to see how I work and build trust. From there, we can tackle bigger challenges — custom apps, automation, SaaS solutions — whatever moves your business forward.",
  "My approach is guided by three core values:",
];

export const values: Value[] = [
  {
    icon: 'clipboard',
    title: 'Solve a Few Problems Very Well',
    description: "I don't want to waste your time trying to solve problems that don't matter. I work with you to identify a few core issues that, when resolved, will have the biggest impact on your business.",
  },
  {
    icon: 'heart',
    title: 'Deep Empathy for Your Customers',
    description: "I seek to understand your process as deeply as possible, which helps me step into your customers' shoes. This insight allows me to create solutions that truly enhance the customer experience.",
  },
  {
    icon: 'lightning',
    title: 'Automate as Much as Possible',
    description: "I put you in a position to automate time-consuming tasks that distract from your core business. By implementing the right tools and systems, we can free up your time to focus on what truly matters.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Identify Your Top Problems',
    description: "I work backwards from the customer experience, looking at your business processes and identifying where technology can make the biggest impact.",
  },
  {
    number: 2,
    title: 'Propose a Solution',
    description: "I'll develop a tailored solution by either leveraging existing technology or creating custom technology specifically for your needs.",
  },
  {
    number: 3,
    title: 'Implement the Solution',
    description: "Once we agree on the approach, I'll rapidly prototype and implement the solution, ensuring it meets your specific requirements and delivers real value.",
  },
];

export const timelinePhases: TimelinePhase[] = [
  {
    number: 1,
    icon: 'search',
    title: 'Discovery',
    description: 'Understanding your business needs, goals, and challenges.',
    duration: '1-2 weeks',
  },
  {
    number: 2,
    icon: 'code',
    title: 'Development',
    description: 'Creating and implementing your custom solution.',
    duration: '2-3 weeks',
  },
  {
    number: 3,
    icon: 'check',
    title: 'Review',
    description: 'Testing and refining based on your feedback.',
    duration: '1 week',
  },
  {
    number: 4,
    icon: 'sparkle',
    title: 'Launch',
    description: 'Going live with your solution and celebrating success!',
    duration: '1-2 days',
  },
];

export const supportPhase = {
  title: 'Ongoing Support',
  description: 'After launch, I provide 30 days of support to ensure everything runs smoothly and address any questions you might have.',
  duration: '30 days included',
};

export const appExamples: Value[] = [
  {
    icon: 'clock',
    title: 'Scheduling Systems',
    description: 'Custom booking and appointment scheduling applications that integrate with your calendar and streamline client interactions.',
  },
  {
    icon: 'user',
    title: 'Customer Portals',
    description: 'Secure client portals for sharing documents, tracking project progress, and facilitating seamless communication between you and your customers.',
  },
  {
    icon: 'clipboard',
    title: 'Inventory Management',
    description: 'Custom inventory tracking systems to monitor stock levels, automate reordering, and generate insightful reports for better business decisions.',
  },
];

export const websiteBuild: PricingPackage = {
  name: 'Website Build',
  price: '$3,000',
  description: 'A complete, professional website built specifically for your business. One-time cost. $500 non-refundable deposit to get started.',
  features: [
    'Custom design tailored to your brand',
    'Responsive across all devices',
    'SEO and GEO optimization',
    'Google Analytics integration',
    'Contact form integration',
    'Training session for content updates',
  ],
};

export const websiteMonthly: PricingPackage[] = [
  {
    name: 'Essentials',
    price: '$50/mo',
    description: 'Keep your site secure, fast, and up to date. You handle your own content updates.',
    features: [
      'Hosting & uptime monitoring',
      'Security updates & patches',
      'Content updates available at $150/hr',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$150/mo',
    description: 'Everything in Essentials, plus proactive improvements to grow your business.',
    features: [
      'Everything in Essentials',
      'Unlimited content updates',
      'Monthly analytics, SEO, and GEO report',
      'Performance optimization',
      'Initial marketing strategy guide',
    ],
    popular: true,
  },
];


export const appBuild: PricingPackage = {
  name: 'Custom App Build',
  price: '$7,500+',
  description: 'A custom application built to solve your specific business challenges. Scoped and priced based on your needs. $1,500 non-refundable deposit to get started.',
  features: [
    'Custom designed solution',
    'Integration with existing systems',
    'User roles and permissions',
    'Custom dashboard & reporting',
    'User training',
  ],
};

export const appMonthly: PricingPackage[] = [
  {
    name: 'Essentials',
    price: '$150/mo',
    description: 'Keep your app running smoothly with hosting, security, and peace of mind.',
    features: [
      'Hosting & uptime monitoring',
      'Security updates & patches',
      'Database maintenance & backups',
      'Bug fixes for existing functionality',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$300/mo',
    description: 'Everything in Essentials, plus proactive improvements to keep your app evolving.',
    features: [
      'Everything in Essentials',
      'Monthly analytics & performance report',
      'Monthly 30-minute strategy call',
    ],
    popular: true,
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'How long does it take to build a website?',
    answer: 'You\'ll have a working demo in 1-2 weeks. From there, we refine it together until it\'s exactly what you want. Most websites are fully launched within 3-4 weeks.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes. I offer Essentials and Growth monthly plans that cover hosting, security updates, and ongoing support. You can see the full breakdown in the Investment section above.',
  },
  {
    question: 'What if I need changes after the site is launched?',
    answer: 'If you\'re on the Growth plan, content updates are unlimited. On the Essentials plan, content updates are available at $150/hr. For new features or major changes, we\'ll scope those separately.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer: 'Just fill out the Get Started form below. I\'ll need a basic understanding of your business, your goals, and any branding materials you have (logo, colors, fonts). Don\'t worry if you don\'t have everything ready — I can guide you through it.',
  },
  {
    question: 'Do you help with domain registration and hosting?',
    answer: 'Yes. I handle hosting as part of your monthly plan. I can also help with domain registration and DNS setup. Hosting is included in your monthly fee — domain registration costs are separate.',
  },
  {
    question: 'What technology do you use to build websites?',
    answer: 'I build modern websites using Next.js and Sanity CMS. This gives you a fast, SEO-optimized site with a user-friendly content management system so you can update your own content when needed.',
  },
  {
    question: 'Can I update my own website content?',
    answer: 'Yes. Every website I build includes Sanity CMS — a content management system that lets you update text, images, and other content yourself. I also provide a training session so you feel confident making changes.',
  },
  {
    question: 'What\'s the difference between a website and a custom app?',
    answer: 'A website is a marketing site — it tells people who you are, what you do, and how to reach you. A custom app solves a specific business problem — scheduling, inventory, customer portals, etc. Most clients start with a website and add custom apps later.',
  },
  {
    question: 'Do you use AI to build websites?',
    answer: 'Yes. I use AI-assisted development to build faster and deliver more for less. I have 8+ years of experience building websites the traditional way — AI is a tool that accelerates my workflow, not a replacement for expertise.',
  },
  {
    question: 'Do I work directly with you, or is there a team?',
    answer: "You work directly with me — no middlemen, no handoffs between a project manager, designer, and developer. I'm the single point of contact from start to finish.",
  },
  {
    question: 'How is your pricing structured?',
    answer: "Flat, transparent pricing — no surprises. You'll see an estimate before we start, and we'll confirm the details together. No scope creep, no change orders, no surprise invoices.",
  },
  {
    question: "Are you just a vibe coder looking to make a quick buck?",
    answer: "No. I'm a software engineer by trade with 8+ years of professional experience. I'm deeply invested in this work. There's a new wave of \"vibe coders\" who don't actually understand the code they're shipping — and eventually that's going to bite them and their clients. I write code I understand, I debug problems myself, and I stand behind everything I build.",
  },
  {
    question: 'Do you offer marketing services?',
    answer: "My focus is on building — websites, apps, and custom solutions. That said, every Growth plan includes an initial marketing strategy guide to help you get started with SEO, social media, and local search. If you need ongoing marketing support, I'm happy to discuss it, but I'd rather spend my time building technology that moves your business forward.",
  },
  {
    question: 'Do you build apps that handle PII (personally identifiable information)?',
    answer: 'Yes. Security is first and foremost in all my engineering decisions. All data is encrypted in transit and at rest. I follow industry best practices for handling sensitive information — secure authentication, role-based access, and regular security audits are baked into every project.',
  },
  {
    question: 'Do you build apps that handle PHI (protected health information)?',
    answer: "Not at the moment — HIPAA compliance introduces a level of complexity that's tricky to navigate with my current stack. That said, reach out anyway and let's see if we can figure something out together.",
  },
];

export const projects: Project[] = [
  {
    name: 'Gridiron Rumble',
    description: 'A 2D arcade style mobile-first football game. Designed the full system: game engine, Astro marketing site with devlogs, iOS and Steam integration. Currently available on TestFlight.',
    image: '/images/projects/gridiron-rumble.png',
    buildTime: 'Built in 1 month',
    date: 'April, 2026',
    url: 'https://www.gridironrumble.com/',
    cta: 'Visit Site',
  },
  {
    name: 'Personal Website',
    description: 'Professional portfolio and blog built with Astro, Tailwind CSS, and Claude Code.',
    image: '/images/projects/personal-website.png',
    buildTime: 'Built in 1 week',
    date: 'April, 2026',
    url: 'https://jessepeplinski.com/',
    cta: 'Visit Site',
  },
  {
    name: 'Wedding Website',
    description: 'A custom wedding website with RSVP management and event details.',
    image: '/images/projects/foreverpeplinski.png',
    buildTime: 'Built in 2 weeks',
    date: 'October, 2024',
    url: 'https://foreverpeplinski.com/',
    cta: 'Visit Site',
  },
  {
    name: 'Hack Potsdam Website',
    description: 'Landing page for a 24-hour hackathon in Potsdam, NY.',
    image: '/images/projects/hackpotsdam.png',
    buildTime: 'Built in 1 week',
    date: 'January, 2018',
    url: 'https://hackpotsdam.github.io/hackpotsdam2017/',
    cta: 'Visit Site',
  },
  {
    name: 'Go Workshop Website',
    description: 'Landing page for a Go programming workshop hosted at SUNY Potsdam.',
    image: '/images/projects/learngo.png',
    buildTime: 'Built in 1 week',
    date: 'May, 2017',
    url: 'https://jessepeplinski.github.io/learngowithbill/',
    cta: 'Visit Site',
  },
  {
    name: 'Potsdam ACM Website',
    description: 'Landing page for the Association for Computing Machinery at SUNY Potsdam.',
    image: '/images/projects/potsdamacm.github.io.png',
    buildTime: 'Built in 1 week',
    date: 'May, 2017',
    url: 'https://potsdamacm.github.io/',
    cta: 'Visit Site',
  },
];
