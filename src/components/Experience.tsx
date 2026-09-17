"use client";

import { Reveal } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" data-nav="dark" className="t-dark border-t border-[var(--line)]">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead label="Experience" />

        <Reveal className="mt-12">
          <h2 className="display-md max-w-3xl uppercase">
            The record behind
            <br />
            <span className="text-[var(--sub)]">the positioning.</span>
          </h2>
        </Reveal>

        <div className="mt-14">
          {experiences.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <article className="grid grid-cols-1 gap-8 border-t border-[var(--line)] py-10 lg:grid-cols-12">
                {/* Period */}
                <div className="lg:col-span-3">
                  <span className="font-mono text-sm text-[var(--color-green)]">
                    {e.period}
                  </span>
                  <span className="label mt-2 block">{e.location}</span>
                  {e.current && (
                    <span className="mt-4 inline-flex items-center gap-2 border border-[var(--color-green)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-green)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                      Current
                    </span>
                  )}
                </div>

                {/* Role */}
                <div className="lg:col-span-4">
                  <h3 className="display-sm uppercase">{e.role}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--mut)]">
                    {e.company}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {e.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-[var(--mut)]"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-[var(--color-green)]" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Areas */}
                <div className="lg:col-span-5">
                  <span className="label">Scope</span>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {e.areas.map((a) => (
                      <li
                        key={a}
                        className="border border-[var(--line)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--mut)] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Education — typographic, not a card */}
        <Reveal className="mt-20 border-t border-[var(--line)] pt-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <span className="label">Education</span>
            </div>
            <div className="lg:col-span-9">
              <p className="display-md uppercase">
                B.S. Information
                <br />
                Technology
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-green)]">
                  Major — Database Management
                </span>
                <span className="text-sm text-[var(--mut)]">
                  University of Science and Technology of Southern Philippines
                </span>
                <span className="font-mono text-sm text-[var(--sub)]">May 2024</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
