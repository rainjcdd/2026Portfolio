import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="ST — home"
      className="inline-flex h-10 w-10 items-center justify-center border border-text bg-text text-small font-bold tracking-[-0.04em] text-bg"
    >
      ST
    </Link>
  );
}
