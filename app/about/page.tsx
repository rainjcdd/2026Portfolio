import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Shu Tang",
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-content px-gutter py-section-mobile lg:py-section">
      <h1 className="font-display text-hero font-extrabold">About</h1>
      <p className="mt-6 text-body text-text-muted">More about me, coming soon.</p>
      <Link href="/" className="mt-8 inline-flex text-body underline underline-offset-4">
        Back to home <span aria-hidden="true" className="ml-2">→</span>
      </Link>
    </section>
  );
}
