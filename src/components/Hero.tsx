"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: EASE, delay },
      };

  return (
    <section id="top" data-nav="dark" className="t-dark bg-blueprint relative overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-5 pb-14 pt-28 sm:px-8 sm:pt-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <motion.div {...anim(0)} className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="label">Portfolio — 2026</span>
              <span className="label">{profile.location}</span>
              <span className="inline-flex items-center gap-2 border border-[var(--color-green)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                {profile.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...anim(0.08)}
              className="mt-10 text-[clamp(3rem,8.5vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.045em]"
            >
              Joepeth
              <br />
              Del Puerto
            </motion.h1>

            {/* Positioning */}
            <motion.p
              {...anim(0.16)}
              className="mt-8 max-w-2xl text-base font-bold uppercase leading-snug tracking-[-0.01em] text-[var(--mut)] sm:text-xl"
            >
              Administrative &amp; Operations Professional
              <br />
              <span className="text-[var(--color-green)]">
                with an IT &amp; Digital Systems Background
              </span>
            </motion.p>

            {/* Statement */}
            <motion.p
              {...anim(0.22)}
              className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-[var(--mut)] sm:text-base"
            >
              {profile.statement}
            </motion.p>

            {/* CTAs */}
            <motion.div {...anim(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2.5 bg-[var(--color-green)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b0d0c] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2.5 border border-[var(--line-strong)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
              >
                Contact Me
                <ArrowUpRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Portrait — technical frame */}
          <motion.div {...anim(0.2)} className="lg:col-span-4">
            <div className="relative ml-auto w-full max-w-[320px]">
              <div
                aria-hidden
                className="absolute -inset-2.5 border border-[var(--line-strong)]"
              />
              <div
                aria-hidden
                className="absolute -right-2.5 -top-2.5 h-6 w-6 border-l border-b border-[var(--color-green)]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.image}
                alt={profile.imageAlt}
                className="aspect-[4/5] w-full object-cover grayscale contrast-[1.08]"
              />
              <div className="hairline-t flex items-center justify-between bg-[var(--bg)] px-1 py-2.5">
                <span className="label !text-[9px]">Fig. 01 — Subject</span>
                <span className="label label-green !text-[9px]">DXB / UAE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          {...anim(0.38)}
          className="hairline-t mt-14 flex flex-wrap items-center justify-between gap-3 pt-5"
        >
          <span className="label">Administration</span>
          <span className="label hidden sm:block">Operations</span>
          <span className="label hidden md:block">IT &amp; Digital Systems</span>
          <span className="label hidden lg:block">Process Improvement</span>
          <span className="label label-green">Open to work — UAE</span>
        </motion.div>
      </div>
    </section>
  );
}
