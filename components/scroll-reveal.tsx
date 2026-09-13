"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  animateOnLoad?: boolean;
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  direction = "left",
  animateOnLoad = false,
  delay = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(animateOnLoad);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) {
      const frame = window.requestAnimationFrame(() => setHasEntered(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.88 && bounds.bottom > 0) {
      if (animateOnLoad) {
        const frame = window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setHasEntered(true));
        });
        return () => window.cancelAnimationFrame(frame);
      }

      const frame = window.requestAnimationFrame(() => setHasEntered(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const readyFrame = window.requestAnimationFrame(() => setIsReady(true));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEntered(true);
        observer.disconnect();
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);
    return () => {
      window.cancelAnimationFrame(readyFrame);
      observer.disconnect();
    };
  }, [animateOnLoad]);

  return (
    <div
      ref={elementRef}
      className={`project-visual-reveal ${className}`}
      data-reveal-direction={direction}
      data-reveal-ready={isReady ? "true" : "false"}
      data-reveal-visible={hasEntered ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
