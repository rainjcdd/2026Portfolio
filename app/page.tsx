import Link from "next/link";

import Aurora from "@/components/Aurora";
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
            className="pointer-events-none absolute inset-0 z-[1] origin-center scale-y-[-1] opacity-25"
            aria-hidden="true"
          >
            <Aurora
              colorStops={["#1e3a8a", "#71364e", "#4c1d95"]}
              amplitude={0.65}
              blend={0.45}
              speed={0.35}
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

        <section className="featured-panel bg-bg">
          <div className="featured-content mx-auto max-w-content py-section-mobile lg:py-section">
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
          </div>
        </section>
      </div>
    </>
  );
}
