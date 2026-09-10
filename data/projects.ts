export type ProjectVisualVariant = "grid" | "system" | "orbit" | "path" | "video" | "archive";

export type Project = {
  title: string;
  slug: string;
  timeframe: string;
  summary: string;
  role: string;
  tools: string[];
  details?: Array<{
    label: string;
    items: string[];
  }>;
  caseStudy: {
    problem: string;
    process: string;
    outcome: string;
  };
  gallery: Array<{
    label: string;
    visual: ProjectVisualVariant;
  }>;
  featured?: boolean;
  tag?: string;
  image?: string;
  desktopImage?: string;
  mobileImage?: string;
  device?: "phone" | "desktop" | "responsive";
  visual: ProjectVisualVariant;
};

export const projects: Project[] = [
  {
    title: "TrackPoint",
    slug: "trackpoint",
    timeframe: "2024–2026",
    summary:
      "A field-operations tracking tool redesigned for clarity under pressure — simplifying a dense data interface into something usable in the field, one-handed, in under 3 seconds.",
    role: "Lead Product Designer",
    tools: ["Figma", "FigJam", "Maze"],
    details: [
      {
        label: "Role",
        items: ["Product Design", "Product Strategy"],
      },
      {
        label: "Key Milestone",
        items: ["2025 Q1 Kickoff", "2026 Q2 Commercialization"],
      },
      {
        label: "Key Tasks",
        items: ["User Interview", "User Testing", "UX Design", "Product Onboarding"],
      },
      {
        label: "Tools",
        items: ["Figma / Figma Make", "HeyMarvin", "Copilot"],
      },
    ],
    caseStudy: {
      problem:
        "Field teams were navigating dense tables and ambiguous status controls while moving between sites. Important updates took too many taps, and the interface demanded more attention than the environment allowed.",
      process:
        "I mapped the highest-frequency field tasks, observed where operators paused or backtracked, and reduced the experience to a small set of glanceable states. Rapid prototypes were tested one-handed and in short, interruption-heavy sessions.",
      outcome:
        "The redesigned workflow made critical status changes faster to find and easier to confirm. The resulting interaction model also gave the product team a clearer foundation for future field tools.",
    },
    gallery: [
      { label: "Field workflow map", visual: "path" },
      { label: "Mobile interaction study", visual: "grid" },
      { label: "Final system states", visual: "orbit" },
    ],
    featured: true,
    desktopImage: "/images/projects/trackpoint/desktop-navigation.png",
    mobileImage: "/images/projects/trackpoint/mobile-navigation.png",
    device: "responsive",
    visual: "grid",
  },
  {
    title: "AI-Powered Design System",
    slug: "ai-powered-design-system",
    timeframe: "2024–2026",
    summary:
      "An internal design system augmented with AI tooling to auto-generate compliant component variants, cutting design-to-dev handoff time significantly.",
    role: "Design Systems Lead",
    tools: ["Figma", "Storybook", "Cursor"],
    caseStudy: {
      problem:
        "Teams were recreating common patterns across products, producing inconsistent variants and avoidable review cycles. The system documented standards, but it did not actively help designers apply them.",
      process:
        "I audited component drift, defined a constrained generation model, and prototyped prompts that transformed product intent into system-compliant starting points. Designers and engineers reviewed outputs together to establish practical guardrails.",
      outcome:
        "The pilot reduced repetitive setup work and made system decisions visible earlier in the design process. Handoff became more consistent while designers retained control over product-specific judgment.",
    },
    gallery: [
      { label: "Component architecture", visual: "system" },
      { label: "Generation workflow", visual: "path" },
      { label: "Pattern library", visual: "grid" },
    ],
    featured: true,
    device: "desktop",
    visual: "system",
  },
  {
    title: "HAPIO App",
    slug: "hapio-app",
    timeframe: "2024–2026",
    summary:
      "A vibe-coded exploration app built end-to-end with AI coding tools — a live test of how far AI-assisted design-to-code workflows can go.",
    role: "Designer & Builder",
    tools: ["Figma", "Cursor", "Next.js"],
    caseStudy: {
      problem:
        "Product ideas often lose momentum between an interactive design concept and a working prototype. I wanted to test whether one designer could shorten that gap without flattening the craft of the experience.",
      process:
        "I treated AI coding tools as a collaborative material: defining small behavioral goals, building in short loops, and evaluating each result in the browser. Design decisions and implementation evolved together rather than through a traditional handoff.",
      outcome:
        "The experiment produced a working application and a repeatable set of practices for AI-assisted prototyping. It also clarified where automation accelerates execution—and where careful human direction still matters most.",
    },
    gallery: [
      { label: "Concept explorations", visual: "orbit" },
      { label: "Prototype behavior", visual: "grid" },
      { label: "Built experience", visual: "system" },
    ],
    featured: true,
    tag: "Vibe coded",
    device: "phone",
    visual: "orbit",
  },
  {
    title: "Navigation Redesign",
    slug: "navigation-redesign",
    timeframe: "2021–2024",
    summary: "Reimagined the navigation system to elevate UX and brand digital presence.",
    role: "Senior Product Designer",
    tools: ["Figma", "Miro", "UserTesting"],
    caseStudy: {
      problem:
        "A growing multi-product platform had accumulated overlapping labels and navigation paths. Customers struggled to understand where features lived, while internal teams lacked a shared model for adding new destinations.",
      process:
        "I combined behavioral data, content inventories, and tree-testing insights to create a clearer information architecture. Iterative prototypes helped the team compare navigation models before committing to the final responsive system.",
      outcome:
        "The new structure made core destinations easier to discover and established durable rules for future product growth. It also aligned product, content, and engineering teams around one navigation framework.",
    },
    gallery: [
      { label: "Information architecture", visual: "path" },
      { label: "Navigation prototypes", visual: "grid" },
      { label: "Responsive framework", visual: "system" },
    ],
    featured: true,
    image: "/images/projects/navigation-redesign.webp",
    device: "desktop",
    visual: "path",
  },
  {
    title: "Short Form Video",
    slug: "short-form-video",
    timeframe: "2021–2024",
    summary: "Bringing social buying to life.",
    role: "Product Designer",
    tools: ["Figma", "After Effects", "Principle"],
    caseStudy: {
      problem:
        "Shoppers were discovering products through creator video, but the path from inspiration to useful product information felt disconnected. The experience needed to support exploration without interrupting the rhythm of viewing.",
      process:
        "I studied short-form viewing patterns, prototyped lightweight commerce gestures, and tested how product context could appear progressively. Motion studies helped balance immediacy with enough time for users to understand each action.",
      outcome:
        "The concept connected discovery and shopping in one continuous flow. The work established interaction principles for creator-led commerce and informed subsequent video experiments across the platform.",
    },
    gallery: [
      { label: "Viewing behavior", visual: "video" },
      { label: "Commerce interaction", visual: "orbit" },
      { label: "Creator discovery flow", visual: "path" },
    ],
    featured: true,
    image: "/images/projects/short-form-video.webp",
    device: "phone",
    visual: "video",
  },
  {
    title: "Agency Work",
    slug: "agency-work",
    timeframe: "Pre-2021",
    summary: "A selection of earlier work spanning product, brand, and digital experiences.",
    role: "Product & Experience Designer",
    tools: ["Sketch", "Adobe CC", "InVision"],
    caseStudy: {
      problem:
        "Earlier client engagements covered a wide range of organizations, audiences, and delivery constraints. Each required a clear product story without relying on a one-size-fits-all design process.",
      process:
        "Across the collection, I moved between research, concept direction, prototyping, and production. The common thread was translating complex stakeholder needs into focused digital experiences and tangible design systems.",
      outcome:
        "These projects built the foundation of my current practice: connecting strategy with craft, communicating decisions clearly, and designing systems that can grow beyond an initial launch.",
    },
    gallery: [
      { label: "Selected product work", visual: "archive" },
      { label: "Brand and interface studies", visual: "grid" },
      { label: "Experience systems", visual: "system" },
    ],
    visual: "archive",
  },
];
