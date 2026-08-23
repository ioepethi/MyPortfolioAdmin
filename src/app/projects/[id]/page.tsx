import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: `${project.name} — Joepeth Del Puerto`,
    description: project.blurb,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <LanguageProvider>
      <ProjectDetail project={project} />
    </LanguageProvider>
  );
}
