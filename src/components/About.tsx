"use client";

import { motion, useReducedMotion } from "motion/react";
import { Cpu, Database, FileText, Wrench, Workflow } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "./ui/Reveal";

const itPointIcons = [Workflow, Wrench, Database, FileText, Cpu, Workflow];

export function About() {
  const { t, dict } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                <span className="h-px w-8 bg-[var(--color-accent)]/60" />
                {t("about.eyebrow")}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {t("about.heading")}
              </h2>
            </Reveal>
          </div>

          {/* Right: body + IT points */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-[var(--color-muted)]">
                {t("about.body")}
              </p>
            </Reveal>

            <div>
              <Reveal delay={0.15}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-fg)]">
                  {t("about.itHeading")}
                </h3>
              </Reveal>

              <motion.ul
                className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: {},
                  visible: reduce
                    ? {}
                    : { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                }}
              >
                {dict.about.itPoints.map((point, i) => {
                  const Icon = itPointIcons[i % itPointIcons.length];
                  return (
                    <motion.li
                      key={point}
                      variants={
                        reduce
                          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                          : {
                            hidden: { opacity: 0, y: 16 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                            },
                          }
                      }
                      className="group flex items-start gap-3 rounded-2xl border-hair bg-white/[0.02] p-4 transition-colors duration-300 hover:bg-white/[0.04]"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <Icon size={15} strokeWidth={1.75} />
                      </span>
                      <span className="text-sm leading-relaxed text-[var(--color-fg)]/90">
                        {point}
                      </span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>

            <Reveal delay={0.1}>
              <p className="rounded-2xl border-l-2 border-[var(--color-accent)]/50 bg-white/[0.02] p-5 text-pretty text-base italic leading-relaxed text-[var(--color-muted)]">
                {t("about.closing")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
