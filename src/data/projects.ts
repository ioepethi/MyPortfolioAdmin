export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type ProjectShot = {
  src: string;
  alt: string;
  /** Short caption — e.g. "01 / DASHBOARD". */
  label: string;
  fit?: "cover" | "contain";
};

export type CaseSection = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  /** Honest provenance — employer, personal, portfolio sample, or in-progress. */
  status: string;
  year: string;
  summary: string;
  /** Ordered case-study narrative — only verified content. */
  caseStudy: CaseSection[];
  /** Functional modules / scope, shown as chips. */
  modules: string[];
  /** Visual system flow shown as a chain. */
  flow?: string[];
  stack: string[];
  links: ProjectLink[];
  shots: ProjectShot[];
  /** Step-by-step walkthrough retained for the detail page. */
  walkthrough: { title: string; description: string }[];
  /** Marks the primary featured project. */
  featured?: boolean;
  /** Renders an "architecture preview" diagram instead of a screenshot. */
  architecture?: boolean;
  /** Marks a documented-but-unpublished case study shell. */
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    id: "u-office",
    name: "U-Office",
    subtitle: "Business Management CRM",
    category: "Digital System / Business Operations",
    status: "Employer project",
    year: "2025",
    summary:
      "A centralized CRM and office management system — tasks, departments, meetings, documents, visitors and office supplies behind role-based access.",
    caseStudy: [
      {
        title: "The Problem",
        body: "Fragmented office processes and information — tasks, meetings, documents and records spread across channels with no single source of truth.",
      },
      {
        title: "The Context",
        body: "Built for the company I work for. Daily operations needed one system instead of scattered manual tracking.",
      },
      {
        title: "My Approach",
        body: "Mapped the real office workflows first — who needs what, when, and with which permissions — then designed the system around those roles.",
      },
      {
        title: "The Solution",
        body: "A centralized digital management system with role-based access for Administrator, Office Manager, Department Manager, Employee and Viewer.",
      },
      {
        title: "Tools & Technology",
        body: "React and TypeScript client, Express and SQLite server, deployed on Cloudflare Pages and Workers, versioned on GitHub.",
      },
      {
        title: "The Result",
        body: "The CRM is now used for the company's daily operations — the team finally has a dedicated system of their own.",
      },
      {
        title: "What I Learned",
        body: "Adoption follows fit: a system earns daily use when it mirrors how the office actually works, not how software assumes it should.",
      },
      {
        title: "Next Iteration",
        body: "Deeper reporting, more automation around follow-ups, and tighter document workflows.",
      },
    ],
    modules: [
      "Tasks",
      "Departments",
      "Meetings",
      "Documents",
      "Visitors",
      "Office Supplies",
      "Role-Based Access",
    ],
    flow: ["Roles", "Modules", "Data", "Workflows", "Reports"],
    stack: ["React", "TypeScript", "Express", "SQLite", "Cloudflare", "GitHub"],
    links: [
      { label: "View Project", href: "/projects/u-office", primary: true },
      { label: "View Live System", href: "https://uoffice-app.pages.dev" },
      { label: "View Code", href: "https://github.com/ioepethi/U-Office" },
    ],
    shots: [
      {
        src: "/images/u-office-dashboard.png",
        alt: "U-Office dashboard showing open tasks, requests, meetings and follow-ups",
        label: "01 / Dashboard",
      },
      {
        src: "/images/u-office-login.png",
        alt: "U-Office role-based sign-in screen",
        label: "02 / Access",
      },
    ],
    walkthrough: [
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
    featured: true,
  },
  {
    id: "uae-intel",
    name: "UAE-Intel",
    subtitle: "UAE Person & Company Intelligence System",
    category: "Business Intelligence / Research System",
    status: "Personal project",
    year: "2025",
    summary:
      "A business-intelligence research system for identifying UAE companies, executives, founders, directors and decision-makers — with confidence scoring and source tracking.",
    caseStudy: [
      {
        title: "The Problem",
        body: "Business research on UAE companies and decision-makers is manual, scattered across public sources, and hard to trust without tracking where each fact came from.",
      },
      {
        title: "My Approach",
        body: "Designed the pipeline before the interface: a CLI-driven research engine feeding a structured database, with confidence scoring and source tracking built in from the start.",
      },
      {
        title: "The Solution",
        body: "A TypeScript monorepo — CLI, Next.js web dashboard, and core, database, research and report packages — that turns public information into fully-sourced intelligence reports.",
      },
      {
        title: "Tools & Technology",
        body: "TypeScript monorepo, Node.js CLI, Next.js dashboard, structured database, automated report generation.",
      },
      {
        title: "What I Learned",
        body: "Intelligence systems are only as credible as their sourcing — confidence scoring and provenance are product features, not afterthoughts.",
      },
    ],
    modules: [
      "CLI",
      "Research Engine",
      "Database",
      "Confidence Scoring",
      "Source Tracking",
      "Report Generation",
      "Web Dashboard",
    ],
    flow: [
      "CLI",
      "Research Engine",
      "Database",
      "Confidence / Source Tracking",
      "Report",
      "Web Dashboard",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "CLI", "Monorepo", "GitHub"],
    links: [
      { label: "View Project", href: "/projects/uae-intel", primary: true },
      { label: "View Code", href: "https://github.com/ioepethi/UAE-Intel" },
    ],
    shots: [
      {
        src: "/images/uae-intel.png",
        alt: "UAE-Intel system logo",
        label: "System Identity",
        fit: "contain",
      },
    ],
    walkthrough: [
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
    architecture: true,
  },
  {
    id: "edge-plus-fitness",
    name: "Edge Plus Fitness",
    subtitle: "POS & Management System",
    category: "POS / Operations / E-Commerce / Business System",
    status: "Portfolio project",
    year: "2025",
    summary:
      "A gym point-of-sale and management system — memberships, walk-in and member sales, inventory, attendance, leads, transactions and reporting in one dashboard.",
    caseStudy: [
      {
        title: "The Problem",
        body: "A gym's day-to-day operations — sales, memberships, stock, attendance — typically live in separate notebooks, spreadsheets and registers.",
      },
      {
        title: "My Approach",
        body: "Started at the counter: the POS checkout is the operational core, so sales, stock and membership state all flow from one transaction flow.",
      },
      {
        title: "The Solution",
        body: "A single POS dashboard with VAT-ready checkout, multiple payment methods, and centralized management of members, products, leads and reports.",
      },
      {
        title: "Tools & Technology",
        body: "Next.js and TypeScript with Tailwind CSS, deployed on Cloudflare Pages, versioned on GitHub.",
      },
      {
        title: "What I Learned",
        body: "Designing the transaction first forces every other module — inventory, membership, reporting — to stay honest.",
      },
    ],
    modules: [
      "Membership Management",
      "Walk-in Sales",
      "Member Sales",
      "Product Inventory",
      "Attendance Tracking",
      "Leads",
      "Transactions",
      "Reporting",
      "VAT-Ready Checkout",
      "Multiple Payment Methods",
      "Centralized Dashboard",
    ],
    flow: ["Check-in", "Sell", "Stock", "Members", "Report"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare", "GitHub"],
    links: [
      { label: "View Project", href: "/projects/edge-plus-fitness", primary: true },
      { label: "Live Demo", href: "https://edge-plus-fitness.pages.dev/login" },
      {
        label: "View Code",
        href: "https://github.com/ioepethi/Edge-Plus-Fitness-Gym-Center-POS",
      },
    ],
    shots: [
      {
        src: "/images/edge-plus-pos.png",
        alt: "Edge Plus Fitness point-of-sale screen with cart, memberships and products",
        label: "01 / POS & Checkout",
      },
      {
        src: "/images/edge-plus-login.png",
        alt: "Edge Plus Fitness staff sign-in screen",
        label: "02 / Staff Access",
      },
    ],
    walkthrough: [
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
    id: "ipcr-pms",
    name: "IPCR / OPCR / PMS",
    subtitle: "Performance Management System",
    category: "Performance / Workflows / Reporting",
    status: "Case study in progress",
    year: "—",
    summary:
      "A performance management and tracking system structured around goals, workflows, reporting and accountability. The full case study is being documented.",
    caseStudy: [
      {
        title: "The Problem",
        body: "Performance tracking is often fragmented across forms, spreadsheets and manual consolidation — making reviews slow and accountability unclear.",
      },
      {
        title: "Status",
        body: "This case study is in preparation. Detailed modules, screenshots and verified results will be published as documentation is completed.",
      },
    ],
    modules: [
      "Performance",
      "Management",
      "Tracking",
      "Workflows",
      "Reporting",
      "Accountability",
    ],
    stack: [],
    links: [{ label: "View Project", href: "/projects/ipcr-pms", primary: true }],
    shots: [],
    walkthrough: [],
    inProgress: true,
  },
  {
    id: "edge-plus-website",
    name: "Edge Plus Fitness — Website",
    subtitle: "Customer-Facing Marketing Site",
    category: "Web Experience / E-Commerce",
    status: "Portfolio project",
    year: "2025",
    summary:
      "The customer-facing companion to the gym's POS — homepage, About, Services, Pricing, testimonials, BMI calculator, FAQ and contact, designed to turn visitors into members.",
    caseStudy: [
      {
        title: "The Problem",
        body: "The POS manages the gym — but the gym also needed a public site that explains the offer and converts visitors.",
      },
      {
        title: "The Solution",
        body: "A marketing site covering services, pricing, coaches, testimonials, a BMI calculator and FAQ — every section aimed at membership conversion.",
      },
      {
        title: "Tools & Technology",
        body: "Next.js and TypeScript with Tailwind CSS, deployed on Cloudflare Pages.",
      },
    ],
    modules: ["Home", "About", "Services", "Pricing", "BMI Calculator", "FAQ", "Contact"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare", "GitHub"],
    links: [
      { label: "View Project", href: "/projects/edge-plus-website", primary: true },
      { label: "Live", href: "https://edge-plus-website.pages.dev/" },
      { label: "View Code", href: "https://github.com/ioepethi/Edge-Plus" },
    ],
    shots: [
      {
        src: "/images/edge-plus-website.png",
        alt: "Edge Plus Fitness customer-facing website homepage",
        label: "01 / Homepage",
      },
    ],
    walkthrough: [
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
    subtitle: "Eco-Friendly Home Store",
    category: "E-Commerce / Retail",
    status: "Personal project — own business",
    year: "2025",
    summary:
      "An eco-friendly home store for the UAE — plant-based, pet-safe and organic home products with delivery across all emirates.",
    caseStudy: [
      {
        title: "The Problem",
        body: "Eco-conscious home products in the UAE are scattered across marketplaces with unclear ingredients and safety information.",
      },
      {
        title: "The Solution",
        body: "A dedicated store built for clarity and trust — clear categories, honest product pages, and a smooth Stripe checkout with UAE-wide delivery.",
      },
      {
        title: "Tools & Technology",
        body: "React and Vite storefront with Tailwind CSS, Stripe checkout, and a separate admin panel.",
      },
    ],
    modules: ["Catalog", "Product Pages", "Cart", "Stripe Checkout", "UAE Delivery"],
    stack: ["React", "Vite", "Tailwind CSS", "Stripe"],
    links: [
      { label: "View Project", href: "/projects/brandpeth", primary: true },
      { label: "Live", href: "https://brandpeth-ae.pages.dev" },
      { label: "Admin", href: "https://admin.brandpeth.cloud" },
    ],
    shots: [
      {
        src: "/images/brandpeth.jpg",
        alt: "BrandPeth.ae eco-friendly home store storefront",
        label: "01 / Storefront",
      },
    ],
    walkthrough: [
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
    subtitle: "Eco-Friendly Pest & Garden Care",
    category: "E-Commerce / Retail",
    status: "Personal project — own business",
    year: "2025",
    summary:
      "An eco-friendly pest prevention and garden care store for UAE homes — safe for families, effective against pests, delivered UAE-wide.",
    caseStudy: [
      {
        title: "The Problem",
        body: "Household pest products often lead with chemicals and jargon; families need to know what's safe before they buy.",
      },
      {
        title: "The Solution",
        body: "A focused retail site organized by the problem each product solves, with plain-language safety information and a distraction-free checkout.",
      },
      {
        title: "Tools & Technology",
        body: "React and Vite storefront with Tailwind CSS and a shared admin panel.",
      },
    ],
    modules: ["Problem-Based Catalog", "Product Pages", "Checkout", "UAE Delivery"],
    stack: ["React", "Vite", "Tailwind CSS"],
    links: [
      { label: "View Project", href: "/projects/pestbrand", primary: true },
      { label: "Live", href: "https://pestbrand-ae.pages.dev" },
      { label: "Admin", href: "https://admin.brandpeth.cloud" },
    ],
    shots: [
      {
        src: "/images/pestbrand.png",
        alt: "PestBrand Home & Garden eco-friendly pest control store",
        label: "01 / Storefront",
      },
    ],
    walkthrough: [
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
];

export const featuredProjects = projects.slice(0, 4);
export const moreProjects = projects.slice(4);
