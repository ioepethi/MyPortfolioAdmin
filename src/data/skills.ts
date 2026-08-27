export type Skill = {
  name: string;
  description: string;
};

export type SkillGroup = {
  id: string;
  /** 01–06 display index */
  index: string;
  titleKey: string;
  icon:
  | "communication"
  | "documents"
  | "control"
  | "coordination"
  | "automation"
  | "operations";
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "communication",
    index: "01",
    titleKey: "skills.groups.communication",
    icon: "communication",
    skills: [
      {
        name: "Microsoft Outlook",
        description:
          "Email, calendar, and meeting coordination — the backbone of day-to-day office communication.",
      },
      {
        name: "Microsoft Teams",
        description:
          "Internal communication, meetings, and team collaboration in one place.",
      },
      {
        name: "Microsoft Bookings",
        description: "Appointment and visitor scheduling with automated confirmations.",
      },
      {
        name: "Microsoft To Do",
        description: "Personal task management and daily priority tracking.",
      },
    ],
  },
  {
    id: "documents",
    index: "02",
    titleKey: "skills.groups.documents",
    icon: "documents",
    skills: [
      {
        name: "Microsoft Word",
        description: "Letters, memos, reports, and standard operating procedures (SOPs).",
      },
      {
        name: "Microsoft Excel",
        description:
          "Trackers, budgets, inventory, attendance, and operational reports with advanced formulas and dashboards.",
      },
      {
        name: "Microsoft PowerPoint",
        description: "Presentations and management reports for leadership and clients.",
      },
      {
        name: "Adobe Acrobat",
        description: "PDF editing, merging, conversion, and document preparation.",
      },
      {
        name: "DocuSign / Adobe Acrobat Sign",
        description:
          "Electronic signatures and approvals — both integrate seamlessly with Microsoft workflows.",
      },
    ],
  },
  {
    id: "control",
    index: "03",
    titleKey: "skills.groups.control",
    icon: "control",
    skills: [
      {
        name: "SharePoint",
        description: "Centralized company documents with controlled, permission-based access.",
      },
      {
        name: "OneDrive",
        description: "Personal and work-in-progress file storage with sync across devices.",
      },
      {
        name: "Microsoft Lists",
        description: "Registers, asset lists, vendor lists, and trackers structured for control.",
      },
      {
        name: "Teams Files",
        description: "Team-based document collaboration tied directly to channels and chats.",
      },
    ],
  },
  {
    id: "coordination",
    index: "04",
    titleKey: "skills.groups.coordination",
    icon: "coordination",
    skills: [
      {
        name: "Microsoft Planner",
        description: "Task assignments and team workflows visualized on shared boards.",
      },
      {
        name: "Microsoft Lists",
        description:
          "Office supplies, assets, contracts, vendors, and visitors tracked in one place.",
      },
      {
        name: "Microsoft Forms",
        description: "Requests, surveys, inspections, and internal forms with automated responses.",
      },
      {
        name: "OneNote",
        description: "Meeting notes, procedures, and reference information organized in notebooks.",
      },
    ],
  },
  {
    id: "automation",
    index: "05",
    titleKey: "skills.groups.automation",
    icon: "automation",
    skills: [
      {
        name: "Power Automate",
        description:
          "Automate approvals, notifications, emails, document workflows, reminders, and repetitive administrative tasks.",
      },
      {
        name: "Microsoft 365 Copilot",
        description: "Drafting, summarizing, analyzing, and productivity assistance across Microsoft apps.",
      },
      {
        name: "n8n",
        description: "Advanced workflow automation when connecting different systems and APIs.",
      },
      {
        name: "Zapier / Make",
        description: "Useful for connecting external applications and triggering cross-app workflows.",
      },
    ],
  },
  {
    id: "operations",
    index: "06",
    titleKey: "skills.groups.operations",
    icon: "operations",
    skills: [
      {
        name: "Excel",
        description: "Expense and budget tracking with structured, formula-driven workbooks.",
      },
      {
        name: "Microsoft Forms",
        description: "Purchase and request forms that feed straight into approval flows.",
      },
      {
        name: "Microsoft Lists",
        description: "Supplier and procurement registers kept current and auditable.",
      },
      {
        name: "SharePoint",
        description: "Quotation, invoice, PO, and contract documentation stored centrally.",
      },
      {
        name: "Power Automate",
        description: "Approval and notification workflows that keep procurement moving.",
      },
    ],
  },
];
