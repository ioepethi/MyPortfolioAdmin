"use client";

import { motion, useReducedMotion } from "motion/react";
import { Briefcase, MapPin, TrendingUp, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { experiences } from "@/data/experience";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={t("experience.eyebrow")}
          heading={t("experience.heading")}
        />

        <div className="relative mt-14 pl-6 sm:pl-8">
          {/* Timeline rail */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/40 via-[var(--color-border-strong)] to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={
                  reduce
                    ? { duration: 0.3 }
                    : { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }
                }
                className="relative"
              >
                {/* Node */}
                <span className="absolute -left-[1.65rem] top-2 grid h-3.5 w-3.5 place-items-center sm:-left-[2.15rem]">
                  <span className="absolute h-3.5 w-3.5 rounded-full bg-[var(--color-accent)]/30" />
                  <span className="relative h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                </span>

                <div className="group rounded-3xl border-hair bg-[var(--color-surface)]/50 p-6 transition-colors duration-300 hover:border-[var(--color-border-strong)] sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Briefcase size={15} className="text-[var(--color-accent)]" strokeWidth={1.75} />
                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)]">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                            {t("experience.current")}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="text-base text-[var(--color-fg)]/90">
                        {exp.company}
                      </p>
                      <p className="flex items-center gap-1.5 text-sm text-[var(--color-subtle)]">
                        <MapPin size={13} strokeWidth={1.75} />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {exp.note && (
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full border-hair bg-[var(--color-accent-soft)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                      <TrendingUp size={13} strokeWidth={2} />
                      {exp.note}
                    </p>
                  )}

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-subtle)]">
                    {t("experience.responsibilities")}
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {exp.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]"
                      >
                        <Check
                          size={15}
                          strokeWidth={2}
                          className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
