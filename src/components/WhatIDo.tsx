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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 transition-colors duration-300 hover:border-[var(--line-strong)] sm:p-7"
            >
              <h3 className="text-[15px] font-semibold tracking-[-0.01em]">
                {cap.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cap.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience — nested */}
      <div className="mt-5 space-y-4">
        <NestedDisclosure id="what-experience" title="Experience">
          <div>
            {experiences.map((e) => (
              <article
                key={e.id}
                className="grid grid-cols-1 gap-4 border-t border-[var(--line)] py-6 first:border-0 first:pt-2 last:pb-2 sm:grid-cols-12"
              >
                <div className="sm:col-span-3">
                  <span className="font-mono text-xs text-[var(--color-green)]">
                    {e.period}
                  </span>
                  {e.current && (
                    <span className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-green)]/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-green)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                      Current
                    </span>
                  )}
                </div>
                <div className="sm:col-span-4">
                  <h4 className="text-[15px] font-semibold tracking-[-0.01em]">
                    {e.role}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-[var(--mut)]">
                    {e.company} — {e.location}
                  </p>
                </div>
                <ul className="flex flex-wrap content-start gap-1.5 sm:col-span-5">
                  {e.highlights.map((h) => (
                    <li key={h} className="chip">
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
            className="group mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--color-green)]"
          >
            View Full Experience
            <ArrowUpRight
              size={14}
              strokeWidth={2.25}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </NestedDisclosure>

        {/* Education — nested */}
        <NestedDisclosure id="what-education" title="Education">
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-12">
            <div className="sm:col-span-3">
              <span className="font-mono text-xs text-[var(--color-green)]">
                {education.period}
              </span>
            </div>
            <div className="sm:col-span-9">
              <h4 className="text-[15px] font-semibold tracking-[-0.01em]">
                {education.degree}
              </h4>
              <p className="mt-1 text-sm text-[var(--mut)]">{education.school}</p>
              <p className="mt-2.5 inline-block rounded-full bg-[var(--color-green)]/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[var(--color-green)]">
                Major — {education.major}
              </p>
            </div>
          </div>
        </NestedDisclosure>
      </div>
    </DropdownSection>
  );
}
