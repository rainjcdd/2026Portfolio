"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { file: "life-02.jpg", alt: "Enjoying a day outdoors under a dramatic cloudy sky" },
  { file: "life-04.jpg", alt: "A handshake at the Polsky Center for Entrepreneurship and Innovation" },
  { file: "life-09.jpg", alt: "Kayaking together on turquoise water beneath a blue sky" },
  { file: "life-13.jpg", alt: "Sharing ideas during a team gathering" },
  { file: "life-06.jpg", alt: "Sharing a graduation moment with family", landscape: true },
  { file: "life-10.jpg", alt: "A team group photo in the office", landscape: true },
  { file: "life-11.jpg", alt: "Celebrating graduation with classmates outdoors", landscape: true },
];

export function LifeGallery() {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive((index) => (index + direction + slides.length) % slides.length);

  return (
    <div className="me-life-gallery" data-orientation={slides[active].landscape ? "landscape" : "portrait"} role="region" aria-roledescription="carousel" aria-label="Life outside design">
      <div className="me-life-photo" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${slides.length}`}>
        <Image src={`/images/about/life/${slides[active].file}`} alt={slides[active].alt} fill sizes={slides[active].landscape ? "(max-width: 809px) 100vw, 46vw" : "(max-width: 809px) 100vw, 29vw"} style={slides[active].landscape ? { objectFit: "contain" } : slides[active].file === "life-04.jpg" ? { transform: "scale(1.08)" } : undefined} />
      </div>
      <div className="me-life-controls">
        <span aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous photo">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next photo">→</button>
        </div>
      </div>
    </div>
  );
}
