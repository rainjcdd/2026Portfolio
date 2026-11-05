"use client";

import { useEffect, useRef } from "react";
import { ContactForm } from "@/components/contact-form";

export function FloatingContact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const desktop = window.matchMedia("(min-width: 640px)").matches;
      const start = desktop ? 112 : window.innerHeight * .22 + 24;
      const end = desktop ? 32 : 24;
      const progress = Math.min(1, Math.max(0, window.scrollY / 180));
      containerRef.current?.style.setProperty("bottom", `${start + (end - start) * progress}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div ref={containerRef} className="contact-floating pointer-events-none fixed bottom-[calc(22svh+1.5rem)] right-6 z-[80] sm:bottom-28 sm:right-8">
      <ContactForm />
    </div>
  );
}
