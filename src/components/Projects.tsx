"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";

function ProjectThumbnail({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const gx = useTransform(mx, [-0.5, 0.5], ["20%", "-20%"]);
  const gy = useTransform(my, [-0.5, 0.5], ["20%", "-20%"]);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative aspect-[16/10] overflow-hidden rounded-2xl"
      style={reduce ? undefined : { perspective: 1000 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      >
        {project.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${project.thumbnail.from}, ${project.thumbnail.to})`,
              }}
            />
            {!reduce && (
              <motion.div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 50%)",
                  backgroundSize: "150% 150%",
                  x: gx,
                  y: gy,
                }}
              />
            )}
            <div className="bg-grid absolute inset-0 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-bold tracking-tighter text-white/90 drop-shadow-lg">
                {project.thumbnail.glyph}
              </span>
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {project.blurb}
          </span>
          {project.liveUrl && (
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black/30 text-white backdrop-blur-sm">
              <ExternalLink size={14} strokeWidth={2} />
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const description = t(project.descriptionKey);

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduce
          ? { duration: 0.3 }
          : { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }
      }
      className="group flex flex-col overflow-hidden rounded-3xl border-hair bg-[var(--color-surface)]/50 p-4 transition-colors duration-300 hover:border-[var(--color-border-strong)]"
    >
      <Link href={`/projects/${project.id}`} aria-label={`${project.name} — ${t("projects.viewDetails")}`}>
        <ProjectThumbnail project={project} />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="text-xl font-semibold tracking-tight transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            {project.name}
          </Link>
          <span className="rounded-full border-hair px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-subtle)]">
            {t(project.categoryKey)}
          </span>
        </div>

        <p className="text-pretty text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[var(--color-fg)]/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="group/btn inline-flex items-center gap-2 rounded-full border-hair px-4 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04]"
          >
            {t("projects.viewDetails")}
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-4 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("projects.liveDemo")}
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-hair px-4 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <GithubIcon size={15} />
              {t("projects.viewCode")}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          heading={t("projects.heading")}
          subheading={t("projects.subheading")}
        />

        <div className="mt-14">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-subtle)]">
            {t("projects.categories.web")}
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
