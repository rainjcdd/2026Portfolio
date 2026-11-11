import { ImpactCountUp } from "@/components/impact-count-up";
import Image from "next/image";
import type { ReactNode } from "react";
import assets from "@/data/sfv-assets.json";

function Asset({ index, alt, priority = false, sizes = "90vw", pairedWith }: {
  index: number; alt: string; caption?: string; priority?: boolean; sizes?: string; pairedWith?: number;
}) {
  const asset = assets[index];
  const pair = pairedWith === undefined ? undefined : assets[pairedWith];
  const aspectRatio = pair ? Math.max(asset.width / asset.height, pair.width / pair.height) : undefined;
  return (
    <figure>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <Image src={asset.src} alt={alt} width={asset.width} height={asset.height} priority={priority} sizes={sizes} className="h-auto w-full object-cover object-top" style={aspectRatio ? { aspectRatio } : undefined} />
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

export function SfvCaseStudyHero() {
  return <Asset index={0} alt="Short-form grocery videos featuring recipes, fresh ingredients, and drinks on a blue background" priority sizes="100vw" />;
}

export function SfvCaseStudy() {
  return (
    <div className="space-y-section-mobile pt-section-mobile lg:space-y-section lg:pt-section">
      <section aria-label="Background" className="space-y-10 lg:space-y-14">
        <SectionIntro number="01" label="Background" title="Bite-size, TikTok-style video creates a new way to explore and shop grocery.">
          <p>As a grocery e-commerce retailer, helping customers discover new items matters when they shop with us week after week. Shoppable Video is one component of a larger effort to bring inspiration and personalized content into the shopping experience.</p>
          <p>These studies and tests led us to explore the potential of this capability.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
        <ol className="grid gap-x-8 gap-y-8 md:col-span-3 md:col-start-2 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Sep 2021", "Shoppable Recipes concept testing"], ["Nov 2021", "Browse Aisles diary study"],
            ["Sep 2022 & Mar 2023", "Hero banner intercept"], ["Oct 2022", "Hero banner A/B test"],
            ["Mar 2023", "SFV usability testing"], ["Apr 2023", "SFV A/B test"],
          ].map(([date, title]) => <li key={title} className="border-t border-border pt-6"><p className="mb-3 text-small text-text-muted">{date}</p><h3 className="text-body font-medium leading-snug text-text">{title}</h3></li>)}
        </ol>
        </div>
      </section>

      <section aria-label="Competitive Landscape" className="space-y-10 lg:space-y-14">
        <SectionIntro number="02" label="Competitive Landscape" title="Inspiration can become a shopping moment.">
          <p>The market research used in the original case study projected that 37% of TikTok users would make purchases through the platform in 2023, compared with 5.7% in 2020, rising to 39.9% by 2026. Bazaarvoice research cited in the study found that more than seven in ten TikTok shoppers worldwide were inclined to buy when discovering an interesting product, and six in ten used the app for shopping inspiration.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
        <div className="md:col-span-3 md:col-start-2">
          <p className="mb-8 text-small text-text-muted">Historical market context from the original case study</p>
          <dl className="grid gap-8 sm:grid-cols-3">
            {[
              ["1B", "Monthly active TikTok users", "Sprout Social"],
              ["55%", "TikTok users who purchased from brands seen on the app", "Sprout Social"],
              ["22%", "Expected conversion rate for merchants with shoppable video", "VidJet"],
            ].map(([value, label, source]) => <div key={value} className="flex flex-col gap-4"><dt className="text-body text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-none tracking-[-0.05em]">{value}</dd><dd className="text-small text-text-muted">Source cited in original research: {source}</dd></div>)}
          </dl>
        </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <Asset index={1} pairedWith={2} alt="Short-form video opportunities across audiences and monetization partnerships" caption="Short-form video opportunities" sizes="(max-width: 767px) 90vw, 45vw" />
          <Asset index={2} pairedWith={1} alt="Competitive landscape showing shoppable video examples from grocery retailers" caption="Industry competitive landscape" sizes="(max-width: 767px) 90vw, 45vw" />
        </div>
      </section>

      <section aria-label="Strategic vision" className="space-y-10 lg:space-y-14">
        <SectionIntro number="03" label="Strategic Vision" title="Watch. Get inspired. Add to cart.">
          <p>With the rise of short-form video, we aimed to deepen engagement, encourage return visits, and create new business opportunities. Integrating shopping capabilities lets users instantly add relevant products when they feel inspired.</p>
          <p>If successful, we planned to expand functionality and bring video to more locations across the site, ultimately creating a personalized content hub where users could browse, shop, and get inspired.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="w-full max-w-[920px] md:col-span-3 md:col-start-2">
            <Asset index={3} alt="Phased roadmap from the core video MVP through monetization, personalization, and a content hub" sizes="(max-width: 767px) 90vw, 65vw" />
          </div>
        </div>
      </section>

      <section id="ux-usability" aria-label="UX and usability" className="space-y-10 lg:space-y-14">
        <SectionIntro number="04" label="Phase 1.0" title="UX & usability">
          <p>The mobile experience connects video discovery, immersive viewing, and shoppable products. Customers can explore content, open a video, and add featured grocery items from the product panel.</p>
        </SectionIntro>
        <Asset index={4} alt="Three mobile screens showing video discovery, recipe playback, and a shoppable product panel" />
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="space-y-4 md:col-span-3 md:col-start-2">
            <h3 className="text-h3 text-text">Inspiration that fits the desktop experience</h3>
            <p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">
              On desktop, photography and bite-sized videos bring recipes and food stories into the shopping journey. In 30–60 seconds, customers can discover a meal idea, see it come together, and shop the ingredients alongside the content. Recipe spotlights offer another way in, pairing videos with relevant products and a direct path to adding ingredients to the cart.
            </p>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[680px]">
          <Image
            src="/images/projects/shoppable-video/riceselect-shopping-demo.gif"
            alt="Animated RiceSelect shoppable video with a product panel for adding featured rice products to the cart"
            width={830}
            height={737}
            unoptimized
            className="h-auto w-full rounded-xl"
          />
        </figure>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <p className="max-w-text-measure text-body leading-relaxed text-text-muted md:col-span-3 md:col-start-2 lg:text-[1.125rem]">
            Recipe spotlights offer another way to inspire customers with new meal ideas. By pairing recipe content with the ingredients needed to make it, customers can move easily from discovering a dish to adding its ingredients to their cart.
          </p>
        </div>
        <figure className="mx-auto w-full max-w-[960px]">
          <Image
            src="/images/projects/shoppable-video/recipe-inspiration-products.webp"
            alt="Recipe inspiration module pairing a strawberry recipe video with ingredients customers can add to their cart"
            width={1500}
            height={1009}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 85vw, 960px"
            className="h-auto w-full"
          />
        </figure>
      </section>

      <section aria-label="Content strategy" className="space-y-10 lg:space-y-14">
        <SectionIntro number="05" label="Phase 1.2" title="Content strategy">
          <p>We developed a comprehensive content strategy to support a successful launch. Through workshops and discussions, I aligned the strategy and direction with leaders across six teams outside my department.</p>
          <p>Together, we defined processes, responsibilities, and timing, while exploring potential monetization opportunities with consumer packaged goods vendors.</p>
        </SectionIntro>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
          {["Brand incorporation & production milestones", "Content production workflow", "Content planning & mix", "Trending, featured & seasonal calendar"].map((caption, index) => <Asset key={caption} index={index + 5} pairedWith={index % 2 === 0 ? index + 6 : index + 4} alt={`Shoppable Video content strategy: ${caption}`} caption={caption} sizes="(max-width: 767px) 90vw, 45vw" />)}
        </div>
      </section>

      <section aria-label="Test and learn" className="space-y-10 lg:space-y-14">
        <SectionIntro number="06" label="Phase 1.3" title="Test and learn" />
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:col-span-3 md:col-start-2 lg:grid-cols-3">
          {[
            ["2.5%", "Video start rate"],
            ["8.5%", "Add-to-cart rate among users who started a video"],
            ["12.34%", "Add-to-cart rate among users who viewed products"],
            ["5.27", "Average number of items added to cart per user"],
            ["52.4%", "Users who added items to cart and also placed an order"],
          ].map(([value, label]) => <div key={label} className="flex flex-col gap-5 border-t border-border pt-6"><dt className="max-w-[30ch] text-body text-text-muted">{label}</dt><dd className="order-first font-display text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-none tracking-[-0.05em]"><ImpactCountUp value={value} /></dd></div>)}
        </dl>
        </div>
      </section>

      <section aria-label="Monetization pilot" className="space-y-10 lg:space-y-14">
        <SectionIntro number="07" label="Post-MVP" title="Monetization pilot">
          <p>We collaborated with consumer packaged goods vendors and launched a full-stack A/B test to understand how users responded to branded and monetized content. With prioritized placement and a strong creative direction, all monetized content in the pilot performed better than regular or unbranded content.</p>
        </SectionIntro>
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="w-full max-w-[920px] md:col-span-3 md:col-start-2">
            <Asset index={9} alt="General Mills short-form recipe video pilot with sponsor placements and performance results" caption="Monetization pilot · General Mills" sizes="(max-width: 767px) 90vw, 65vw" />
          </div>
        </div>
      </section>
    </div>
  );
}
