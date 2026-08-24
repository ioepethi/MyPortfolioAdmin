import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Office Admin & Admin Assistant in Dubai with 6+ years in administration, operations, reporting, documentation, and IT support. Open to opportunities across the UAE.";
const keywords = [
  "Office Admin Dubai",
  "Administrative Assistant Dubai",
  "Administrative Coordinator",
  "Office Administration",
  "Operations Administration",
  "Admin Assistant UAE",
  "Administrative Operations",
  "IT Support",
  "Reporting",
  "Microsoft Excel",
  "Joepeth Del Puerto",
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
        height: 1500,
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
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230a0b0e'/%3E%3Ctext x='50' y='68' font-family='Arial,sans-serif' font-size='52' font-weight='700' fill='%23e8eaf0' text-anchor='middle'%3EJD%3C/text%3E%3C/svg%3E",
      },
    ],
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
    "Operations Administration",
    "Reporting",
    "Documentation Management",
    "Records Management",
    "Microsoft Excel",
    "IT Support",
    "Database Management",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-bg)] font-sans text-[var(--color-fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
