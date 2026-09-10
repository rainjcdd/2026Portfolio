import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header className="mx-auto max-w-content px-gutter pb-section-mobile pt-12 lg:pb-section lg:pt-20">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-small font-medium text-text-muted lg:mb-14">
          {project.tag ? (
            <span className="rounded-full border border-border px-2 py-1 uppercase tracking-[0.08em]">
              {project.tag}
            </span>
          ) : null}
          <span>{project.timeframe}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] lg:col-span-8">
            {project.title}
          </h1>
          <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:col-span-4 lg:pb-2 lg:text-[1.125rem]">
            {project.summary}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-gutter">
        <div className="mb-section-mobile lg:mb-section">
          <ProjectVisual
            variant={project.visual}
            image={project.image}
            alt={`${project.title} hero image`}
            device={project.device}
            size="large"
          />
        </div>

        <dl className="grid gap-7 border-y border-border py-7 sm:grid-cols-3 lg:py-9">
          <div>
            <dt className="mb-2 text-small uppercase tracking-[0.12em] text-text-muted">Role</dt>
            <dd className="text-body">{project.role}</dd>
          </div>
          <div>
            <dt className="mb-2 text-small uppercase tracking-[0.12em] text-text-muted">Timeframe</dt>
            <dd className="text-body">{project.timeframe}</dd>
          </div>
          <div>
            <dt className="mb-2 text-small uppercase tracking-[0.12em] text-text-muted">Tools</dt>
            <dd className="text-body">{project.tools.join(", ")}</dd>
          </div>
        </dl>

        <div className="py-section-mobile lg:py-section">
          {(
            [
              ["Problem", project.caseStudy.problem],
              ["Process", project.caseStudy.process],
              ["Outcome", project.caseStudy.outcome],
            ] as const
          ).map(([title, copy], index) => (
            <section
              key={title}
              className={`grid gap-6 py-12 md:grid-cols-12 lg:py-20 ${
                index === 0 ? "border-t border-border" : ""
              } border-b border-border`}
              aria-labelledby={`${project.slug}-${title.toLowerCase()}`}
            >
              <p className="text-small uppercase tracking-[0.12em] text-text-muted md:col-span-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-9">
                <h2 id={`${project.slug}-${title.toLowerCase()}`} className="text-h2">
                  {title}
                </h2>
                <p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
                  {copy}
                </p>
              </div>
            </section>
          ))}
        </div>

        <div className="space-y-section-mobile lg:space-y-section">
          {project.gallery.map((visual, index) => (
            <figure key={visual.label}>
              <ProjectVisual variant={visual.visual} />
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-border pt-4 text-small text-text-muted">
                <span>{visual.label}</span>
                <span>{String(index + 1).padStart(2, "0")} / 03</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <nav className="mt-section-mobile border-t border-border pt-10 lg:mt-section lg:pt-14" aria-label="Next project">
          <p className="mb-4 text-small uppercase tracking-[0.12em] text-text-muted">Next project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-end justify-between gap-8"
          >
            <span className="max-w-[14ch] text-h2 transition-opacity duration-300 group-hover:opacity-55 lg:text-[3.5rem]">
              {nextProject.title}
            </span>
            <span className="pb-1 text-h3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
