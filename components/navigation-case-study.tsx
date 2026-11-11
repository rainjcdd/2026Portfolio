import Image from "next/image";
import type { ReactNode } from "react";
import assets from "@/data/navigation-assets.json";
import { NavigationInspirationWireframes } from "@/components/navigation-inspiration-wireframes";
import heroStyles from "./navigation-hero.module.css";
import { ImpactCountUp } from "@/components/impact-count-up";
import { BrandIconography } from "@/components/brand-iconography";
import { BrandIconographySwitcher } from "@/components/brand-iconography-switcher";

function Asset({ index, alt, priority = false, sizes = "90vw" }: {
  index: number; alt: string; caption?: string; priority?: boolean; sizes?: string;
}) {
  const asset = assets[index];
  return (
    <figure>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <Image src={asset.src} alt={alt} width={asset.width} height={asset.height} priority={priority} sizes={sizes} className="h-auto w-full" />
      </a>
    </figure>
  );
}

function SectionIntro({ number, label, title, children }: {
  number: string; label: string; title: string; children?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-border pt-12 md:grid-cols-4 md:gap-10 lg:gap-14 lg:pt-20">
      <div className="flex items-baseline gap-4"><p className="shrink-0 text-small uppercase tracking-[0.12em] text-text-muted">{number}</p><h2 className="text-h2 leading-[1.05]">{label}</h2></div>
      <div className="md:col-span-3">
        <h3 className="max-w-[26ch] text-h3 text-text">{title}</h3>
        {children ? <div className="mt-6 max-w-text-measure space-y-5 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">{children}</div> : null}
      </div>
    </div>
  );
}

export function NavigationCaseStudyHero() {
  const brands = [
    { name: "Stop & Shop", logo: "stop-shop", width: 209, colors: ["#ec004b", "#ed3980", "#fadbe5"] },
    { name: "Food Lion", logo: "food-lion", width: 199, colors: ["#004c79", "#00436c", "#e5edf2"] },
    { name: "Giant", logo: "giant", width: 134, colors: ["#602866", "#521654", "#e9deed"] },
    { name: "Martins", logo: "martins", width: 178, colors: ["#e51b08", "#bc0e00", "#fadddc"] },
  ];
  const artwork = (name: string, width: number, height: number, alt: string) => (
    <Image src={`/images/projects/navigation-redesign/hero-${name}.png`} alt={alt} width={width} height={height} preload sizes="(max-width: 767px) 46vw, (max-width: 1099px) 31vw, 22vw" className={heroStyles.artwork} />
  );
  return (
    <div className={`featured-content mx-auto max-w-content ${heroStyles.hero}`}>
      <div className={heroStyles.upper}>
      <div className={heroStyles.collage}>
        <div className={heroStyles.column}>
          {artwork("brand-hd", 827, 510, "Stop & Shop logo and brand colors")}
          {artwork("produce", 518, 585, "Fresh carrots and broccoli against cool dark green foliage")}
        </div>
        <div className={heroStyles.column}>
          {artwork("type-hd", 829, 1006, "Effra Bold typography on Stop & Shop magenta")}
          {artwork("snacks-hd", 829, 430, "Pale blue Stop & Shop snack promotion")}
        </div>
        <div className={heroStyles.column}>
          {artwork("tart", 413, 488, "Berry tart topped with fresh raspberries and blackberries")}
          <div className={heroStyles.motion}>
            <Image src="/images/projects/navigation-redesign/hero-grocery-motion.gif" alt="Animated grocery illustrations with milk and eggs, tomato, a New badge, shopping bag, and bread" width={960} height={814} unoptimized className={heroStyles.artwork} />
          </div>
        </div>
      </div>
      <figure className={heroStyles.colorSystem} aria-label="Color system across Stop & Shop, Food Lion, Giant, and Martins">
        <div className={heroStyles.brands}>
          {brands.map((brand) => (
            <div key={brand.name} className={heroStyles.brand}>
              <div className={heroStyles.brandLogo}>
                <Image src={`/images/projects/navigation-redesign/logo-${brand.logo}.png`} alt={brand.name} width={brand.width} height={49} sizes="(max-width: 767px) 20vw, 7vw" />
              </div>
              {brand.colors.map((color, index) => <span key={color} className={heroStyles.swatch} style={{ backgroundColor: color }} aria-label={`${brand.name} ${["primary", "secondary", "tertiary"][index]} color`} />)}
            </div>
          ))}
        </div>
        <div className={heroStyles.colorGroup}>
          <p>Global Neutrals</p>
          {["#000000", "#626568", "#929292", "#ededed", "#f5f5f5", "#ffffff"].map((color) => <span key={color} className={heroStyles.colorBar} style={{ backgroundColor: color }} />)}
        </div>
        <div className={heroStyles.colorGroup}>
          <p>Global Messaging</p>
          {["#940800", "#d25c0b", "#007a26", "#0066b9"].map((color, index) => <span key={color} className={heroStyles.colorBar} style={{ backgroundColor: color }} aria-label={["Error", "Warning", "Success", "Information"][index]} />)}
        </div>
      </figure>
      </div>
      <figure className={heroStyles.navigation}>
        <Image src="/images/projects/navigation-redesign/hero-navigation-vector.svg" alt="Stop & Shop desktop navigation with product search, primary shopping links, and illustrated grocery categories" width={1443} height={220} unoptimized sizes="(max-width: 767px) 100vw, (max-width: 1776px) calc(100vw - 96px), 1680px" className={heroStyles.navigationImage} />
      </figure>
    </div>
  );
}

