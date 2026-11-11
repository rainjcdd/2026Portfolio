import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import { CareerSketch } from "@/components/about/career-sketch";
import { LifeGallery } from "@/components/about/life-gallery";
import { AboutMotion, ShapePlayground } from "@/components/about/about-motion";
import "./about.css";

const outfit = localFont({ src: "../fonts/outfit-latin.woff2", weight: "300 600", display: "swap" });

export const metadata: Metadata = {
  title: "Me | Shu Tang",
  robots: { index: false, follow: false },
};

const expertise = ["Product Design", "UX Research", "Design Strategy", "Creative Direction", "AI-Native", "Organizational Management", "Cross-functional Leadership"];
const awards = [
  { mark: "The Webby Awards", name: "Webby & W3 recognition", project: "Mrs. Meyer’s Clean Day", year: "2021 · 2020" },
  { mark: "W3 Awards", name: "W3 recognition", project: "Bedstu · Evolution Footwear", year: "" },
  { mark: "The Webby Awards", name: "Webby Honoree", project: "Mercedes-Benz Canada", year: "2019" },
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="me-arrow"><path d="M5 11 11 5M6 5h5v5" /></svg>;
}

export default function AboutPage() {
  return (
    <div className={`me-page ${outfit.className}`}>
      <AboutMotion />
      <header className="me-intro me-container">
        <div className="me-intro-labels me-enter">
          <span>Get to know me</span>
          <span className="me-muted">15 years experience</span>
        </div>
        <h1 className="me-intro-title me-enter">
          A journey across in-house, agency, and startups has shaped how I bring <span>creativity & culture</span> together—using thoughtful design to turn ambitious ideas into meaningful experiences.
        </h1>
        <Link href="/work" className="me-primary-link me-enter">View my work <Arrow /></Link>
      </header>

      <div className="me-divider" />

      <section className="me-container me-section me-bio" aria-labelledby="me-philosophy">
        <div className="me-section-label me-reveal">
          <h2 id="me-philosophy">Every. Pixel. Matters.</h2>
          <ShapePlayground />
        </div>
        <div className="me-body-copy me-reveal">
          <p>Good design begins with a clear intention. I’m interested in the moments where thoughtful choices make something easier to understand, more useful to people, or more meaningful to a business.</p>
          <p>Research, observation, and experimentation guide the process. Rather than starting with a visual trend, I start by understanding the problem, the people involved, and the opportunities hidden in the details.</p>
          <p>My practice brings strategy and craft together. From early concept to each micro-interaction. Every detail matters.</p>
          <p>I enjoy collaborating with people who see things differently. Together, we can turn complex challenges into clear ideas, explore unfamiliar possibilities, and make work that earns its place in the world.</p>
          <a href="https://www.linkedin.com/in/shutang/" target="_blank" rel="noreferrer" className="me-secondary-link me-link-white">Connect on LinkedIn <Arrow /></a>
        </div>
      </section>

      <div className="me-divider" />

      <section className="me-career" aria-labelledby="me-experience-title">
        <div className="me-container me-career-heading me-reveal">
          <h2 id="me-experience-title">My Experience</h2>
        </div>
        <div className="me-container me-career-row me-reveal">
          <div className="me-career-copy">
            <p className="me-career-date">2011–2012</p>
            <h2>I started my career as a visual designer.</h2>
            <p className="me-career-reflection">Craft still stays close to my heart.</p>
          </div>
          <CareerSketch kind="visual" />
        </div>
        <div className="me-container me-career-row me-reveal">
          <div className="me-career-copy">
            <p className="me-career-date">2012–Present</p>
            <h2>Then found my heart in UX and research.</h2>
            <p className="me-career-reflection">I love untangling complex problems and making things easier to use.</p>
          </div>
          <CareerSketch kind="research" />
        </div>
        <div className="me-container me-career-pair">
          <div className="me-career-card me-reveal">
            <CareerSketch kind="startup" />
            <p className="me-career-date">2015–2026</p>
            <h2>I’ve failed twice as a startup “founder”.</h2>
            <p className="me-career-reflection">But those experiences made one thing clear: I love building things that solve real problems. The rest of it, though, isn’t really my thing.</p>
          </div>
          <div className="me-career-card me-reveal">
            <CareerSketch kind="mba" />
            <p className="me-career-date">2024–2026</p>
            <h2>This year, I completed my MBA at the University of Chicago.</h2>
            <p className="me-career-reflection">My curiosity doesn’t stop at design. Neither does my learning journey.</p>
          </div>
        </div>
      </section>

      <div className="me-divider" />

      <section className="me-container me-section me-expertise" aria-labelledby="me-expertise">
        <div className="me-section-label me-reveal"><h2 id="me-expertise">Areas of Expertise</h2></div>
        <div className="me-expertise-list">
          {expertise.map((area) => <h3 className="me-expertise-item me-reveal" key={area}>{area}</h3>)}
          <Link href="/work" className="me-secondary-link">Explore my work <Arrow /></Link>
        </div>
      </section>

      <div className="me-divider" />

      <section className="me-awards" aria-labelledby="me-awards">
        <div className="me-container me-awards-heading me-reveal"><h2 id="me-awards">Accolades & Awards</h2></div>
        <div className="me-container me-awards-grid">
          {awards.map((award) => (
            <article className="me-award-card me-reveal" key={award.project}>
              <div className="me-award-mark" aria-hidden="true">{award.mark}</div>
              <div><h3>{award.name}</h3><p>{award.project}</p>{award.year ? <p>{award.year}</p> : null}</div>
            </article>
          ))}
        </div>
      </section>

      <div className="me-divider" />

      <section className="me-life me-reveal" aria-labelledby="me-life-title">
        <div className="me-life-copy">
          <svg className="me-life-wave" viewBox="0 0 100 120" fill="none" aria-hidden="true">
            <path d="M40 79 17 43c-5-8 2-13 7-6l20 27-24-40c-4-8 4-12 9-4l23 35-18-37c-4-9 5-12 9-3l20 36-10-25c-3-8 5-11 9-3l20 39c13 25-4 47-24 43-13-2-23-13-34-25l-9-12c-6-8 0-14 7-7l18 18Z" />
            <path d="M53 6c10-5 23-2 29 7M57 1c11-5 24-1 30 6M39 109c8 6 18 7 26 3M35 116c10 5 22 5 31 1" />
          </svg>
          <h2 id="me-life-title">Meet me in real life.</h2>
          <p>My team, my friends, my classmates, my family—and everything I enjoy.</p>
        </div>
        <LifeGallery />
      </section>
    </div>
  );
}
