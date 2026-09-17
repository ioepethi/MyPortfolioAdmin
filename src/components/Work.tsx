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
    <section id="work" data-nav="dark" className="t-dark hairline-t">
      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-[var(--color-green)]">04</span>
            <span className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-extrabold uppercase leading-none tracking-[-0.03em]">
              Work
            </span>
          </h2>
          <span className="label hidden sm:block">Systems &amp; projects</span>
        </div>

        <div className="mt-8">
          {featured.map((p, i) => {
            const thumb = p.shots[0];
            return (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group grid grid-cols-1 items-center gap-4 border-t border-[var(--line)] py-5 last:border-b sm:grid-cols-12 sm:gap-6"
              >
                {/* Thumb */}
                <div className="sm:col-span-2">
                  {thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full border border-[var(--line)] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] sm:w-40"
                    />
                  ) : (
                    <div className="bg-blueprint flex aspect-[16/10] w-full items-center justify-center border border-[var(--line)] sm:w-40">
                      <span className="label !text-[8px]">System diagram</span>
                    </div>
                  )}
                </div>

                {/* Title + meta */}
                <div className="sm:col-span-6">
                  <span className="font-mono text-xs text-[var(--color-green)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--color-green)] sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="label mt-1.5">{p.subtitle} · {p.status}</p>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[var(--mut)]">
                    {p.summary}
                  </p>
                </div>

                {/* Stack */}
                <div className="sm:col-span-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <li
                        key={s}
                        className="bg-[var(--chip)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--mut)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="hidden justify-end sm:col-span-1 sm:flex">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2}
                    className="text-[var(--sub)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-green)]"
                    aria-hidden
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
