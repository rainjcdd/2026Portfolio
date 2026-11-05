"use client";

import { useEffect, useState } from "react";

const prefix = "I'm ";
const endings = ["Shu", "a designer", "a builder"] as const;
const sentences = endings.map((ending) => `${prefix}${ending}`);

type Phase = "starting" | "typing" | "pausing" | "deleting";

export function TypewriterSubline() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [text, setText] = useState<string>("");
  const [phase, setPhase] = useState<Phase>("starting");
  const [hasStarted, setHasStarted] = useState(false);
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

    const sentence = endings[sentenceIndex];
    const delay = phase === "starting" ? (hasStarted ? 1000 : 2000) : phase === "pausing" ? 1500 : phase === "deleting" ? 65 : 100;

    const timeout = window.setTimeout(() => {
      if (phase === "starting") {
        setHasStarted(true);
        setPhase("typing");
        return;
      }
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
        setSentenceIndex((current) => (current + 1) % endings.length);
        setPhase("starting");
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [hasStarted, phase, prefersReducedMotion, sentenceIndex, text]);

  const visibleText = prefersReducedMotion ? endings[0] : text;

  return (
    <h1 className="-ml-[0.045em] grid w-full max-w-[1200px] text-left font-display text-[clamp(2.75rem,7.75vw,8rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
      {sentences.map((sentence) => (
        <span key={sentence} aria-hidden="true" className="invisible col-start-1 row-start-1 pointer-events-none">
          {sentence}<span className="ml-[0.08em] inline-block">|</span>
        </span>
      ))}
      <span className="sr-only">{sentences.join(" ")}</span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {prefersReducedMotion || hasStarted ? prefix : null}
        {prefersReducedMotion ? visibleText : Array.from(visibleText).map((letter, index) => (
          <span
            key={`${sentenceIndex}-${index}`}
            className={phase === "deleting" && index === visibleText.length - 1 ? "typewriter-letter-out" : "typewriter-letter-in"}
          >
            {letter}
          </span>
        ))}
        {!prefersReducedMotion ? <span key={sentenceIndex} className="typewriter-cursor">|</span> : null}
      </span>
    </h1>
  );
}
