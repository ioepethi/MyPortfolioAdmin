"use client";

import { Reveal, Stagger } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";

const steps = [
  { n: "01", t: "Discover", d: "Understand the objective." },
  { n: "02", t: "Define", d: "Identify the real problem." },
  { n: "03", t: "Structure", d: "Organize content, information and workflow." },
  { n: "04", t: "Create", d: "Design the visual or digital solution." },
  { n: "05", t: "Build", d: "Turn the idea into a working experience." },
  { n: "06", t: "Test", d: "Check usability, accuracy and performance." },
  { n: "07", t: "Refine", d: "Improve based on findings." },
  { n: "08", t: "Deliver", d: "Provide a usable, documented result." },
];

const principles = ["Clear", "Useful", "Consistent", "Accessible", "Scalable", "Purposeful"];

export function Process() {
  return (
    <>
      <section id="process" data-nav="light" className="t-light border-t border-[var(--line)]">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
          <SectionHead label="My Process" />

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-md uppercase">
                Every build follows
                <br />
                <span className="text-[var(--sub)]">the same discipline.</span>
              </h2>
            </Reveal>
            <div className="lg:col-span-7">
              <Stagger className="grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-2" gap={0.05}>
                {steps.map((s) => (
                  <li
                    key={s.n}
                    className="group list-none bg-[var(--bg)] p-6 transition-colors duration-300 hover:bg-[var(--card)]"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-sm text-[var(--color-green-deep)]">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--color-green-deep)]">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--mut)]">{s.d}</p>
                  </li>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Working principles — dark typographic statements */}
      <section data-nav="dark" className="t-dark">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <span className="label label-green">Working Principles</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-lg mt-8 uppercase">
              Good design
              <br />
              is not only
              <br />
              <span className="text-[var(--sub)]">about looking good.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-14 flex flex-wrap gap-x-8 gap-y-4" gap={0.07}>
            {principles.map((p) => (
              <li
                key={p}
                className="list-none text-2xl font-bold uppercase tracking-tight text-[var(--mut)] transition-colors duration-300 hover:text-[var(--color-green)] sm:text-3xl"
              >
                {p}
                <span className="text-[var(--color-green)]">.</span>
              </li>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="hairline-t mt-20 pt-10">
              <p className="display-md max-w-4xl uppercase">
                Good systems should{" "}
                <span className="text-[var(--color-green)]">reduce friction.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
