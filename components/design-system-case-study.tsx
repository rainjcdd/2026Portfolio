import Image from "next/image";
import type { ReactNode } from "react";

function Chapter({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className="grid gap-6 border-t border-border py-12 md:grid-cols-4 md:gap-10 lg:gap-14 lg:py-20">
    <div className="flex items-baseline gap-4"><p className="shrink-0 text-small uppercase tracking-[0.12em] text-text-muted">{number}</p><h2 className="text-h2 leading-[1.05]">{title}</h2></div>
    <div className="min-w-0 space-y-6 text-body leading-relaxed text-text-muted md:col-span-3 lg:text-[1.125rem]">{children}</div>
  </section>;
}

export function DesignSystemCaseStudyHero() {
  return <figure className="bg-white p-4 md:p-8 lg:p-12"><a href="/images/projects/design-system/hero-component-collection-white.svg" target="_blank" rel="noreferrer" aria-label="Open full-size Medline component overview" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"><Image src="/images/projects/design-system/hero-component-collection-white.svg" alt="Medline component collection: product card, dashboard cards, progress indicator, selector states, unit-of-measure card, download styles, status colors, and icon sizes" width={1600} height={900} unoptimized priority sizes="90vw" className="h-auto w-full" /></a></figure>;
}

function TokenArchitectureDiagram() {
  const rows = [
    { value: "color/primary/500", alias: "Action / Base", role: "Surface", color: "#0052cc", state: "Default" },
    { value: "color/primary/400", alias: "Action / Hover", role: "Surface:Hover", color: "#3375d6", state: "Hover" },
    { value: "color/primary/700", alias: "Action / Active", role: "Surface:Active", color: "#00317a", state: "Active" },
  ];
  return <figure>
    <div className="overflow-hidden rounded-xl border border-[#dce3ed] bg-[#f4f6fa] px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-16">
      <div className="hidden grid-cols-[1fr_1fr_1.5fr_0.9fr] gap-7 pb-6 lg:grid">{[["01 / Brand primitives", "The available values"], ["02 / Aliases", "Meaning and state"], ["03 / Mapped tokens", "Where decisions apply"], ["04 / Components", "Reusable interfaces"]].map(([title,subtitle]) => <div key={title}><p className="text-body font-semibold">{title}</p><p className="mt-1 text-small text-text-muted">{subtitle}</p></div>)}</div>
      <div className="space-y-5 lg:space-y-7">{rows.map(row => <div key={row.state} className="grid items-center gap-3 rounded-lg border border-[#dce3ed] bg-white/60 p-4 lg:grid-cols-[1fr_1fr_1.5fr_0.9fr] lg:gap-7 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
        {[{label: "Brand primitive", text: row.value}, {label: "Alias", text: row.alias}, {label: "Mapped token", text: `Components/Button/Variants/Primary/${row.role}`}].map((item,index) => <div key={item.label} className="relative min-w-0"><p className="mb-2 text-[11px] uppercase tracking-wider text-text-muted lg:hidden">{item.label}</p><div className="flex min-h-14 items-center gap-3 rounded-full border border-[#cdd7e5] bg-white px-4 py-3"><span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full" style={{backgroundColor:row.color}}/><span className="break-all text-[12px] leading-snug xl:text-[13px]">{item.text}</span></div><span aria-hidden="true" className="absolute -right-7 top-1/2 hidden w-7 border-t border-[#93a6c0] lg:block"><span className="absolute -left-0.5 -top-[3px] h-[5px] w-[5px] rounded-full bg-[#93a6c0]"/><span className="absolute right-0 -top-[3px] h-[5px] w-[5px] rotate-45 border-r border-t border-[#93a6c0]"/></span><span className="sr-only">{index < 2 ? " connects to " : " applies to "}</span></div>)}
        <div className="min-w-0 text-center"><div className="rounded-full px-4 py-3 text-[13px] font-semibold text-white shadow-sm" style={{backgroundColor:row.color}}>Continue</div><p className="mt-2 text-[11px] text-text-muted">{row.state}</p></div>
      </div>)}</div>
      <div className="mt-9 border-t border-[#dce3ed] pt-7"><p className="text-small text-text-muted">Brand primitives supply values. Aliases define their meaning. Mapped tokens assign them to interface roles. Components bring those decisions together.</p></div>
    </div>
  </figure>;
}

function EcosystemArchitecture() {
  const layers = [
    { title: "Smart components", detail: "Inherit token values across screen contexts.", modes: [] },
    { title: "Mapped tokens: where it is used", detail: "Interface roles and platform styling; responsive values use a dedicated collection.", modes: [
      { title: "Platform mode", status: "Live", values: "B2C · B2B", effect: "Platform styling and visibility.", note: "Marketing platform mode is planned." },
      { title: "Screen mode", status: "In progress", values: "Responsive collection", effect: "Layout, spacing, visibility, type size.", note: "Current modes mix screen and product context; tablet and mobile type are not yet defined." },
    ] },
    { title: "Shared aliases: what it means", detail: "Action · Error · Radius", modes: [] },
    { title: "Brand primitives: what exists", detail: "Color palettes, typography, and base values", modes: [
      { title: "Brand mode", status: "Planned", values: "Target: Medline · atHome · SuiteStyles", effect: "Sets palette and type.", note: "Multi-brand theming is placeholder work; the current CMS mode differs by one value." },
    ] },
  ];
  return <figure aria-label="Target architecture and current implementation status" className="rounded-xl border border-[#dce3ed] bg-[#f4f6fa] px-6 pb-6 pt-12 md:px-8 md:pb-8 md:pt-16 lg:px-10 lg:pb-10 lg:pt-20">
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">{["B2C ecommerce", "B2B ecommerce", "Marketing CMS", "Brand sites"].map(product => <li key={product} className="flex items-center justify-center rounded-lg border border-[#cdd7e5] bg-white px-4 py-3 text-center text-small font-semibold text-text">{product}</li>)}</ul>
    <div className="flex items-center gap-3 py-3 text-small md:pl-8"><span aria-hidden="true" className="text-2xl text-[#0052cc]">↑</span><span>One component foundation designed to support every property</span></div>
    <ol>{layers.map((layer,index) => <li key={layer.title}>
      <div className="grid items-center gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
        <div className={`flex flex-col justify-center rounded-lg border px-4 py-3 ${index === 1 ? "border-[#0052cc] bg-[#e7f0ff] ring-1 ring-[#0052cc]" : "border-[#cdd7e5] bg-white"}`}><h5 className="text-body font-semibold text-text">{layer.title}</h5><p className="mt-1 text-small">{layer.detail}</p></div>
        <div className="relative grid gap-2 sm:grid-cols-2">{layer.modes.length > 0 && <span aria-hidden="true" className="absolute -left-10 top-1/2 hidden w-10 border-t border-[#93a6c0] md:block"><span className="absolute left-0 -top-[3px] h-[5px] w-[5px] rotate-45 border-b border-l border-[#93a6c0]"/></span>}{layer.modes.map(mode => <div key={mode.title} className={`relative rounded-lg border border-[#dce3ed] bg-[#e9edf3] px-3 py-2 ${layer.modes.length === 1 ? "sm:col-span-2" : ""}`}><div className="flex flex-wrap items-center gap-2"><h5 className="text-small font-semibold text-text">{mode.title}</h5><span className={`rounded-full px-2 py-1 text-[11px] font-medium ${mode.status === "Live" ? "bg-emerald-100 text-emerald-800" : mode.status === "In progress" ? "bg-amber-100 text-amber-900" : "bg-white text-slate-600"}`}>{mode.status}</span></div><p className="mt-2 text-small text-text">{mode.values}</p><p className="mt-1 text-small">{mode.effect}</p></div>)}</div>
      </div>
      {index < layers.length - 1 && <div className="flex min-h-5 items-center gap-3 text-small md:pl-8"><span aria-hidden="true" className="text-2xl text-[#93a6c0]">↓</span>{index === 0 && <span>Each layer references the one below</span>}</div>}
    </li>)}</ol>
    <details className="mt-5 border-t border-[#dce3ed] pt-4 text-small"><summary className="cursor-pointer font-medium text-text">Implementation status details</summary><ul className="mt-3 space-y-2">{layers.flatMap(layer => layer.modes).map(mode => <li key={mode.title}><span className="font-medium">{mode.title}:</span> {mode.note}</li>)}</ul></details>
    
  </figure>;
}

export function DesignSystemCaseStudy() {
  const problems = [
    ["Outdated technology and fragmented components", "The front-end stack relied on multiple versions of UI components, including legacy components that no longer supported updates. This complicated maintenance and limited modernization."],
    ["Disconnected design assets and standards", "Design files, components, and documentation were distributed across teams and tools. Without a reliable shared source, teams worked from inconsistent assets and recreated solutions independently."],
    ["Limited support for the broader ecosystem", "The system did not adequately serve Medline’s full digital portfolio, spanning B2B commerce, B2C commerce, and multiple brand sites. It lacked a shared foundation that could maintain consistency while accommodating different product and brand needs."],
    ["Insufficient foundations for AI-assisted workflows", "The system lacked the tokenized structure and explicit design rules needed to guide AI-assisted implementation. Design decisions were difficult to reuse consistently across design and development."],
  ];
  const priorities = [
    ["One design system for Medline’s digital ecosystem", "Establish a shared foundation for B2B commerce, B2C commerce, and brand experiences. Align products around common components and standards while supporting their distinct needs."],
    ["A scalable architecture built on design tokens", "Translate design decisions into reusable tokens that connect brand foundations, product themes, and components. Make updates easier to maintain and extend across products without rebuilding the system for each experience."],
    ["A foundation for AI-assisted workflows", "Give AI-assisted tools structured design rules, tokens, and coded components to reference. Connect the design system to implementation so teams can build and refine interfaces using the same shared foundation."],
  ];
  return <div className="pt-section-mobile lg:pt-section">
    <Chapter number="01" title="Problem">
      <p className="max-w-text-measure">Medline’s existing design system faced four limitations that made it difficult to maintain consistency, evolve the experience, and support new ways of working.</p>
      <div className="grid gap-8 pt-4 md:grid-cols-2 lg:gap-10">{problems.map(([title,copy]) => <div key={title} className="border-t border-border pt-6"><h3 className="text-h3 text-text">{title}</h3><p className="mt-3 text-body font-light leading-relaxed text-text-muted">{copy}</p></div>)}</div>
    </Chapter>
    <Chapter number="02" title="Our approach">
      <p className="max-w-text-measure">I initiated the modernization effort, working with my team to define a shared foundation for Medline’s digital ecosystem. We organized our approach around three priorities.</p>
      <ol className="space-y-8 pt-4">{priorities.map(([title,copy],index) => <li key={title} className="border-t border-border pt-6"><p className="mb-3 text-small">0{index+1}</p><h3 className="text-h3 text-text">{title}</h3><p className="mt-3 max-w-text-measure text-body font-light leading-relaxed text-text-muted">{copy}</p></li>)}</ol>
    </Chapter>
    <Chapter number="03" title="Solution">
      <p className="max-w-text-measure">We rebuilt the system around a central principle: separate shared design decisions from the appearance of individual products. This allowed us to connect ecosystem-wide consistency, scalable architecture, and AI-assisted implementation.</p>
    </Chapter>
    <div className="space-y-section-mobile pb-section-mobile lg:space-y-section lg:pb-section">
      <div className="space-y-12 text-body leading-relaxed text-text-muted lg:space-y-20 lg:text-[1.125rem]">
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="space-y-4 md:col-span-3 md:col-start-2">
            <div><p className="mb-3 text-small">01</p><h3 className="text-h3 text-text">One system, every property</h3></div>
            <p className="max-w-text-measure">A shared foundation designed to support Medline’s B2B and B2C commerce, marketing CMS, and brand sites. Reusable components and tokens keep experiences connected, while modes accommodate differences in brand, platform, and screen size.</p>
          </div>
        </div>
        <EcosystemArchitecture />

      </div>
      <section className="space-y-12 text-body leading-relaxed text-text-muted lg:space-y-20 lg:text-[1.125rem]">
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="space-y-4 md:col-span-3 md:col-start-2">
            <div><p className="mb-3 text-small">02</p><h3 className="text-h3 text-text">A layered architecture that makes change scalable</h3></div>
            <p className="max-w-text-measure">Brand primitives define the values, shared aliases give them meaning, and mapped tokens apply them to interface roles. Components inherit those decisions, making shared changes easier to maintain across products.</p>
          </div>
        </div>
        <TokenArchitectureDiagram />
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14"><div className="md:col-span-3 md:col-start-2"><p className="max-w-text-measure text-body leading-relaxed text-text-muted lg:text-[1.125rem]">In this redesign, we introduced brand variables, mapped and responsive tokens, multiple modes, and smart components that inherit shared design decisions. Together, these foundations help one system adapt across Medline’s products, brands, and screen sizes while keeping updates consistent and easier to scale. Structured token names make those decisions explicit for designers, developers, and AI-assisted workflows.</p></div></div>
        <figure className="mx-auto w-full max-w-[970px]"><a href="/images/projects/design-system/token-naming-anatomy.svg" target="_blank" rel="noreferrer" aria-label="Open token naming diagram" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Image src="/images/projects/design-system/token-naming-anatomy.svg" alt="Anatomy of Components/Button/Variants/Primary/Surface:Hover, explaining scope, component, group, variant, and property with state" width={1600} height={820} unoptimized sizes="90vw" className="h-auto w-full" /></a></figure>
        <div className="space-y-8 lg:space-y-12">
          <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14"><div className="space-y-4 md:col-span-3 md:col-start-2">
            <div><p className="mb-3 text-small">03</p><h3 className="text-h3 text-text">Updating the system is as easy as changing the source</h3></div>
            <p className="max-w-text-measure">Like changing the paint while keeping the room’s plan, updating shared brand values lets connected components inherit a new appearance. The blue-to-green example shows how default, hover, and active states update together while the component structure, label color, and typography remain consistent—reducing manual edits across products.</p>
          </div></div>
          <div className="grid items-start gap-6 md:grid-cols-2 lg:gap-10">
            {(["blue", "green"] as const).map((theme) => <figure key={theme}><a href={`/images/projects/design-system/token-update-${theme}.svg`} target="_blank" rel="noreferrer" aria-label={`Open ${theme} token mapping diagram`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Image src={`/images/projects/design-system/token-update-${theme}.svg`} alt={`${theme === "blue" ? "Blue" : "Green"} brand variables connected to mapped tokens and default, hover, and active button states`} width={1100} height={850} unoptimized sizes="(min-width: 768px) 45vw, 90vw" className="h-auto w-full" /></a></figure>)}
          </div>
        </div>
      </section>
      <section className="space-y-8 text-body leading-relaxed text-text-muted lg:space-y-12 lg:text-[1.125rem]">
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14"><div className="space-y-4 md:col-span-3 md:col-start-2">
          <div><p className="mb-3 text-small">04</p><h3 className="text-h3 text-text">One component, room for every screen</h3></div>
          <p className="max-w-text-measure">Think of the interface as a room: the furniture serves the same purpose, but its arrangement adapts to the available space. Responsive tokens define spacing, widths, and visibility for each screen context, helping smart components adapt without rebuilding each layout from scratch.</p>
          <p className="max-w-text-measure">In this modal example, a wider screen gives content and actions room to sit side by side. On a smaller screen, the content narrows and actions stack. Shared tokens and layout rules keep both experiences connected to the same design foundation.</p>
        </div></div>
        <div className="grid items-start gap-6 md:grid-cols-2 lg:gap-10">
          {(["desktop", "mobile"] as const).map((screen) => <figure key={screen}><a href={`/images/projects/design-system/responsive-room-${screen}.svg`} target="_blank" rel="noreferrer" aria-label={`Open ${screen} responsive component illustration`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Image src={`/images/projects/design-system/responsive-room-${screen}.svg`} alt={`${screen} modal illustration with a bed analogy showing how layout adapts to available space`} width={1000} height={820} unoptimized sizes="(min-width: 768px) 45vw, 90vw" className="h-auto w-full" /></a></figure>)}
        </div>
        
      </section>
      <section className="space-y-8 text-body leading-relaxed text-text-muted lg:space-y-12 lg:text-[1.125rem]">
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14"><div className="space-y-4 md:col-span-3 md:col-start-2">
          <div><p className="mb-3 text-small">05</p><h3 className="text-h3 text-text">Switch the mode, keep the system</h3></div>
          <p className="max-w-text-measure">Like switching a room’s lighting scene, modes apply a predefined set of design decisions to a familiar environment. Selecting a product mode changes the token values used by connected components, adapting their styling and visibility while preserving the shared design-system foundation.</p>
          <p className="max-w-text-measure">B2C and B2B experiences can use the same component library with different settings for their context. Teams can switch modes instead of maintaining separate copies, making product-specific updates easier to manage and helping experiences stay consistent across Medline’s ecosystem.</p>
        </div></div>
        <div className="grid items-start gap-6 md:grid-cols-2 lg:gap-10">
          {(["b2c", "b2b"] as const).map((mode) => <figure key={mode}><a href={`/images/projects/design-system/platform-mode-${mode}.svg`} target="_blank" rel="noreferrer" aria-label={`Open ${mode.toUpperCase()} mode diagram`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Image src={`/images/projects/design-system/platform-mode-${mode}.svg`} alt={`${mode.toUpperCase()} mode example showing predefined font size, border width, and button height for shared components`} width={1000} height={700} unoptimized sizes="(min-width: 768px) 45vw, 90vw" className="h-auto w-full" /></a></figure>)}
        </div>
        
      </section>
      <section className="space-y-8 text-body leading-relaxed text-text-muted lg:space-y-12 lg:text-[1.125rem]">
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14"><div className="space-y-4 md:col-span-3 md:col-start-2">
          <div><p className="mb-3 text-small">06</p><h3 className="text-h3 text-text">Configure without breaking the connection</h3></div>
          <p className="max-w-text-measure">A smart room changes through its control panel. Smart components work the same way: designers can adjust content, toggle icons, and configure actions through built-in properties, while keeping the instance connected to the shared library.</p>
          <p className="max-w-text-measure">The modal’s controls support different needs without detaching or rebuilding the component. This gives teams flexibility within shared rules, preserves token bindings, and allows future library updates to reach connected instances.</p>
        </div></div>
        <figure className="mx-auto w-full max-w-[1200px]"><a href="/images/projects/design-system/smart-component-controls-final.svg" target="_blank" rel="noreferrer" aria-label="Open smart component and Figma control panel visual" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Image src="/images/projects/design-system/smart-component-controls-final.svg" alt="Standard and configured modal variants connected to the original black Figma component-properties panel" width={1600} height={610} unoptimized sizes="90vw" className="h-auto w-full" /></a></figure>
      </section>
      <section className="space-y-8 text-body leading-relaxed text-text-muted lg:space-y-12 lg:text-[1.125rem]">
        <div className="grid md:grid-cols-4 md:gap-10 lg:gap-14"><div className="space-y-4 md:col-span-3 md:col-start-2">
          <div><p className="mb-3 text-small">07</p><h3 className="text-h3 text-text">AI-enabled. Human in the loop. The system improves.</h3></div>
          <p className="max-w-text-measure">The tokenized design system gives AI a shared foundation for composing interfaces and generating code. Library components, modes, tokens, Storybook, and explicit guidance provide context, while designers and engineers define intent, review the work, and approve what ships.</p>
          <p className="max-w-text-measure">The end-to-end workflow includes two feedback loops: failed checks return to the agent for revision, and recurring gaps inform improvements to the design system. Each improvement strengthens the shared context for the next design or implementation task.</p>
        </div></div>
        <figure className="mx-auto w-full max-w-[1400px]"><a href="/images/projects/design-system/ai-enabled-workflow-tight.svg" target="_blank" rel="noreferrer" aria-label="Open full-size AI-enabled workflow diagram" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Image src="/images/projects/design-system/ai-enabled-workflow-tight.svg" alt="AI-enabled workflow from shared system context through design, code, human review, release, and feedback into the design system" width={1630} height={780} unoptimized sizes="90vw" className="h-auto w-full" /></a></figure>
      </section>
    </div>
    <Chapter number="04" title="Learnings">
      <div className="space-y-4">
        <h3 className="text-h3 text-text">One architecture serves both goals</h3>
        <p className="max-w-text-measure">Multi-brand scale and AI readiness share the same foundation: separating design decisions from their appearance. Layered tokens—Brand → Alias → Mapped—and contextual modes allow shared components to adapt across brands, platforms, and screen sizes. That structure also gives AI meaningful roles such as “action surface” to reference, rather than isolated color values. Consistency starts with the system’s setup.</p>
      </div>
      <div className="space-y-10 pt-6 lg:space-y-12">
        <div className="space-y-4 border-t border-border pt-8">
          <h3 className="text-h3 text-text">Structure is the interface—for people and AI</h3>
          <p className="max-w-text-measure">Purpose-based names, clear token relationships, and guidance that tools can read make design intent usable beyond the canvas. Skipped token layers, color-based names, competing breakpoint definitions, and canvas-only documentation expose ambiguity that both people and AI must resolve.</p>
          <p className="max-w-text-measure">The next step is to make those rules more explicit through component descriptions, code syntax, and Code Connect. A well-defined structure gives Figma MCP and coding agents a more reliable basis for implementation, while human review remains essential.</p>
        </div>
        <div className="space-y-4 border-t border-border pt-8">
          <h3 className="text-h3 text-text">Centralize the structure. Share ownership of expression.</h3>
          <p className="max-w-text-measure">The core team should own component structure, token names, and shared meaning, while brand teams manage their palette values within those rules. This creates room for distinct identities without fragmenting the foundation.</p>
          <p className="max-w-text-measure">As adoption grows, governance should combine human ownership with automated checks for token completeness, contrast, raw values, and visual consistency across modes. Recurring AI mistakes should become improvements to tokens, components, or guidance—so each use helps strengthen the system.</p>
        </div>
      </div>
    </Chapter>
  </div>;
}
