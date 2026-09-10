import Link from "next/link";

export default function WorkNotFound() {
  return (
    <div className="mx-auto flex min-h-[65svh] max-w-content flex-col justify-center px-gutter py-section-mobile lg:py-section">
      <p className="mb-4 text-small uppercase tracking-[0.12em] text-text-muted">404</p>
      <h1 className="text-h2">Project not found.</h1>
      <p className="mt-5 max-w-text-measure text-body text-text-muted">
        This case study does not exist or may have moved.
      </p>
      <Link href="/work" className="mt-9 inline-flex w-fit rounded-full bg-text px-5 py-2 text-body text-white">
        View all work
      </Link>
    </div>
  );
}
