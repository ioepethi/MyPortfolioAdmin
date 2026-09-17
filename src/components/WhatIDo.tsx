"use client";

import { ArrowUpRight } from "lucide-react";
import { DropdownSection, NestedDisclosure } from "./ui/Dropdown";
import { education, experiences } from "@/data/experience";
import { profile } from "@/data/profile";

const capabilities = [
  {
    id: "administration",
    label: "Administration",
    items: [
      "Office administration",
      "Records management",
      "Documentation",
      "Data entry & accuracy",
      "Report preparation",
      "Scheduling & coordination",
      "Correspondence & communication",
      "Office resource management",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    items: [
      "Daily operations coordination",
      "Team coordination",
      "Task & schedule management",
      "Vendor coordination",
      "Procurement support",
      "Inventory tracking",
      "Customer coordination",
      "Operational reporting",
      "Process improvement",
    ],
  },
  {
    id: "it",
    label: "IT & Digital Systems",
    items: [
      "Technical support",
      "Hardware/software troubleshooting",
      "IT asset management",
      "Digital records",
      "Business systems",
      "Workflow improvement",
      "Microsoft Office / Excel",
      "AI & automation",
    ],
  },
  {
    id: "commerce",
    label: "E-Commerce & Digital Business",
    items: [
      "Product management",
      "Online operations",
      "Inventory",
      "Customer service",
      "Product content",
      "Website management",
      "Digital workflows",
      "E-commerce administration",
    ],
  },
];

export function WhatIDo() {
  return (
    <DropdownSection id="what" index="02" title="What I Do" theme="dark">
      {/* Capabilities */}
      <div id="what-capabilities" className="scroll-mt-24">
        <div className="grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div key={cap.id} className="bg-[var(--bg)] p-6 sm:p-7">
              <h3 className="text-base font-bold uppercase tracking-tight">
                {cap.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="bg-[var(--chip)] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--mut)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience — nested */}
      <NestedDisclosure id="what-experience" title="Experience">
        <div>
          {experiences.map((e) => (
            <article
              key={e.id}
              className="grid grid-cols-1 gap-4 border-b border-[var(--line)] py-6 last:border-0 sm:grid-cols-12"
            >
              <div className="sm:col-span-3">
                <span className="font-mono text-xs text-[var(--color-green)]">
                  {e.period}
                </span>
                {e.current && (
                  <span className="ml-3 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)]">
                    <span className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                    Current
                  </span>
                )}
              </div>
              <div className="sm:col-span-4">
                <h4 className="text-base font-bold uppercase tracking-tight">
                  {e.role}
                </h4>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--mut)]">
                  {e.company} — {e.location}
                </p>
              </div>
              <ul className="flex flex-wrap content-start gap-1.5 sm:col-span-5">
                {e.highlights.map((h) => (
                  <li
                    key={h}
                    className="bg-[var(--chip)] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--mut)]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)]"
        >
          View Full Experience
          <ArrowUpRight
            size={13}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </NestedDisclosure>

      {/* Education — nested */}
      <NestedDisclosure id="what-education" title="Education">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <div className="sm:col-span-3">
            <span className="font-mono text-xs text-[var(--color-green)]">
              {education.period}
            </span>
          </div>
          <div className="sm:col-span-9">
            <h4 className="text-base font-bold uppercase tracking-tight">
              {education.degree}
            </h4>
            <p className="mt-1 text-sm text-[var(--mut)]">{education.school}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-green)]">
              Major — {education.major}
            </p>
          </div>
        </div>
      </NestedDisclosure>
    </DropdownSection>
  );
}
