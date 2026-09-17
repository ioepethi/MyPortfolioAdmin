"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { BrowserShot } from "./ui/BrowserShot";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--bg)] p-5">
      <span className="label">{label}</span>
      <p className="mt-2 text-sm font-bold uppercase tracking-tight text-[var(--fg)]">
        {value}
      </p>
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const heroShot = project.shots[0];
  const gallery = project.shots.slice(1);
  const liveUrl = project.links.find((l) => l.href.startsWith("http") && !l.href.includes("github.com"));

  return (
    <main className="t-dark min-h-screen">
      <div className="mx-auto max-w-[90rem] px-5 pb-24 pt-8 sm:px-8">
        {/* Top bar */}
        <div className="hairline-b flex items-center justify-between pb-5">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--mut)] transition-colors hover:text-[var(--color-green)]"
          >
            <ArrowLeft size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            All work
          </Link>
          <span className="font-mono text-xs text-[var(--sub)]">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Header */}
        <header className="grid grid-cols-1 gap-10 py-14 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="label label-green">{project.status}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display-lg mt-6 uppercase">{project.name}</h1>
              <p className="mt-3 text-lg font-semibold uppercase tracking-[0.1em] text-[var(--mut)]">
                {project.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-[var(--mut)] sm:text-lg">
                {project.summary}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="grid grid-cols-1 gap-px bg-[var(--line)]">
              <MetaCell label="Category" value={project.category} />
              <MetaCell label="Year" value={project.year} />
              {project.stack.length > 0 && (
                <MetaCell label="Stack" value={project.stack.join(" · ")} />
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links
                .filter((l) => l.href.startsWith("http"))
                .map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group/btn inline-flex items-center gap-2 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300",
                      l.label.toLowerCase().includes("code")
                        ? "border border-[var(--line-strong)] text-[var(--fg)] hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                        : "bg-[var(--color-green)] text-[#0b0d0c] hover:bg-[#f4f4f0]"
                    )}
                  >
                    {l.label}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                ))}
            </div>
          </Reveal>
        </header>

        {/* Hero visual */}
        {heroShot && !project.architecture && (
          <Reveal>
            <BrowserShot
              src={heroShot.src}
              alt={heroShot.alt}
              label={heroShot.label}
              url={liveUrl?.href.replace(/^https?:\/\//, "")}
              fit={heroShot.fit}
              imgClassName="max-h-[80vh]"
            />
          </Reveal>
        )}

        {/* Architecture diagram for systems without UI screenshots */}
        {project.architecture && project.flow && (
          <Reveal>
            <div className="hairline overflow-hidden bg-[var(--card)]">
              <div className="browser-bar">
                <span className="browser-dot" aria-hidden />
                <span className="browser-dot" aria-hidden />
                <span className="browser-dot" aria-hidden />
                <span className="label ml-3">architecture.preview</span>
                <span className="label label-green ml-auto">Not a screenshot</span>
              </div>
              <div className="bg-blueprint grid grid-cols-1 gap-0 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-10">
                {project.flow.map((node, i) => (
                  <div key={node} className="flex items-center gap-3 py-3 lg:py-6">
                    <span className="font-mono text-xs text-[var(--color-green)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={cn(
                        "flex-1 border px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.16em]",
                        i === 0 || i === project.flow!.length - 1
                          ? "border-[var(--color-green)] text-[var(--color-green)]"
                          : "border-[var(--line-strong)] text-[var(--fg)]"
                      )}
                    >
                      {node}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Modules */}
        {project.modules.length > 0 && (
          <section className="mt-16">
            <Reveal>
              <span className="label">System modules</span>
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.modules.map((m) => (
                  <li
                    key={m}
                    className="border border-[var(--line)] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--fg)]"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

        {/* Numbered case study */}
        <section className="mt-20">
          {project.caseStudy.map((s, i) => (
            <Reveal key={s.title}>
              <div className="grid grid-cols-1 gap-4 border-t border-[var(--line)] py-10 sm:grid-cols-12">
                <span className="num-outline text-5xl sm:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-bold uppercase tracking-tight sm:col-span-4">
                  {s.title}
                </h2>
                <p className="max-w-xl text-pretty text-sm leading-relaxed text-[var(--mut)] sm:col-span-6 sm:text-base">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Gallery */}
        {gallery.length > 0 && (
          <section className="mt-16">
            <Reveal>
              <span className="label">Screens</span>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {gallery.map((s) => (
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
          </section>
        )}

        {/* Walkthrough */}
        {project.walkthrough.length > 0 && (
          <section className="mt-20">
            <Reveal>
              <span className="label">How it works</span>
            </Reveal>
            <div className="mt-6">
              {project.walkthrough.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.04}>
                  <div className="grid grid-cols-1 gap-2 border-t border-[var(--line)] py-6 sm:grid-cols-12">
                    <span className="font-mono text-sm text-[var(--color-green)] sm:col-span-2">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold uppercase tracking-tight sm:col-span-4">
                      {w.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-[var(--mut)] sm:col-span-6">
                      {w.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        <Reveal className="mt-24">
          <Link
            href={`/projects/${next.id}`}
            className="group flex items-center justify-between border-t border-[var(--line)] py-10"
          >
            <span>
              <span className="label">Next project</span>
              <span className="display-md mt-3 block uppercase transition-colors duration-300 group-hover:text-[var(--color-green)]">
                {next.name}
              </span>
            </span>
            <ArrowRight
              size={32}
              strokeWidth={1.5}
              className="text-[var(--sub)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--color-green)]"
              aria-hidden
            />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
