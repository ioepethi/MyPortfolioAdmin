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
      "Prepared 20+ operational, management, and inspection reports monthly, maintaining full audit readiness for Dubai Municipality reviews",
      "Coordinated daily schedules and attendance for 25+ technicians across multiple client sites, ensuring on-time service delivery",
      "Maintained 100% documentation compliance and efficient document management systems, passing all Dubai Municipality inspections with zero non-conformities over two years",
      "Served as central liaison for 30+ clients and vendors, resolving service delivery issues within 24 hours and strengthening client relationships",
      "Monitored office inventory and equipment availability, reducing stockouts by 20% and lowering procurement costs through vendor negotiation",
      "Prepared quotations and service proposals, supporting a 15% increase in successful bid submissions",
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
      "Prepared reports and maintained administrative records and databases, ensuring high accuracy through consistent data entry and rigorous record maintenance protocols",
      "Managed office resources, procurement, and vendor coordination, ensuring timely, cost-effective supply of materials through organized vendor management",
      "Delivered professional IT support, troubleshooting hardware and software issues across the organization while managing IT assets with meticulous tracking to ensure data security and minimal downtime",
      "Ensured data privacy compliance and secure records management, safeguarding confidential information through controlled access, regular audits, and adherence to organizational policies",
    ],
  },
];
