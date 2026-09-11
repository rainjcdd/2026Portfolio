import Image from "next/image";
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
      <header
        className={`featured-content mx-auto max-w-content pt-12 lg:pt-20 ${
          project.overview ? "pb-6 lg:pb-16" : "pb-section-mobile lg:pb-section"
        }`}
      >
        <div className="mb-10 flex flex-wrap items-center gap-3 text-small font-medium text-text-muted lg:mb-14">
          {project.tag ? (
            <span className="rounded-full border border-border px-2 py-1 uppercase tracking-[0.08em]">
              {project.tag}
            </span>
          ) : null}
          <span className={project.overview ? "text-text" : undefined}>
            {project.overview?.heading ?? project.timeframe}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1
            className={`font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] ${
              project.overview ? "text-[#333333] lg:col-span-7" : "lg:col-span-8"
            }`}
          >
            {project.title}
          </h1>
          <div className={`max-w-text-measure lg:pb-2 ${project.overview ? "lg:col-span-5" : "lg:col-span-4"}`}>
            {project.overview ? (
              <p className="text-h3 font-light leading-[1.45] text-text-muted">
                {project.overview.copy}
              </p>
            ) : (
              <p className="text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
                {project.summary}
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="featured-content mx-auto max-w-content">
        <div className="mb-section-mobile lg:mb-section">
          <ProjectVisual
            variant={project.visual}
            image={project.image}
            desktopImage={project.desktopImage}
            mobileImage={project.mobileImage}
            alt={`${project.title} hero image`}
            device={project.device}
            size="large"
          />
        </div>

        <dl
          className={`grid gap-x-8 gap-y-10 border-border py-10 lg:py-14 ${
            project.details
              ? "border-t sm:grid-cols-2 lg:grid-cols-4"
              : "border-y sm:grid-cols-3"
          }`}
        >
          {(project.details ?? [
            { label: "Role", items: [project.role] },
            { label: "Timeframe", items: [project.timeframe] },
            { label: "Tools", items: [project.tools.join(", ")] },
          ]).map((detail) => (
            <div key={detail.label}>
              <dt className="mb-5 text-small font-medium text-text">{detail.label}</dt>
              <dd>
                <ul className="space-y-1 text-body font-light leading-relaxed text-text-muted">
                  {detail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>

        <div className="py-section-mobile lg:py-section">
          {[
            { key: "problem", title: "Problem", copy: project.caseStudy.problem },
            {
              key: "process",
              title: project.processTitle ?? "Process",
              copy: project.caseStudy.process,
            },
            {
              key: "outcome",
              title: project.outcomeTitle ?? "Outcome",
              copy: project.caseStudy.outcome,
            },
            ...(project.caseStudy.solution
              ? [
                  {
                    key: "solution",
                    title: "Solution",
                    copy: project.caseStudy.solution,
                  },
                ]
              : []),
          ].map(({ key, title, copy }, index) => (
            <section
              key={key}
              className={`grid gap-6 py-12 lg:py-20 ${
                project.details
                  ? "md:grid-cols-4 md:gap-10 lg:gap-14"
                  : "md:grid-cols-12"
              } ${
                index === 0 ? "border-t border-border" : ""
              } ${key === "solution" ? "" : "border-b border-border"}`}
              aria-labelledby={`${project.slug}-${key}`}
            >
              <div
                className={`flex items-baseline gap-4 ${
                  project.details ? "md:col-span-1" : "md:col-span-3"
                }`}
              >
                <p className="shrink-0 text-small uppercase tracking-[0.12em] text-text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {project.details ? (
                  <h2
                    id={`${project.slug}-${key}`}
                    className="text-h2 leading-[1.05]"
                  >
                    {title}
                  </h2>
                ) : null}
              </div>
              <div className={project.details ? "md:col-span-3" : "md:col-span-9"}>
                {!project.details ? (
                  <h2 id={`${project.slug}-${key}`} className="text-h2">
                    {title}
                  </h2>
                ) : null}
                <p className={`${project.details ? "" : "mt-6"} max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]`}>
                  {copy}
                </p>
                {key === "problem" && project.problemPoints ? (
                  <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-3 lg:mt-14 lg:gap-10 lg:pt-10">
                    {project.problemPoints.map((point) => (
                      <div key={point.title}>
                        <h3 className="text-body font-medium leading-snug text-text">{point.title}</h3>
                        <p className="mt-3 text-body font-light leading-relaxed text-text-muted">
                          {point.copy}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {key === "process" && project.processImage ? (
                  <figure className="mt-10 flex justify-start lg:mt-14">
                    <Image
                      src={project.processImage}
                      alt="Healthcare settings prioritized for TrackPoint customer research"
                      width={2282}
                      height={1278}
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      className="h-auto w-full max-w-[760px]"
                    />
                  </figure>
                ) : null}
                {key === "process" && project.personas ? (
                  <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-3 lg:mt-14 lg:gap-10 lg:pt-10">
                    {project.personas.map((persona) => (
                      <div key={persona.title}>
                        <h3 className="text-body font-medium leading-snug text-text">
                          {persona.title}
                        </h3>
                        <p className="mt-3 text-body font-light leading-relaxed text-text-muted">
                          {persona.copy}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          ))}
          {project.solutionImage ? (
            <figure>
              <Image
                src={project.solutionImage.src}
                alt={project.solutionImage.alt}
                width={project.solutionImage.width}
                height={project.solutionImage.height}
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="h-auto w-full"
              />
            </figure>
          ) : project.caseStudy.solution ? (
            <div
              className="aspect-[16/9] w-full bg-[#e7e7e4]"
              role="img"
              aria-label="Solution image placeholder"
            />
          ) : null}
        </div>

        <div
          className={`space-y-section-mobile lg:space-y-section ${
            project.details ? "lg:ml-[20%]" : ""
          }`}
        >
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

        <nav
          className={`mt-section-mobile border-t border-border pt-10 lg:mt-section lg:pt-14 ${
            project.details ? "lg:ml-[20%]" : ""
          }`}
          aria-label="Next project"
        >
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
