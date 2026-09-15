import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";
import assets from "@/data/plexus-assets.json";

const research = ["Primary research plan", "Interview questionnaire", "Usability, service & content findings", "Customer relationships", "Customer motivations", "Recurring research themes", "Product detail benchmarks", "Competitive benchmarks"];
const architecture = ["Ambassador · logged in", "Preferred customer · logged in", "Retail customer · logged in", "Public experience"];
const documents = ["Preferred customer research plan", "Preferred customer interview guide", "Customer interview questions", "Customer interview follow-up", "Ambassador interview guide", "Ambassador interview follow-up"];
const initiatives = ["Primary & secondary research", "Brand & commerce strategy", "Solution design", "Content strategy and execution", "Photography strategy & art direction", "Experience design", "Visual design", "User testing", "Live prototype demo in MGM Garden Arena", "Front-end development", "Quality assurance testing", "Loyalty program research & strategy", "Social strategy & execution"];

function Asset({ index, alt, caption, priority = false, sizes = "90vw" }: {
  index: number; alt: string; caption?: string; priority?: boolean; sizes?: string;
}) {
  const asset = assets[index];
  return (
    <figure>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <Image src={asset.src} alt={alt} width={asset.width} height={asset.height} priority={priority} unoptimized={asset.src.endsWith(".gif")} sizes={sizes} className="h-auto w-full" />
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

export function PlexusCaseStudy() {
  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header className="featured-content mx-auto max-w-content pb-6 pt-12 lg:pb-16 lg:pt-20">
        <p className="mb-10 text-small font-medium lg:mb-14">Experience Design, Research & Digital Agency of Record</p>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#333333] lg:col-span-7">Plexus</h1>
          <p className="max-w-text-measure text-h3 font-light leading-[1.45] text-text-muted lg:col-span-5 lg:pb-2">Plexus Worldwide is more than a health company.</p>
        </div>
      </header>
      <div className="featured-content mx-auto max-w-content">
        <ScrollReveal direction="up" animateOnLoad className="mb-section-mobile lg:mb-section">
          <Asset index={0} alt="Plexus Worldwide campaign featuring a smiling woman outdoors in warm sunlight" priority />
        </ScrollReveal>
        <dl className="grid gap-x-8 gap-y-10 border-t border-border py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {[
            { label: "My Role", items: ["Creative Lead", "Researcher", "UX / UI"] },
            { label: "The Task", items: ["Digital Agency of Record"] },
            { label: "Experiences", items: ["Public commerce", "Back-office portal"] },
            { label: "Delivery", items: ["10 months go to market"] },
          ].map(({ label, items }) => <div key={label}><dt className="mb-5 text-small font-medium">{label}</dt><dd className="space-y-1 text-body font-light leading-relaxed text-text-muted">{items.map((item) => <p key={item}>{item}</p>)}</dd></div>)}
        </dl>

        <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
          <section aria-label="The ask" className="space-y-10 lg:space-y-14">
            <SectionIntro number="01" label="The Ask" title="Exceptional products & a thriving social model to empower, improve & energize lives.">
              <p>Plexus is not just a product, a brand, or a business. It is a lifestyle centered on health and happiness. As their Digital Agency of Record, we helped the growing multi-level marketing company bring its “Health and Happiness” positioning to life.</p>
            </SectionIntro>
            <Asset index={1} alt="Plexus public commerce and back-office designs across desktop and mobile" />
          </section>

          <section aria-label="Primary and secondary research" className="space-y-10 lg:space-y-14">
            <SectionIntro number="02" label="Research" title="A unique business model & tailored solutions">
              <p>As their Digital Agency of Record, we first needed to understand their business-to-distributor-to-consumer model through phone interviews with ambassadors, distributors, and customers.</p>
              <p>For a brand rooted in social media, we unearthed compensating behaviors that were putting strain on customer relationships and the growth potential of individual distributors. Plexus was also going through an extensive rebrand, so we needed a multi-channel experience that could live up to its new image.</p>
            </SectionIntro>
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
              {research.map((caption, index) => <Asset key={caption} index={index + 2} alt={`Plexus research: ${caption}`} caption={`Sample slide: ${caption}`} sizes="(max-width: 767px) 90vw, 45vw" />)}
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="mb-8 text-h3">Research plans & interview guides</h3>
              <div className="grid items-start gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((caption, index) => <Asset key={caption} index={index + 14} alt={`Plexus ${caption.toLowerCase()}`} caption={caption} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" />)}
              </div>
            </div>
          </section>

          <section aria-label="Information architecture" className="space-y-10 lg:space-y-14">
            <SectionIntro number="03" label="Information Architecture" title="Distinct paths for each audience" />
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
              {architecture.map((caption, index) => <Asset key={caption} index={index + 10} alt={`Plexus information architecture: ${caption}`} caption={caption} sizes="(max-width: 767px) 90vw, 45vw" />)}
            </div>
          </section>

          <section aria-label="Public and back-office experience" className="space-y-10 lg:space-y-14">
            <SectionIntro number="04" label="The Experience" title="Back-office portal & public experience" />
            <Asset index={20} alt="Animated Plexus designs showcasing the back-office dashboard and public experience" />
            <div className="grid gap-10 md:grid-cols-2 lg:gap-20">
              <div><h3 className="text-h2">Empower.<br />Improve.<br />Energize.</h3><p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">In addition to custom B2C and B2D2C site experiences, we led digital initiatives to create meaningful relationships with core customers and extend the brand’s reach to new customers.</p></div>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {initiatives.map((initiative) => <li key={initiative} className="border-t border-border pt-4 text-body text-text-muted">{initiative}</li>)}
              </ul>
            </div>
          </section>

          <section aria-labelledby="plexus-completed" className="border-t border-border pt-12 lg:pt-20">
            <p className="mb-6 text-small text-text-muted">05 · Delivery</p>
            <h2 id="plexus-completed" className="text-h2">We’ve completed</h2>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:mt-14 lg:grid-cols-4">
              {[["11", "Stakeholder interviews"], ["291", "Designs"], ["8", "Preferred customer interviews"], ["2", "New product line rollouts"], ["8", "Ambassador interviews"], ["1", "Live launch conference"], ["2", "Experiences: public + back-office"], ["10", "Months go to market"]].map(([value, label]) => <div key={label} className="flex flex-col gap-4"><dt className="text-small text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd></div>)}
            </dl>
          </section>

          <section aria-label="Campaign results" className="space-y-12 lg:space-y-20">
            <SectionIntro number="06" label="Campaign Results" title="Extending reach and engagement" />
            <div className="grid gap-10 md:grid-cols-2 lg:gap-20">
              <div><p className="mb-4 text-small text-text-muted">Social Campaign · 10 weeks</p><h3 className="text-h2">What Have You Got To Lose</h3></div>
              <dl className="grid grid-cols-2 gap-8">
                {[["24,000", "Participants"], ["40,000", "Unique participant posts"]].map(([value, label]) => <div key={label}><dt className="text-small text-text-muted">{label}</dt><dd className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd></div>)}
              </dl>
            </div>
            <div className="border-t border-border pt-10 lg:pt-14">
              <div className="grid gap-8 md:grid-cols-2 lg:gap-20">
                <div><p className="mb-4 text-small text-text-muted">Joyome Product Launch · May 2018</p><h3 className="text-h2">2 Big 2 Miss</h3></div>
                <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">When the site went live, the event sold out in less than a day. During the launch month, the site saw increased time on site, more pages viewed per session, and an improved bounce rate.</p>
              </div>
              <dl className="mt-10 grid gap-10 sm:grid-cols-3 lg:mt-14">
                {[["+105%", "Total time on site"], ["60%", "More pages viewed per session"], ["35%", "Better bounce rate"]].map(([value, label]) => <div key={label} className="flex flex-col gap-4"><dt className="text-small text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd></div>)}
              </dl>
            </div>
          </section>

          <nav aria-label="Project navigation" className="flex flex-wrap justify-between gap-8 border-t border-border pt-10 lg:pt-14">
            <Link href="/portfolio/frontier-coop" className="group"><p className="mb-4 text-small text-text-muted">Previous project</p><span className="text-h3 transition-opacity group-hover:opacity-55">← Frontier Co-op</span></Link>
            <Link href="/work#agency-work" className="group"><p className="mb-4 text-small text-text-muted">Explore more</p><span className="text-h3 transition-opacity group-hover:opacity-55">All agency work →</span></Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
