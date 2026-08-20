export const profile = {
  name: "Joepeth Del Puerto",
  firstName: "Joepeth",
  role: "Office Admin | Admin Assistant",
  eyebrow: "OFFICE ADMIN | ADMIN ASSISTANT",
  location: "Dubai, United Arab Emirates",
  email: "joepethdelpuerto@outlook.com",
  phone: "+971 55 284 6874",
  phoneHref: "tel:+971552846874",
  linkedin: "https://linkedin.com/in/joepethdelpuerto",
  github: "https://github.com/ioepethi",
  // Leave facebook empty until a verified URL is provided.
  // When empty, the Facebook link is hidden across the site.
  facebook: "https://facebook.com/joepeth.delpuerto",
  // Profile image — drop a file at public/images/joepeth-del-puerto.jpg
  image: "/images/joepeth-del-puerto.jpg",
  imageAlt: "Portrait of Joepeth Del Puerto, Office Admin & Admin Assistant in Dubai",
  // Canonical / deployed URL (update when live domain is known)
  url: "https://joepeth-del-puerto.pages.dev",
} as const;

export type Profile = typeof profile;
