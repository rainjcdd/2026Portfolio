import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";

type LayoutShellProps = {
  children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <div className="mx-auto flex max-w-content items-start justify-between px-gutter py-6 sm:items-center sm:py-8">
          <Logo />
          <Nav />
        </div>
      </header>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
