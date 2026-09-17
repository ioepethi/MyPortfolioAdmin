export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  /** Compact area labels shown on the timeline. */
  areas: string[];
  /** A few verified highlights. */
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "unimar",
    role: "E-Commerce Specialist",
    company: "Unimar BLDG Services LLC",
    location: "Dubai, UAE",
    period: "Aug 2024 — Aug 2026",
    current: true,
    areas: [
      "Product listings",
      "Catalog management",
      "SEO",
      "Inventory",
      "Marketplaces",
      "Analytics",
      "Excel",
      "Content",
      "Cross-functional collaboration",
    ],
    highlights: [
      "Product listings, catalog management and marketplace content across Shopify, Noon and Amazon FBA.",
      "Inventory tracking, order processing, customer service and merchandising support.",
      "Excel reporting and performance analysis for day-to-day commercial decisions.",
    ],
  },
  {
    id: "supportzebra",
    role: "Administrative Coordinator",
    company: "Support Zebra",
    location: "Philippines",
    period: "May 2018 — Mar 2024",
    current: false,
    areas: [
      "Administration",
      "IT support",
      "Records",
      "Databases",
      "Procurement",
      "Vendors",
      "Data accuracy",
      "IT assets",
      "Data privacy",
    ],
    highlights: [
      "Promoted from IT Help Desk Support to Administrative Coordinator for strong performance and dependable service.",
      "Maintained administrative records and databases with rigorous accuracy and record-keeping protocols.",
      "Managed procurement, vendors and IT assets while safeguarding data privacy and secure records.",
    ],
  },
];
