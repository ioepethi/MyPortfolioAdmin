"use client";

import { ArrowUp } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { visibleSocialLinks } from "@/data/social";

const extLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "WhatsApp", href: profile.whatsappHref },
  { label: "CV", href: profile.cvUrl },
];

export function Footer() {
  return (
    <footer data-nav="dark" className="t-dark border-t border-[var(--line)]">
      <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-20 sm:px-8">
        {/* Giant name */}
        <p className="display-xl select-none uppercase leading-[0.85]" aria-hidden>
          Joepeth
          <br />
          <span className="num-outline">Del Puerto</span>
        </p>
        <p className="label mt-6 !text-[var(--color-green)]">
          {profile.positioning}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-[var(--line)] pt-10 sm:grid-cols-3">
          <nav aria-label="Footer">
            <span className="label">Index</span>
            <ul className="mt-4 space-y-2">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-sm font-semibold uppercase tracking-tight text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <span className="label">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-[var(--mut)]">
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-[var(--color-green)]">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="transition-colors hover:text-[var(--color-green)]">
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
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
                    className="text-sm font-semibold uppercase tracking-tight text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              {visibleSocialLinks
                .filter((s) => s.key === "facebook")
                .map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold uppercase tracking-tight text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-xs leading-relaxed text-[var(--sub)]">
            Built with curiosity, systems thinking, and a commitment to making
            work better.
          </p>
          <p className="text-xs text-[var(--sub)]">
            © 2026 Joepeth Del Puerto
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="label inline-flex items-center gap-2 transition-colors hover:text-[var(--color-green)]"
          >
            Back to top
            <ArrowUp size={13} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
