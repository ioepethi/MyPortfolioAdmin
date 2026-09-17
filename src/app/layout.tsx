import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-var.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/inter-var-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const title =
  "Joepeth Del Puerto — Administrative & Operations Professional";
const description =
  "Joepeth Del Puerto is an administrative and operations professional in Dubai with an IT and digital systems background — keeping teams organized, operations moving, and work flowing efficiently.";
const keywords = [
  "Joepeth Del Puerto",
  "Administrative Professional Dubai",
  "Operations Professional UAE",
  "Administrative Coordinator",
  "Team Leader Dubai",
  "IT Support Dubai",
  "Digital Systems",
  "Process Improvement",
  "Records Management",
  "Vendor Coordination",
  "E-Commerce Operations",
  "Automation",
];

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  applicationName: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: profile.url,
    siteName: profile.name,
    title,
    description,
    images: [
      {
        url: profile.image,
        width: 1200,
        height: 1200,
        alt: profile.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profile.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/logo-icon.png", type: "image/png" }],
    apple: [{ url: "/logo-icon.png", type: "image/png" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  url: profile.url,
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
  knowsAbout: [
    "Office Administration",
    "Operations",
    "Information Technology",
    "Digital Systems",
    "Records Management",
    "E-Commerce",
    "Process Improvement",
    "Technical Support",
    "Vendor Coordination",
    "Microsoft Excel",
    "Automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[var(--color-ink)] font-sans text-[var(--color-off)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
