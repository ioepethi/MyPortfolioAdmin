export type Tool = {
  name: string;
  /** Slug under /public/icons — undefined renders a typographic mark. */
  icon?: string;
};

export type ToolGroup = {
  id: string;
  /** Display number — e.g. "01". */
  num: string;
  label: string;
  tools: Tool[];
};

export const toolGroups: ToolGroup[] = [
  {
    id: "communication",
    num: "01",
    label: "Communication",
    tools: [
      { name: "Microsoft Outlook", icon: "microsoftoutlook" },
      { name: "Microsoft Teams", icon: "microsoftteams" },
      { name: "Microsoft Bookings" },
      { name: "Microsoft To Do" },
    ],
  },
  {
    id: "office",
    num: "02",
    label: "Office & Documents",
    tools: [
      { name: "Microsoft Word", icon: "microsoftword" },
      { name: "Microsoft Excel", icon: "microsoftexcel" },
      { name: "Microsoft PowerPoint", icon: "microsoftpowerpoint" },
      { name: "Adobe Acrobat" },
      { name: "DocuSign" },
      { name: "Adobe Acrobat Sign" },
    ],
  },
  {
    id: "document-control",
    num: "03",
    label: "Document Control",
    tools: [
      { name: "SharePoint", icon: "microsoftsharepoint" },
      { name: "OneDrive", icon: "microsoftonedrive" },
      { name: "Microsoft Lists" },
      { name: "Teams Files" },
    ],
  },
  {
    id: "commerce",
    num: "04",
    label: "Commerce",
    tools: [
      { name: "E-commerce platforms" },
      { name: "Product management" },
      { name: "Inventory management" },
      { name: "Online store operations" },
      { name: "Customer service" },
      { name: "Product content" },
      { name: "Order management" },
      { name: "Payment systems" },
      { name: "Stripe", icon: "stripe" },
      { name: "Website management" },
      { name: "Digital commerce workflows" },
    ],
  },
  {
    id: "coordination",
    num: "05",
    label: "Coordination",
    tools: [
      { name: "Microsoft Planner" },
      { name: "Microsoft Lists" },
      { name: "Microsoft Forms" },
      { name: "OneNote" },
    ],
  },
  {
    id: "automation",
    num: "06",
    label: "Automation & AI",
    tools: [
      { name: "Power Automate", icon: "powerautomate" },
      { name: "Microsoft 365 Copilot" },
      { name: "n8n", icon: "n8n" },
      { name: "Claude", icon: "claude" },
      { name: "Devin" },
      { name: "AI automation workflows" },
      { name: "API integrations" },
    ],
  },
  {
    id: "development",
    num: "07",
    label: "Web & Development",
    tools: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Express", icon: "express" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "GitHub", icon: "github" },
    ],
  },
];
