"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";
import { BrowserShot } from "./ui/BrowserShot";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function LinkButtons({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.links.map((l) => {
        const external = l.href.startsWith("http");
        const cls = cn(
          "group/btn inline-flex items-center gap-2 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300",
          l.primary
            ? "bg-[var(--color-green)] text-[#0b0d0c] hover:bg-[#f4f4f0]"
            : "border border-[var(--line-strong)] text-[var(--fg)] hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
        );
        const icon = (
          <ArrowUpRight
            size={13}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        );
        return external ? (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
            {l.label}
            {icon}
          </a>
        ) : (
          <Link key={l.label} href={l.href} className={cls}>
            {l.label}
            {icon}
          </Link>
        );
      })}
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="hairline-b flex items-baseline justify-between gap-6 py-3">
      <span className="label">{label}</span>
      <span className="text-right text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg)]">
        {value}
      </span>
    </div>
  );
}

/** CSS architecture diagram — clearly labeled preview, not a fake screenshot. */
function ArchitectureDiagram({ flow }: { flow: string[] }) {
  return (
    <div className="hairline relative overflow-hidden bg-[var(--card)]">
      <div className="browser-bar">
        <span className="browser-dot" aria-hidden />
        <span className="browser-dot" aria-hidden />
        <span className="browser-dot" aria-hidden />
        <span className="label ml-3">architecture.preview</span>
      </div>
      <div className="bg-blueprint relative flex flex-col items-center gap-0 px-6 py-10 sm:px-10">
        {flow.map((node, i) => (
          <div key={node} className="flex flex-col items-center">
            <div
              className={cn(
                "border px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.16em]",
                i === 0 || i === flow.length - 1
                  ? "border-[var(--color-green)] text-[var(--color-green)]"
                  : "border-[var(--line-strong)] text-[var(--fg)]"
              )}
            >
              {node}
            </div>
            {i < flow.length - 1 && (
              <span className="h-6 w-px bg-[var(--color-green)]/60" aria-hidden />
            )}
          </div>
        ))}
        <span className="label label-green absolute bottom-3 right-4">
          Architecture preview
        </span>
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const mainShot = project.shots[0];
  return (
    <article className="grid grid-cols-1 gap-10 border-b border-[var(--line)] py-16 sm:py-20 lg:grid-cols-12">
      {/* Meta column */}
      <div className="order-2 flex flex-col lg:order-1 lg:col-span-4">
        <Reveal>
          <span className="num-outline text-7xl sm:text-8xl">
            0{index + 1}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="display-sm mt-6 uppercase">
            <Link
              href={`/projects/${project.id}`}
              className="transition-colors duration-300 hover:text-[var(--color-green)]"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--mut)]">
            {project.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-[var(--mut)]">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mt-8">
          <MetaRow label="Category" value={project.category} />
          <MetaRow label="Status" value={project.status} />
          {project.stack.length > 0 && (
            <MetaRow label="Stack" value={project.stack.slice(0, 4).join(" · ")} />
          )}
        </Reveal>

        {project.modules.length > 0 && (
          <Reveal delay={0.18} className="mt-6">
            <span className="label">Modules</span>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.modules.map((m) => (
                <li
                  key={m}
                  className="border border-[var(--line)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--mut)]"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.2} className="mt-8">
          <LinkButtons project={project} />
        </Reveal>
      </div>

      {/* Visual column */}
      <div className="order-1 lg:order-2 lg:col-span-8">
        <Reveal delay={0.08}>
          {project.architecture && project.flow ? (
            <div className="space-y-6">
              <div className="hairline flex items-center gap-4 bg-[var(--card)] p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.shots[0].src}
                  alt={project.shots[0].alt}
                  className="h-10 w-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-tight">
                    {project.name}
                  </p>
                  <p className="label mt-1">Research system — CLI + dashboard</p>
                </div>
              </div>
              <ArchitectureDiagram flow={project.flow} />
            </div>
          ) : project.inProgress ? (
            <div className="hairline relative flex aspect-[16/9] items-center justify-center border-dashed bg-[var(--card)]/40">
              <div className="bg-blueprint absolute inset-0 opacity-50" aria-hidden />
              <div className="relative text-center">
                <span className="label label-green">Case study in progress</span>
                <p className="display-sm mt-4 uppercase text-[var(--mut)]">
                  {project.subtitle}
                </p>
                <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-[var(--sub)]">
                  Modules, screenshots and verified results will be published as
                  documentation is completed.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {mainShot && (
                <Link href={`/projects/${project.id}`} aria-label={`${project.name} — view case study`}>
                  <BrowserShot
                    src={mainShot.src}
                    alt={mainShot.alt}
                    label={mainShot.label}
                    url={project.links.find((l) => l.href.startsWith("http"))?.href.replace(/^https?:\/\//, "")}
                    fit={mainShot.fit}
                    imgClassName="aspect-[16/9] group-hover:scale-[1.02]"
                    className="transition-transform duration-500 hover:-translate-y-1"
                  />
                </Link>
              )}
              {project.shots.length > 1 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {project.shots.slice(1).map((s) => (
                    <BrowserShot
                      key={s.src}
                      src={s.src}
                      alt={s.alt}
                      label={s.label}
                      fit={s.fit}
                      imgClassName="aspect-[16/10]"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </article>
  );
}

function CompactRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-[var(--line)] py-6 sm:gap-8"
    >
      <span className="font-mono text-sm text-[var(--color-green)]">
        0{index + 5}
      </span>
      <span className="flex items-center gap-5">
        {project.shots[0] && (
          <span className="hidden h-14 w-24 shrink-0 overflow-hidden border border-[var(--line)] sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.shots[0].src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </span>
        )}
        <span>
          <span className="block text-xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--color-green)] sm:text-2xl">
            {project.name}
          </span>
          <span className="label mt-1 block">{project.status}</span>
        </span>
      </span>
      <ArrowRight
        size={20}
        strokeWidth={2}
        className="text-[var(--sub)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-green)]"
        aria-hidden
      />
    </Link>
  );
}

export function SelectedWork() {
  const featured = projects.slice(0, 4);
  const rest = projects.slice(4);

  return (
    <section id="work" data-nav="dark" className="t-dark">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="03" label="Selected Work" />

        <Reveal className="mt-12">
          <h2 className="display-lg max-w-4xl uppercase">
            Work that shows
            <br />
            <span className="text-[var(--sub)]">how I think.</span>
          </h2>
        </Reveal>

        <div>
          {featured.map((p, i) => (
            <FeaturedProject key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-16">
          <span className="label">More work</span>
        </Reveal>
        <div className="mt-4">
          {rest.map((p, i) => (
            <CompactRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
