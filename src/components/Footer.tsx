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
      <div className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div
              aria-hidden
              className="h-9 w-9 bg-[var(--fg)]"
              style={{
                WebkitMaskImage: "url(/logo.png)",
                maskImage: "url(/logo.png)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
            <p className="mt-4 text-sm font-extrabold uppercase tracking-tight">
              Joepeth Del Puerto
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--mut)]">
              Administrative &amp; Operations Professional
              <br />
              with an IT &amp; Digital Systems Background
            </p>
            <p className="label mt-3">{profile.location}</p>
          </div>

          {/* Index */}
          <nav aria-label="Footer index">
            <span className="label">Index</span>
            <ul className="mt-4 space-y-2">
              {indexLinks.map((l) => (
                <li key={l.section}>
                  <button
                    onClick={() => go(l.section)}
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
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

          {/* Links */}
          <div>
            <span className="label">Links</span>
            <ul className="mt-4 space-y-2">
              {extLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center">
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
