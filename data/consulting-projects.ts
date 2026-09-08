export type ConsultingProject = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export const consultingProjects: ConsultingProject[] = [
  {
    slug: "unilever",
    title: "Unilever",
    subtitle: "Design Strategy, Creative Direction, UX",
    image: "/images/consulting/unilever.png",
    href: "/portfolio/unilever",
  },
  {
    slug: "mercedes-benz",
    title: "Mercedes-Benz Canada",
    subtitle: "Experience Design, Research",
    image: "/images/consulting/mercedes-benz.png",
    href: "/portfolio/mercedes-benz",
  },
  {
    slug: "mrs-meyer",
    title: "Mrs. Meyer's Clean Day (SCJ)",
    subtitle: "Experience Design, Research",
    image: "/images/consulting/mrs-meyer.png",
    href: "/portfolio/mrs-meyer",
  },
  {
    slug: "frontier-coop",
    title: "Frontier Co-op",
    subtitle: "Multi-brand, Experience Design",
    image: "/images/consulting/frontier-coop.png",
    href: "/portfolio/frontier-coop",
  },
  {
    slug: "plexus",
    title: "Plexus",
    subtitle: "Experience Design, Back-office System, Research",
    image: "/images/consulting/plexus.png",
    href: "/portfolio/plexus",
  },
];
