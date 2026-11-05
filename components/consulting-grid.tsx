"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef } from "react";

import { consultingProjects } from "@/data/consulting-projects";

export function ConsultingGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.IntersectionObserver) return;
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".consulting-card-reveal");
    if (!cards) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.revealVisible = "true";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    cards.forEach((card) => {
      if (card.getBoundingClientRect().top < window.innerHeight) return;
      card.dataset.revealReady = "true";
      card.dataset.revealVisible = "false";
      observer.observe(card);
    });
    return () => {
      observer.disconnect();
      cards.forEach((card) => {
        delete card.dataset.revealReady;
        delete card.dataset.revealVisible;
      });
    };
  }, []);

  return (
    <section className="relative z-20 mt-section-mobile pb-4 lg:mt-section" aria-labelledby="consulting-title">
      <div className="mb-10 border-b border-border pb-5 lg:mb-14">
        <h2 id="consulting-title" className="text-h2 text-[#C4C4C1]">Design Consulting</h2>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2">
        {consultingProjects.map((project, index) => (
          <Link key={project.slug} href={project.href} className="consulting-grid-card consulting-card-reveal group block min-w-0" style={{ "--consulting-reveal-delay": `${(index % 2) * 100}ms` } as CSSProperties}>
            <div className="relative aspect-[11/10] overflow-hidden rounded-lg bg-border">
              <Image
                src={project.slug === "mrs-meyer" ? "/images/consulting/mrs-meyer-grid.png" : project.image}
                alt={`${project.title} project thumbnail`}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="block object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
              />
              <div className="consulting-grid-overlay absolute inset-0 flex items-end bg-white/35 p-5" aria-hidden="true">
                <div className="flex flex-wrap gap-2">
                  {project.subtitle.split(", ").map((tag, index) => (
                    <span key={tag} className="consulting-grid-tag rounded-full border border-black/20 bg-white/75 px-3 py-2 text-[12px] leading-none text-[#333333] backdrop-blur-sm" style={{ "--tag-index": index } as CSSProperties}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pb-5 pt-5">
              <h3 className="text-base font-medium leading-snug transition-colors duration-200 group-hover:text-[#a3a3a3]">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
