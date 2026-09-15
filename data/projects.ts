export type ProjectVisualVariant = "grid" | "system" | "orbit" | "path" | "video" | "archive";

export type Project = {
  detailLayout?: "alternating";
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
  overview?: {
    heading: string;
    copy: string;
  };
  problemPoints?: Array<{
    title: string;
    copy: string;
  }>;
  processTitle?: string;
  processImage?: string;
  outcomeTitle?: string;
  solutionImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  personas?: Array<{
    title: string;
    copy: string;
  }>;
  caseStudy: {
    problem: string;
    process: string;
    outcome: string;
    solution?: string;
  };
  gallery: Array<{
    label: string;
    copy?: string;
    hidden?: boolean;
    visual: ProjectVisualVariant;
    image?: { src: string; alt: string; width: number; height: number };
    supportingImages?: Array<{ src: string; alt: string; width: number; height: number }>;
  }>;
  featured?: boolean;
  tag?: string;
  image?: string;
  homepageImage?: string;
  homepageScreens?: [string, string];
  desktopImage?: string;
  mobileImage?: string;
  device?: "phone" | "desktop" | "responsive";
  visual: ProjectVisualVariant;
};

export const projects: Project[] = [
  {
    title: "TrackPoint",
    slug: "trackpoint",
    detailLayout: "alternating",
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
    overview: {
      heading: "B2B SaaS Web & Mobile Application",
      copy: "A self-service inventory tracking and ordering system built from 0 to 1 for small-to-medium healthcare providers. Grounded in user research, it turns complex supply workflows into clear, simple tasks designed for the pace of everyday care.",
    },
    problemPoints: [
      {
        title: "Limited inventory visibility",
        copy: "Staff struggle to know what’s available and where supplies are stored across locations.",
      },
      {
        title: "Manual, fragmented workflows",
        copy: "Spreadsheets, paper logs, and disconnected systems make tracking and reordering supplies time-consuming and error-prone.",
      },
      {
        title: "Difficult patient usage tracking",
        copy: "Recording supplies and services used by each patient takes extra effort, complicating reconciliation and accurate billing.",
      },
    ],
    processTitle: "Our Customer & User",
    processImage: "/images/projects/trackpoint/customer-segments.png",
    outcomeTitle: "Challenge",
    solutionImage: {
      src: "/images/projects/trackpoint/solution/solution-device-composition.png",
      alt: "TrackPoint desktop item details and mobile dispensing interfaces",
      width: 1672,
      height: 941,
    },
    personas: [
      {
        title: "Admin Adam",
        copy: "A materials manager balancing supply availability and costs. Needs clearer stock visibility and reliable ordering information.",
      },
      {
        title: "Clinician Claire",
        copy: "A clinician juggling patient care and inventory tasks. Needs a simple way to find supplies and track changes without relying on memory or manual notes.",
      },
      {
        title: "Director Dan",
        copy: "A leadership persona representing oversight of care teams and facility operations.",
      },
    ],
    caseStudy: {
      problem:
        "Small and medium-sized healthcare providers rely on manual processes and disconnected tools to manage supplies and track patient usage. Limited visibility and fragmented workflows create extra work, make reordering harder, and increase the risk of inventory and billing errors.",
      process:
        "We conducted multiple rounds of one-on-one user interviews across non-acute care settings, including nursing homes, assisted living facilities, surgery centers, and a physician office. We explored their daily responsibilities and how they manage supplies, uncovering friction in inventory tracking, ordering, and staff communication.",
      outcome:
        "The challenge was designing a simple, consistent experience amid complexity inside and outside the organization. Internally, we had to navigate fragmented data and a complex technology stack without compromising usability. Externally, differences in facility environments, supply organization, and daily routines required a solution flexible enough to support varied workflows.",
      solution:
        "We expanded beyond the screen to connect digital workflows with the physical work of managing supplies across care locations. By grounding the experience in how users understand locations, units of measure, and patient information, we designed a system that fits how they organize and carry out their daily work.",
    },
    gallery: [
      {
        label: "Customer Semantic Model: Product and Location",
        copy: "Connect inventory tasks to the places where care happens. The workflow brings locations, supplies, and patient usage into a shared context for everyday work.",
        visual: "path",
        image: {
          src: "/images/projects/trackpoint/solution/location-hierarchy.png",
          alt: "TrackPoint location editing with a location hierarchy preview",
          width: 2560,
          height: 1664,
        },
        supportingImages: [
          {
            src: "/images/projects/trackpoint/solution/patient-recurring-services.png",
            alt: "TrackPoint patient details and recurring services",
            width: 2560,
            height: 2216,
          },
          {
            src: "/images/projects/trackpoint/solution/product-location-transfer.png",
            alt: "TrackPoint product transfer with destination locations and quantities",
            width: 2562,
            height: 2366,
          },
        ],
      },
      {
        label: "Unit of Measure: Add, Track & Dispense",
        copy: "Bring supply tracking into the flow of patient care. The mobile experience focuses on clear, simple tasks that support clinicians as they find supplies and record usage.",
        visual: "grid",
        image: {
          src: "/images/projects/trackpoint/solution/dispense-service-units.png",
          alt: "TrackPoint service dispensing with quantities measured by each or week",
          width: 2560,
          height: 1664,
        },
        supportingImages: [
          {
            src: "/images/projects/trackpoint/solution/location-inventory-units.png",
            alt: "TrackPoint location inventory showing quantities in crates, boxes, cases, and individual units",
            width: 2562,
            height: 1664,
          },
          {
            src: "/images/projects/trackpoint/solution/item-unit-settings.png",
            alt: "TrackPoint item details with separate inventory, ordering, and dispensing units of measure",
            width: 2536,
            height: 1842,
          },
        ],
      },
      {
        label: "Final system states",
        hidden: true,
        copy: "Create a consistent experience across inventory tracking and ordering. Locations, units of measure, and patient information give teams a common foundation for managing supplies.",
        visual: "orbit",
      },
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
    image: "/images/projects/design-system-tokenization.png",
    device: "desktop",
    visual: "system",
  },
  {
    title: "HAPIO App",
    slug: "hapio-app",
    detailLayout: "alternating",
    timeframe: "2024–2026",
    summary:
      "A vibe-coded exploration app built end-to-end with AI coding tools — a live test of how far AI-assisted design-to-code workflows can go.",
    role: "Designer & Builder",
    tools: ["Figma", "Cursor", "Next.js"],
    overview: {
      heading: "AI-Assisted App Design & Development",
      copy: "A vibe-coded exploration app built end-to-end with AI coding tools — a live test of how far AI-assisted design-to-code workflows can go.",
    },
    details: [
      { label: "Role", items: ["Designer & Builder"] },
      { label: "Timeframe", items: ["2024–2026"] },
      { label: "Key Tasks", items: ["Concept Exploration", "Prototyping", "Interaction Design", "Development"] },
      { label: "Tools", items: ["Figma", "Cursor", "Next.js"] },
    ],
    caseStudy: {
      problem:
        "Product ideas often lose momentum between an interactive design concept and a working prototype. I wanted to test whether one designer could shorten that gap without flattening the craft of the experience.",
      process:
        "I treated AI coding tools as a collaborative material: defining small behavioral goals, building in short loops, and evaluating each result in the browser. Design decisions and implementation evolved together rather than through a traditional handoff.",
      outcome:
        "The experiment produced a working application and a repeatable set of practices for AI-assisted prototyping. It also clarified where automation accelerates execution—and where careful human direction still matters most.",
      solution:
        "Bring design and development into one continuous workflow. Small behavioral goals, interactive prototypes, and browser-based evaluation turn an exploration concept into a working application, with design judgment guiding each iteration.",
    },
    gallery: [
      {
        label: "Concept explorations",
        copy: "Define small behavioral goals that make an idea tangible. Early explorations focus the design direction and give each prototype a clear purpose.",
        visual: "orbit",
      },
      {
        label: "Prototype behavior",
        copy: "Build in short loops and evaluate interactions in the browser. Design and implementation evolve together as each iteration reveals what needs refinement.",
        visual: "grid",
      },
      {
        label: "Built experience",
        copy: "Bring the refined interactions into a working application. The experience captures a repeatable approach to AI-assisted prototyping, guided by deliberate design decisions.",
        visual: "system",
      },
    ],
    featured: true,
    tag: "Vibe coded",
    image: "/images/projects/hapio-matches-screen.png",
    device: "phone",
    visual: "orbit",
  },
  {
    title: "Navigation Redesign",
    slug: "navigation-redesign",
    detailLayout: "alternating",
    timeframe: "2021–2024",
    summary: "Reimagined the navigation system to elevate UX and brand digital presence.",
    role: "Senior Product Designer",
    tools: ["Figma", "Miro", "UserTesting"],
    overview: {
      heading: "Responsive Navigation & Information Architecture",
      copy: "Reimagined the navigation system to elevate UX and brand digital presence.",
    },
    details: [
      { label: "Role", items: ["Senior Product Designer"] },
      { label: "Timeframe", items: ["2021–2024"] },
      { label: "Key Tasks", items: ["Information Architecture", "Content Inventory", "Tree Testing", "Prototyping"] },
      { label: "Tools", items: ["Figma", "Miro", "UserTesting"] },
    ],
    caseStudy: {
      problem:
        "A growing multi-product platform had accumulated overlapping labels and navigation paths. Customers struggled to understand where features lived, while internal teams lacked a shared model for adding new destinations.",
      process:
        "I combined behavioral data, content inventories, and tree-testing insights to create a clearer information architecture. Iterative prototypes helped the team compare navigation models before committing to the final responsive system.",
      outcome:
        "The new structure made core destinations easier to discover and established durable rules for future product growth. It also aligned product, content, and engineering teams around one navigation framework.",
      solution:
        "Create a shared navigation framework that brings labels, destinations, and responsive behavior into one coherent system. A clearer information architecture helps customers find features and gives teams a consistent approach to adding new destinations.",
    },
    gallery: [
      {
        label: "Information architecture",
        copy: "Bring overlapping labels and navigation paths into a clearer structure. Behavioral data, content inventories, and tree-testing insights inform how destinations are grouped and named.",
        visual: "path",
      },
      {
        label: "Navigation prototypes",
        copy: "Make competing navigation models tangible through iterative prototypes. Comparing the options helps the team refine the paths customers use to discover features.",
        visual: "grid",
      },
      {
        label: "Responsive framework",
        copy: "Carry the navigation structure across responsive layouts. Shared rules keep destinations consistent and give product, content, and engineering teams a foundation for future growth.",
        visual: "system",
      },
    ],
    featured: true,
    image: "/images/projects/navigation-redesign.webp",
    homepageImage: "/images/projects/navigation-redesign-thumbnail.jpg",
    device: "desktop",
    visual: "path",
  },
  {
    title: "Short Form Video",
    slug: "short-form-video",
    detailLayout: "alternating",
    timeframe: "2021–2024",
    summary: "Bringing social buying to life.",
    role: "Product Designer",
    tools: ["Figma", "After Effects", "Principle"],
    overview: {
      heading: "Creator-Led Video Commerce",
      copy: "Bringing social buying to life.",
    },
    details: [
      { label: "Role", items: ["Product Designer"] },
      { label: "Timeframe", items: ["2021–2024"] },
      { label: "Key Tasks", items: ["Interaction Design", "Prototyping", "Motion Studies", "Commerce Exploration"] },
      { label: "Tools", items: ["Figma", "After Effects", "Principle"] },
    ],
    caseStudy: {
      problem:
        "Shoppers were discovering products through creator video, but the path from inspiration to useful product information felt disconnected. The experience needed to support exploration without interrupting the rhythm of viewing.",
      process:
        "I studied short-form viewing patterns, prototyped lightweight commerce gestures, and tested how product context could appear progressively. Motion studies helped balance immediacy with enough time for users to understand each action.",
      outcome:
        "The concept connected discovery and shopping in one continuous flow. The work established interaction principles for creator-led commerce and informed subsequent video experiments across the platform.",
      solution:
        "Connect creator video and product discovery in a continuous viewing experience. Lightweight commerce gestures and progressively revealed product information let shoppers explore what interests them while staying in the flow of the content.",
    },
    gallery: [
      {
        label: "Viewing behavior",
        copy: "Ground the experience in the rhythm of short-form viewing. Studying viewing patterns informs when product context can appear and how much attention each interaction requires.",
        visual: "video",
      },
      {
        label: "Commerce interaction",
        copy: "Introduce product information through lightweight gestures and progressive disclosure. Motion studies help balance immediate feedback with enough time to understand each action.",
        visual: "orbit",
      },
      {
        label: "Creator discovery flow",
        copy: "Connect inspiration from creator content with useful product information. The flow brings discovery and shopping together while preserving the continuity of the viewing experience.",
        visual: "path",
      },
    ],
    featured: true,
    image: "/images/projects/short-form-video.webp",
    homepageScreens: [
      "/images/projects/sfv-home-screen-final-v4.png",
      "/images/projects/sfv-products-screen-final-v2.png",
    ],
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
