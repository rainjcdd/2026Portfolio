"use client";

import { useEffect, useState } from "react";

const sentences = [
  "I'm Shu Tang.",
  "I build like an entrepreneur.",
  "I stay curious like a creator.",
] as const;

type Phase = "typing" | "pausing" | "deleting";

export function TypewriterSubline() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const sentence = sentences[sentenceIndex];
    let delay = 70;

    if (phase === "typing" && text.length === sentence.length) {
      delay = 1800;
    } else if (phase === "deleting") {
      delay = text.length === 0 ? 240 : 36;
    }

    const timeout = window.setTimeout(() => {
      if (phase === "typing") {
        if (text.length < sentence.length) {
          setText(sentence.slice(0, text.length + 1));
        } else {
          setPhase("pausing");
        }
        return;
      }

      if (phase === "pausing") {
        setPhase("deleting");
        return;
      }

      if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setSentenceIndex((current) => (current + 1) % sentences.length);
        setPhase("typing");
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [phase, prefersReducedMotion, sentenceIndex, text]);

  const visibleText = prefersReducedMotion ? sentences[0] : text;

  return (
    <div className="ml-1 mt-8 min-h-[1.4em] max-w-full text-left font-display text-[24px] font-extrabold leading-snug tracking-[-0.02em] text-white">
      <span className="sr-only">{sentences.join(" ")}</span>
      <span aria-hidden="true">
        {visibleText}
        {!prefersReducedMotion ? <span className="typewriter-cursor">|</span> : null}
      </span>
    </div>
  );
}
