import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";
import assets from "@/data/unilever-assets.json";

const researchCaptions = [
  "Market research", "Competitive landscape", "User survey", "Personas: overview",
  "Personas: conscious consumer", "Persona details: coupon journey", "Blue sky: digital platform", "Strategic roadmap",
];

const principles = [
  ["Break the silo", "Create a unified, centralized, device-agnostic experience that integrates the Reward Experience into the Unilever ecosystem."],
  ["Start from 2.0", "Utilize the rich data from third-party vendors to drive the initial engagement. Use SSO to drive brand awareness from multiple avenues."],
  ["Deepen user engagement", "Focus on a data-driven approach to drive personalization at all levels. Coupon recommendations are given based on session data, browsing activities, purchase patterns, and more."],
  ["Beyond transaction", "Surface educational and inspirational content that aligns with user values, interests, and motivations. When customers feel an emotional connection with the program, deeper engagement and higher loyalty follow suit."],
  ["Integration for activation", "Identify key data dependencies from an integration perspective which will combine coupons, rewards, and loyalty accessibility into a unified consumer-centric platform."],
];

const interactions = [
  { title: "The navigation", asset: 15, copy: ["A fully immersive menu experience creates a strong first impression upon landing on a homepage.", "Micro-animations call attention and add delight.", "A persistent brand logo allows users to easily access the menu at any point of their journeys."] },
  { title: "Parallax and more", asset: 16, copy: ["A sense of depth brings dimension to a flat page.", "Relative motion holds the user’s attention.", "A mix of illustrations, colors, and typography creates emotion."] },
  { title: "Micro-interaction & animation", asset: 17, copy: ["Lead the user’s eyes to the next important content.", "A human-like element creates an emotional connection."] },
];

