export type NavSubItem = {
  /** Element id inside the section panel to scroll to. */
  id: string;
  label: string;
};

export type NavItem = {
  /** Section id on the homepage. */
  section: string;
  label: string;
  items?: NavSubItem[];
};

export const navItems: NavItem[] = [
  {
    section: "who",
    label: "Who I Am",
    items: [
      { id: "who-about", label: "About Me" },
      { id: "who-mission", label: "Mission" },
      { id: "who-vision", label: "Vision" },
      { id: "who-drivers", label: "What Drives Me" },
    ],
  },
  {
    section: "what",
    label: "What I Do",
    items: [
      { id: "what-capabilities", label: "Capabilities" },
      { id: "what-experience", label: "Experience" },
      { id: "what-education", label: "Education" },
    ],
  },
  {
    section: "tools",
    label: "Tools & Technologies",
    items: [
      { id: "tools-communication", label: "Communication" },
      { id: "tools-office", label: "Office & Documents" },
      { id: "tools-document-control", label: "Document Control" },
      { id: "tools-commerce", label: "Commerce" },
      { id: "tools-coordination", label: "Coordination" },
      { id: "tools-automation", label: "Automation & AI" },
      { id: "tools-development", label: "Web & Development" },
    ],
  },
  { section: "work", label: "Work" },
  { section: "contact", label: "Contact" },
];

/** Opens a homepage dropdown section and scrolls to it (optionally a sub-block). */
export function openSection(section: string, sub?: string) {
  window.dispatchEvent(
    new CustomEvent("jp:open-section", { detail: { section, sub } })
  );
}
