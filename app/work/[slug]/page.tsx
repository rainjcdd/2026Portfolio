import { DesignSystemCaseStudy, DesignSystemCaseStudyHero } from "@/components/design-system-case-study";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { NavigationCaseStudy, NavigationCaseStudyHero } from "@/components/navigation-case-study";
import { SfvCaseStudy, SfvCaseStudyHero } from "@/components/sfv-case-study";
import { ProjectVisual } from "@/components/project-visual";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects, isProjectAvailable } from "@/data/projects";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.filter(({ slug }) => isProjectAvailable(slug)).map(({ slug }) => ({ slug }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  if (slug === "agency-work") redirect("/work#agency-work");
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1 || !isProjectAvailable(slug)) notFound();

  const project = projects[projectIndex];
  const availableProjects = projects.filter(({ slug }) => isProjectAvailable(slug));
  const availableIndex = availableProjects.findIndex((item) => item.slug === slug);
  const nextProject = availableProjects[(availableIndex + 1) % availableProjects.length];
  const isDesignSystem = project.slug === "ai-powered-design-system";
  const isNavigationRedesign = project.slug === "navigation-redesign";
  const isTrackpoint = project.slug === "trackpoint";
  const isShortFormVideo = project.slug === "short-form-video";
  const usesAlternatingLayout = project.detailLayout === "alternating";
  const usesIntroReveal = usesAlternatingLayout || isDesignSystem;

  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header
        className="featured-content mx-auto max-w-content pb-section-mobile pt-12 lg:pb-section lg:pt-20"
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
            {usesIntroReveal ? (
              <span className="hero-line-mask">
                <span className="trackpoint-intro-title block">{project.title}</span>
              </span>
            ) : (
              project.title
            )}
          </h1>
          <div className={`max-w-text-measure lg:pb-2 ${project.overview ? "lg:col-span-5" : "lg:col-span-4"}`}>
            {project.overview ? (
              <p className="text-h3 font-light leading-[1.45] text-text-muted">
                {usesIntroReveal ? (
                  <span className="hero-line-mask">
                    <span className="trackpoint-intro-copy block">{project.overview.copy}</span>
                  </span>
                ) : (
                  project.overview.copy
                )}
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
          <ScrollReveal direction="up" animateOnLoad={usesAlternatingLayout}>
            {isDesignSystem ? <DesignSystemCaseStudyHero /> : isNavigationRedesign ? <NavigationCaseStudyHero /> : isShortFormVideo ? <SfvCaseStudyHero /> : (
            <ProjectVisual
              variant={project.visual}
              image={project.image}
              desktopImage={project.desktopImage}
              mobileImage={project.mobileImage}
              alt={`${project.title} hero image`}
              device={project.device}
              size="large"
            />
            )}
          </ScrollReveal>
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

        {isDesignSystem ? <DesignSystemCaseStudy /> : isNavigationRedesign ? <NavigationCaseStudy /> : isShortFormVideo ? <SfvCaseStudy /> : (
          <>
        <div className="py-section-mobile lg:py-section">
          {[
            { key: "problem", title: "Problem", copy: project.caseStudy.problem },
            ...(isTrackpoint
              ? [{ key: "competitive-landscape", title: "Competitive Landscape", copy: "We mapped the competitive landscape across two dimensions: vendor-neutral versus distributor-native platforms, and back-office procurement versus frontline workflows. The opportunity for TrackPoint was to connect supply ordering with the everyday work of managing stock and supporting care." }]
              : []),
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
                {copy ? <p className={`${project.details ? "" : "mt-6"} max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]`}>
                  {copy}
                </p> : null}
                {key === "competitive-landscape" ? (
                  <>
                  <figure className="mt-10 w-full max-w-[760px] lg:mt-14">
                    <Image
                      src="/images/projects/trackpoint/competitive-landscape.svg"
                      alt="Competitive positioning: TrackPoint connects distributor-native supply services with frontline workflows, while Hybrent provides the vendor-neutral experience benchmark."
                      width={1200}
                      height={760}
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="h-auto w-full rounded-2xl"
                    />
                  </figure>
                  <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:mt-14 lg:grid-cols-3 lg:gap-10">
                    {[
                      { title: "Benchmark the experience", copy: "Our review included Oncare / Hybrent, Direct Supply (DSSI), Hospice Cloud Pro, and McKesson Supply Manager. Hybrent served as the benchmark for core functionality and ease of use." },
                      { title: "Connect the daily workflow", copy: "TrackPoint’s intended focus combined self-service ordering, stock visibility, and per-patient-day cost control, bringing procurement closer to the needs of frontline teams." },
                      { title: "Build on the Medline relationship", copy: "The strategy was to make Medline the default supply partner within a useful daily workflow, supporting adoption and continued use through practical value." },
                    ].map((point) => (
                      <div key={point.title}>
                        <h3 className="text-body font-medium leading-snug text-text">{point.title}</h3>
                        <p className="mt-3 text-body leading-relaxed text-text-muted">{point.copy}</p>
                      </div>
                    ))}
                  </div>
                  </>
                ) : null}
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
                    <ScrollReveal direction="up" className="w-full max-w-[920px]">
                      <Image
                        src={project.processImage}
                        alt="Healthcare settings prioritized for TrackPoint customer research"
                        width={2282}
                        height={1278}
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="h-auto w-full"
                      />
                    </ScrollReveal>
                  </figure>
                ) : null}
                {key === "process" && isTrackpoint ? (
                  <>
                  <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-14">
                    {[
                      { value: "14.7K", label: "Nursing homes", detail: "Estimated market · ~$4.5B TAM" },
                      { value: "41.5K", label: "Assisted living communities", detail: "Estimated market · ~$1.1B TAM" },
                      { value: "6.7K", label: "Medicare hospices", detail: "Estimated market · ~$0.8B TAM" },
                    ].map((metric) => (
                      <div key={metric.label} className="border-l border-border pl-5">
                        <p className="text-4xl font-semibold tracking-tight text-text lg:text-5xl">{metric.value}</p>
                        <h3 className="mt-3 text-body font-medium text-text">{metric.label}</h3>
                        <p className="mt-2 text-small leading-relaxed text-text-muted">{metric.detail}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-small leading-relaxed text-text-muted">Estimated size of our initial target markets.</p>
                  <div className="mt-8 max-w-[920px] rounded-xl bg-[#eef3fa] p-6 lg:p-8">
                    <h3 className="text-body font-semibold text-text">Key finding: simplicity is a strategic advantage</h3>
                    <p className="mt-3 text-body leading-relaxed text-text-muted">With an estimated <strong className="font-semibold text-text">1.8% median margin for nursing homes</strong> and an average of <strong className="font-semibold text-text">33 beds per assisted living community</strong>, our target customers operate with limited resources. We focused on a practical, easy-to-adopt workflow that fits the needs of smaller care providers.</p>
                  </div>
                  </>
                ) : null}
                {key === "process" && isTrackpoint ? (
                  <div className="mt-12 max-w-text-measure lg:mt-16">
                    <h3 className="text-h3 text-text">Understanding the people behind the inventory</h3>
                    <div className="mt-4 space-y-4 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
                      <p>
                        Our initial research included 10 participants across nursing homes, assisted living, surgery centers, and physician offices of different sizes. Through in-depth interviews, we explored daily responsibilities, how supplies were organized and moved, and where existing tools fell short.
                      </p>
                      <p>
                        Supplies were spread across rooms and floors, with staff relying on personal knowledge, shared notes, and informal communication to keep work moving. The needs differed by role: administrators needed reliable stock and ordering information, clinicians needed quick access during patient care, and directors needed visibility across locations. These findings shaped the three personas below.
                      </p>
                    </div>
                  </div>
                ) : null}
                {key === "process" && project.personas ? (
                  <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
                    <h3 className="text-h3 text-text md:col-span-3">Personas</h3>
                    {project.personas.map((persona, index) => (
                      <div key={persona.title} className="rounded-2xl border border-border bg-white p-6 lg:p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3fa] text-[#164777]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            {index === 0 ? (
                              <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M3 8v9l9 5 9-5V8M12 13v9M7.5 5.5l9 5" /></>
                            ) : index === 1 ? (
                              <><path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h3M13 3h3M10 12v3a5 5 0 0 0 10 0v-2" /><circle cx="20" cy="10" r="2" /></>
                            ) : (
                              <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 16v-4M12 16V8M17 16v-6" /></>
                            )}
                          </svg>
                        </div>
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
              <ScrollReveal direction="up">
                <Image
                  src={project.solutionImage.src}
                  alt={project.solutionImage.alt}
                  width={project.solutionImage.width}
                  height={project.solutionImage.height}
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className={`h-auto w-full ${isTrackpoint ? "rounded-xl" : ""}`}
                />
              </ScrollReveal>
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
            project.details && !usesAlternatingLayout ? "lg:ml-[20%]" : ""
          }`}
        >
          {project.gallery.filter((visual) => !visual.hidden).map((visual, index) => (
            usesAlternatingLayout ? (
              <section
                key={visual.label}
                aria-labelledby={`${project.slug}-feature-${index}`}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20"
              >
                <div className={isTrackpoint ? "grid md:col-span-2 md:grid-cols-4 md:gap-10 lg:gap-14" : index % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}>
                  <div className={isTrackpoint ? "md:col-span-3 md:col-start-2" : ""}>
                  {isTrackpoint ? <p className="mb-3 text-small text-text-muted">{String(index + 1).padStart(2, "0")}</p> : null}
                  <h3 id={`${project.slug}-feature-${index}`} className={isTrackpoint ? "text-h3 text-text" : "text-h2"}>
                    {visual.label}
                  </h3>
                  <div className={`${isTrackpoint ? "mt-4 space-y-4" : "mt-6 space-y-5"} max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]`}>
                    {visual.copy?.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  </div>
                </div>
                <ScrollReveal
                  direction="up"
                  className={isTrackpoint ? "mx-auto w-full max-w-[970px] md:col-span-2" : index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}
                >
                  {visual.image ? (
                    <a href={visual.image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${visual.image.alt}`}>
                      <Image {...visual.image} alt={visual.image.alt} sizes={isTrackpoint ? "90vw" : "(max-width: 767px) 90vw, 45vw"} className={`h-auto w-full ${isTrackpoint ? "rounded-xl" : ""}`} />
                    </a>
                  ) : <ProjectVisual variant={visual.visual} />}
                </ScrollReveal>
                {visual.supportingImages ? (
                  <div className="grid grid-cols-2 items-start gap-4 md:col-span-2 md:gap-12 lg:gap-20">
                    {visual.supportingImages.map((img) => (
                      <a key={img.src} href={img.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${img.alt}`}>
                        <Image {...img} alt={img.alt} sizes="45vw" className={`w-full ${isTrackpoint ? "aspect-[4/3] h-auto rounded-xl object-cover object-top" : "h-auto"}`} />
                      </a>
                    ))}
                  </div>
                ) : index < 2 ? (
                  <div className="grid grid-cols-2 gap-4 md:col-span-2 md:gap-12 lg:gap-20">
                    {[1, 2].map((number) => (
                      <div
                        key={number}
                        className="aspect-[4/3] w-full bg-[#e7e7e4]"
                        role="img"
                        aria-label={`${visual.label} image placeholder ${number}`}
                      />
                    ))}
                  </div>
                ) : null}
              </section>
            ) : (
            <figure key={visual.label}>
              <ProjectVisual variant={visual.visual} />
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-border pt-4 text-small text-text-muted">
                <span>{visual.label}</span>
                <span>{String(index + 1).padStart(2, "0")} / 03</span>
              </figcaption>
            </figure>
            )
          ))}
        </div>

          </>
        )}

        <nav
          className={`mt-section-mobile border-t border-border pt-10 lg:mt-section lg:pt-14 ${
            project.details ? "lg:ml-[20%]" : ""
          }`}
          aria-label="Next project"
        >
          <p className="mb-4 text-small uppercase tracking-[0.12em] text-text-muted">Next project</p>
          <Link
            href={isShortFormVideo ? "/portfolio/unilever" : `/work/${nextProject.slug}`}
            className="group flex items-end justify-between gap-8"
          >
            <span className="max-w-[14ch] text-h2 transition-opacity duration-300 group-hover:opacity-55 lg:text-[3.5rem]">
              {isShortFormVideo ? "Unilever" : nextProject.title}
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
