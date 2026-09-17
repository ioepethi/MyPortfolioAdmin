"use client";

import { DropdownSection } from "./ui/Dropdown";
import { toolGroups, type Tool } from "@/data/tools";
import { cn } from "@/lib/utils";

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <li className="chip">
      {tool.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/icons/${tool.icon}.svg`}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="h-3.5 w-3.5 opacity-70"
        />
      ) : (
        <span className="wordmark text-[9px] text-[var(--sub)]">
          {tool.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      {tool.name}
    </li>
  );
}

export function Tools() {
  return (
    <DropdownSection id="tools" index="03" title="Tools & Technologies" theme="light">
      <div className="space-y-1">
        {toolGroups.map((g) => (
          <div
            key={g.id}
            id={`tools-${g.id}`}
            className="grid scroll-mt-24 grid-cols-1 gap-3 border-t border-[var(--line)] py-5 first:border-0 first:pt-0 last:pb-0 sm:grid-cols-12 sm:items-start"
          >
            <div className="flex items-baseline gap-2.5 sm:col-span-3">
              <span className="font-mono text-xs text-[var(--color-green-deep)]">
                {g.num}
              </span>
              <h3 className="text-sm font-semibold tracking-[-0.01em]">
                {g.label}
              </h3>
            </div>
            <ul className="flex flex-wrap content-start gap-1.5 sm:col-span-9">
              {g.tools.map((t) => (
                <ToolChip key={t.name} tool={t} />
              ))}
            </ul>
          </div>
        ))}
        <p className="pt-5 text-xs leading-relaxed text-[var(--sub)]">
          Commerce systems in practice: see{" "}
          <a href="#work" className="font-semibold text-[var(--color-green-deep)] underline decoration-[var(--color-green-deep)]/40 underline-offset-2 hover:decoration-[var(--color-green-deep)]">
            BrandPeth.ae
          </a>{" "}
          and{" "}
          <a href="#work" className="font-semibold text-[var(--color-green-deep)] underline decoration-[var(--color-green-deep)]/40 underline-offset-2 hover:decoration-[var(--color-green-deep)]">
            Edge Plus Fitness
          </a>{" "}
          in the work section.
        </p>
      </div>
    </DropdownSection>
  );
}
