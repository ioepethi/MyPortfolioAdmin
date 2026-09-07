"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  FileText,
  FolderArchive,
  ClipboardList,
  Workflow,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";

const iconMap = {
  communication: Mail,
  documents: FileText,
  control: FolderArchive,
  coordination: ClipboardList,
  automation: Workflow,
  operations: Briefcase,
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
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: reduce
              ? {}
              : { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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

                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                      {group.index}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight">
                      {t(group.titleKey)}
                    </h3>
                  </div>
                </div>

                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-col gap-1 border-l-2 border-[var(--color-border)] pl-3 transition-colors duration-300 group-hover:border-[var(--color-accent)]/60"
                    >
                      <span className="text-sm font-semibold text-[var(--color-fg)]/90">
                        {skill.name}
                      </span>
                      <span className="text-xs leading-relaxed text-[var(--color-muted)]">
                        {skill.description}
                      </span>
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
