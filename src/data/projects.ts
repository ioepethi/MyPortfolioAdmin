export type Project = {
  id: string;
  name: string;
  categoryKey: string;
  descriptionKey: string;
  /** Short factual descriptor (not invented). */
  blurb: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Visual identity for the generated thumbnail. */
  thumbnail: {
    from: string;
    to: string;
    glyph: string;
  };
};

export const projects: Project[] = [
  {
    id: "brandpeth",
    name: "BrandPeth.ae",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.brandpeth.description",
    blurb: "Eco-friendly home store for the UAE",
    tags: ["React", "Vite", "Tailwind CSS", "Stripe"],
    liveUrl: "https://brandpeth-ae.pages.dev",
    thumbnail: { from: "#064e3b", to: "#10b981", glyph: "B" },
  },
  {
    id: "pestbrand",
    name: "PestBrand Home & Garden",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.pestbrand.description",
    blurb: "Eco-friendly pest control & garden care",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://pestbrand-ae.pages.dev",
    thumbnail: { from: "#14532d", to: "#3f8f56", glyph: "P" },
  },
  {
    id: "uae-intel",
    name: "UAE-Intel",
    categoryKey: "projects.categories.technical",
    descriptionKey: "projects.items.uaeIntel.description",
    blurb: "UAE person & company intelligence system",
    tags: ["TypeScript", "Next.js", "Monorepo", "CLI"],
    githubUrl: "https://github.com/ioepethi/UAE-Intel",
    thumbnail: { from: "#0f172a", to: "#3b82f6", glyph: "U" },
  },
  {
    id: "u-office",
    name: "U-Office",
    categoryKey: "projects.categories.web",
    descriptionKey: "projects.items.uOffice.description",
    blurb: "Internal office operations management system",
    tags: ["React", "TypeScript", "Express", "Cloudflare"],
    liveUrl: "https://uoffice-app.pages.dev",
    githubUrl: "https://github.com/ioepethi/U-Office",
    thumbnail: { from: "#312e81", to: "#6366f1", glyph: "U" },
  },
];