export function NavigationCaseStudy() {
  return (
    <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
      <section aria-label="Background" className="space-y-10 lg:space-y-14">
        <SectionIntro number="01" label="Background" title="Navigation is the foundation of any digital experience.">
          <p>The existing navigation had been designed and launched three years earlier. Since then, we had continuously monitored its usability and performance. A series of research studies and tests led to the full redesign.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
        <ol className="grid gap-x-8 gap-y-8 md:col-span-3 md:col-start-2 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Sep 2021", "Benchmark tree test"], ["Nov 2021", "Browse Aisles diary study"], ["Dec 2021", "Benchmark usability test"],
            ["Feb 2022", "A/B copy test"], ["Feb 2022", "Browse Aisles open card sort"], ["Apr 2022", "Tree tests to inform IA"],
          ].map(([date, title]) => <li key={title} className="border-t border-border pt-6"><p className="mb-3 text-small text-text-muted">{date}</p><h3 className="text-h3 text-text">{title}</h3></li>)}
        </ol>
        </div>
      </section>

      <section aria-label="The problem" className="space-y-10 lg:space-y-14">
        <SectionIntro number="02" label="The Problem" title="Make discovery easier, and inspiration easier to find." />
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
        <div className="grid gap-8 md:col-span-3 md:col-start-2 lg:grid-cols-3">
          {[
            ["Low findability", "Mission-critical pages received insufficient within-site traffic because they were difficult to find in the navigation.", "The Recommended for You page received less than 1% of site traffic."],
            ["Lacking inspiration", "There were limited opportunities for cross-category exploration and insufficient traffic to seasonal or inspirational content.", "Over 80% of add-to-carts came through direct search."],
            ["Complex IA", "Confusing information architecture and taxonomy made it difficult for customers to find products and stay oriented.", "In the taxonomy test, the control group performed significantly worse than the alternatives."],
          ].map(([title, copy, evidence]) => <div key={title} className="border-t border-border pt-6"><h3 className="text-h3 text-text">{title}</h3><p className="mt-3 text-body font-light leading-relaxed text-text-muted">{copy}</p><p className="mt-4 text-body font-light leading-relaxed text-text-muted">{evidence}</p></div>)}
        </div>
        </div>
      </section>

      <section aria-label="Our approach" className="space-y-10 lg:space-y-14">
        <SectionIntro number="03" label="Our Approach" title="Build confidence through research and testing.">
          <p>Changes to navigation can significantly affect site performance and revenue. We combined qualitative and quantitative methods to build confidence in the final design, using workshops, interviews, card sorting, tree testing, moderated and unmoderated usability testing, and full-stack A/B tests.</p>
        </SectionIntro>
        <Asset index={1} alt="Navigation redesign process from research and UX exploration through three A/B testing rounds and launch in 2024" />
      </section>

      <section aria-label="Research and testing" className="space-y-10 lg:space-y-14">
        <div className="grid gap-6 border-t border-border pt-12 md:grid-cols-4 md:gap-10 lg:gap-14 lg:pt-20">
          <div className="flex items-baseline gap-4"><p className="shrink-0 text-small uppercase tracking-[0.12em] text-text-muted">04</p><h2 className="text-h2 leading-[1.05]">Research and testing</h2></div>
          <div className="md:col-span-3">
          <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">Designers and product owners worked closely to define user and business objectives and measures of success. With these goals aligned, we conducted open card sorting, tree testing, benchmark testing, and A/B testing for taxonomy. After numerous workshops and reviews, we were ready to explore.</p>
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
          {["User and business goals", "Tree tests informed wireframe options", "Findability gaps in key areas", "Categories outperformed Browse Aisles"].map((caption, index) => <Asset key={caption} index={index + 2} alt={`Navigation research: ${caption}`} caption={caption} sizes="(max-width: 767px) 90vw, 45vw" />)}
        </div>
      </section>

      <section aria-label="Explore solutions" className="space-y-10 lg:space-y-14">
        <SectionIntro number="05" label="Exploration" title="Explore solutions">
          <p>My favorite UX exercise is whiteboarding, whether in FigJam or on a physical board. It helps designers get ideas out quickly without getting caught in the details.</p>
          <p>We began with a team-wide whiteboarding session and narrowed the ideas to four approaches. A quick round of unmoderated usability testing identified two winning directions, which we developed into high-fidelity design mockups.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <figure className="min-w-0 md:col-span-3 md:col-start-2">
            <div className="relative aspect-[1900/630] overflow-hidden">
              <Image
                src="/images/projects/navigation-redesign/exploration-approaches-transparent.png"
                alt="Four navigation approaches: Inspiration Focus, Tab Focus, Personalization Focus, and Mega Menu"
                width={1945}
                height={809}
                sizes="(max-width: 767px) 90vw, 67vw"
                className="absolute left-[-1.263%] top-[-17.46%] h-auto w-[102.37%] max-w-none"
              />
            </div>
          </figure>
        </div>
        <div className="space-y-12 lg:space-y-20">
          {[
            ["Inspire our customers", 7],
            ["Improve discoverability & findability", 8],
            ["Improve accuracy and clarity of taxonomy", 9],
          ].map(([title], row) => (
            <div key={title} className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div className={row % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}><p className="mb-3 text-small text-text-muted">Design goal · {String(row + 1).padStart(2, "0")}</p><h3 className="text-h3 text-text">{title}</h3>
                <ol className="mt-6 max-w-text-measure list-decimal space-y-5 pl-5 text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
                  {[
                    [
                      "Establish a Recipes & Inspiration hub with curated content that encourages browsing and discovery.",
                      "Layer collections within categories to inspire customers as they browse the site.",
                      "Surface Collections in the main menu, linking to a dedicated landing page where customers can explore curated products.",
                    ],
                    [
                      "Improve discoverability with persistent navigation that surfaces Recommended for You, Featured Collections, and Categories.",
                      "Introduce a mega menu to make subcategories more accessible and help customers reach specific products faster.",
                      "Speed up shopping with immediate access to categories, Recommended for You, New Arrivals, and Sales & Promotions.",
                    ],
                    [
                      "Group sections around customer needs while keeping high-traffic pages such as Weekly Ad and Past Purchases visible.",
                      "Introduce a clear hierarchy and straightforward language to make categories and browsing more accessible.",
                      "Simplify the path to personalized shopping and savings, or to Browse Aisles and Collections for discovery and inspiration.",
                    ],
                  ][row].map(copy => <li key={copy}>{copy}</li>)}
                </ol>
              </div>
              <div className={row % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}><NavigationInspirationWireframes goal={row} /></div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="The winning solution" className="space-y-10 lg:space-y-14">
        <SectionIntro number="06" label="The Solution" title="The winning solution">
          <p>The final design exposes Browse Aisle categories upon landing on the homepage, helping users quickly drill down to the category they want. High-revenue pages remain in the primary navigation and are easy to access throughout the experience. Iconography draws attention and elevates the digital brand experience.</p>
        </SectionIntro>
        <figure>
          <Image
            src="/images/projects/navigation-redesign/solution-mobile-mockup-seamless.png"
            alt="Stop & Shop mobile homepage and two slide-out navigation menus over a dimmed homepage, shown in three phone mockups"
            width={3600}
            height={2240}
            sizes="(max-width: 767px) 100vw, 85vw"
            className="h-auto w-full"
          />
        </figure>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <p className="max-w-text-measure text-body leading-relaxed text-text-muted md:col-span-3 md:col-start-2 lg:text-[1.125rem]">
            On desktop, visible shopping categories give customers a direct path to products, while frequently used pages like Past Purchases, Weekly Ad, Coupons, and Rewards remain easy to reach in the primary navigation. Distinctive icons make categories easier to scan and encourage discovery of new and seasonal products. In usability testing, customers described a more focused browsing experience with less need to search.
          </p>
        </div>
        <figure className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="border-l-4 border-[#00c81d] py-2 pl-6 md:col-span-3 md:col-start-2 lg:pl-10">
            <blockquote className="max-w-[25ch] font-display text-[clamp(1.5rem,3vw,2.75rem)] font-medium italic leading-[1.3] tracking-[-0.035em] text-[#005653]">
              “It’s easier just to see and go right to it. I think it would keep me from doing more searches.”
            </blockquote>
            <figcaption className="mt-6 text-small text-text-muted">Quote from a usability test participant</figcaption>
          </div>
        </figure>
        <figure>
          <Image
            src="/images/projects/navigation-redesign/solution-desktop-mockup.png"
            alt="Stop & Shop desktop homepage in a laptop mockup, showing exposed grocery categories, primary navigation, and the snack promotion"
            width={4400}
            height={2800}
            sizes="(max-width: 767px) 100vw, 85vw"
            className="h-auto w-full"
          />
        </figure>
        <section id="brand-expressions" aria-label="Brand expressions" className="space-y-8 lg:space-y-12">
          <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
            <div className="space-y-5 md:col-span-3 md:col-start-2">
              <h3 className="text-h3 text-text">One UX solution. Distinct brand expressions.</h3>
              <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
                A shared navigation structure gives customers a consistent way to browse, while each brand’s iconography brings its own visual character. Category icons adapt to each brand’s colors and illustration style, expressing the same shopping functions through distinct visual identities.
              </p>
            </div>
          </div>
          <BrandIconographySwitcher>
            <BrandIconography brand="stop-and-shop" />
            <BrandIconography brand="food-lion" />
          </BrandIconographySwitcher>
        </section>
      </section>

      <section id="impact" aria-label="Impact" className="space-y-10 lg:space-y-14">
        <SectionIntro number="07" label="The Impact" title="Measured through three rounds of A/B testing.">
          <p>We worked closely with engineering and analytics teams to launch three rounds of full-stack A/B tests. Each test split site traffic equally between control and test groups.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="grid gap-8 md:col-span-3 md:col-start-2 md:grid-cols-2 lg:gap-10">
          {[
            ["Way finding", "Measure click-through rates, especially in underperforming areas."],
            ["Purchase behavior", "Track add-to-cart behavior to understand how users find products and where they add them to their carts."],
            ["General metrics", "Monitor whether the new design negatively affects overall site performance."],
            ["Business metrics", "Monitor conversion rate, basket size, average order value, and revenue per visitor to guard against negative commerce impacts."],
          ].map(([title, copy]) => <div key={title} className="border-t border-border pt-6"><h3 className="text-body font-semibold text-text">{title}</h3><p className="mt-3 text-body font-light leading-relaxed text-text-muted">{copy}</p></div>)}
        </div>
        </div>
        <dl className="grid gap-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-10">
          {[["+12.48%", "Primary navigation click-through"], ["+73.19%", "Category page views"], ["+48%", "Category page add-to-carts"], ["+4.12%", "Seasonal page views"]].map(([value, label]) => <div key={label} className="flex flex-col gap-6 rounded-2xl border border-border bg-white px-6 py-10 lg:px-8 lg:py-14"><dt className="text-small leading-relaxed text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-none tracking-[-0.05em]"><ImpactCountUp value={value} /></dd></div>)}
        </dl>
      </section>
    </div>
  );
}
