"use client";

import { useEffect, useRef, type PointerEvent, type KeyboardEvent } from "react";

export function AboutMotion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".me-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("me-is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: .12 });
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add("me-will-reveal");
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  return null;
}

const initialPositions = [{ x: 35, y: 70 }, { x: 110, y: 108 }, { x: 182, y: 63 }, { x: 72, y: 170 }, { x: 160, y: 178 }];

export function ShapePlayground() {
  const container = useRef<HTMLDivElement>(null);
  const drag = useRef<{ index: number; x: number; y: number; left: number; top: number } | null>(null);
  const positions = useRef(initialPositions.map((position) => ({ ...position })));

  const place = (index: number, x: number, y: number) => {
    const parent = container.current;
    if (!parent) return;
    const shape = parent.querySelectorAll<HTMLElement>(".me-play-shape")[index];
    x = Math.max(0, Math.min(parent.clientWidth - 60, x));
    y = Math.max(0, Math.min(parent.clientHeight - 60, y));
    positions.current[index] = { x, y };
    shape.style.transform = `translate(${x}px, ${y}px)`;
  };
  const start = (event: PointerEvent<HTMLButtonElement>, index: number) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const { x, y } = positions.current[index];
    drag.current = { index, x: event.clientX, y: event.clientY, left: x, top: y };
  };
  const move = (event: PointerEvent<HTMLButtonElement>) => {
    if (!drag.current) return;
    const { index, x, y, left, top } = drag.current;
    place(index, left + event.clientX - x, top + event.clientY - y);
  };
  const keyMove = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const directions: Record<string, [number, number]> = { ArrowLeft: [-10, 0], ArrowRight: [10, 0], ArrowUp: [0, -10], ArrowDown: [0, 10] };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    const { x, y } = positions.current[index];
    place(index, x + direction[0], y + direction[1]);
  };

  return <div className="me-playground" ref={container} aria-label="Draggable geometric shapes">
    {initialPositions.map(({ x, y }, index) => <button
      type="button"
      key={index}
      className={`me-play-shape ${index === 1 || index === 4 ? "me-play-square" : "me-play-circle"}`}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      aria-label={`Move ${index === 1 || index === 4 ? "square" : "circle"} ${index + 1}. Drag or use arrow keys.`}
      onPointerDown={(event) => start(event, index)}
      onPointerMove={move}
      onPointerUp={() => { drag.current = null; }}
      onPointerCancel={() => { drag.current = null; }}
      onKeyDown={(event) => keyMove(event, index)}
    >{index === 0 ? "Drag me" : null}</button>)}
  </div>;
}
