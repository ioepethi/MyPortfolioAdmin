"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

/**
 * Conversion band between major sections.
 */
export function CtaBand() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section data-nav="dark" className="t-dark border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-8 px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <h2 className="display-sm uppercase">
            Ready to connect
            <br />
            <span className="text-[var(--color-green)]">with me?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2.5 bg-[var(--color-green)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b0d0c] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <Link
              href="/projects/u-office"
              className="group inline-flex items-center gap-2.5 border border-[var(--line-strong)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--fg)] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              View Project
              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
