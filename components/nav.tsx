"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Me", href: "/me" },
] as const;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const linkedInLink = (
    <a
      className="site-nav-social"
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn (opens in a new tab)"
      onClick={() => setIsOpen(false)}
    >
      <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM20.75 13.27c0-3.54-1.89-5.19-4.42-5.19a3.82 3.82 0 0 0-3.46 1.9V8.25H9.62V20h3.25v-5.82c0-1.53.29-3.02 2.19-3.02 1.87 0 1.89 1.75 1.89 3.12V20h3.25l.55-6.73Z" />
      </svg>
      <svg
        aria-hidden="true"
        className="ml-1 h-3 w-3"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
    </a>
  );

  return (
    <nav className="pointer-events-auto relative" aria-label="Primary navigation">
      <button
        type="button"
        className="mobile-nav-toggle inline-flex h-10 w-10 items-center justify-center rounded-full sm:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="relative h-3.5 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <ul
        id="mobile-navigation"
        className={`mobile-nav-menu absolute right-0 top-12 flex min-w-40 flex-col items-end gap-1 rounded-2xl p-3 text-body transition-all duration-300 sm:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
      >
        {navigation.map((item) => (
          <li key={item.href}>
            <Link className="site-nav-link" href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>{linkedInLink}</li>
      </ul>

      <ul className="hidden items-center gap-4 text-body sm:flex">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link className="site-nav-link" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>{linkedInLink}</li>
      </ul>
    </nav>
  );
}
