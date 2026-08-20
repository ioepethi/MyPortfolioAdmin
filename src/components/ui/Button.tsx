"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-white shadow-[0_8px_30px_-12px_rgba(232,234,240,0.4)]",
  secondary:
    "border-hair bg-transparent text-[var(--color-fg)] hover:bg-white/[0.04] hover:border-[var(--color-border-strong)]",
  ghost: "text-[var(--color-muted)] hover:text-[var(--color-fg)]",
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  icon,
  external,
  ...rest
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...externalProps}
      {...rest}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </a>
  );
}
