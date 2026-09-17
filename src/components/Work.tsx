"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

/** Compact featured list — order follows the profile narrative. */
const featuredIds = [
  "u-office",
  "uae-intel",
  "brandpeth",
  "pestbrand",
  "edge-plus-fitness",
];

export function Work() {
  const featured = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="work" data-nav="dark" className="t-dark">
      <div className="mx-auto max-w-[72rem] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] font-medium text-[var(--color-green)]">04</span>
            <span className="text-[clamp(1.5rem,3.6vw,2.5rem)] font-bold leading-none tracking-[-0.025em]">
              Work
            </span>
          </h2>
          <span className="label hidden sm:block">Systems &amp; projects</span>
        </div>

        <div className="mt-8 space-y-3">
          {featured.map((p, i) => {
            const thumb = p.shots[0];
            return (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group grid grid-cols-1 items-center gap-5 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 transition-all duration-300 hover:border-[var(--line-strong)] hover:bg-[var(--card-hover)] sm:grid-cols-12 sm:gap-6 sm:p-5"
              >
                {/* Thumb */}
                <div className="sm:col-span-3 lg:col-span-2">
                  {thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full rounded-xl object-cover object-top ring-1 ring-[var(--line)] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="bg-blueprint flex aspect-[16/10] w-full items-center justify-center rounded-xl ring-1 ring-[var(--line)]">
                      <span className="label !text-[8px]">System diagram</span>
                    </div>
                  )}
                </div>

                {/* Title + meta */}
                <div className="sm:col-span-6 lg:col-span-6">
                  <span className="font-mono text-xs text-[var(--color-green)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.015em] transition-colors duration-300 group-hover:text-[var(--color-green)] sm:text-xl">
                    {p.name}
                  </h3>
                  <p className="label mt-1.5">{p.subtitle} · {p.status}</p>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[var(--mut)]">
                    {p.summary}
                  </p>
                </div>

                {/* Stack */}
                <div className="sm:col-span-2 lg:col-span-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="hidden justify-end sm:col-span-1 sm:flex">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] transition-all duration-300 group-hover:border-[var(--color-green)] group-hover:bg-[var(--color-green)]">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2}
                      className="text-[var(--sub)] transition-colors duration-300 group-hover:text-[#0d100e]"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
