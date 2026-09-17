import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * Editorial section header — oversized index numeral, small uppercase label,
 * hairline rule. Reads from the parent .t-dark / .t-light theme vars.
 */
export function SectionHead({
  index,
  label,
  className,
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("hairline-b flex items-end justify-between gap-6 pb-5", className)}>
      <Reveal>
        <span className="label flex items-center gap-3">
          {index && (
            <span className="font-mono text-[var(--color-green)]">{index}</span>
          )}
          <span className="h-px w-10 bg-[var(--line-strong)]" aria-hidden />
          {label}
        </span>
      </Reveal>
      {index && (
        <Reveal delay={0.05}>
          <span aria-hidden className="num-outline select-none text-6xl sm:text-7xl">
            {index}
          </span>
        </Reveal>
      )}
    </div>
  );
}
