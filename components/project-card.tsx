import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  layout?: "card" | "split";
  showDivider?: boolean;
  reverse?: boolean;
};

export function ProjectCard({
  project,
  layout = "card",
  showDivider = true,
  reverse = false,
}: ProjectCardProps) {
  if (layout === "split") {
    return (
      <article className={`overflow-hidden ${showDivider ? "border-b border-black/5" : ""}`}>
        <Link
          href={`/work/${project.slug}`}
          className="group grid md:min-h-[34rem] md:grid-cols-2 lg:min-h-[42rem]"
        >
          <div
            className={`flex items-center justify-center p-5 sm:p-8 md:p-10 lg:p-14 ${reverse ? "md:order-2" : "md:order-1"}`}
          >
            <ScrollReveal
              className="w-full max-w-[46rem]"
              direction={reverse ? "right" : "left"}
            >
              <ProjectVisual
                variant={project.visual}
                image={project.image}
                alt={`${project.title} project preview`}
                device={project.device}
              />
            </ScrollReveal>
          </div>

          <div
            className={`flex flex-col justify-center px-6 pb-10 pt-4 sm:px-10 md:px-12 md:py-16 lg:px-20 ${reverse ? "md:order-1" : "md:order-2"}`}
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-small font-medium text-text">
              {project.tag ? (
                <span className="rounded-full border border-border px-2 py-1 uppercase tracking-[0.08em]">
                  {project.tag}
                </span>
              ) : null}
              <span>{project.timeframe}</span>
            </div>
            <h3 className="max-w-[12ch] text-h2 leading-[1.08] transition-colors duration-200 group-hover:text-accent lg:text-[3.5rem]">
              {project.title}
            </h3>
            <p className="mt-8 max-w-[36rem] text-body leading-relaxed text-text-muted lg:text-[1.25rem]">
              {project.summary}
            </p>
            <span className="mt-10 inline-flex text-body font-medium transition-transform duration-300 group-hover:translate-x-1">
              View project <span aria-hidden="true">&nbsp;→</span>
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <ProjectVisual
          variant={project.visual}
          image={project.image}
          alt={`${project.title} project preview`}
          device={project.device}
        />
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
          <p className="max-w-[60ch] text-body text-text-muted">{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
