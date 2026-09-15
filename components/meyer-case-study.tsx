import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";
import assets from "@/data/meyer-assets.json";

const researchCaptions = [
  "Objectives", "Guiding principles", "Understand your users", "User behavior analysis",
  "Primary personas", "Secondary persona", "Primary persona description", "Customer lifetime journey",
];

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

export function MeyerCaseStudy() {
  return (
    <article className="bg-bg pb-section-mobile lg:pb-section">
      <header className="featured-content mx-auto max-w-content pb-6 pt-12 lg:pb-16 lg:pt-20">
        <p className="mb-10 text-small font-medium lg:mb-14">Experience Design & Research · SC Johnson</p>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#333333] lg:col-span-7">
            Mrs. Meyer’s<br />Clean Day
          </h1>
          <p className="max-w-text-measure text-h3 font-light leading-[1.45] text-text-muted lg:col-span-5 lg:pb-2">A company that is known for its scents.</p>
        </div>
      </header>

      <div className="featured-content mx-auto max-w-content">
        <ScrollReveal direction="up" animateOnLoad className="mb-section-mobile lg:mb-section">
          <Asset index={0} alt="Mrs. Meyer’s spring hand soap campaign with botanical illustrations on a coral background" priority />
        </ScrollReveal>

        <dl className="grid gap-x-8 gap-y-10 border-t border-border py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {[
            { label: "My Role", items: ["Creative Lead", "Researcher", "UX Design"] },
            { label: "The Task", items: ["User Research", "Experience Design", "Commerce Launch"] },
            { label: "Brand", items: ["Mrs. Meyer’s Clean Day", "SC Johnson"] },
            { label: "Recognition", items: ["W3 · 2020 Honoree", "Webby · 2021 Honoree"] },
          ].map(({ label, items }) => (
            <div key={label}>
              <dt className="mb-5 text-small font-medium">{label}</dt>
              <dd className="space-y-1 text-body font-light leading-relaxed text-text-muted">{items.map((item) => <p key={item}>{item}</p>)}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
          <section aria-label="The ask" className="space-y-10 lg:space-y-14">
            <SectionIntro number="01" label="The Ask" title="Rooted in good. There is a scent for everyone. I mean… for you.">
              <p>The original website was outdated and did not live up to the standard that Mrs. Meyer’s Clean Day had maintained for decades. We were asked to reimagine the commerce experience to better cater to their customers’ unique needs.</p>
            </SectionIntro>
            <Asset index={1} alt="Mrs. Meyer’s redesigned commerce experience across desktop and mobile screens" />
          </section>

          <section aria-label="Research" className="space-y-10 lg:space-y-14">
            <SectionIntro number="02" label="Research" title="Understand your users" />
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
              {researchCaptions.map((caption, index) => (
                <Asset key={caption} index={index + 2} alt={`Mrs. Meyer’s research slide: ${caption}`} caption={`Sample slide: ${caption}`} sizes="(max-width: 767px) 90vw, 45vw" />
              ))}
            </div>
          </section>

          <section aria-label="Persona-based navigation" className="space-y-10 lg:space-y-14">
            <SectionIntro number="03" label="Navigation" title="Persona-based navigation design">
              <p>The unconventional navigation design is inspired by the unique shopping patterns of the target audience, offering three distinct ways to explore the site.</p>
            </SectionIntro>
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {[
                ["Shop by Product", "Explore the site’s offerings by product."],
                ["Shop by Scent", "Discover products through their scents."],
                ["Content Discovery", "The hamburger navigation serves customers who are primarily interested in content exploration."],
              ].map(([title, copy]) => (
                <div key={title} className="border-t border-border pt-6">
                  <h3 className="text-h3">{title}</h3>
                  <p className="mt-4 text-body font-light leading-relaxed text-text-muted">{copy}</p>
                </div>
              ))}
            </div>
            <Asset index={10} alt="Animated Mrs. Meyer’s navigation showing Shop by Product, Shop by Scent, and the content menu" />
            <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:ml-auto lg:text-[1.125rem]">Micro-animations and illustrations create a more intuitive navigational experience.</p>
          </section>

          <section aria-label="Build your own bundle" className="space-y-10 lg:space-y-14">
            <SectionIntro number="04" label="Bundle Builder" title="Build your own bundle">
              <p>How can we simplify the complex flow of building a bundle for customers who shop online?</p>
              <p>Our approach is to mimic the in-store shopping experience: building a bundle is as simple as adding your favorite items to a basket.</p>
            </SectionIntro>
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-8">
                <Asset index={11} alt="Animated bundle builder demonstrating product tiles, quantity controls, and basket slots" sizes="(max-width: 1023px) 90vw, 60vw" />
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-h3">Designed for mobile, easy across viewports</h3>
                <ul className="mt-6 space-y-6 text-body leading-relaxed text-text-muted">
                  <li className="border-t border-border pt-5">A contemporary tile layout makes choosing products easy for mobile users.</li>
                  <li className="border-t border-border pt-5">“+” and “−” buttons let users easily modify product quantities.</li>
                  <li className="border-t border-border pt-5">Empty basket slots indicate how many more products the user can add.</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="meyer-recognition" className="border-t border-border pt-12 lg:pt-20">
            <p className="mb-8 text-small text-text-muted">05 · Recognition</p>
            <h2 id="meyer-recognition" className="sr-only">Project recognition</h2>
            <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
              {[["W3", "2020 Honoree"], ["Webby", "2021 Honoree"]].map(([award, year]) => (
                <div key={award}>
                  <p className="font-display text-[clamp(3rem,6vw,6rem)] font-bold leading-none tracking-[-0.05em]">{award}</p>
                  <p className="mt-5 text-h3 font-light text-text-muted">{year}</p>
                </div>
              ))}
            </div>
          </section>

          <nav aria-label="Project navigation" className="flex flex-wrap justify-between gap-8 border-t border-border pt-10 lg:pt-14">
            <Link href="/portfolio/mercedes-benz" className="group"><p className="mb-4 text-small text-text-muted">Previous project</p><span className="text-h3 transition-opacity group-hover:opacity-55">← Mercedes-Benz Canada</span></Link>
            <Link href="/portfolio/frontier-coop" className="group"><p className="mb-4 text-small text-text-muted">Next project</p><span className="text-h3 transition-opacity group-hover:opacity-55">Frontier Co-op →</span></Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
