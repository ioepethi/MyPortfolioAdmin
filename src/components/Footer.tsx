"use client";

import { ArrowUp } from "lucide-react";
import { openSection } from "@/data/nav";
import { profile } from "@/data/profile";

const indexLinks = [
  { label: "Home", section: "top" },
  { label: "Who I Am", section: "who" },
  { label: "What I Do", section: "what" },
  { label: "Tools & Technologies", section: "tools" },
  { label: "Work", section: "work" },
  { label: "Contact", section: "contact" },
];

const extLinks = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "WhatsApp", href: profile.whatsappHref },
  { label: "Resume / CV", href: profile.cvUrl },
];

export function Footer() {
  const go = (section: string) => {
    if (section === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else if (["who", "what", "tools"].includes(section)) openSection(section);
    else document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-nav="dark" className="t-dark border-t border-[var(--line)]">
      <div className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8">
        {/* Name + positioning */}
        <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-3xl font-extrabold uppercase leading-none tracking-[-0.03em] sm:text-4xl">
              Joepeth Del Puerto
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--mut)]">
              Administrative &amp; Operations Professional
              <br />
              with an IT &amp; Digital Systems Background
            </p>
          </div>
          <span className="label">{profile.location}</span>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-3">
          <nav aria-label="Footer index">
            <span className="label">Index</span>
            <ul className="mt-4 space-y-2">
              {indexLinks.map((l) => (
                <li key={l.section}>
                  <button
                    onClick={() => go(l.section)}
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <span className="label">Contact</span>
            <ul className="mt-4 space-y-3 text-xs text-[var(--mut)]">
              <li>
                <span className="label !text-[9px]">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-0.5 block font-semibold text-[var(--fg)] transition-colors hover:text-[var(--color-green)]"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="label !text-[9px]">Phone</span>
                <a
                  href={profile.phoneHref}
                  className="mt-0.5 block font-semibold text-[var(--fg)] transition-colors hover:text-[var(--color-green)]"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="label !text-[9px]">Location</span>
                <span className="mt-0.5 block font-semibold text-[var(--fg)]">
                  Dubai, UAE
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="label">Links</span>
            <ul className="mt-4 space-y-2">
              {extLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center">
          <p className="text-[11px] text-[var(--sub)]">
            © 2026 Joepeth Del Puerto · Built with care · Dubai, UAE
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="label inline-flex items-center gap-2 transition-colors hover:text-[var(--color-green)]"
          >
            Back to top
            <ArrowUp size={12} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
