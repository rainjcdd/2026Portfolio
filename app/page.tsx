import Link from "next/link";

import { DotGrid } from "@/components/dot-grid";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <div className="home-page relative isolate">
        <section className="hero-reveal relative flex overflow-hidden bg-bg-inverse text-white">
          <DotGrid />
          <div className="pointer-events-none relative z-10 flex w-full items-center px-gutter py-section-mobile lg:py-section">
            <div className="translate-y-12">
              <h1 className="font-display text-[clamp(3.2rem,10vw,8.8rem)] font-extrabold leading-[0.94] tracking-[-0.065em]">
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
              <p className="ml-1 mt-8 max-w-full text-left text-[20px] font-light leading-snug tracking-[-0.02em] text-[#A3A3A3]">
                Product x Design x Business
              </p>
            </div>
          </div>
          <p className="pointer-events-none absolute bottom-6 right-gutter z-10 text-small uppercase tracking-[0.12em] text-white/45">
            Move to explore
          </p>
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
