import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { consultingProjects } from "@/data/consulting-projects";

const thumbnailDimensions: Record<string, { width: number; height: number }> = {
  "mrs-meyer": { width: 1474, height: 1340 },
  unilever: { width: 1500, height: 1382 },
  "mercedes-benz": { width: 1500, height: 1382 },
  "frontier-coop": { width: 1500, height: 1228 },
  plexus: { width: 1500, height: 1207 },
};

export function ConsultingGrid() {
  return (
    <section className="relative z-20 mt-section-mobile pb-4 lg:mt-section" aria-labelledby="consulting-title">
      <div className="mb-10 border-b border-border pb-5 lg:mb-14">
        <h2 id="consulting-title" className="text-h2 text-[#C4C4C1]">Design Consulting</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2">
        {consultingProjects.map((project) => (
          <Link key={project.slug} href={project.href} className="consulting-grid-card group block min-w-0">
            <div className="relative overflow-hidden rounded-lg bg-border">
              <Image
                src={project.image}
                alt={`${project.title} project thumbnail`}
                width={thumbnailDimensions[project.slug].width}
                height={thumbnailDimensions[project.slug].height}
                sizes="(min-width: 640px) 45vw, 90vw"
                className="block h-auto w-full"
              />
              <div className="consulting-grid-overlay absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-transparent to-transparent p-5" aria-hidden="true">
                <div className="flex flex-wrap gap-2">
                  {project.subtitle.split(", ").map((tag, index) => (
                    <span key={tag} className="consulting-grid-tag rounded-full border border-white/75 bg-black/15 px-3 py-2 text-[12px] leading-none text-white backdrop-blur-sm" style={{ "--tag-index": index } as CSSProperties}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pb-5 pt-5">
              <h3 className="text-base font-medium leading-snug transition-colors group-hover:text-accent">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
