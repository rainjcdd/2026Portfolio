import Link from "next/link";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Me", href: "/me" },
] as const;

export function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col items-end gap-2 text-body sm:flex-row sm:items-center sm:gap-8">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link className="site-nav-link hover:text-accent" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            className="site-nav-link hover:text-accent"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
