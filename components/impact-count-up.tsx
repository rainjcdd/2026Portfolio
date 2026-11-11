"use client";

import { useEffect, useRef } from "react";

export function ImpactCountUp({ value }: { value: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.IntersectionObserver) return;

    const match = value.match(/^([+−-]?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const [, prefix, numeric, suffix] = match;
    const target = Number.parseFloat(numeric.replaceAll(",", ""));
    const format = (amount: number) => {
      const number = target < 1
        ? amount.toFixed(1)
        : Math.round(amount).toLocaleString("en-US", { useGrouping: numeric.includes(",") });
      return `${prefix}${number}${suffix}`;
    };
    let animationFrame = 0;
    let started = false;
    element.textContent = format(0);

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      let start: number | undefined;
      let previousStep = -1;
      const animate = (now: number) => {
        start ??= now;
        const progress = Math.min((now - start) / 650, 1);
        const step = Math.floor(progress * 18);
        if (step !== previousStep && progress < 1) {
          previousStep = step;
          element.textContent = format(target * (1 - Math.pow(1 - step / 18, 2)));
        }
        if (progress < 1) animationFrame = window.requestAnimationFrame(animate);
        else element.textContent = value;
      };
      animationFrame = window.requestAnimationFrame(animate);
    }, { threshold: 0.6 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span aria-label={value} className="tabular-nums">
      <span ref={numberRef} aria-hidden="true">{value}</span>
    </span>
  );
}
