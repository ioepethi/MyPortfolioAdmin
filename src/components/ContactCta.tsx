"use client";

import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactCta() {
  return (
    <section id="contact" data-nav="dark" className="t-dark">
      <div className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-6 border border-[var(--line)] px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight sm:text-2xl">
              Have something to discuss?
            </h2>
            <p className="label mt-2">
              {profile.availability} · {profile.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 bg-[var(--color-green)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0b0d0c] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s connect
              <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              Resume / CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
