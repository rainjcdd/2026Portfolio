import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        bg: "#FAFAF9",
        "bg-inverse": "#111111",
        text: "#111111",
        "text-muted": "#6B6B6B",
        accent: "#3B5BFF",
        border: "#E5E5E3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.25rem, 6vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }],
        h2: ["clamp(1.75rem, 4vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 2.5vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" }],
        body: ["clamp(0.9375rem, 1.5vw, 1rem)", { lineHeight: "1.6" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
      },
      spacing: {
        unit: "0.5rem",
        gutter: "clamp(1.5rem, 2.8vw, 4rem)",
        "section-mobile": "4rem",
        section: "7.5rem",
      },
      maxWidth: {
        content: "108rem",
        "text-measure": "45rem",
      },
      gridTemplateColumns: {
        layout: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
