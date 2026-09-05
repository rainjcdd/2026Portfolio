import Link from "next/link";

import { DotGrid } from "@/components/dot-grid";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-8rem)] overflow-hidden border-y border-border sm:min-h-[calc(100svh-6.5rem)]">
        <DotGrid />
        <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-content items-center px-gutter py-section-mobile lg:py-section">
          <h1 className="max-w-[11ch] text-hero">
            Curiosity.
            <br />
            Aesthetics.
            <br />
            <span className="text-accent">Integration.</span>
          </h1>
        </div>
        <p className="pointer-events-none absolute bottom-6 right-gutter z-10 text-small uppercase tracking-[0.12em] text-text-muted">
          Move to explore
        </p>
      </section>

      <section className="mx-auto max-w-content px-gutter py-section-mobile lg:py-section">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5 lg:mb-16">
          <div>
            <p className="mb-2 text-small uppercase tracking-[0.12em] text-text-muted">Selected projects</p>
            <h2 className="text-h2">Featured work</h2>
          </div>
          <Link href="/work" className="shrink-0 text-body hover:text-accent">
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
