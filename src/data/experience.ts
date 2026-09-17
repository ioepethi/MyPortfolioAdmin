export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  /** A few verified highlights. */
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "unimar",
    role: "Team Leader",
    company: "Unimar BLDG Service LLC",
    location: "Dubai, UAE",
    period: "Aug 2024 — Aug 2026",
    current: true,
    highlights: [
      "Team coordination",
      "Scheduling",
      "Customer service",
      "Client coordination",
      "Supplier coordination",
      "Reporting",
      "Inventory monitoring",
      "Business development support",
      "Photo/video documentation",
    ],
  },
  {
    id: "supportzebra",
    role: "Administrative Coordinator",
    company: "Support Zebra",
    location: "Philippines",
    period: "May 2018 — Mar 2024",
    current: false,
    highlights: [
      "Administrative coordination",
      "Records management",
      "Reporting",
      "Procurement",
      "Vendor coordination",
      "IT support",
      "IT asset management",
      "Data privacy",
      "Documentation",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "University of Science and Technology of Southern Philippines",
  major: "Database Management",
  period: "2020 — 2024",
} as const;
