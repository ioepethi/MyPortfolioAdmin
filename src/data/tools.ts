export type Tool = {
  name: string;
  /** Slug under /public/icons — undefined renders a typographic mark. */
  icon?: string;
};

export type ToolGroup = {
  id: string;
  label: string;
  tools: Tool[];
};

export const toolGroups: ToolGroup[] = [
  {
    id: "design",
    label: "Design",
    tools: [
      { name: "Adobe Creative Suite", icon: "adobecreativecloud" },
      { name: "Adobe Illustrator", icon: "adobeillustrator" },
      { name: "Canva", icon: "canva" },
    ],
  },
  {
    id: "commerce",
    label: "E-Commerce",
    tools: [
      { name: "Shopify", icon: "shopify" },
      { name: "Amazon", icon: "amazon" },
      { name: "Noon" },
      { name: "Stripe", icon: "stripe" },
    ],
  },
  {
    id: "development",
    label: "Development",
    tools: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Express", icon: "express" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    tools: [
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "GitHub", icon: "github" },
    ],
  },
  {
    id: "automation",
    label: "Automation / AI",
    tools: [
      { name: "n8n", icon: "n8n" },
      { name: "Claude", icon: "claude" },
      { name: "Devin" },
      { name: "MCP" },
    ],
  },
  {
    id: "office",
    label: "Office / Productivity",
    tools: [
      { name: "Microsoft Excel", icon: "microsoftexcel" },
      { name: "Microsoft Word", icon: "microsoftword" },
      { name: "Microsoft PowerPoint", icon: "microsoftpowerpoint" },
      { name: "Microsoft Outlook", icon: "microsoftoutlook" },
      { name: "Microsoft Teams", icon: "microsoftteams" },
      { name: "SharePoint", icon: "microsoftsharepoint" },
      { name: "OneDrive", icon: "microsoftonedrive" },
      { name: "Microsoft Lists" },
      { name: "Microsoft Planner" },
      { name: "Power Automate", icon: "powerautomate" },
    ],
  },
];

/** Flat list used by the marquee — icon-bearing tools only, grouped order. */
export const marqueeTools: Tool[] = toolGroups.flatMap((g) => g.tools);
