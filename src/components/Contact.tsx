"use client";

import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";
import { WhatsappIcon } from "./ui/BrandIcons";

const areas = [
  "Graphic Design",
  "E-Commerce",
  "Digital",
  "IT / Technical Support",
  "Administration",
  "Operations",
  "Project Coordination",
];

export function Contact() {
  return (
    <section id="contact" data-nav="dark" className="t-dark border-t border-[var(--line)]">
      {/* Availability strip */}
      <div className="hairline-b">
        <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <h2 className="display-md uppercase">
              Currently open
              <br />
              <span className="text-[var(--color-green)]">to opportunities.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="label">{profile.location}</span>
                <span className="inline-flex items-center gap-2 border border-[var(--color-green)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)]">
                  Immediate joiner
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="label mt-8">Open to opportunities across</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {areas.map((a) => (
                  <li key={a} className="text-sm font-bold uppercase tracking-tight text-[var(--fg)]">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Main contact */}
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-36">
        <Reveal>
          <span className="label label-green">Contact</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-xl mt-8 uppercase">
            Have a problem
            <br />
            to solve?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="display-md mt-4 text-[var(--color-green)]">Let&apos;s talk.</p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-[var(--mut)]">
            Whether you need a better digital experience, stronger product
            presentation, cleaner processes, or a practical system — I&apos;d be
            happy to discuss the problem and explore the solution.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 bg-[var(--color-green)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b0d0c] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={15} strokeWidth={2.5} />
              Email me
            </a>
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border border-[var(--line-strong)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--fg)] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              <WhatsappIcon size={15} />
              WhatsApp me
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border border-[var(--line-strong)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--fg)] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              <FileText size={15} strokeWidth={2} />
              View CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-3">
            {[
              { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { label: "Phone", value: profile.phone, href: profile.phoneHref },
              { label: "Location", value: profile.location, href: undefined },
            ].map((c) => {
              const inner = (
                <div className="group flex items-center justify-between bg-[var(--bg)] p-6 transition-colors duration-300 hover:bg-[var(--card)]">
                  <div>
                    <span className="label">{c.label}</span>
                    <p className="mt-2 text-sm font-semibold text-[var(--fg)]">
                      {c.value}
                    </p>
                  </div>
                  {c.href && (
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="text-[var(--sub)] transition-colors duration-300 group-hover:text-[var(--color-green)]"
                      aria-hidden
                    />
                  )}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
