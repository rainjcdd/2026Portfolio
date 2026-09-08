import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { consultingProjects } from "@/data/consulting-projects";

type ConsultingProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return consultingProjects.map(({ slug }) => ({ slug }));
}

export default async function ConsultingProjectPage({ params }: ConsultingProjectPageProps) {
  const { slug } = await params;
  const project = consultingProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="min-h-[70svh] bg-bg px-gutter py-section-mobile lg:py-section">
      <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden bg-border">
            <Image
              src={project.image}
              alt={`${project.title} project thumbnail`}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="mb-5 text-small uppercase tracking-[0.12em] text-text-muted">Design Consulting</p>
          <h1 className="font-display text-hero font-extrabold">{project.title}</h1>
          <p className="mt-6 max-w-[36rem] text-body text-text-muted">{project.subtitle}</p>
          <p className="mt-10 text-body">Case study coming soon.</p>
          <Link href="/#consulting-title" className="mt-10 inline-flex text-body font-medium hover:text-accent">
            Back to projects <span aria-hidden="true">&nbsp;←</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
