import Link from "next/link";
import { Fragment } from "react";

import { HeroGrowth } from "@/components/hero-growth";
import { FloatingContact } from "@/components/floating-contact";
import { ConsultingGrid } from "@/components/consulting-grid";
import { DotGrid } from "@/components/dot-grid";
import { ProjectCard } from "@/components/project-card";
import { TypewriterSubline } from "@/components/typewriter-subline";
import { projects, isProjectAvailable } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter(
    (project) => project.featured && isProjectAvailable(project.slug),
  );

  return (
    <>
      <div className="home-page relative isolate">
        <section className="hero-reveal relative flex overflow-hidden bg-[#171715] text-white">
          <DotGrid />
          <HeroGrowth />
          <div className="featured-content pointer-events-none relative z-10 mx-auto flex w-full max-w-content items-center py-section-mobile lg:py-section">
            <div className="w-full translate-y-6 sm:translate-y-12">
              <div className="relative">
                <span aria-hidden="true" className="hero-annotation hero-annotation-headline">H1</span>
                <TypewriterSubline />
              </div>
              <p className="relative mt-4 max-w-none md:whitespace-nowrap text-[clamp(1.125rem,1.8vw,1.75rem)] leading-relaxed tracking-[-0.02em] text-white sm:mt-5">
                <span aria-hidden="true" className="hero-annotation hero-annotation-subline">P1</span>
                I lead by doing. I learn by making.
              </p>
              <Link
                href="/about"
                aria-label="Explore More about me"
                className="hero-action-link pointer-events-auto group mt-8 inline-flex items-center gap-3 py-2 text-[clamp(1.125rem,1.8vw,1.75rem)] font-normal leading-relaxed tracking-[-0.02em] text-white transition-colors duration-200 hover:text-[#c4c4c1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore More
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[0.75em] w-[0.75em]">
                  <path d="M5 11 11 5M6 5h5v5" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="featured-panel bg-[#f2f2f1]">
          <div className="featured-content mx-auto max-w-content py-section-mobile lg:py-section">
            <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5 lg:mb-16">
              <h2 className="text-h2 text-[#C4C4C1]">2024 – 2026</h2>
              <Link href="/work" className="shrink-0 text-body hover:text-accent">
                View all <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div>
              {featuredProjects.map((project, index) => (
                <Fragment key={project.slug}>
                  {project.slug === "navigation-redesign" ? (
                    <div className="mb-12 mt-section-mobile border-b border-border pb-5 lg:mb-16 lg:mt-section">
                      <h2 className="text-h2 text-[#C4C4C1]">2021 – 2024</h2>
                    </div>
                  ) : null}

                  <ProjectCard
                    project={project}
                    comingSoon={project.slug === "hapio-app"}
                    layout="split"
                    showDivider={
                      project.slug !== "trackpoint" &&
                      project.slug !== "ai-powered-design-system" &&
                      project.slug !== "hapio-app" &&
                      project.slug !== "navigation-redesign" &&
                      project.slug !== "short-form-video"
                    }
                    addSpacingAfter={
                      project.slug === "trackpoint" ||
                      project.slug === "hapio-app" ||
                      project.slug === "navigation-redesign" ||
                      project.slug === "short-form-video"
                    }
                    reverse={index % 2 === 1}
                  />
                </Fragment>
              ))}
            </div>

            <ConsultingGrid />
          </div>
        </section>
      </div>
      <FloatingContact />
    </>
  );
}
