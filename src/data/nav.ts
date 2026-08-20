export type NavItem = {
  id: string;
  labelKey: string; // translation key
};

export const navItems: NavItem[] = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "education", labelKey: "nav.education" },
  { id: "contact", labelKey: "nav.contact" },
];
