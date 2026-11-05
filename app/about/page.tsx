import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";

import { AboutMotion, ShapePlayground } from "@/components/about/about-motion";
import "./about.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Me | Shu Tang",
  robots: { index: false, follow: false },
};

// Reference career details are temporary layout content, not Shu's biography.
const experience = [
  { role: "Founder & Creative Director", company: "Metikulous Design Studio", dates: "2024 — Current", logo: "metikulous", mark: "metikulous®" },
  { role: "Head of Design", company: "Impact Proximity BBDO, Dubai", dates: "2018 — 2024", logo: "bbdo", mark: "BBDO" },
  { role: "Creative Lead", company: "EngageWorks, Dubai", dates: "2016 — 2018", logo: "engage", mark: "engageworks" },
  { role: "Head of Creative", company: "Pico MENA, Dubai", dates: "2014 — 2016", logo: "pico", mark: "pico" },
  { role: "Senior Art Director", company: "Design Kloo, Singapore", dates: "2013 — 2014", logo: "kloo", mark: "kloo" },
  { role: "Art Director", company: "DoodleRoom, Singapore", dates: "2011 — 2013", logo: "doodle", mark: "doodleroom" },
];
const expertise = ["Digital Experiences", "Campaigns & Social Media", "Events & Exhibitions", "3D & Motion Graphics*", "Photography & Production", "Copywriting", "AR / VR*"];
const awards = [
  { mark: "LYNX", name: "Dubai Lynx", project: "Young Lynx Integrated Gold", year: "2019" },
  { mark: "The Webby Awards", name: "Webby Honoree", project: "Ministry of Saudi Tourism", year: "2024" },
  { mark: "The Webby Awards", name: "Webby Honoree", project: "Capital Bank Website", year: "2024" },
  { mark: "awwwards.", name: "Honorary Mention", project: "kusaludhara.com", year: "2024" },
  { mark: "CSSDA", name: "Website of the Day", project: "Addverb.ai", year: "2025" },
  { mark: "◈", name: "Motion Design", project: "Singapore Vancouver Film Festival", year: "2016" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="me-arrow"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-7-7 7 7-7 7"} /></svg>;
}

export default function AboutPage() {
  return (
    <div className={`me-page ${outfit.className}`}>
      <AboutMotion />
      <header className="me-intro me-container">
        <div className="me-intro-labels me-enter">
          <span>Get to know me</span>
          <span className="me-muted">Resumé & biography</span>
        </div>
        <h1 className="me-intro-title me-enter">
          A journey across places, people, and disciplines has shaped how I bring <span>creativity & culture</span> together—using thoughtful design to turn ambitious ideas into meaningful experiences.
        </h1>
        <Link href="/work" className="me-primary-link me-enter">View my work <span className="me-circle-arrow"><Arrow /></span></Link>
        <p className="me-draft-note">Design draft · reference career details below are placeholders</p>
      </header>

      <div className="me-container me-divider" />

      <section className="me-container me-section me-bio" aria-labelledby="me-philosophy">
        <div className="me-section-label me-reveal">
          <h2 id="me-philosophy">Every. Pixel. Matters.</h2>
          <ShapePlayground />
        </div>
        <div className="me-body-copy me-reveal">
          <p>Good design begins with a clear intention. I’m interested in the moments where thoughtful choices make something easier to understand, more useful to people, or more meaningful to a business.</p>
          <p>Research, observation, and experimentation guide the process. Rather than starting with a visual trend, I start by understanding the problem, the people involved, and the opportunities hidden in the details.</p>
          <p>My practice brings strategy and craft together. From early concepts to the final interaction, I look for a balance between a compelling experience and a practical solution that can grow.</p>
          <p>I enjoy collaborating with people who see things differently. Together, we can turn complex challenges into clear ideas, explore unfamiliar possibilities, and make work that earns its place in the world.</p>
          <a href="https://www.linkedin.com/in/shutang/" target="_blank" rel="noreferrer" className="me-underlined-link">Connect on LinkedIn <span className="me-outline-arrow"><Arrow diagonal /></span></a>
        </div>
      </section>

      <div className="me-container me-divider" />

      <section className="me-container me-section me-experience" aria-labelledby="me-experience">
        <div className="me-section-label me-reveal"><h2 id="me-experience">Work Experience</h2></div>
        <div className="me-experience-list">
          {experience.map((job) => (
            <article key={job.company} className="me-job me-reveal">
              <div className={`me-company-mark me-company-${job.logo}`} aria-hidden="true">{job.mark}</div>
              <div className="me-job-description"><h3>{job.role}</h3><p>{job.company}</p><p className="me-job-dates">{job.dates}</p></div>
            </article>
          ))}
          <div className="me-resume me-reveal"><span className="me-resume-icon" aria-hidden="true">↧</span><span>Download Resumé <small>Placeholder · add your résumé</small></span></div>
        </div>
      </section>

      <div className="me-container me-divider" />

      <section className="me-container me-section me-expertise" aria-labelledby="me-expertise">
        <div className="me-section-label me-reveal"><h2 id="me-expertise">Areas of Experience</h2></div>
        <div className="me-expertise-list">
          {expertise.map((area) => <h3 className="me-expertise-item me-reveal" key={area}>{area}</h3>)}
          <p className="me-footnote">*Currently studying & experimenting</p>
          <Link href="/work" className="me-underlined-link">Explore my work <span className="me-outline-arrow"><Arrow diagonal /></span></Link>
        </div>
      </section>

      <div className="me-container me-divider" />

      <section className="me-awards me-section" aria-labelledby="me-awards">
        <div className="me-container me-awards-heading me-reveal"><h2 id="me-awards">Accolades & Awards</h2><span className="me-muted">Reference placeholders</span></div>
        <div className="me-awards-window">
          <div className="me-awards-track">
            {[0, 1].map((copy) => <div className="me-awards-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{awards.map((award) => (
              <article className="me-award-card" key={award.project}><div className="me-award-mark" aria-hidden="true">{award.mark}</div><div><h3>{award.name}</h3><p>{award.project}</p><p>{award.year}</p></div></article>
            ))}</div>)}
          </div>
        </div>
      </section>

      <section className="me-next me-container" aria-label="Keep exploring">
        <Link href="/work" className="me-next-link"><div><h2>Work</h2><p>Curated feature projects and design archives</p></div><span className="me-next-arrow"><Arrow /></span></Link>
        <div className="me-next-link me-next-inactive"><div><h2>Thoughts <span>Coming soon</span></h2><p>An evolving collection of ideas on design and making</p></div><span className="me-next-arrow"><Arrow /></span></div>
      </section>
    </div>
  );
}
