"use client";

import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactCta() {
  return (
    <section id="contact" data-nav="dark" className="t-dark">
      <div className="mx-auto max-w-[72rem] px-5 pb-16 sm:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--color-green)]/25 bg-[var(--tint)] px-6 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.015em] sm:text-2xl">
              Have something to discuss?
            </h2>
            <p className="label mt-2">
              {profile.availability} · {profile.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-3 text-[12px] font-semibold tracking-wide text-[#0d100e] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(117,169,76,0.35)]"
            >
              Let&apos;s connect
              <ArrowRight size={14} strokeWidth={2.25} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-3 text-[12px] font-semibold tracking-wide transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              Resume / CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
