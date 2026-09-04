import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { LayoutShell } from "@/components/layout-shell";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
