"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type HeadlineFlowerCursorProps = {
  children: ReactNode;
};

const CURSOR_EVENT = "headline-flower-cursor";
const subscribeToClient = () => () => {};

export function HeadlineFlowerCursor({ children }: HeadlineFlowerCursorProps) {
  const headlineRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);

  useEffect(() => {
    const supportsFlowerCursor = window.matchMedia("(min-width: 768px) and (pointer: fine)");

    const setActive = (active: boolean) => {
      if (isActiveRef.current === active) return;

      isActiveRef.current = active;
      document.body.classList.toggle("headline-flower-active", active);
      if (flowerRef.current) flowerRef.current.style.opacity = active ? "1" : "0";
      window.dispatchEvent(new CustomEvent(CURSOR_EVENT, { detail: { active } }));
    };

    const handlePointerMove = (event: PointerEvent) => {
      const headline = headlineRef.current;
      const flower = flowerRef.current;

      if (!headline || !flower || !supportsFlowerCursor.matches) {
        setActive(false);
        return;
      }

      const bounds = headline.getBoundingClientRect();
      const isInside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      setActive(isInside);
      if (isInside) {
        flower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    const handlePointerLeave = () => setActive(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      setActive(false);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div ref={headlineRef} className="pointer-events-auto relative w-fit md:cursor-none">
        {children}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-[22%] z-20 h-32 w-32 bg-contain bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/images/spider-lily-transparent.png')" }}
        />
      </div>
      {isClient
        ? createPortal(
            <div
              ref={flowerRef}
              aria-hidden="true"
              className="pointer-events-none fixed left-0 top-0 z-[70] -ml-[70px] -mt-[70px] hidden h-[140px] w-[140px] bg-contain bg-center bg-no-repeat opacity-0 transition-opacity duration-150 md:block"
              style={{ backgroundImage: "url('/images/spider-lily-transparent.png')" }}
            />,
            document.body,
          )
        : null}
    </>
  );
}
