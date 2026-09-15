import Image from "next/image";
import type { ReactNode } from "react";
import assets from "@/data/navigation-assets.json";

function Asset({ index, alt, caption, priority = false, sizes = "90vw" }: {
  index: number; alt: string; caption?: string; priority?: boolean; sizes?: string;
}) {
  const asset = assets[index];
  return (
    <figure>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <Image src={asset.src} alt={alt} width={asset.width} height={asset.height} priority={priority} sizes={sizes} className="h-auto w-full" />
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

export function NavigationCaseStudyHero() {
  return <Asset index={0} alt="Navigation redesign shown across desktop and mobile grocery shopping experiences" priority />;
}

export function NavigationCaseStudy() {
  return (
    <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
      <section aria-label="Background" className="space-y-10 lg:space-y-14">
        <SectionIntro number="01" label="Background" title="Navigation is the foundation of any digital experience.">
          <p>The existing navigation had been designed and launched three years earlier. Since then, we had continuously monitored its usability and performance. A series of research studies and tests led to the full redesign.</p>
        </SectionIntro>
        <ol className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Sep 2021", "Benchmark tree test"], ["Nov 2021", "Browse Aisles diary study"], ["Dec 2021", "Benchmark usability test"],
            ["Feb 2022", "A/B copy test"], ["Feb 2022", "Browse Aisles open card sort"], ["Apr 2022", "Tree tests to inform IA"],
          ].map(([date, title]) => <li key={title} className="border-t border-border pt-6"><p className="mb-4 text-small text-text-muted">{date}</p><h3 className="text-h3">{title}</h3></li>)}
        </ol>
      </section>

      <section aria-label="The problem" className="space-y-10 lg:space-y-14">
        <SectionIntro number="02" label="The Problem" title="Make discovery easier, and inspiration easier to find." />
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {[
            ["Low findability", "Mission-critical pages received insufficient within-site traffic because they were difficult to find in the navigation.", "The Recommended for You page received less than 1% of site traffic."],
            ["Lacking inspiration", "There were limited opportunities for cross-category exploration and insufficient traffic to seasonal or inspirational content.", "Over 80% of add-to-carts came through direct search."],
            ["Complex IA", "Confusing information architecture and taxonomy made it difficult for customers to find products and stay oriented.", "In the taxonomy test, the control group performed significantly worse than the alternatives."],
          ].map(([title, copy, evidence]) => <div key={title} className="border-t border-border pt-6"><h3 className="text-h3">{title}</h3><p className="mt-4 text-body leading-relaxed text-text-muted">{copy}</p><p className="mt-6 text-body font-medium">{evidence}</p></div>)}
        </div>
      </section>

      <section aria-label="Our approach" className="space-y-10 lg:space-y-14">
        <SectionIntro number="03" label="Our Approach" title="Build confidence through research and testing.">
          <p>Changes to navigation can significantly affect site performance and revenue. We combined qualitative and quantitative methods to build confidence in the final design, using workshops, interviews, card sorting, tree testing, moderated and unmoderated usability testing, and full-stack A/B tests.</p>
        </SectionIntro>
        <Asset index={1} alt="Navigation redesign process from research and UX exploration through three A/B testing rounds and launch in 2024" />
        <div className="grid gap-8 md:grid-cols-2 lg:gap-20">
          <h3 className="text-h2">Additional learnings</h3>
          <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">Designers and product owners worked closely to define user and business objectives and measures of success. With these goals aligned, we conducted open card sorting, tree testing, benchmark testing, and A/B testing for taxonomy. After numerous workshops and reviews, we were ready to explore.</p>
        </div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
          {["User and business goals", "Tree tests informed wireframe options", "Findability gaps in key areas", "Categories outperformed Browse Aisles"].map((caption, index) => <Asset key={caption} index={index + 2} alt={`Navigation research: ${caption}`} caption={caption} sizes="(max-width: 767px) 90vw, 45vw" />)}
        </div>
      </section>

      <section aria-label="Explore solutions" className="space-y-10 lg:space-y-14">
        <SectionIntro number="04" label="Exploration" title="Explore solutions">
          <p>My favorite UX exercise is whiteboarding, whether in FigJam or on a physical board. It helps designers get ideas out quickly without getting caught in the details.</p>
          <p>We began with a team-wide whiteboarding session and narrowed the ideas to four approaches. A quick round of unmoderated usability testing identified two winning directions, which we developed into high-fidelity design mockups.</p>
        </SectionIntro>
        <Asset index={6} alt="Four wireframe approaches: Inspiration Focus, Tab Approach, Personalization Focus, and Mega Menu" caption="Four directions for the first round of usability testing" />
        <div className="space-y-12 lg:space-y-20">
          {[
            ["Inspire our customers", 7],
            ["Improve discoverability & findability", 8],
            ["Improve accuracy and clarity of taxonomy", 9],
          ].map(([title, index], row) => (
            <div key={title} className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div className={row % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}><p className="mb-5 text-small text-text-muted">Design goal · {String(row + 1).padStart(2, "0")}</p><h3 className="text-h2">{title}</h3></div>
              <div className={row % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}><Asset index={index as number} alt={`Navigation exploration: ${title}`} sizes="(max-width: 767px) 90vw, 45vw" /></div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="The winning solution" className="space-y-10 lg:space-y-14">
        <SectionIntro number="05" label="The Solution" title="The winning solution">
          <p>The final design exposes Browse Aisle categories upon landing on the homepage, helping users quickly drill down to the category they want. High-revenue pages remain in the primary navigation and are easy to access throughout the experience. Iconography draws attention and elevates the digital brand experience.</p>
        </SectionIntro>
        <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
          <Asset index={10} alt="Final mobile navigation with visible shopping categories and icons" caption="Mobile navigation" sizes="(max-width: 767px) 90vw, 45vw" />
          <Asset index={11} alt="Final desktop grocery homepage with primary navigation and category shortcuts" caption="Desktop navigation" sizes="(max-width: 767px) 90vw, 45vw" />
        </div>
      </section>

      <section aria-label="Impact" className="space-y-10 lg:space-y-14">
        <SectionIntro number="06" label="The Impact" title="Measured through three rounds of A/B testing.">
          <p>We worked closely with engineering and analytics teams to launch three rounds of full-stack A/B tests. Each test split site traffic equally between control and test groups.</p>
        </SectionIntro>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {[["+12.48%", "Primary navigation click-through"], ["+73.19%", "Category page views"], ["+48%", "Category page add-to-carts"], ["+4.12%", "Seasonal page views"]].map(([value, label]) => <div key={label} className="flex flex-col gap-4"><dt className="text-small text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(1.75rem,4.5vw,4.5rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd></div>)}
        </dl>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:gap-x-20">
          {[
            ["Way finding", "Measure click-through rates, especially in underperforming areas."],
            ["Purchase behavior", "Track add-to-cart behavior to understand how users find products and where they add them to their carts."],
            ["General metrics", "Monitor whether the new design negatively affects overall site performance."],
            ["Business metrics", "Monitor conversion rate, basket size, average order value, and revenue per visitor to guard against negative commerce impacts."],
          ].map(([title, copy]) => <div key={title} className="border-t border-border pt-6"><h3 className="text-h3">{title}</h3><p className="mt-4 text-body leading-relaxed text-text-muted">{copy}</p></div>)}
        </div>
      </section>
    </div>
  );
}
