"use client";

import { useEffect, useRef } from "react";

const GRID_GAP = 32;
const INFLUENCE_RADIUS = 150;
const MAX_SHIFT = 8;

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      context.strokeStyle = "rgba(17, 17, 17, 0.055)";

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
            strength > 0.35 ? "rgba(59, 91, 255, 0.8)" : "rgba(17, 17, 17, 0.28)";
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
      requestDraw();
    };

    const handlePointerLeave = () => {
      pointer = null;
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

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
