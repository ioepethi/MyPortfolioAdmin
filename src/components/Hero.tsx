"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { ProfileImage } from "./ui/ProfileImage";

const scrollTo = (id: string, reduce: boolean | null) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { delayChildren: 0.1 }
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
      hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      },
    };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-32">
      {/* Floating background orbs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
            animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[var(--color-navy)]/40 blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, -16, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border-hair bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            <Sparkles size={13} className="text-[var(--color-accent)]" strokeWidth={2} />
            {profile.eyebrow}
          </motion.div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span variants={item} className="block text-[var(--color-muted)]">
              {t("hero.greeting")}
            </motion.span>
            <motion.span variants={item} className="block">
              {t("hero.name")}
              <span className="text-[var(--color-accent)]">.</span>
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-pretty text-lg text-[var(--color-muted)] sm:text-xl">
            {t("hero.statement")}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("experience", reduce)}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("hero.primaryCta")}
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact", reduce)}
              className="inline-flex items-center gap-2 rounded-full border-hair px-5 py-3 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {t("hero.secondaryCta")}
            </button>
            <a
              href="/Joepeth-Del-Puerto-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-hair px-5 py-3 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {t("hero.downloadCta")}
              <Download size={15} strokeWidth={2} />
            </a>
            <button
              onClick={() => scrollTo("projects", reduce)}
              className="link-underline inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {t("hero.tertiaryCta")}
              <ArrowUpRight size={15} strokeWidth={2} />
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-2 text-sm text-[var(--color-subtle)]">
            <MapPin size={15} strokeWidth={1.75} />
            <span>{profile.location}</span>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-[var(--color-subtle)]" />
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t("hero.availability")}
            </span>
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={reduce ? { duration: 0.4 } : { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-sm lg:max-w-none"
        >
          <ProfileImage />
          {/* Decorative floating chip */}
          {!reduce && (
            <motion.div
              className="absolute -left-4 bottom-10 hidden rounded-2xl border-hair glass px-4 py-3 shadow-xl sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-[var(--color-subtle)]">Experience</p>
              <p className="text-lg font-semibold tracking-tight">4+ years</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-subtle)] lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-border)] p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-[var(--color-muted)]"
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
