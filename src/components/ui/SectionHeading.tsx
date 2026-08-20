"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            <span className="h-px w-8 bg-[var(--color-accent)]/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {heading}
        </h2>
      </Reveal>
      {subheading && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-pretty text-base text-[var(--color-muted)] sm:text-lg">
            {subheading}
          </p>
        </Reveal>
      )}
    </div>
  );
}