function Asset({ index, alt, caption, className = "", priority = false }: {
  index: number; alt: string; caption?: string; className?: string; priority?: boolean;
}) {
  const asset = assets[index];
  return (
    <figure className={className}>
      <Image
        src={asset.src}
        alt={alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        unoptimized={asset.src.endsWith(".gif")}
        sizes={caption ? "(max-width: 767px) 90vw, 45vw" : "(max-width: 767px) 90vw, 80vw"}
        className="h-auto w-full"
      />
      {caption ? <figcaption className="mt-4 border-t border-border pt-4 text-small text-text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

function SectionIntro({ number, label, title, children }: {
  number: string; label: string; title: string; children: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-border pt-12 md:grid-cols-4 md:gap-10 lg:gap-14 lg:pt-20">
      <p className="flex items-baseline gap-4 text-small text-text-muted"><span>{number}</span><span>{label}</span></p>
      <div className="md:col-span-3">
        <h2 className="max-w-[24ch] text-h2">{title}</h2>
        <div className="mt-6 max-w-text-measure space-y-5 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">{children}</div>
      </div>
    </div>
  );
}

export function UnileverCaseStudy() {
  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header className="featured-content mx-auto max-w-content pb-6 pt-12 lg:pb-16 lg:pt-20">
        <p className="mb-10 text-small font-medium lg:mb-14">Design Strategy, Creative Direction & UX</p>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#333333] lg:col-span-7">
            <span className="hero-line-mask"><span className="trackpoint-intro-title block">Unilever</span></span>
          </h1>
          <p className="max-w-text-measure text-h3 font-light leading-[1.45] text-text-muted lg:col-span-5 lg:pb-2">
            We’re proud to work with Unilever, a trustmark that stands for good and sustainable living.
          </p>
        </div>
      </header>

      <div className="featured-content mx-auto max-w-content">
        <ScrollReveal direction="up" animateOnLoad className="mb-section-mobile lg:mb-section">
          <Asset index={0} alt="Unilever loyalty experience with colorful illustrations of people connecting" priority />
        </ScrollReveal>

        <dl className="grid gap-x-8 gap-y-10 border-t border-border py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {[
            ["My Role", ["Creative Director", "Project Lead"]],
            ["The Task", ["Strategy Research", "Experience Design", "Roadmap for Activation"]],
            ["North Star", ["Interactive Prototype"]],
            ["Delivery", ["Five-phase process", "10 weeks to completion"]],
          ].map(([label, items]) => (
            <div key={label as string}>
              <dt className="mb-5 text-small font-medium">{label}</dt>
              <dd className="space-y-1 text-body font-light leading-relaxed text-text-muted">
                {(items as string[]).map((item) => <p key={item}>{item}</p>)}
              </dd>
            </div>
          ))}
        </dl>

        <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
          <section aria-label="The ask" className="space-y-10 lg:space-y-14">
            <SectionIntro number="01" label="The Ask" title="Create strong emotional connections through personalized experiences">
              <p>Unilever wants to digitize the SuperSaver coupon program in order to reach a wider range of audiences. Through numerous discussions and collaboration sessions over a year, the ask evolved into creating a long-lasting relationship with their customers and driving incremental growth for all Unilever brands. We were excited to take on this challenge and bring this idea to life.</p>
            </SectionIntro>
            <div className="bg-[#222222] px-4 py-8 md:p-10 lg:p-14">
              <Asset index={1} alt="Five-phase delivery process: Initiate, Research, Solution, Create, Activate" />
            </div>
          </section>

          <section aria-label="Research" className="space-y-10 lg:space-y-14">
            <SectionIntro number="02" label="Research" title="Carefully researched. Value delivered.">
              <p>Through our five-phase delivery process, we conducted stakeholder interviews, customer surveys, vendor discussions, research synthesis, competitive analysis, and multi-discipline assessments. We defined the brief of what this product is as well as the North Star: an interactive prototype of what this experience should be.</p>
            </SectionIntro>
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
              {researchCaptions.map((caption, index) => (
                <Asset key={caption} index={index + 2} alt={`Unilever research slide: ${caption}`} caption={`Sample slide: ${caption}`} />
              ))}
            </div>
          </section>

          <section aria-label="Process snapshots" className="space-y-12 border-t border-border pt-12 lg:space-y-20 lg:pt-20">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div>
                <p className="mb-5 text-small text-text-muted">03 · Process Snapshot</p>
                <h2 className="text-h2">Information architecture</h2>
                <p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">We used InVision Freehand as the primary online tool for team collaboration, with card sorting, benchmarking, keyword research, and prototyping techniques informing decisions. Sessions were led by the Creative Director, with UX designers, a Visual Designer, a Content Strategist, and an Experience Strategist contributing.</p>
              </div>
              <Asset index={10} alt="Collaborative Unilever information architecture and user flow sketches" />
            </div>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div className="md:col-start-2 md:row-start-1">
                <p className="mb-5 text-small text-text-muted">Process Snapshot</p>
                <h2 className="text-h2">Ideation + wireframing</h2>
                <p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">The best idea doesn’t always come first. Through the Research & Analysis phase, we gained a better understanding of their customers — who they are and how they behave. We also gathered in- and out-of-category benchmarks to inform design decisions.</p>
              </div>
              <Asset index={11} alt="Early sketches of Unilever desktop and mobile wireframes" className="md:col-start-1 md:row-start-1" />
            </div>
          </section>

          <Asset index={12} alt="Unilever rewards dashboard showing a personalized points summary" />

          <section aria-label="Experience strategy" className="space-y-10 lg:space-y-14">
            <SectionIntro number="04" label="Experience Strategy" title="Empower. Inspire. Nurture.">
              <p>To empower, inspire, and nurture Unilever’s existing and future customers, we proposed an experience that addresses key pain points throughout their customer journey. Taking the existing data framework and internal and external resources into consideration, we made a strategic roadmap to map the high-level plan for activation.</p>
            </SectionIntro>
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {principles.map(([title, copy], index) => (
                <div key={title} className="border-t border-border pt-6">
                  <p className="mb-5 text-small text-text-muted">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-h3">{title}</h3>
                  <p className="mt-4 text-body font-light leading-relaxed text-text-muted">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <Asset index={13} alt="Unilever Smile, Savings Start Here platform concept in pink with celebratory illustrations" />

          <section aria-label="Mobile experience" className="grid items-center gap-10 border-t border-border pt-12 md:grid-cols-2 lg:gap-20 lg:pt-20">
            <div>
              <p className="mb-5 text-small text-text-muted">05 · The Experience</p>
              <h2 className="text-h2">Mobile forward-thinking</h2>
              <p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">A balanced approach to achieve a user-centric experience.</p>
            </div>
            <div className="flex justify-center bg-[#f1efed] px-10 py-12 lg:py-16">
              <Asset index={14} alt="Unilever mobile coupon experience with personalized offers" className="w-full max-w-[320px]" />
            </div>
          </section>

          <section aria-label="Interaction design" className="space-y-12 lg:space-y-20">
            {interactions.map(({ title, asset, copy }, index) => (
              <div key={title} className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
                <div className={index % 2 === 0 ? "md:col-start-2 md:row-start-1" : ""}>
                  <h2 className="text-h2">{title}</h2>
                  <ul className="mt-6 list-disc space-y-4 pl-5 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
                    {copy.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
                <Asset index={asset} alt={`Animated Unilever prototype demonstrating ${title.toLowerCase()}`} className={index % 2 === 0 ? "md:col-start-1 md:row-start-1" : ""} />
              </div>
            ))}
          </section>

          <section aria-labelledby="unilever-completed" className="border-t border-border pt-12 lg:pt-20">
            <h2 id="unilever-completed" className="text-h2">We’ve completed</h2>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:mt-14 lg:grid-cols-4">
              {[
                ["140", "Pages of research"], ["11", "Discovery sessions"], ["1", "Interactive prototype"], ["10", "Weeks to completion"],
                ["150+", "Daily smiles"], ["45+", "Head nods per meeting"], ["10+", "Cryptic laughs from Jim (client)"], ["−0.5", "Hour of sleep loss"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col gap-4">
                  <dt className="text-small text-text-muted">{label}</dt>
                  <dd className="order-first font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-12 max-w-text-measure text-body leading-relaxed text-text-muted lg:mt-20 lg:text-[1.125rem]">I want to thank my teammates who worked on this project with me. It was an incredible journey to participate, lead, and enjoy. This is truly a team effort. Please ask me for credit information and recommendations.</p>
          </section>

          <nav aria-label="Project navigation" className="flex flex-wrap justify-between gap-8 border-t border-border pt-10 lg:pt-14">
            <Link href="/work/short-form-video" className="group">
              <p className="mb-4 text-small text-text-muted">Previous project</p>
              <span className="text-h3 transition-opacity group-hover:opacity-55">← Short Form Video</span>
            </Link>
            <Link href="/portfolio/mercedes-benz" className="group">
              <p className="mb-4 text-small text-text-muted">Next project</p>
              <span className="text-h3 transition-opacity group-hover:opacity-55">Mercedes-Benz Canada →</span>
            </Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
