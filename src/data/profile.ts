export const profile = {
  name: "Joepeth Del Puerto",
  firstName: "Joepeth",
  monogram: "JD",
  role: "Administrative & Operations Professional",
  positioning: "Administrative & Operations Professional with an IT & Digital Systems Background",
  tagline: "Administration + Operations + IT + Digital Systems + Problem Solving",
  statement:
    "I keep teams organized, operations moving, and work flowing efficiently.",
  location: "Dubai, United Arab Emirates",
  availability: "Open to opportunities across the UAE",
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
    "Portrait of Joepeth Del Puerto — administrative and operations professional in Dubai",
  cvUrl: "/Joepeth-Del-Puerto-CV.pdf",
  url: "https://www.joepeth.site",
} as const;

export type Profile = typeof profile;
