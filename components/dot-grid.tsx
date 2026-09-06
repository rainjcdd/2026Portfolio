"use client";

import { useEffect, useRef } from "react";

const GRID_GAP = 32;
const INFLUENCE_RADIUS = 255;
const MAX_SHIFT = 40;

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let width = 0;
    let height = 0;
    let frameId = 0;
    let pointer: { x: number; y: number } | null = null;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;
      context.strokeStyle = "rgba(255, 255, 255, 0.025)";

      for (let x = GRID_GAP / 2; x < width; x += GRID_GAP) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = GRID_GAP / 2; y < height; y += GRID_GAP) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      for (let x = GRID_GAP / 2; x < width; x += GRID_GAP) {
        for (let y = GRID_GAP / 2; y < height; y += GRID_GAP) {
          let drawX = x;
          let drawY = y;
          let strength = 0;

          if (pointer) {
            const deltaX = pointer.x - x;
            const deltaY = pointer.y - y;
            const distance = Math.hypot(deltaX, deltaY);

            if (distance < INFLUENCE_RADIUS && distance > 0) {
              strength = 1 - distance / INFLUENCE_RADIUS;
              drawX += (deltaX / distance) * strength * MAX_SHIFT;
              drawY += (deltaY / distance) * strength * MAX_SHIFT;
            }
          }

          context.beginPath();
          context.fillStyle =
            strength > 0.35 ? "rgba(105, 105, 105, 0.42)" : "rgba(75, 75, 75, 0.22)";
          context.arc(drawX, drawY, 1.2 + strength * 1.3, 0, Math.PI * 2);
          context.fill();
        }
      }
    };

    const requestDraw = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      requestDraw();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      requestDraw();
    };

    const handlePointerLeave = () => {
      pointer = null;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      requestDraw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] h-full w-full md:cursor-none"
        aria-hidden="true"
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-12 -mt-12 hidden h-24 w-24 opacity-0 transition-opacity duration-200 md:block"
        aria-hidden="true"
      >
        <svg className="h-full w-full animate-[spin_9s_linear_infinite] motion-reduce:animate-none" viewBox="0 0 96 96">
          <defs>
            <path id="cursor-path" d="M 48,48 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0" />
          </defs>
          <text fill="white" fontSize="8" fontWeight="700" letterSpacing="2.15">
            <textPath href="#cursor-path">UX • PRODUCT • SYSTEMS • </textPath>
          </text>
        </svg>
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.12)]" />
      </div>
    </>
  );
}
