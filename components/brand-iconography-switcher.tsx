"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";

const brandNames = ["Stop & Shop", "Food Lion"];

export function BrandIconographySwitcher({ children }: { children: ReactNode }) {
  const panels = Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = !window.IntersectionObserver;
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (visible && !motion.matches && !paused && !document.hidden) {
        timer = setInterval(() => setActive((index) => (index + 1) % panels.length), 4000);
      }
    };
    const observer = window.IntersectionObserver ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.15 }) : undefined;
    observer?.observe(element);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      clearInterval(timer);
      observer?.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused, panels.length]);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[1120px]">
      <div className="grid">
        {panels.map((panel, index) => (
          <div key={index} aria-hidden={active !== index} inert={active !== index} className={`col-start-1 row-start-1 transition-opacity duration-700 motion-reduce:transition-none ${active === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}>
            {panel}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-3">
        {panels.map((_, index) => (
          <button key={index} type="button" aria-label={`Show ${brandNames[index]} icons`} aria-pressed={active === index} onClick={() => setActive(index)} className="flex h-9 w-9 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005653]">
            <span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${active === index ? "w-6 bg-[#005653]" : "w-2 bg-[#c8cecb]"}`} />
          </button>
        ))}
        <button type="button" aria-label={paused ? "Play icon animation" : "Pause icon animation"} onClick={() => setPaused((value) => !value)} className="ml-2 px-2 py-2 text-[12px] text-text-muted">
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
