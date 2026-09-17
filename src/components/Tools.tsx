"use client";

import { useReducedMotion } from "motion/react";
import { Reveal } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";
import { marqueeTools, toolGroups, type Tool } from "@/data/tools";
import { cn } from "@/lib/utils";

function ToolGlyph({ tool, className }: { tool: Tool; className?: string }) {
  if (tool.icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/icons/${tool.icon}.svg`}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={cn("h-6 w-6 invert opacity-70 transition-opacity", className)}
      />
    );
  }
  return (
    <span
      className={cn(
        "wordmark text-sm text-[var(--mut)] transition-colors",
        className
      )}
    >
      {tool.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function Tools() {
  const reduce = useReducedMotion();
  const doubled = [...marqueeTools, ...marqueeTools];

  return (
    <section id="tools" data-nav="dark" className="t-dark border-t border-[var(--line)]">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead label="Tools & Technologies" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display-lg uppercase">
              Tools
              <br />
              I use
              <br />
              <span className="text-[var(--color-green)]">to build.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-4">
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-[var(--mut)]">
              The working stack behind the projects above — design, commerce,
              development, infrastructure, automation and the office systems I
              run day to day.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="group relative overflow-hidden border-y border-[var(--line)] py-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className={cn(
            "flex w-max items-center gap-12 px-6",
            !reduce && "animate-marquee group-hover:[animation-play-state:paused]"
          )}
        >
          {doubled.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="group/item flex shrink-0 items-center gap-3"
              title={tool.name}
            >
              <ToolGlyph
                tool={tool}
                className="transition-all duration-300 group-hover/item:opacity-100 [&_img]:group-hover/item:[filter:invert(67%)_sepia(38%)_saturate(512%)_hue-rotate(51deg)_brightness(95%)_contrast(88%)]"
              />
              <span className="label !text-[var(--mut)] transition-colors duration-300 group-hover/item:text-[var(--color-green)]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grouped wall */}
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {toolGroups.map((g) => (
            <div key={g.id} className="bg-[var(--bg)] p-6 sm:p-8">
              <span className="label label-green">{g.label}</span>
              <ul className="mt-6 space-y-3">
                {g.tools.map((t) => (
                  <li
                    key={t.name}
                    className="group/tool flex items-center gap-3 text-sm font-medium text-[var(--fg)]"
                  >
                    <ToolGlyph
                      tool={t}
                      className="h-5 w-5 [&_img]:group-hover/tool:[filter:invert(67%)_sepia(38%)_saturate(512%)_hue-rotate(51deg)_brightness(95%)_contrast(88%)]"
                    />
                    <span className="transition-colors duration-300 group-hover/tool:text-[var(--color-green)]">
                      {t.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
