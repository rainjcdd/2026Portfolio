import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";
import assets from "@/data/frontier-assets.json";

const vision = [
  ["Elevate", "Design a user-friendly experience for multiple customer segments with differing levels of familiarity, knowledge, and intention."],
  ["Educate", "Educate new and existing customers around product benefits and membership to drive online purchases and facilitate informed interactions."],
  ["Unify", "Create a scalable platform that unifies the overall experience and incentivizes customers to close deals faster. Remove brand confusion by clarifying the brand language."],
  ["Empower", "Develop engaging content that informs decision making and encourages return visits. Establish a destination for continued brand engagement."],
];
const researchCaptions = ["Target audience", "Brand architecture", "Enable retail partners", "B2B buyer personas", "Current customer journey", "From brand to broad"];

function Asset({ index, alt, caption, priority = false, sizes = "90vw" }: {
  index: number; alt: string; caption?: string; priority?: boolean; sizes?: string;
}) {
  const asset = assets[index];
  return (
    <figure>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <Image src={asset.src} alt={alt} width={asset.width} height={asset.height} priority={priority}
          unoptimized={asset.src.endsWith(".gif")} sizes={sizes} className="h-auto w-full" />
      </a>
      {caption ? <figcaption className="mt-4 border-t border-border pt-4 text-small text-text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

function SectionIntro({ number, label, title, children }: {
  number: string; label: string; title: string; children?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-border pt-12 md:grid-cols-4 md:gap-10 lg:gap-14 lg:pt-20">
      <p className="flex items-baseline gap-4 text-small text-text-muted"><span>{number}</span><span>{label}</span></p>
      <div className="md:col-span-3">
        <h2 className="max-w-[26ch] text-h2">{title}</h2>
        {children ? <div className="mt-6 max-w-text-measure space-y-5 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">{children}</div> : null}
      </div>
    </div>
  );
}

export function FrontierCaseStudy() {
  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header className="featured-content mx-auto max-w-content pb-6 pt-12 lg:pb-16 lg:pt-20">
        <p className="mb-10 text-small font-medium lg:mb-14">Multi-brand Strategy, Experience Design & Research</p>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#333333] lg:col-span-7">Frontier<br />Co-op</h1>
          <p className="max-w-text-measure text-h3 font-light leading-[1.45] text-text-muted lg:col-span-5 lg:pb-2">A unique opportunity to create a unified experience that expands across four brands within the family.</p>
        </div>
      </header>

      <div className="featured-content mx-auto max-w-content">
        <ScrollReveal direction="up" animateOnLoad className="mb-section-mobile lg:mb-section">
          <Asset index={0} alt="Frontier Co-op turmeric, herbs, and food on a rustic wooden table" priority />
        </ScrollReveal>
        <dl className="grid gap-x-8 gap-y-10 border-t border-border py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {[
            { label: "My Role", items: ["Creative Director", "Strategist", "UX"] },
            { label: "The Task", items: ["Strategic Planning", "Experience Research", "Experience Design", "Commerce Launch"] },
            { label: "Brand Family", items: ["Frontier Co-op", "Aura Cacia", "Simply Organic", "Co-op Market"] },
            { label: "Delivery", items: ["1 BuildKit", "10 months to launch"] },
          ].map(({ label, items }) => <div key={label}><dt className="mb-5 text-small font-medium">{label}</dt><dd className="space-y-1 text-body font-light leading-relaxed text-text-muted">{items.map((item) => <p key={item}>{item}</p>)}</dd></div>)}
        </dl>

        <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
          <section aria-label="The challenge" className="space-y-10 lg:space-y-14">
            <SectionIntro number="01" label="The Challenge" title="The co-op identity is at the heart of everything: cooperative, unified, and people-centric.">
              <blockquote className="border-l-2 border-border pl-6">
                <p>“We have struggled with how to market the three brands under the co-op umbrella for a number of years. The fact that Frontier Co-op is the name of our parent company, and its own brand of spices, herbs, teas, CBD and essential oils, makes the positioning around the co-op very challenging and will require alignment by senior management.”</p>
                <footer className="mt-5 text-small">From a key stakeholder interview</footer>
              </blockquote>
            </SectionIntro>
            <Asset index={1} alt="The four-brand family: Frontier Co-op, Aura Cacia, Simply Organic, and Co-op Market" />
          </section>

          <section aria-label="The vision" className="space-y-10 lg:space-y-14">
            <SectionIntro number="02" label="The Vision" title="Elevate. Educate. Unify. Empower." />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:gap-x-20">
              {vision.map(([title, copy], index) => <div key={title} className="border-t border-border pt-6"><p className="mb-5 text-small text-text-muted">{String(index + 1).padStart(2, "0")}</p><h3 className="text-h3">{title}</h3><p className="mt-4 max-w-text-measure text-body font-light leading-relaxed text-text-muted">{copy}</p></div>)}
            </div>
          </section>

          <section aria-label="Experience research" className="space-y-10 lg:space-y-14">
            <SectionIntro number="03" label="Research" title="Understanding the audience and the brand family" />
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
              {researchCaptions.map((caption, index) => <Asset key={caption} index={index + 2} alt={`Frontier Co-op research: ${caption}`} caption={`Sample slide: ${caption}`} sizes="(max-width: 767px) 90vw, 45vw" />)}
            </div>
          </section>

          <section aria-label="Unified experience" className="space-y-10 lg:space-y-14">
            <SectionIntro number="04" label="The System" title="From “1” to “4”">
              <h3 className="text-h3 text-text">Atomic Design + Build Kits</h3>
              <p>Atomic design is the principle that the experience as a whole is a compilation of reusable components. This enables us to work across UX, Visual Design, and Creative Technology with a consistent and unified framework.</p>
            </SectionIntro>
            <Asset index={8} alt="Animated storefronts demonstrating a unified experience across the Frontier Co-op brand family" />
            <div className="grid gap-8 border-y border-border py-8 md:grid-cols-3 lg:gap-12 lg:py-10">
              {["Better design consistency", "Scalable and flexible framework", "One storefront, four outputs"].map((benefit) => <h3 key={benefit} className="text-h3">{benefit}</h3>)}
            </div>
          </section>

          <section aria-label="Creative methodology" className="space-y-12 lg:space-y-20">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div><h2 className="text-h2">Atomic design</h2><p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">A methodology to create design systems faster and more efficiently by increasing scalability and reducing overhead.</p></div>
              <Asset index={9} alt="Creative methodology showing atoms, molecules, components, templates, and pages" caption="Creative methodology" sizes="(max-width: 767px) 90vw, 45vw" />
            </div>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div className="md:col-start-2 md:row-start-1"><h2 className="text-h2">BuildKit</h2><p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">A UI and front-end code kit that is ready for integration into any platform. All elements are highly reusable and designed for scale and easy management.</p></div>
              <div className="md:col-start-1 md:row-start-1"><Asset index={10} alt="BuildKit workflow from research and production design to platform integration" caption="BuildKit" sizes="(max-width: 767px) 90vw, 45vw" /></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <Asset index={11} alt="Atomic design workflow connecting research, UX, visual design, development, and validation" caption="Atomic design" sizes="(max-width: 767px) 90vw, 45vw" />
              <Asset index={12} alt="Assemble and BuildKit methodology and reusable page templates" caption="Assemble + BuildKit" sizes="(max-width: 767px) 90vw, 45vw" />
            </div>
          </section>

          <Asset index={13} alt="Frontier Co-op family of commerce experiences across desktop and mobile" />

          <section aria-labelledby="frontier-completed" className="border-t border-border pt-12 lg:pt-20">
            <p className="mb-6 text-small text-text-muted">05 · Delivery</p>
            <h2 id="frontier-completed" className="text-h2">We’ve completed</h2>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:mt-14 lg:grid-cols-4">
              {[["1", "BuildKit"], ["105", "Wireframes"], ["2", "Templates"], ["149", "Visual designs"], ["5", "Websites"], ["10", "Months to launch"], ["2", "Marketplaces"], ["55", "Awesome teammates"]].map(([value, label]) => <div key={label} className="flex flex-col gap-4"><dt className="text-small text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd></div>)}
            </dl>
          </section>

          <figure className="border-y border-border py-12 lg:py-20">
            <blockquote className="max-w-[58rem] text-h3 font-light leading-[1.55]">
              <p>“From creative ideation and UX to technical solutioning and architecture, Gorilla demonstrates deep understanding of your business drivers and needs, then works tirelessly to bring the project to life. In major projects, the journey is never without at least a couple of roadblocks and bumps. We have found that when problems arise, Gorilla immediately adopts a solution mindset. In all ways, they are a top tier partner and we see our business accelerating rapidly due to our partnership with them.”</p>
            </blockquote>
            <figcaption className="mt-8 text-small text-text-muted">J.L., Director, eCommerce and Direct Business</figcaption>
          </figure>

          <nav aria-label="Project navigation" className="flex flex-wrap justify-between gap-8">
            <Link href="/portfolio/mrs-meyer" className="group"><p className="mb-4 text-small text-text-muted">Previous project</p><span className="text-h3 transition-opacity group-hover:opacity-55">← Mrs. Meyer’s Clean Day</span></Link>
            <Link href="/portfolio/plexus" className="group"><p className="mb-4 text-small text-text-muted">Next project</p><span className="text-h3 transition-opacity group-hover:opacity-55">Plexus →</span></Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
