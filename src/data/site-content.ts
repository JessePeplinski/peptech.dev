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
  "I created my first website for a local sandwich shop in 2015. The owners didn't have time to focus on their digital needs — that's where I stepped in. When the site launched, it helped them reach new customers and generate more revenue. Seeing their reaction meant the world. I've been building websites long before the emergence of AI.",
  "I've also been on the other side — hiring someone to build a website. We went weeks over schedule and over budget. Too many cooks in the kitchen. As a small business owner, you want to pick up the phone and get an answer, not get bogged down going back and forth between a project manager, developers, and designers. That model just doesn't work with a limited budget. So you'll work with me — directly.",
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
  price: '$2,000',
  description: 'A complete, professional website built specifically for your business. One-time cost.',
  features: [
    'Custom design tailored to your brand',
    'Responsive across all devices',
    'SEO optimization',
    'Google Analytics integration',
    'Contact form integration',
    'Training session for content updates',
  ],
};

export const websiteMonthly: PricingPackage[] = [
  {
    name: 'Essentials',
    price: '$50/mo',
    description: 'Keep your site secure, fast, and visible in local search.',
    features: [
      'Hosting & uptime monitoring',
      'Security updates & patches',
      'Monthly SEO checkup',
      'Monthly GEO checkup',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$100/mo',
    description: 'Everything in Essentials, plus proactive improvements to grow your business.',
    features: [
      'Everything in Essentials',
      'Unlimited content updates',
      'Monthly analytics report',
      'Priority support',
      'Performance optimization',
    ],
    popular: true,
  },
];

export const marketingPricing: PricingPackage = {
  name: 'Marketing',
  price: '$300/mo',
  description: 'Ongoing marketing support to grow your online presence and reach new customers.',
  features: [
    'Social media management (2-3 posts/week)',
    'Google Business Profile optimization',
    'Review monitoring & response templates',
    'Monthly performance report',
    'Basic Google Ads management',
    'Email newsletter (1/month)',
  ],
};

export const appPricing: PricingPackage[] = [
  {
    name: 'Basic App Solution',
    price: '$2,500+',
    description: 'Perfect for adding specific functionality to solve a particular business challenge.',
    features: [
      'Custom designed solution',
      'Single-feature focus',
      'Integration with existing systems',
      'User training',
    ],
  },
  {
    name: 'Advanced App Solution',
    price: '$5,000+',
    description: 'Comprehensive solutions for complex business challenges that require multiple features.',
    features: [
      'Everything in the "Basic App" package',
      'Multi-feature solution',
      'User roles and permissions',
      'Custom dashboard & reporting',
      'Extended maintenance & support',
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'How long does it take to build a website?',
    answer: 'A typical website takes about 4-6 weeks from start to finish, including discovery, design, development, and launch. Simple static sites may be completed faster, while more complex dynamic sites may take longer.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: "Yes, I offer optional maintenance packages to keep your site secure, up-to-date, and running smoothly. This includes regular updates, security monitoring, and technical support. We can discuss these options after your project is completed.",
  },
  {
    question: 'What if I need changes after the site is launched?',
    answer: "Minor changes and adjustments are covered during the 30-day support period after launch. For WordPress sites, I'll train you to make basic content updates yourself. For larger changes or new features, we can discuss additional development work at my hourly rate.",
  },
  {
    question: 'What do I need to provide to get started?',
    answer: "To get started, I'll need information about your business, your goals for the website, any branding materials you have (logo, colors, fonts), and content for the site (text, images, etc.). Don't worry if you don't have everything ready - I can help guide you through what's needed during our initial consultation.",
  },
  {
    question: 'Do you help with domain registration and hosting?',
    answer: "Yes, I can assist with domain registration and recommend reliable hosting providers that suit your needs. I'll help set everything up so your website launches smoothly. The costs for domain registration and hosting are separate from my development fees.",
  },
];

export const projects: Project[] = [
  {
    name: 'Personal Website',
    description: 'Professional portfolio and blog built with Astro, Tailwind CSS, and Claude Code.',
    image: '/images/projects/personal-website.png',
    buildTime: 'Built in 1 week',
    date: 'March, 2025',
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
