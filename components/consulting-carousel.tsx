"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, type PointerEvent, useCallback, useEffect, useRef, useState } from "react";

import { consultingProjects } from "@/data/consulting-projects";

export function ConsultingCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollBack(track.scrollLeft > 4);
    setCanScrollForward(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [updateControls]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-carousel-card]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    cards.forEach((card) => {
      card.dataset.revealReady = "true";
      card.dataset.revealVisible = prefersReducedMotion ? "true" : "false";
    });

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          (entry.target as HTMLElement).dataset.revealVisible = "true";
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: 0.18,
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = 24;
    track.scrollBy({
      left: direction * ((card?.offsetWidth ?? track.clientWidth * 0.75) + gap),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const track = trackRef.current;
    if (!track) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;

    const distance = event.clientX - dragRef.current.startX;
    if (Math.abs(distance) > 5) dragRef.current.moved = true;
    track.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;

    dragRef.current.active = false;
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  };

  return (
    <section className="relative z-20 mt-section-mobile overflow-hidden pb-4 lg:mt-section" aria-labelledby="consulting-title">
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5 lg:mb-14">
        <h2 id="consulting-title" className="text-h2 text-[#C4C4C1]">Design Consulting</h2>

        <div className="flex gap-2" aria-label="Carousel controls">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollBack}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/25 transition-colors hover:bg-text hover:text-white disabled:cursor-default disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-text"
            aria-label="Previous projects"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollForward}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/25 transition-colors hover:bg-text hover:text-white disabled:cursor-default disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-text"
            aria-label="Next projects"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="consulting-carousel flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-4 active:cursor-grabbing"
        onScroll={updateControls}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {consultingProjects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            data-carousel-card
            className="consulting-card-reveal group w-[82vw] max-w-[34rem] shrink-0 snap-start select-none sm:w-[62vw] lg:w-[38vw]"
            style={
              {
                "--consulting-reveal-delay": `${Math.min(index, 3) * 90}ms`,
              } as CSSProperties
            }
            onClick={(event) => {
              if (dragRef.current.moved) event.preventDefault();
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-border sm:rounded-3xl">
              <Image
                src={project.image}
                alt={`${project.title} project thumbnail`}
                fill
                draggable={false}
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 62vw, 82vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <div className="pt-5">
              <h3 className="text-h3 transition-colors group-hover:text-accent">{project.title}</h3>
              <p className="mt-2 text-body text-text-muted">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
