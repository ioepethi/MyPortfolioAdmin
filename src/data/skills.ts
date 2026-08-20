export type SkillGroup = {
  id: string;
  titleKey: string;
  icon: "operations" | "reporting" | "records" | "it";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "administration",
    titleKey: "skills.groups.administration",
    icon: "operations",
    skills: [
      "Office Administration",
      "Administrative Coordination",
      "Team Coordination",
      "Workflow Optimization",
      "Process Improvement",
      "Communication",
    ],
  },
  {
    id: "reporting",
    titleKey: "skills.groups.reporting",
    icon: "reporting",
    skills: [
      "Management Reporting",
      "Operational Reporting",
      "Report Preparation",
      "KPI Reporting",
      "Dashboard Reporting",
      "Microsoft Office Suite",
      "Advanced Microsoft Excel",
    ],
  },
  {
    id: "documentation",
    titleKey: "skills.groups.documentation",
    icon: "records",
    skills: ["Documentation Management", "Records Management"],
  },
  {
    id: "it",
    titleKey: "skills.groups.it",
    icon: "it",
    skills: [
      "IT Support",
      "Helpdesk Services",
      "IT Asset Management",
      "Database Management",
    ],
  },
];
