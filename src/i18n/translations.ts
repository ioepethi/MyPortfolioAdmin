export type Language = "en" | "fil";

export const languages: { code: Language; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fil", label: "Filipino", short: "FIL" },
];

/**
 * Translation dictionary.
 *
 * Only UI chrome is translated. Factual CV information (names, companies,
 * dates, responsibilities, certifications, language proficiencies) is kept
 * identical across languages so meaning is never altered.
 */
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      cta: "Let's Connect",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Joepeth",
      statement: "Keeping teams organized, operations moving, and work flowing efficiently.",
      primaryCta: "View My Experience",
      secondaryCta: "Get In Touch",
      tertiaryCta: "View Projects",
      availability: "Open to opportunities in the UAE",
    },
    about: {
      eyebrow: "About Me",
      heading: "Administration with an eye for efficiency.",
      body: "Results-driven Administrative & Operations Professional with 5+ years of experience in administration, operations, and IT support across the UAE and the Philippines. I bring an ownership mentality, strong accountability, and a passion for improving processes, enabling team success, and delivering operational excellence.",
      itHeading: "Where my IT background strengthens my work",
      itPoints: [
        "Stronger understanding of digital workflows",
        "Confident technical troubleshooting and IT support",
        "Comfortable working with databases and records",
        "Advanced Microsoft Office and Excel capability",
        "IT asset management and reporting",
        "Process improvement backed by systems thinking",
      ],
      closing: "My IT degree is a professional advantage for administration — not a separate career. It helps me keep work moving, records accurate, and teams supported.",
    },
    skills: {
      eyebrow: "Core Competencies",
      heading: "A toolkit built for operations.",
      subheading: "Grouped by the work I actually do day to day.",
      groups: {
        administration: "Administration & Operations",
        reporting: "Reporting & Productivity",
        documentation: "Documentation & Records",
        it: "Information Technology",
      },
    },
    experience: {
      eyebrow: "Experience",
      heading: "A track record of keeping things running.",
      current: "Current",
      previous: "Previous",
      responsibilities: "Key responsibilities",
    },
    education: {
      eyebrow: "Education",
      heading: "Academic foundation.",
      major: "Major",
      additional: "Additional Information",
      license: "License",
      languages: "Languages",
    },
    projects: {
      eyebrow: "Featured Projects",
      heading: "Work that shows how I think.",
      subheading: "A mix of live web projects and a technical build — evidence of an admin who is genuinely comfortable with digital systems.",
      categories: {
        web: "Web Projects",
        technical: "Technical / GitHub Project",
      },
      liveDemo: "Live",
      viewCode: "View Code",
      viewDetails: "View Details",
      backToProjects: "Back to Projects",
      overview: "Overview",
      manualHeading: "How it works",
      manualSubheading: "A quick walkthrough of the experience, step by step.",
      step: "Step",
      of: "of",
      previous: "Previous",
      next: "Next",
      items: {
        brandpeth: {
          description:
            "I built this for my own business — an eco-friendly home store for the UAE, offering plant-based, pet-safe, and organic home products with delivery across Dubai, Abu Dhabi, and all emirates. A live e-commerce experience designed for clarity, trust, and a smooth checkout.",
        },
        pestbrand: {
          description:
            "I built this for my own business — an eco-friendly pest prevention and garden care store for UAE homes, safe for families and effective against pests. A focused retail site with clear product information and UAE-wide delivery.",
        },
        uaeIntel: {
          description:
            "A business intelligence research system for identifying UAE companies, executives, founders, and decision-makers. A TypeScript monorepo with a CLI, a Next.js web dashboard, and core, database, research, and report packages. Evidence of real technical depth — building and working with digital systems end to end.",
        },
        uOffice: {
          description:
            "I built this CRM for the company to manage tasks, departments, meetings, documents, visitors, and office supplies with role-based access, and the team is thrilled to finally have a dedicated CRM of their own. A full-stack build with a React/TypeScript client and an Express/SQLite server, deployed on Cloudflare Pages and Workers.",
        },
        edgePlusFitness: {
          description:
            "I built this as a portfolio project — a gym point-of-sale and management system for Edge Plus Fitness Center. It brings memberships, walk-in and member sales, product inventory, attendance tracking, leads, transactions, and reporting into a single POS dashboard with VAT-ready checkout and multiple payment methods. A Next.js and TypeScript build deployed on Cloudflare Pages.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's make work flow better.",
      body: "I'm open to Office Admin, Administrative Assistant, and Operations opportunities across the UAE. If you need someone organized, dependable, and technically comfortable, I'd love to hear from you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      cta: "Get In Touch",
      connectHeading: "Let's Connect",
    },
    footer: {
      tagline: "Office Admin | Admin Assistant",
      builtWith: "Built with care",
      rights: "© 2026 Joepeth Del Puerto. All rights reserved.",
      backToTop: "Back to top",
    },
  },
  fil: {
    nav: {
      home: "Home",
      about: "Tungkol",
      skills: "Kakayahan",
      experience: "Karanasan",
      projects: "Proyekto",
      education: "Edukasyon",
      contact: "Kontak",
      cta: "Makipag-ugnayan",
      openMenu: "Buksan ang menu",
      closeMenu: "Isara ang menu",
      switchLanguage: "Palitan ang wika",
    },
    hero: {
      greeting: "Kamusta, ako si",
      name: "Joepeth",
      statement: "Pinapanatiling organisado ang mga koponan, umaandar ang operasyon, at maayos ang daloy ng trabaho.",
      primaryCta: "Tingnan ang Karanasan",
      secondaryCta: "Makipag-ugnayan",
      tertiaryCta: "Tingnan ang Proyekto",
      availability: "Bukas sa mga pagkakataon sa UAE",
    },
    about: {
      eyebrow: "Tungkol Sa Akin",
      heading: "Administrasyon na may mataas na pansin sa katumpakan.",
      body: "Isang Administrative & Operations Professional na may 5+ taong karanasan sa administrasyon, operasyon, at IT support sa UAE at Pilipinas. May pag-iingat sa responsibilidad, malakas na pananagutan, at pagmamalasakit sa pagpapabuti ng proseso, pagtulong sa tagumpay ng koponan, at pagbibigay ng mahusay na operasyon.",
      itHeading: "Kung saan nagpapalakas ang aking IT background",
      itPoints: [
        "Mas malalim na pag-unawa sa digital workflows",
        "May kumpiyansa sa technical troubleshooting at IT support",
        "Komportable sa mga database at records",
        "Advanced na Microsoft Office at Excel",
        "IT asset management at pag-uulat",
        "Pagpapabuti ng proseso sa tulong ng systems thinking",
      ],
      closing: "Ang aking IT degree ay isang bentahe sa administrasyon — hindi isang hiwalay na karera. Tumutulong itong mapanatiling umaandar ang trabaho, tumpak ang records, at suportado ang mga koponan.",
    },
    skills: {
      eyebrow: "Pangunahing Kakayahan",
      heading: "Isang toolkit para sa operasyon.",
      subheading: "Naka-grupo ayon sa pang-araw-araw na trabaho.",
      groups: {
        administration: "Administrasyon & Operasyon",
        reporting: "Pag-uulat & Produktibidad",
        documentation: "Dokumentasyon & Records",
        it: "Information Technology",
      },
    },
    experience: {
      eyebrow: "Karanasan",
      heading: "Napatunayang pinapanatiling umaandar ang lahat.",
      current: "Kasalukuyan",
      previous: "Nakaraan",
      responsibilities: "Pangunahing responsibilidad",
    },
    education: {
      eyebrow: "Edukasyon",
      heading: "Akademikong pundasyon.",
      major: "Major",
      additional: "Karagdagang Impormasyon",
      license: "Lisensya",
      languages: "Mga Wika",
    },
    projects: {
      eyebrow: "Tampok na Proyekto",
      heading: "Trabahong nagpapakita kung paano ako mag-isip.",
      subheading: "Halo ng live na web proyekto at isang technical build — patunay ng admin na komportable sa digital systems.",
      categories: {
        web: "Mga Web Proyekto",
        technical: "Technical / GitHub Proyekto",
      },
      liveDemo: "Live",
      viewCode: "Tingnan ang Code",
      viewDetails: "Tingnan ang Detalye",
      backToProjects: "Bumalik sa mga Proyekto",
      overview: "Buod",
      manualHeading: "Paano ito gumagana",
      manualSubheading: "Isang mabilis na paglalakad sa karanasan, hakbang-hakbang.",
      step: "Hakbang",
      of: "sa",
      previous: "Nakaraan",
      next: "Susunod",
      items: {
        brandpeth: {
          description:
            "Itinayo ko ito para sa sarili kong negosyo — isang eco-friendly home store para sa UAE na nag-aalok ng plant-based, pet-safe, at organic na home products, may delivery sa buong Dubai, Abu Dhabi, at lahat ng emirate. Isang live na e-commerce na dinisenyo para sa kalinawan, tiwala, at maayos na checkout.",
        },
        pestbrand: {
          description:
            "Itinayo ko ito para sa sarili kong negosyo — isang eco-friendly pest prevention at garden care store para sa mga tahanan sa UAE, ligtas para sa pamilya at epektibo laban sa peste. Isang retail site na may malinaw na impormasyon ng produkto at UAE-wide delivery.",
        },
        uaeIntel: {
          description:
            "Isang business intelligence research system para sa pagtukoy ng mga UAE company, executive, founder, at decision-maker. TypeScript monorepo na may CLI, Next.js web dashboard, at core, database, research, at report packages. Patunay ng tunay na technical na kakayahan.",
        },
        uOffice: {
          description:
            "Itinayo ko ang CRM na ito para sa kumpanya upang pamahalaan ang mga tasks, departments, meetings, documents, visitors, at office supplies gamit ang role-based access, at tuwang-tuwa ang koponan na sa wakas ay may sarili na silang CRM. Isang full-stack build gamit ang React/TypeScript client at Express/SQLite server, na naka-deploy sa Cloudflare Pages at Workers.",
        },
        edgePlusFitness: {
          description:
            "Itinayo ko ito bilang isang portfolio project — isang gym point-of-sale at management system para sa Edge Plus Fitness Center. Pinagsasama nito ang memberships, walk-in at member sales, product inventory, attendance tracking, leads, transactions, at reporting sa iisang POS dashboard na may VAT-ready checkout at iba't ibang payment method. Isang Next.js at TypeScript build na naka-deploy sa Cloudflare Pages.",
        },
      },
    },
    contact: {
      eyebrow: "Kontak",
      heading: "Papanlahing mas maayos ang daloy ng trabaho.",
      body: "Bukas ako sa Office Admin, Administrative Assistant, at Operations na pagkakataon sa buong UAE. Kung naghahanap kayo ng organisado, mapagkakatiwalaan, at komportable sa teknolohiya, nais kong makarinig mula sa inyo.",
      emailLabel: "Email",
      phoneLabel: "Telepono",
      locationLabel: "Lokasyon",
      cta: "Makipag-ugnayan",
      connectHeading: "Makipag-ugnayan",
    },
    footer: {
      tagline: "Office Admin | Admin Assistant",
      builtWith: "Gawa ng may pag-iingat",
      rights: "© 2026 Joepeth Del Puerto. Lahat ng karapatan ay nakareserba.",
      backToTop: "Bumalik sa taas",
    },
  },
} as const;

export type TranslationDict = (typeof translations)["en"];
