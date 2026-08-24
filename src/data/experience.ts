export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  note?: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: "unimar",
    role: "Team Leader & Admin Coordinator",
    company: "Unimar BLDG Services LLC",
    location: "Dubai, United Arab Emirates",
    period: "Aug 2024 – Aug 2026",
    current: true,
    responsibilities: [
      "Prepare operational and management reports",
      "Prepare inspection reports and compliance documentation",
      "Coordinate technicians and manage daily scheduling",
      "Monitor attendance and team coordination",
      "Maintain documentation compliance with Dubai Municipality requirements",
      "Coordinate with clients, vendors, and internal teams for service delivery",
      "Monitor office supplies, inventory, and equipment availability",
      "Assist in preparing quotations, proposals, and other administrative documents",
    ],
  },
  {
    id: "supportzebra",
    role: "Administrative Coordinator",
    company: "Support Zebra",
    location: "Cagayan de Oro City, Philippines",
    period: "May 2018 – Mar 2024",
    current: false,
    note: "Promoted from IT Help Desk Support to Administrative Coordinator",
    responsibilities: [
      "Prepared reports and maintained administrative records",
      "Maintained databases and managed office resources",
      "Assisted procurement and coordinated vendors",
      "Provided professional IT support and managed IT assets",
      "Ensured data privacy compliance and secure records management",
    ],
  },
];
