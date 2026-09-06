import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <ProjectVisual variant={project.visual} />
        <div className="border-b border-border py-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-h3 group-hover:text-accent">{project.title}</h3>
            <div className="flex items-center gap-2 text-small text-text-muted">
              {project.tag ? (
                <span className="rounded-full border border-border px-2 py-1 uppercase tracking-[0.08em]">
                  {project.tag}
                </span>
              ) : null}
              <span>{project.timeframe}</span>
            </div>
          </div>
          <p className="max-w-text-measure text-body text-text-muted">{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
