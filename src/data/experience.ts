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
    role: "Team Leader",
    company: "Unimar BLDG Service LLC",
    location: "Dubai, United Arab Emirates",
    period: "Aug 09, 2024 – Aug 30, 2026",
    current: false,
    responsibilities: [
      "Led and coordinated a team of pest control technicians, assigning daily tasks, managing schedules, and ensuring timely completion of client services.",
      "Built strong relationships with customers by understanding their concerns, providing professional service, and following up to maintain customer satisfaction.",
      "Supported business development by communicating service offerings to clients, identifying customer needs, and helping promote additional pest control services when appropriate.",
      "Coordinated with clients, management, suppliers, and field teams to ensure smooth service delivery and resolve operational issues efficiently.",
      "Prepared daily and monthly reports covering service activities, customer requests, team performance, inventory, and operational updates for management review.",
      "Assisted in creating and organizing service-related photos, videos, and visual content for documentation, customer communication, and promotional purposes.",
      "Monitored market and customer feedback from field activities and communicated useful insights to management to support service improvements and business growth.",
    ],
  },
  {
    id: "supportzebra",
    role: "Administrative Coordinator",
    company: "Support Zebra",
    location: "Cagayan de Oro City, Philippines",
    period: "May 2018 – Mar 2024",
    current: false,
    responsibilities: [
      "Promoted from IT Help Desk Support to Administrative Coordinator in recognition of strong performance, technical expertise, and dependable service — expanding scope to office administration, records management, and data accuracy",
      "Prepared reports and maintained administrative records and databases, ensuring high accuracy through consistent data entry and rigorous record maintenance protocols",
      "Managed office resources, procurement, and vendor coordination, ensuring timely, cost-effective supply of materials through organized vendor management and accurate record-keeping",
      "Delivered professional IT support, troubleshooting hardware and software issues across the organization, while managing IT assets with meticulous tracking to ensure data security and minimal downtime",
      "Ensured data privacy compliance and secure records management, safeguarding confidential information through controlled access, regular audits, and adherence to organizational policies",
    ],
  },
];
