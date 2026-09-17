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
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: EASE, delay },
      };

  return (
    <section id="top" data-nav="dark" className="t-dark relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-[72rem] grid-cols-1 gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-12 lg:items-center lg:pb-24">
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <motion.div {...anim(0)} className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
            <span className="label">{profile.location}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-green)]/40 bg-[var(--color-green)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-green)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
              {profile.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...anim(0.08)}
            className="mt-9 text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em]"
          >
            Joepeth
            <br />
            Del Puerto
          </motion.h1>

          {/* Positioning */}
          <motion.p
            {...anim(0.16)}
            className="mt-7 max-w-xl text-lg font-semibold leading-snug tracking-[-0.01em] text-[var(--mut)] sm:text-xl"
          >
            Administrative &amp; Operations Professional{" "}
            <span className="text-[var(--color-green)]">
              with an IT &amp; Digital Systems Background
            </span>
          </motion.p>

          {/* Statement */}
          <motion.p
            {...anim(0.22)}
            className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-[var(--sub)]"
          >
            {profile.statement}
          </motion.p>

          {/* CTAs */}
          <motion.div {...anim(0.3)} className="mt-10 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-green)] px-6 py-3.5 text-[12.5px] font-semibold tracking-wide text-[#0d100e] shadow-[0_8px_30px_rgba(117,169,76,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(117,169,76,0.35)]"
            >
              View My Work
              <ArrowRight size={15} strokeWidth={2.25} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--line-strong)] px-6 py-3.5 text-[12.5px] font-semibold tracking-wide transition-all duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              Contact Me
              <ArrowUpRight size={15} strokeWidth={2.25} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div {...anim(0.2)} className="lg:col-span-5">
          <div className="relative ml-auto w-full max-w-[300px]">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[26px] border border-[var(--color-green)]/25"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.image}
              alt={profile.imageAlt}
              className="aspect-[4/5] w-full rounded-2xl object-cover grayscale contrast-[1.05] ring-1 ring-[var(--line-strong)]"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-[#0d100e]/70 px-3.5 py-2.5 backdrop-blur-md">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#eef0ea]/80">
                Joepeth Del Puerto
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-green)]">
                DXB
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
