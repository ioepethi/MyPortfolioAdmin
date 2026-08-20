"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, BadgeCheck, Languages as LanguagesIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { education, license, languages } from "@/data/education";
import { SectionHeading } from "./ui/SectionHeading";

export function Education() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("education.eyebrow")}
          heading={t("education.heading")}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Education card */}
          {education.map((edu, i) => (
            <motion.article
              key={edu.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={
                reduce
                  ? { duration: 0.3 }
                  : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }
              }
              className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border-hair bg-[var(--color-surface)]/50 p-6 lg:col-span-2"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <GraduationCap size={20} strokeWidth={1.75} />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{edu.degree}</h3>
              <p className="text-base text-[var(--color-fg)]/90">{edu.institution}</p>
              <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border-hair bg-white/[0.02] px-3.5 py-1.5 text-sm">
                <span className="text-[var(--color-subtle)]">{t("education.major")}:</span>
                <span className="font-medium text-[var(--color-fg)]">{edu.major}</span>
              </div>
            </motion.article>
          ))}

          {/* Additional info: license + languages */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={
              reduce
                ? { duration: 0.3 }
                : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
            }
            className="flex flex-col gap-5 rounded-3xl border-hair bg-[var(--color-surface)]/50 p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-fg)]">
              {t("education.additional")}
            </h3>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-subtle)]">
                {t("education.license")}
              </span>
              <div className="flex items-center gap-3 rounded-2xl border-hair bg-white/[0.02] p-4">
                <BadgeCheck size={18} className="text-[var(--color-accent)]" strokeWidth={1.75} />
                <span className="text-sm font-medium">{license.name}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-subtle)]">
                <LanguagesIcon size={14} strokeWidth={1.75} />
                {t("education.languages")}
              </span>
              <ul className="flex flex-col gap-2">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between rounded-2xl border-hair bg-white/[0.02] px-4 py-2.5 text-sm"
                  >
                    <span className="font-medium">{l.name}</span>
                    <span className="text-[var(--color-muted)]">{l.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
