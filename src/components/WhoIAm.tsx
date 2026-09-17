"use client";

import { ArrowDown } from "lucide-react";
import { Reveal, Stagger } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";
import { profile } from "@/data/profile";

const map = [
  { from: "Design", to: "Communication" },
  { from: "E-Commerce", to: "Customer Experience" },
  { from: "IT", to: "Systems" },
  { from: "Operations", to: "Efficiency" },
];

const dna = [
  "Designer",
  "E-Commerce Specialist",
  "Technical Thinker",
  "Problem Solver",
  "Project Builder",
  "Operations Mindset",
];

const disciplines = [
  "E-commerce",
  "Product management",
  "Catalog management",
  "Graphic & content creation",
  "IT support",
  "Administration",
  "Operations",
  "Data & reporting",
  "Digital systems",
  "Project coordination",
  "Process improvement",
];

export function WhoIAm() {
  return (
    <section id="who" data-nav="dark" className="t-dark">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="01" label="Who I Am" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Headline + copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-[clamp(2.4rem,5.4vw,5.75rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em]">
                Creative
                <br />
                Thinking.
                <span className="block text-[var(--sub)]">Technical</span>
                <span className="block text-[var(--sub)]">Understanding.</span>
                <span className="block">Business</span>
                <span className="block">Awareness.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-10 max-w-xl text-pretty text-base leading-relaxed text-[var(--mut)] sm:text-lg">
                I&apos;m a multidisciplinary professional. My IT background lets
                me understand systems. My e-commerce work lets me understand
                products, customers, content, marketplaces, data and conversion.
                Design lets me communicate it visually — and operations
                experience means I understand how businesses actually work.
              </p>
            </Reveal>

            <Stagger className="mt-8 flex max-w-xl flex-wrap gap-x-5 gap-y-2" gap={0.04}>
              {disciplines.map((d) => (
                <li key={d} className="label list-none !text-[var(--mut)]">
                  {d}
                </li>
              ))}
            </Stagger>
          </div>

          {/* Discipline → outcome diagram */}
          <div className="lg:col-span-5">
            <Stagger className="hairline-t" gap={0.08}>
              {map.map((row) => (
                <li
                  key={row.from}
                  className="hairline-b grid list-none grid-cols-[1fr_auto_1fr] items-center gap-4 py-5"
                >
                  <span className="text-lg font-bold uppercase tracking-tight sm:text-xl">
                    {row.from}
                  </span>
                  <ArrowDown
                    size={16}
                    strokeWidth={2}
                    className="rotate-[-90deg] text-[var(--color-green)]"
                    aria-hidden
                  />
                  <span className="text-right text-sm font-medium uppercase tracking-[0.12em] text-[var(--mut)]">
                    {row.to}
                  </span>
                </li>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-[var(--fg)]">
                {profile.name}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Professional DNA */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <span className="label">My Professional DNA</span>
          </Reveal>
          <Stagger
            className="mt-8 grid grid-cols-2 gap-px bg-[var(--line)] sm:grid-cols-3 lg:grid-cols-6"
            gap={0.06}
          >
            {dna.map((d, i) => (
              <li
                key={d}
                className="group flex list-none flex-col justify-between gap-10 bg-[var(--bg)] p-5 transition-colors duration-300 hover:bg-[var(--card)]"
              >
                <span className="font-mono text-sm text-[var(--color-green)]">
                  0{i + 1}
                </span>
                <span className="text-sm font-bold uppercase leading-tight tracking-tight transition-colors duration-300 group-hover:text-[var(--color-green)]">
                  {d}
                </span>
              </li>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
