"use client";

import { DropdownSection } from "./ui/Dropdown";
import { profile } from "@/data/profile";

const drivers = [
  "Organization",
  "Continuous improvement",
  "Problem solving",
  "Technology",
  "Learning",
  "Team support",
  "Operational efficiency",
  "Customer service",
];

export function WhoIAm() {
  return (
    <DropdownSection id="who" index="01" title="Who I Am" theme="light">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* About */}
        <div id="who-about" className="scroll-mt-24 lg:col-span-6">
          <span className="label label-green">About Me</span>
          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-[var(--mut)] sm:text-base">
            I am an Administrative &amp; Operations Professional with an IT
            background, experienced in supporting daily operations, coordinating
            teams, managing records, preparing reports, supporting customers, and
            improving business workflows.
          </p>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-[var(--mut)] sm:text-base">
            My IT background strengthens my administrative work by allowing me to
            understand digital systems, troubleshoot technical issues, manage
            data, and identify opportunities to improve processes.
          </p>
          <p className="mt-6 inline-block border border-[var(--line-strong)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--fg)]">
            {profile.tagline}
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="space-y-8 lg:col-span-6">
          <div id="who-mission" className="scroll-mt-24 border-l-2 border-[var(--color-green)] pl-5">
            <span className="label">My Mission</span>
            <p className="mt-3 text-base font-bold leading-snug tracking-tight sm:text-lg">
              To help organizations work better by bringing structure,
              technology, and practical problem-solving into everyday operations.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--mut)]">
              I aim to make work more organized, information more accessible,
              processes more efficient, and teams better supported.
            </p>
          </div>
          <div id="who-vision" className="scroll-mt-24 border-l-2 border-[var(--line-strong)] pl-5">
            <span className="label">My Vision</span>
            <p className="mt-3 text-base font-bold leading-snug tracking-tight sm:text-lg">
              To become a trusted operations and administrative professional who
              connects people, processes, and technology to create simpler and
              more efficient ways of working.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--mut)]">
              I want to continuously grow across administration, operations,
              digital systems, automation, and business technology while creating
              practical solutions that make a measurable difference.
            </p>
          </div>
        </div>
      </div>

      {/* Drivers */}
      <div id="who-drivers" className="mt-12 scroll-mt-24 border-t border-[var(--line)] pt-8">
        <span className="label">What Drives Me</span>
        <ul className="mt-4 flex flex-wrap gap-2">
          {drivers.map((d) => (
            <li
              key={d}
              className="border border-[var(--line)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--mut)] transition-colors duration-200 hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </DropdownSection>
  );
}
