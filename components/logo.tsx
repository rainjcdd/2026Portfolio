import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="ST — home"
      className="site-logo relative isolate overflow-hidden pointer-events-auto inline-flex h-10 w-10 items-center justify-center bg-text text-small font-bold tracking-[-0.04em] text-bg"
    >
      <span className="sr-only">ST</span>
    </Link>
  );
}
