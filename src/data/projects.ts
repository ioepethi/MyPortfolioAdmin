export type ManualStep = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  categoryKey: string;
  descriptionKey: string;
  /** Short factual descriptor (not invented). */
  blurb: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Visual identity for the generated thumbnail. */
  thumbnail: {
    from: string;
    to: string;
    glyph: string;
  };
  /** Optional real screenshot shown instead of the generated thumbnail (path under /public). */
  screenshot?: string;
  /** How the screenshot image should fit its frame. Defaults to "cover". */
  screenshotFit?: "cover" | "contain";
  /** Optional distinct screenshot for the detail page hero (path under /public). Falls back to `screenshot`. */
  detailScreenshot?: string;
  /** Step-by-step walkthrough shown on the project detail page. */
  manual: ManualStep[];
};

export const projects: Project[] = [
  {
    id: "u-office",
    name: "U-Office",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.uOffice.description",
    blurb: "CRM built for a company, now used for their daily operations",
    tags: ["React", "TypeScript", "Express", "Cloudflare"],
    liveUrl: "https://uoffice-app.pages.dev",
    githubUrl: "https://github.com/ioepethi/U-Office",
    thumbnail: { from: "#312e81", to: "#6366f1", glyph: "U" },
    screenshot: "/images/u-office-login.png",
    manual: [
      {
        title: "Sign in with a role",
        description:
          "Log in with a company account — Administrator, Office Manager, Department Manager, Employee, or Viewer — and the CRM adjusts what you can see and do.",
      },
      {
        title: "Manage tasks & departments",
        description:
          "Create, assign, and track tasks across departments from a single dashboard.",
      },
      {
        title: "Run meetings",
        description:
          "Schedule meetings, record attendees, log decisions, and assign action items.",
      },
      {
        title: "Handle requests & documents",
        description:
          "Process office requests and store documents with full version history.",
      },
      {
        title: "Track visitors & supplies",
        description:
          "Log visitors, monitor office supplies, and raise maintenance requests as they come up.",
      },
      {
        title: "Review reports",
        description:
          "Check dashboards, reports, and audit logs to see how the company is operating in real time.",
      },
    ],
  },
  {
    id: "edge-plus-fitness",
    name: "Edge Plus Fitness — POS",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.edgePlusFitness.description",
    blurb: "Gym POS & management system built as a portfolio project",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    liveUrl: "https://edge-plus-fitness.pages.dev/login",
    githubUrl: "https://github.com/ioepethi/Edge-Plus-Fitness-Gym-Center-POS",
    thumbnail: { from: "#450a0a", to: "#ef4444", glyph: "E" },
    screenshot: "/images/edge-plus-pos.png",
    detailScreenshot: "/images/edge-plus-login.png",
    manual: [
      {
        title: "Sign in to the gym system",
        description:
          "Staff log in to a branded portal built for Edge Plus Fitness Center's day-to-day operations.",
      },
      {
        title: "Run the point of sale",
        description:
          "Look up a member or take a walk-in, then sell memberships, services, and products with an itemized cart, VAT, and a choice of payment methods.",
      },
      {
        title: "Manage members & attendance",
        description:
          "Track member profiles, check-ins, and active memberships from dedicated dashboards.",
      },
      {
        title: "Handle leads, inventory & transactions",
        description:
          "Follow up on leads, keep product stock accurate, and review every completed sale.",
      },
      {
        title: "Review reports",
        description:
          "See sales, membership, and inventory reports at a glance, with role-based access for staff and admins.",
      },
    ],
  },
  {
    id: "edge-plus-website",
    name: "Edge Plus Fitness — Website",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.edgePlusWebsite.description",
    blurb: "Customer-facing gym website built as a portfolio project",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    githubUrl: "https://github.com/ioepethi/Edge-Plus",
    thumbnail: { from: "#450a0a", to: "#ef4444", glyph: "E" },
    screenshot: "/images/edge-plus-website.png",
    manual: [
      {
        title: "Land on the homepage",
        description:
          "A hero section highlights the gym's promise, membership stats, and Google rating, with a clear \"Join Now\" call to action.",
      },
      {
        title: "Learn about the gym",
        description:
          "Home, About Us, Services, and Testimonials sections introduce the coaches, facilities, and real member results.",
      },
      {
        title: "Check pricing & fitness tools",
        description:
          "A Pricing section lays out membership plans, and a built-in BMI Calculator lets visitors check their stats on the spot.",
      },
      {
        title: "Get in touch & join",
        description:
          "FAQ and Contact sections answer common questions, and \"Join Now\" guides visitors toward becoming a member.",
      },
    ],
  },
  {
    id: "brandpeth",
    name: "BrandPeth.ae",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.brandpeth.description",
    blurb: "Eco-friendly home store built for my own business",
    tags: ["React", "Vite", "Tailwind CSS", "Stripe"],
    liveUrl: "https://brandpeth-ae.pages.dev",
    thumbnail: { from: "#064e3b", to: "#10b981", glyph: "B" },
    screenshot: "/images/brandpeth.jpg",
    manual: [
      {
        title: "Browse the catalog",
        description:
          "Explore plant-based, pet-safe, and organic home products organized into clear categories, each with imagery and a detailed product page.",
      },
      {
        title: "Add to cart",
        description:
          "Adjust quantities and review selections in a persistent cart before moving on to checkout.",
      },
      {
        title: "Check out securely",
        description:
          "Enter delivery details and pay safely through Stripe, with instant order confirmation.",
      },
      {
        title: "Track delivery",
        description:
          "Receive updates as the order is prepared and delivered anywhere in Dubai, Abu Dhabi, or the other emirates.",
      },
    ],
  },
  {
    id: "pestbrand",
    name: "PestBrand Home & Garden",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.pestbrand.description",
    blurb: "Eco-friendly pest control & garden care, built for my own business",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://pestbrand-ae.pages.dev",
    thumbnail: { from: "#14532d", to: "#3f8f56", glyph: "P" },
    screenshot: "/images/pestbrand.png",
    manual: [
      {
        title: "Find the right solution",
        description:
          "Browse pest prevention and garden care products grouped by the problem they solve, so customers find what they need quickly.",
      },
      {
        title: "Read clear product info",
        description:
          "Every product page explains how it works and what it's safe for, so families and pets are protected.",
      },
      {
        title: "Check out with confidence",
        description:
          "A focused, distraction-free checkout collects delivery details and confirms the order.",
      },
      {
        title: "UAE-wide delivery",
        description:
          "Orders are fulfilled and delivered across the UAE, with delivery information provided up front.",
      },
    ],
  },
  {
    id: "uae-intel",
    name: "UAE-Intel",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.uaeIntel.description",
    blurb: "UAE person & company intelligence system",
    tags: ["TypeScript", "Next.js", "Monorepo", "CLI"],
    githubUrl: "https://github.com/ioepethi/UAE-Intel",
    thumbnail: { from: "#0f172a", to: "#3b82f6", glyph: "U" },
    screenshot: "/images/uae-intel.png",
    screenshotFit: "contain",
    manual: [
      {
        title: "Run a search from the CLI",
        description:
          "Query the system for a UAE company, executive, founder, or decision-maker by name or keyword.",
      },
      {
        title: "Aggregate the research",
        description:
          "The research package gathers and cross-references public information into a structured profile.",
      },
      {
        title: "Explore the dashboard",
        description:
          "The Next.js web dashboard presents profiles, relationships, and findings in a readable, filterable view.",
      },
      {
        title: "Generate a report",
        description:
          "Export a structured report summarizing the findings for a person or company.",
      },
    ],
  },
];
