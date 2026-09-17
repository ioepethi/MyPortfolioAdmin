"use client";

import { DropdownSection } from "./ui/Dropdown";
import { toolGroups, type Tool } from "@/data/tools";

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <li className="flex items-center gap-2 bg-[var(--chip)] px-2.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--mut)]">
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
      <div>
        {toolGroups.map((g) => (
          <div
            key={g.id}
            id={`tools-${g.id}`}
            className="grid scroll-mt-24 grid-cols-1 gap-3 border-t border-[var(--line)] py-5 first:border-0 first:pt-0 last:pb-0 sm:grid-cols-12 sm:items-start"
          >
            <div className="flex items-baseline gap-3 sm:col-span-3">
              <span className="font-mono text-xs text-[var(--color-green-deep)]">
                {g.num}
              </span>
              <h3 className="text-sm font-bold uppercase tracking-tight">
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
        <p className="border-t border-[var(--line)] pt-5 text-xs leading-relaxed text-[var(--sub)]">
          Commerce systems in practice: see{" "}
          <a href="#work" className="font-semibold text-[var(--color-green-deep)] underline underline-offset-2">
            BrandPeth.ae
          </a>{" "}
          and{" "}
          <a href="#work" className="font-semibold text-[var(--color-green-deep)] underline underline-offset-2">
            Edge Plus Fitness
          </a>{" "}
          in the work section.
        </p>
      </div>
    </DropdownSection>
  );
}
