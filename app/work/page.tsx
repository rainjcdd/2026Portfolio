import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work | UX Portfolio",
};

const projectGroups = [
  {
    id: "2024-2026",
    label: "2024 — 2026",
    projects: projects.filter((project) => project.timeframe === "2024–2026"),
  },
  {
    id: "2021-2024",
    label: "2021 — 2024",
    projects: projects.filter((project) => project.timeframe === "2021–2024"),
  },
  {
    id: "before-2021",
    label: "2021 & Before",
    projects: projects.filter((project) => project.timeframe === "Pre-2021"),
  },
] as const;

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-content px-gutter pb-section-mobile pt-12 lg:pb-section lg:pt-20">
      <header className="mb-section-mobile border-b border-border pb-8 md:grid md:grid-cols-layout lg:mb-section">
        <p className="mb-4 text-small uppercase tracking-[0.12em] text-text-muted md:col-span-3">
          Selected projects
        </p>
        <h1 className="font-display text-hero font-extrabold md:col-span-9">WORK</h1>
      </header>

      <div className="space-y-section-mobile lg:space-y-section">
        {projectGroups.map((group) => (
          <section key={group.id} aria-labelledby={`era-${group.id}`}>
            <div className="grid gap-8 md:grid-cols-layout">
              <h2
                id={`era-${group.id}`}
                className="text-small uppercase tracking-[0.12em] text-text-muted md:col-span-3"
              >
                {group.label}
              </h2>

              <ol className="border-t border-border md:col-span-9">
                {group.projects.map((project, index) => (
                  <li key={project.slug}>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group grid gap-4 border-b border-border py-6 sm:grid-cols-[2rem_1fr_auto] sm:items-start lg:py-8"
                    >
                      <span className="text-small text-text-muted">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <h3 className="text-h3 group-hover:text-accent">{project.title}</h3>
                          {project.tag ? (
                            <span className="rounded-full border border-border px-2 py-1 text-small uppercase tracking-[0.08em] text-text-muted">
                              {project.tag}
                            </span>
                          ) : null}
                        </div>
                        <p className="max-w-[62ch] text-body text-text-muted">{project.summary}</p>
                      </div>
                      <span className="hidden text-body group-hover:text-accent sm:block" aria-hidden="true">
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
