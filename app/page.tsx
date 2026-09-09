import Link from "next/link";
import { Fragment } from "react";

import Aurora from "@/components/Aurora";
import { ConsultingCarousel } from "@/components/consulting-carousel";
import { DotGrid } from "@/components/dot-grid";
import { HeadlineFlowerCursor } from "@/components/headline-flower-cursor";
import { ProjectCard } from "@/components/project-card";
import { TypewriterSubline } from "@/components/typewriter-subline";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <div className="home-page relative isolate">
        <section className="hero-reveal relative flex overflow-hidden bg-bg-inverse text-white">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[78%] origin-center scale-y-[-1] opacity-[0.52] sm:h-[84%]"
            aria-hidden="true"
          >
            <Aurora
              colorStops={["#ff2d24", "#ff6a34", "#ffad7a"]}
              amplitude={1.26}
              blend={0.5}
              speed={0.82}
            />
          </div>
          <DotGrid />
          <div className="pointer-events-none relative z-10 flex w-full items-center px-gutter py-section-mobile lg:py-section">
            <div className="translate-y-12">
              <HeadlineFlowerCursor>
                <h1 className="font-display text-[clamp(2.8rem,13vw,3.55rem)] font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-[clamp(3.2rem,10vw,8.8rem)]">
                  <span className="hero-line-mask mb-[0.08em]">
                    <span className="hero-line-reveal hero-line-reveal-1">Curiosity</span>
                  </span>
                  <span className="hero-line-mask">
                    <span className="hero-line-reveal hero-line-reveal-2">Creativity</span>
                  </span>
                  <span className="hero-line-mask">
                    <span className="hero-line-reveal hero-line-reveal-3">&amp; Connection</span>
                  </span>
                </h1>
              </HeadlineFlowerCursor>
              <TypewriterSubline />
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
                  {project.slug === "hapio-app" ? (
                    <div className="mb-8 mt-14 border-b border-border pb-5 lg:mb-10 lg:mt-20">
                      <h2 className="text-h2 text-[#C4C4C1]">Hobby Project: Vibe coding</h2>
                    </div>
                  ) : null}

                  {project.slug === "navigation-redesign" ? (
                    <div className="mb-12 mt-section-mobile border-b border-border pb-5 lg:mb-16 lg:mt-section">
                      <h2 className="text-h2 text-[#C4C4C1]">2021 – 2024</h2>
                    </div>
                  ) : null}

                  <ProjectCard
                    project={project}
                    layout="split"
                    showDivider={
                      project.slug !== "ai-powered-design-system" && project.slug !== "hapio-app"
                    }
                    reverse={index % 2 === 1}
                  />
                </Fragment>
              ))}
            </div>

            <ConsultingCarousel />
          </div>
        </section>
      </div>
    </>
  );
}
