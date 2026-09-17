"use client";

import { Reveal } from "./ui/Reveal";

/**
 * Mission + Vision — typographic manifesto blocks, not motivational quotes.
 */
export function Manifesto() {
  return (
    <>
      {/* Mission — dark manifesto */}
      <section id="mission" data-nav="dark" className="t-dark">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-36">
          <Reveal>
            <span className="label label-green">My Mission</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="display-sm mt-8 max-w-5xl text-balance !leading-[1.12] sm:!leading-[1.08]">
              To turn ideas, information, and everyday business challenges into{" "}
              <span className="text-[var(--color-green)]">clear</span>,{" "}
              <span className="text-[var(--color-green)]">useful</span>, and{" "}
              <span className="text-[var(--color-green)]">scalable</span>{" "}
              digital solutions — combining design, technology, e-commerce, and
              operational thinking to help people and businesses work better.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex items-center gap-4">
              <span className="h-px flex-1 bg-[var(--line)]" aria-hidden />
              <span className="label">Manifesto — 001</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision — light field, BRIDGE as the visual anchor */}
      <section data-nav="light" className="t-light relative overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="label label-green">My Vision</span>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-[var(--mut)]">
                  To become a versatile digital professional who bridges
                  creativity, technology, and business — designing experiences,
                  building systems, and creating practical solutions that make
                  work simpler, smarter, and more effective.
                </p>
              </Reveal>
            </div>

            <div className="relative lg:col-span-8">
              <Reveal delay={0.1}>
                <p
                  aria-hidden
                  className="num-outline select-none text-[clamp(4rem,14vw,13rem)] leading-[0.85]"
                >
                  BRIDGE
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="display-md mt-4 max-w-xl">
                  Between <span className="text-[var(--color-green-deep)]">creative</span>{" "}
                  and <span className="text-[var(--color-green-deep)]">technical</span>.
                  Between <span className="text-[var(--color-green-deep)]">idea</span>{" "}
                  and <span className="text-[var(--color-green-deep)]">execution</span>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
