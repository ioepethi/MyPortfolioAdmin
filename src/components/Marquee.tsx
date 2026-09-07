"use client";

import { useReducedMotion } from "motion/react";

const logos: { name: string; className: string }[] = [
  { name: "GitHub", className: "font-semibold" },
  { name: "Cloudflare", className: "font-bold italic" },
  { name: "React", className: "font-bold tracking-tight" },
  { name: "TypeScript", className: "font-semibold" },
  { name: "Next.js", className: "font-bold" },
  { name: "Express", className: "font-medium" },
  { name: "SQLite", className: "font-semibold" },
  { name: "Tailwind CSS", className: "font-medium tracking-tight" },
  { name: "Vite", className: "font-bold italic" },
  { name: "Stripe", className: "font-bold italic" },
  { name: "n8n", className: "font-bold tracking-tighter" },
  { name: "Claude", className: "font-semibold italic" },
  { name: "Devin", className: "font-semibold" },
  { name: "MCP", className: "font-bold tracking-wide" },
];

function LogoBadge({ name, className }: { name: string; className: string }) {
  return (
    <div className="group/marquee-item flex shrink-0 items-center gap-2.5 rounded-full border-hair bg-[var(--color-surface)]/40 px-5 py-2.5 transition-colors duration-300 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)]/70">
      <span className={`text-lg text-[var(--color-fg)]/80 transition-colors group-hover/marquee-item:text-[var(--color-fg)] ${className}`}>
        {name}
      </span>
    </div>
  );
}

export function Marquee() {
  const reduce = useReducedMotion();
  const doubled = [...logos, ...logos];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          Tools &amp; technologies I work with
        </p>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className={`flex w-max gap-4 ${reduce ? "" : "animate-marquee group-hover:[animation-play-state:paused]"}`}
        >
          {doubled.map((logo, i) => (
            <LogoBadge key={`${logo.name}-${i}`} name={logo.name} className={logo.className} />
          ))}
        </div>
      </div>
    </section>
  );
}
