"use client";

import { motion, useReducedMotion } from "motion/react";
import { ClipboardList, BarChart3, FolderArchive, ServerCog } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";

const iconMap = {
  operations: ClipboardList,
  reporting: BarChart3,
  records: FolderArchive,
  it: ServerCog,
} as const;

export function Skills() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("skills.eyebrow")}
          heading={t("skills.heading")}
          subheading={t("skills.subheading")}
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: reduce
              ? {}
              : { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.id}
                variants={
                  reduce
                    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                    : {
                        hidden: { opacity: 0, y: 24 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                        },
                      }
                }
                className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border-hair bg-[var(--color-surface)]/60 p-6 transition-colors duration-300 hover:border-[var(--color-border-strong)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-accent)]/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-semibold tracking-tight">
                  {t(group.titleKey)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border-hair bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-fg)]/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
