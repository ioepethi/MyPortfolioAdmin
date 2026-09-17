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
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* About */}
        <div id="who-about" className="card scroll-mt-24 p-7 sm:p-8">
          <span className="label label-green">About Me</span>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-[var(--mut)]">
            I am an Administrative &amp; Operations Professional with an IT
            background, experienced in supporting daily operations, coordinating
            teams, managing records, preparing reports, supporting customers, and
            improving business workflows.
          </p>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-[var(--mut)]">
            My IT background strengthens my administrative work by allowing me to
            understand digital systems, troubleshoot technical issues, manage
            data, and identify opportunities to improve processes.
          </p>
          <p className="mt-6 inline-block rounded-full border border-[var(--color-green-deep)]/30 bg-[var(--tint)] px-4 py-2 text-[11px] font-semibold tracking-[0.06em] text-[var(--color-green-deep)]">
            {profile.tagline}
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="space-y-5">
          <div id="who-mission" className="card scroll-mt-24 p-7 sm:p-8">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" aria-hidden />
              <span className="label">My Mission</span>
            </div>
            <p className="mt-4 text-[17px] font-semibold leading-snug tracking-[-0.015em]">
              To help organizations work better by bringing structure,
              technology, and practical problem-solving into everyday operations.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--mut)]">
              I aim to make work more organized, information more accessible,
              processes more efficient, and teams better supported.
            </p>
          </div>
          <div id="who-vision" className="card scroll-mt-24 p-7 sm:p-8">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[var(--sub)]" aria-hidden />
              <span className="label">My Vision</span>
            </div>
            <p className="mt-4 text-[17px] font-semibold leading-snug tracking-[-0.015em]">
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
      <div id="who-drivers" className="mt-6 scroll-mt-24 rounded-2xl border border-[var(--line)] p-7 sm:p-8">
        <span className="label">What Drives Me</span>
        <ul className="mt-4 flex flex-wrap gap-2">
          {drivers.map((d) => (
            <li key={d} className="chip">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </DropdownSection>
  );
}
