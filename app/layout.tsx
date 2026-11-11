import type { Metadata } from "next";
import localFont from "next/font/local";

import { Analytics } from "@/components/analytics";
import { LayoutShell } from "@/components/layout-shell";

import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

const manrope = localFont({
  src: "./fonts/manrope-latin-800.woff2",
  variable: "--font-manrope",
  weight: "800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UX Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <LayoutShell>{children}</LayoutShell>
        <Analytics />
      </body>
    </html>
  );
}
