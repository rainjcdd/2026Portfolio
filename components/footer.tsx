import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-20 bg-bg-inverse text-bg">
      <div className="flex w-full flex-col gap-4 px-gutter py-8 text-small sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ST</p>
        <Link href="/work/ai-powered-design-system" className="w-fit hover:text-accent">AI-enabled DSM</Link>
        <a
          className="w-fit hover:text-accent"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
