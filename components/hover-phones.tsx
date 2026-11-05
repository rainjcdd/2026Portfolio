"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import styles from "./hover-phones.module.css";

export function HoverPhones({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--x", String(Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1))));
    node.style.setProperty("--y", String(Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1))));
  };
  const reset = () => {
    ref.current?.style.setProperty("--x", "0");
    ref.current?.style.setProperty("--y", "0");
  };
  return <div ref={ref} className={styles.phones} onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset} onDragStart={(event) => event.preventDefault()}>{children}</div>;
}
