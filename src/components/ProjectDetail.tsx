"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const description = t(project.descriptionKey);
  const totalSteps = project.manual.length;
  const current = project.manual[step];

  const goPrev = () => setStep((s) => Math.max(0, s - 1));
  const goNext = () => setStep((s) => Math.min(totalSteps - 1, s + 1));

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 flex items-center justify-between gap-3">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border-hair px-4 py-2 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04]"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          {t("projects.backToProjects")}
        </Link>
        <LanguageSwitcher />
      </div>

      {/* Hero */}
      {project.screenshot ? (
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-hair">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div
          className="relative flex aspect-[16/7] items-center justify-center overflow-hidden rounded-3xl"
          style={{ background: `linear-gradient(135deg, ${project.thumbnail.from}, ${project.thumbnail.to})` }}
        >
          <div className="bg-grid absolute inset-0 opacity-20" />
          <span className="text-8xl font-bold tracking-tighter text-white/90 drop-shadow-lg">
            {project.thumbnail.glyph}
          </span>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>
          <span className="rounded-full border-hair px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-subtle)]">
            {t(project.categoryKey)}
          </span>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[var(--color-fg)]/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-4 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("projects.liveDemo")}
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-hair px-4 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <GithubIcon size={15} />
              {t("projects.viewCode")}
            </a>
          )}
        </div>
      </div>

      {/* Overview */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-subtle)]">
          {t("projects.overview")}
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      </section>

      {/* User manual */}
      <section className="mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-subtle)]">
          {t("projects.manualHeading")}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">{t("projects.manualSubheading")}</p>

        <div className="mt-6 overflow-hidden rounded-3xl border-hair bg-[var(--color-surface)]/50 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-subtle)]">
              {t("projects.step")} {step + 1} {t("projects.of")} {totalSteps}
            </span>
            <div className="flex items-center gap-1.5">
              {project.manual.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${t("projects.step")} ${i + 1}`}
                  onClick={() => setStep(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? "w-6 bg-[var(--color-fg)]" : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 min-h-[104px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-xl font-semibold tracking-tight">{current.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 rounded-full border-hair px-4 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft size={16} strokeWidth={2} />
              {t("projects.previous")}
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={step === totalSteps - 1}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-fg)] px-4 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
            >
              {t("projects.next")}
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {project.liveUrl && (
        <div className="mt-14 flex flex-col items-start gap-3 rounded-3xl border-hair bg-[var(--color-surface)]/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-muted)]">See it running with real data.</p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-4 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t("projects.liveDemo")}
            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </a>
        </div>
      )}
    </main>
  );
}
