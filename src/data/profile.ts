export const profile = {
  name: "Joepeth Del Puerto",
  firstName: "Joepeth",
  monogram: "JD",
  role: "Multidisciplinary Digital Professional",
  positioning: "DESIGN × E-COMMERCE × IT × OPERATIONS",
  statement:
    "I combine creative design, e-commerce, technology, and operational thinking to turn ideas and business problems into practical digital solutions.",
  location: "Dubai, United Arab Emirates",
  email: "joepethdelpuerto@outlook.com",
  phone: "+971 55 284 6874",
  phoneHref: "tel:+971552846874",
  whatsappHref: "https://wa.me/971552846874",
  linkedin: "https://linkedin.com/in/joepethdelpuerto",
  github: "https://github.com/ioepethi",
  // Leave facebook empty until a verified URL is provided.
  // When empty, the Facebook link is hidden across the site.
  facebook: "https://facebook.com/joepeth.delpuerto",
  image: "/images/joepeth-del-puerto.jpg",
  imageAlt:
    "Portrait of Joepeth Del Puerto — multidisciplinary digital professional in Dubai",
  cvUrl: "/Joepeth-Del-Puerto-CV.pdf",
  url: "https://www.joepeth.site",
} as const;

export type Profile = typeof profile;
