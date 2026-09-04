export function Footer() {
  return (
    <footer className="bg-bg-inverse text-bg">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-gutter py-8 text-small sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ST</p>
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
