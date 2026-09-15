import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";
import assets from "@/data/mercedes-assets.json";

const research = [
  [2, "Brand mission"], [3, "Empower, educate, optimize"], [4, "User behaviors"],
  [5, "Primary personas"], [6, "Secondary personas"], [7, "Persona & behavior mapping"],
  [8, "Customer journey"], [9, "Secondary research"], [10, "Competitive research"],
  [11, "Usability & design"], [12, "Experience benchmarks"], [13, "Homepage recommendations"],
  [14, "Regional shopping behaviors"], [15, "Motion & imagery"], [17, "Product recommendations"],
] as const;

function Asset({ index, alt, caption, className = "", priority = false, sizes = "90vw" }: {
  index: number; alt: string; caption?: string; className?: string; priority?: boolean; sizes?: string;
}) {
  const asset = assets[index];
  return (
    <figure className={className}>
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
        <h2 className="max-w-[25ch] text-h2">{title}</h2>
        {children ? <div className="mt-6 max-w-text-measure space-y-5 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">{children}</div> : null}
      </div>
    </div>
  );
}

export function MercedesCaseStudy() {
  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header className="featured-content mx-auto max-w-content pb-6 pt-12 lg:pb-16 lg:pt-20">
        <p className="mb-10 text-small font-medium lg:mb-14">Experience Design & Research · Mercedes-Benz Canada</p>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#333333] lg:col-span-7">
            Mercedes-<br />Benz
          </h1>
          <p className="max-w-text-measure text-h3 font-light leading-[1.45] text-text-muted lg:col-span-5 lg:pb-2">
            An elevated commerce experience to offer elements of sophistication to your already refined luxury vehicles.
          </p>
        </div>
      </header>

      <div className="featured-content mx-auto max-w-content">
        <ScrollReveal direction="up" animateOnLoad className="mb-section-mobile lg:mb-section">
          <Asset index={0} alt="Mercedes-Benz luxury coupe in a dramatic architectural setting" priority />
        </ScrollReveal>

        <dl className="grid gap-x-8 gap-y-10 border-t border-border py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {[
            { label: "My Role", items: ["Creative Lead", "Researcher", "UX & UI"] },
            { label: "The Task", items: ["User Research", "Experience Design", "Commerce Launch"] },
            { label: "Market", items: ["Mercedes-Benz Canada", "Direct-to-consumer commerce"] },
            { label: "Recognition", items: ["2019 Webby Honoree"] },
          ].map(({ label, items }) => (
            <div key={label}>
              <dt className="mb-5 text-small font-medium">{label}</dt>
              <dd className="space-y-1 text-body font-light leading-relaxed text-text-muted">{items.map((item) => <p key={item}>{item}</p>)}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
          <section aria-label="The ask" className="space-y-10 lg:space-y-14">
            <SectionIntro number="01" label="The Ask" title="Luxury style and craftsmanship go beyond the vehicle.">
              <p>As one of the pioneers within the Mercedes-Benz global system, Mercedes-Benz Canada wanted to reimagine the digital landscape of what the brand could offer beyond the vehicle. The answer was unknown; the challenge was on. To evaluate customers’ preference for DIY and buying directly from the manufacturer, Mercedes-Benz needed to select a market to implement and launch a direct-to-consumer digital offering.</p>
            </SectionIntro>
            <Asset index={1} alt="Five-phase process: Initiate, Research, Solution, Create, Activate" />
          </section>

          <section aria-label="Research" className="space-y-10 lg:space-y-14">
            <SectionIntro number="02" label="Research" title="Carefully researched" />
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {[
                ["Brand position", "Create a commerce experience that lives up to the brand: premium, high-end, intelligently designed, and forward-thinking."],
                ["Target audience", "Reach loyal Mercedes-Benz customers who want to explore a luxury lifestyle and embrace a new era of digital commerce."],
                ["Localization", "Design localization goes beyond language translation. Consider trends, culture, and behaviors to deliver an experience that meets specific regional needs."],
              ].map(([title, copy]) => (
                <div key={title} className="border-t border-border pt-6">
                  <h3 className="text-h3">{title}</h3>
                  <p className="mt-4 text-body font-light leading-relaxed text-text-muted">{copy}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
              {research.map(([index, caption]) => (
                <Asset key={index} index={index} alt={`Mercedes-Benz research: ${caption}`} caption={caption} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" />
              ))}
            </div>
            <Asset index={16} alt="Mercedes-Benz information architecture showing the commerce site structure and vehicle-specific paths" caption="Information architecture" />
          </section>

          <section aria-label="Navigation" className="grid items-center gap-8 border-t border-border pt-12 md:grid-cols-2 md:gap-12 lg:gap-20 lg:pt-20">
            <div>
              <p className="mb-5 text-small text-text-muted">03 · Navigation</p>
              <h2 className="text-h2">Way finding.<br />Not wandering.</h2>
              <dl className="mt-8 space-y-6 text-body leading-relaxed lg:text-[1.125rem]">
                {[
                  ["Choose Vehicle", "Leads to a personalized shopping experience."],
                  ["Shop Mercedes", "Leads to the full product catalog."],
                  ["Photography + interaction", "Create a highly intuitive and enjoyable digital experience."],
                ].map(([title, copy]) => <div key={title}><dt className="font-medium">{title}</dt><dd className="mt-2 text-text-muted">{copy}</dd></div>)}
              </dl>
            </div>
            <Asset index={18} alt="Animated Mercedes-Benz navigation with Choose Vehicle and Shop Mercedes paths" sizes="(max-width: 767px) 90vw, 45vw" />
          </section>

          <section aria-label="Personalization" className="space-y-10 lg:space-y-14">
            <SectionIntro number="04" label="Personalization" title="Elevated personalized experience">
              <p>The Vehicle Selector allows users to personalize their shopping experience.</p>
            </SectionIntro>
            <Asset index={19} alt="Mercedes-Benz vehicle selector displayed on a desktop screen" />
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div className="md:col-start-2 md:row-start-1">
                <h3 className="text-h2">Personalization at every level</h3>
                <p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">Existing users can fully embrace the personalized experience with highly individualized content and data-driven catalog information. Guest users can add vehicle information to quicken product discovery. The full-bleed hero banner offers a great merchandising opportunity for the business.</p>
              </div>
              <Asset index={20} alt="Personalized Mercedes-Benz storefront after confirming a C 43 4MATIC vehicle" sizes="(max-width: 767px) 90vw, 45vw" className="md:col-start-1 md:row-start-1" />
            </div>
            <div className="grid items-center gap-10 bg-[#efefed] p-8 md:grid-cols-2 lg:gap-20 lg:p-16">
              <div>
                <p className="mb-5 text-small text-text-muted">Mobile Experience</p>
                <h3 className="text-h2">Choose your vehicle</h3>
                <p className="mt-6 max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">The personalized shopping experience extends to mobile through the Vehicle Selector.</p>
              </div>
              <Asset index={21} alt="Animated mobile vehicle selector flow" className="mx-auto w-full max-w-[320px]" sizes="320px" />
            </div>
          </section>

          <section aria-label="Account and shopping experience" className="space-y-10 lg:space-y-14">
            <SectionIntro number="05" label="Commerce Experience" title="From your garage to your cart" />
            <div className="grid items-start gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {([
                [22, "Dashboard · collapsed menu"], [23, "Dashboard · expanded menu"], [24, "Profile settings"],
                [25, "Address book"], [26, "My Garage"], [28, "Shopping cart"],
              ] as const).map(([index, caption]) => (
                <Asset key={index} index={index} alt={`Mercedes-Benz ${caption.toLowerCase()}`} caption={caption} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" />
              ))}
            </div>
            <Asset index={27} alt="Mercedes-Benz cart overlay with dealer selection map" caption="Cart overlay · dealer selection" className="mx-auto max-w-[1100px]" />
          </section>

          <section aria-label="Product discovery" className="space-y-10 lg:space-y-14">
            <SectionIntro number="06" label="Product Discovery" title="Explore the Mercedes-Benz catalog" />
            <div className="grid items-start gap-8 md:grid-cols-3">
              {([
                [29, "Apparel & lifestyle"], [30, "Vehicle parts"], [31, "Parts & filtering"],
              ] as const).map(([index, caption]) => (
                <Asset key={index} index={index} alt={`Mercedes-Benz product catalog: ${caption.toLowerCase()}`} caption={caption} sizes="(max-width: 767px) 90vw, 30vw" />
              ))}
            </div>
          </section>

          <section aria-label="Recognition" className="grid gap-10 border-t border-border pt-12 md:grid-cols-2 lg:gap-20 lg:pt-20">
            <div>
              <p className="mb-6 text-small text-text-muted">07 · Recognition</p>
              <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[1] tracking-[-0.05em]">Webby<br /><span className="text-text-muted">2019 Honoree</span></h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
              <p>We initially assisted the Mercedes-Benz parts division in proving the value of an online parts channel to the board, ultimately helping the division receive funding for the project.</p>
              <p>After numerous rounds of iteration, the final product was selected as a 2019 Webby Honoree. It was also presented at the Mercedes-Benz Global Conference that same year. We were proud to work with this premium brand and deliver an experience that exceeded the client’s expectations.</p>
            </div>
          </section>

          <nav aria-label="Project navigation" className="flex flex-wrap justify-between gap-8 border-t border-border pt-10 lg:pt-14">
            <Link href="/portfolio/unilever" className="group"><p className="mb-4 text-small text-text-muted">Previous project</p><span className="text-h3 transition-opacity group-hover:opacity-55">← Unilever</span></Link>
            <Link href="/portfolio/mrs-meyer" className="group"><p className="mb-4 text-small text-text-muted">Next project</p><span className="text-h3 transition-opacity group-hover:opacity-55">Mrs. Meyer’s Clean Day →</span></Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
