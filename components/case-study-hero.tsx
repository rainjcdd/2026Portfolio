import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";

/** Full-width project artwork, separate from the readable case-study column. */
export function CaseStudyHero({ children, animateOnLoad = true }: {
  children: ReactNode;
  animateOnLoad?: boolean;
}) {
  return (
    <div data-case-study-hero className="mb-section-mobile w-full lg:mb-section">
      <ScrollReveal direction="up" animateOnLoad={animateOnLoad} className="w-full">
        {children}
      </ScrollReveal>
    </div>
  );
}
