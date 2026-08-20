"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Show a soft animated ring around the image. */
  ring?: boolean;
  priority?: boolean;
};

/**
 * Renders the professional portrait with a graceful fallback to a monogram
 * if the image file has not yet been added at public/images/joepeth-del-puerto.jpg.
 */
export function ProfileImage({ className, ring = true, priority = true }: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border-hair bg-[var(--color-surface)]",
        ring && "p-1.5",
        className
      )}
    >
      {ring && (
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/30 via-transparent to-transparent" />
      )}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem]">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.image}
            alt={profile.imageAlt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform hover:scale-[1.04]"
          />
        ) : (
          <FallbackMonogram />
        )}
      </div>
    </div>
  );
}

function FallbackMonogram() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-bg-elevated)]">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <span className="relative text-6xl font-semibold tracking-tight text-[var(--color-fg)]/80">
        JD
      </span>
      <span className="absolute bottom-4 left-0 right-0 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
        Add portrait to /public/images
      </span>
    </div>
  );
}
