export type Project = {
  title: string;
  slug: string;
  timeframe: string;
  summary: string;
  featured?: boolean;
  tag?: string;
  visual: "grid" | "system" | "orbit" | "path" | "video" | "archive";
};

export const projects: Project[] = [
  {
    title: "TrackPoint",
    slug: "trackpoint",
    timeframe: "2024–2026",
    summary:
      "A field-operations tracking tool redesigned for clarity under pressure — simplifying a dense data interface into something usable in the field, one-handed, in under 3 seconds.",
    featured: true,
    visual: "grid",
  },
  {
    title: "AI-Powered Design System",
    slug: "ai-powered-design-system",
    timeframe: "2024–2026",
    summary:
      "An internal design system augmented with AI tooling to auto-generate compliant component variants, cutting design-to-dev handoff time significantly.",
    featured: true,
    visual: "system",
  },
  {
    title: "HAPIO App",
    slug: "hapio-app",
    timeframe: "2024–2026",
    summary:
      "A vibe-coded exploration app built end-to-end with AI coding tools — a live test of how far AI-assisted design-to-code workflows can go.",
    featured: true,
    tag: "Vibe coded",
    visual: "orbit",
  },
  {
    title: "Navigation Redesign",
    slug: "navigation-redesign",
    timeframe: "2021–2024",
    summary:
      "A full IA and navigation overhaul for a multi-product platform, reducing average task completion time across core user flows.",
    featured: true,
    visual: "path",
  },
  {
    title: "Short-Form Video",
    slug: "short-form-video",
    timeframe: "2021–2024",
    summary:
      "Design for a short-form video discovery experience, focused on frictionless browsing and creator discoverability.",
    visual: "video",
  },
  {
    title: "Agency Work",
    slug: "agency-work",
    timeframe: "Pre-2021",
    summary: "A selection of earlier work spanning product, brand, and digital experiences.",
    visual: "archive",
  },
];
