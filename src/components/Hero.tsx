"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

const scrollTo = (id: string, reduce: boolean | null) => {
  const el = document.getElementById(id);
  if (el)
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { delayChildren: 0.05 }
        : { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
      hidden: { opacity: 0, y: 36 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      },
    };

  return (
    <section
      id="top"
      data-nav="dark"
      className="t-dark relative overflow-hidden pt-16"
    >
      {/* Blueprint grid wash */}
      <div
        aria-hidden
        className="bg-blueprint pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70rem_50rem_at_30%_20%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="grid min-h-[calc(100svh-4rem)] grid-cols-1 items-end gap-10 pb-10 pt-14 lg:grid-cols-12 lg:gap-0">
          {/* Left — type block */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 lg:pb-16"
          >
            <motion.p
              variants={item}
              className="label flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span>{profile.location}</span>
              <span className="hidden h-px w-8 bg-[var(--line-strong)] sm:block" aria-hidden />
              <span className="label-green inline-flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--color-green)] opacity-70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                </span>
                Open to opportunities
              </span>
            </motion.p>

            <motion.h1 variants={item} className="display-xl mt-8 uppercase">
              Who
              <br />
              Am
              <span className="text-[var(--color-green)]"> I?</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[var(--color-green)]" aria-hidden />
              <span className="text-sm font-bold uppercase tracking-[0.3em] sm:text-base">
                {profile.name}
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 text-lg font-semibold uppercase leading-snug tracking-tight text-[var(--fg)] sm:text-xl"
            >
              {profile.role}
              <span className="mt-1 block text-[13px] font-semibold tracking-[0.22em] text-[var(--color-green)]">
                {profile.positioning}
              </span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-[var(--mut)]"
            >
              {profile.statement}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("work", reduce)}
                className="group inline-flex items-center gap-2.5 bg-[var(--color-green)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b0d0c] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollTo("contact", reduce)}
                className="group inline-flex items-center gap-2.5 border border-[var(--line-strong)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--fg)] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
              >
                Let&apos;s Talk
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>

          {/* Right — treated portrait */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduce
                ? { duration: 0.3 }
                : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }
            }
            className="relative lg:col-span-5"
          >
            {/* Oversized monogram behind the frame */}
            <span
              aria-hidden
              className="num-outline pointer-events-none absolute -top-16 right-2 z-0 select-none text-[9rem] sm:text-[12rem] lg:-right-4"
            >
              JD
            </span>

            <div className="relative z-10 border border-[var(--line-strong)] bg-[var(--card)]">
              {/* Frame meta */}
              <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-2.5">
                <span className="label">Fig. 01 — Portrait</span>
                <span className="label label-green">DXB / 25.2048° N</span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.image}
                  alt={profile.imageAlt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover grayscale contrast-[1.08] transition-all duration-700 ease-out hover:grayscale-0"
                />
                {/* Technical overlays */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <span className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[var(--color-green)]" />
                  <span className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-[var(--color-green)]" />
                  <span className="absolute bottom-4 left-4 label !text-[10px] bg-[#0b0d0c]/70 px-2 py-1 backdrop-blur-sm">
                    Design · Systems · Commerce · Operations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="visible"
          className="hairline-t flex items-center justify-between py-4"
        >
          <span className="label">Portfolio — 2026</span>
          <span className="label hidden sm:block">
            Graphic design / E-commerce / IT / Admin / Ops
          </span>
          <button
            onClick={() => scrollTo("mission", reduce)}
            className="label inline-flex items-center gap-2 transition-colors hover:text-[var(--color-green)]"
            aria-label="Scroll to next section"
          >
            Scroll
            <ArrowDown size={13} strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
