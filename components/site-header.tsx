"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let frameId = 0;

    const updateHeader = () => {
      frameId = 0;
      const header = headerRef.current;
      const featuredPanel = document.querySelector<HTMLElement>(".featured-panel");

      if (!header) {
        return;
      }

      const hasCrossedPageThreshold =
        window.scrollY > Math.max(24, header.offsetHeight * 0.5);

      setHasScrolledPastHero(
        featuredPanel
          ? featuredPanel.getBoundingClientRect().top <= header.offsetHeight
          : hasCrossedPageThreshold,
      );
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  return (
    <header ref={headerRef} className={`site-header ${hasScrolledPastHero ? "site-header-scrolled" : ""}`}>
      <div className="relative z-[1] flex w-full items-start justify-between px-gutter py-6 sm:items-center sm:py-8">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
