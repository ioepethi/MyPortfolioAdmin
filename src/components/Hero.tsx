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
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: EASE, delay },
      };

  return (
    <section id="top" data-nav="dark" className="t-dark bg-blueprint">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-12 lg:items-end lg:pb-20">
        <div className="lg:col-span-8">
          {/* Eyebrow */}
          <motion.div {...anim(0)} className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="label">{profile.location}</span>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
              {profile.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...anim(0.08)}
            className="mt-8 text-[clamp(2.6rem,7.5vw,7rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.045em]"
          >
            Joepeth
            <br />
            Del Puerto
          </motion.h1>

          {/* Positioning */}
          <motion.p
            {...anim(0.16)}
            className="mt-7 max-w-2xl text-lg font-bold uppercase leading-snug tracking-tight text-[var(--mut)] sm:text-xl"
          >
            Administrative &amp; Operations Professional
            <span className="text-[var(--color-green)]">
              {" "}with an IT &amp; Digital Systems Background
            </span>
          </motion.p>

          {/* Statement */}
          <motion.p
            {...anim(0.22)}
            className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-[var(--mut)] sm:text-base"
          >
            {profile.statement}
          </motion.p>

          {/* CTAs */}
          <motion.div {...anim(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2.5 bg-[var(--color-green)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b0d0c] transition-transform duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 border border-[var(--line-strong)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              Contact Me
              <ArrowUpRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Compact portrait */}
        <motion.div
          {...anim(0.2)}
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="ml-auto w-64 border border-[var(--line-strong)] p-2 xl:w-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.image}
              alt={profile.imageAlt}
              className="aspect-[4/5] w-full object-cover grayscale contrast-[1.08]"
            />
            <div className="flex items-center justify-between px-1 pb-1 pt-2.5">
              <span className="label !text-[9px]">Fig. 01 — Portrait</span>
              <span className="label label-green !text-[9px]">DXB</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
