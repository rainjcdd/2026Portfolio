"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import styles from "./navigation-preview.module.css";

export function NavigationPreview() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene = sceneRef.current;
    if (!scene) return;
    const bounds = scene.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    scene.style.setProperty("--pointer-x", String(x));
    scene.style.setProperty("--pointer-y", String(y));
  };
  const reset = () => {
    sceneRef.current?.style.setProperty("--pointer-x", "0");
    sceneRef.current?.style.setProperty("--pointer-y", "0");
  };
  return (
    <div ref={sceneRef} className={styles.scene} onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset} onDragStart={(event) => event.preventDefault()}>
      <div className={`${styles.panel} ${styles.back}`}>
        <Image src="/images/projects/navigation-redesign-personalized.jpg" alt="Stop & Shop personalized recommendations" fill sizes="(min-width: 768px) 20vw, 40vw" className={styles.image} />
      </div>
      <div className={`${styles.panel} ${styles.middle}`}>
        <Image src="/images/projects/navigation-redesign-menu.jpg" alt="Stop & Shop category navigation" fill sizes="(min-width: 768px) 22vw, 44vw" className={styles.image} />
      </div>
      <div className={`${styles.panel} ${styles.front}`}>
        <Image src="/images/projects/navigation-redesign-mobile.jpg" alt="Stop & Shop mobile shopping experience" fill sizes="(min-width: 768px) 24vw, 48vw" className={styles.image} />
      </div>
    </div>
  );
}
