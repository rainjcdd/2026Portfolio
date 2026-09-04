# UX Portfolio — Project Spec (v1)

Fake-content build for tool testing / workflow practice. Optimize for clean structure and reusable patterns over content polish.

---

## 1. Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Fonts**: Google Fonts via `next/font`
- **Deployment target**: Vercel (later, not required for this session)
- **Content**: hardcoded fake data in a `/data` folder (no CMS) — keeps it simple and editable later

---

## 2. Design System

### Color
Monochrome base + one accent, minimal palette:

| Token | Value | Use |
|---|---|---|
| `bg` | `#FAFAF9` | page background |
| `bg-inverse` | `#111111` | dark sections / footer |
| `text` | `#111111` | primary text |
| `text-muted` | `#6B6B6B` | secondary text |
| `accent` | `#3B5BFF` | links, hover states, interactive accents |
| `border` | `#E5E5E3` | dividers, card borders |

### Typography
- **Display / Headings**: `Inter` (or `Neue Montreal`-style geometric sans if available) — tight tracking, bold weight for hero
- **Body**: same family, regular weight, generous line-height (1.6)
- **Scale**: 
  - H1 / Hero: 64px desktop / 36px mobile
  - H2: 40px / 28px
  - H3: 24px / 20px
  - Body: 16px / 15px
  - Small/meta: 13px

### Spacing & Grid
- 8px base unit
- Max content width: 1200px, centered, 24px side padding on mobile
- 12-column grid on desktop, stacks to single column under 768px
- Section vertical rhythm: 120px desktop / 64px mobile between major sections

### Breakpoints
- Mobile: < 640px
- Tablet: 640–1024px
- Desktop: > 1024px

### Motion Language
- Page transitions: subtle fade + 8px upward slide, 300ms ease-out
- Hover on project cards: image scale 1.03, 400ms ease
- Scroll reveals: fade + 16px slide-up on section entry, staggered for lists (60ms delay between items)
- Nav link hover: underline draw-in, 200ms
- Keep it restrained — motion should feel precise, not decorative

---

## 3. Global Components

- **Logo** — "ST" monogram, top-left, links to home
- **Nav** — Work / Me / LinkedIn ↗ (external, opens new tab), top-right, collapses to simple stacked menu on mobile (no hamburger icon needed at this scale — 3 items)
- **Footer** — minimal: copyright, LinkedIn ↗ repeat, maybe email link
- **Layout shell** — persistent nav + footer wrapping all pages

---

## 4. Site Map & Pages

### Home (`/`)
- Full-screen interactive hero
  - **Concept for v1**: cursor-reactive dot/line grid on the `bg` background — dots subtly shift toward cursor position (canvas or SVG + JS, lightweight). Swappable later.
  - Positioning statement overlaid: **"Curiosity. Aesthetics. Integration."**
- Below fold: featured work grid (3–4 project cards, image + title + one-liner), links into `/work`

### Work (`/work`)
- Page header: `WORK`
- Grouped by era, each group is a simple list/grid:
  - **2024 — 2026**
    - TrackPoint
    - AI-Powered Design System
    - HAPIO App *(mark as "vibe coded" — small tag/badge)*
  - **2021 — 2024**
    - Navigation Redesign
    - Short-Form Video
  - **2021 & Before**
    - Agency Work (single grouped entry, expandable or single card)
- Each item → generic `/work/[slug]` template page (all slugs point to same template structure with different fake content)

### Work detail (`/work/[slug]`)
Generic case study template:
- Hero image + project title + one-line summary
- Meta row: role, timeframe, tools (fake values)
- Sections: Problem → Process → Outcome (fake paragraph content each)
- 2–3 placeholder image blocks
- Next project link at bottom

### Me (`/me`)
- Portrait placeholder (image block, can be gray/geometric placeholder)
- Short bio paragraph (fake)
- Interactive career timeline shell — horizontal or vertical scroll timeline, 5–6 entries, click/hover to expand detail (build shell first, can be static list styled as timeline if time-constrained)
- Education section (2 fake entries)
- Resume download button (links to placeholder PDF or dead link for now)

---

## 5. Fake Content

### Positioning statement (Home)
> Curiosity. Aesthetics. Integration.

### Bio (Me page)
> I'm a product designer working at the intersection of systems thinking and craft. My practice spans interaction design, design systems, and increasingly, AI-assisted workflows — I'm interested in how tools change not just what we build, but how we think while building it.

### Work items (fake summaries)

**TrackPoint** — *2024–2026*
> A field-operations tracking tool redesigned for clarity under pressure — simplifying a dense data interface into something usable in the field, one-handed, in under 3 seconds.

**AI-Powered Design System** — *2024–2026*
> An internal design system augmented with AI tooling to auto-generate compliant component variants, cutting design-to-dev handoff time significantly.

**HAPIO App** *(vibe coded)* — *2024–2026*
> A vibe-coded exploration app built end-to-end with AI coding tools — a live test of how far AI-assisted design-to-code workflows can go.

**Navigation Redesign** — *2021–2024*
> A full IA and navigation overhaul for a multi-product platform, reducing average task completion time across core user flows.

**Short-Form Video** — *2021–2024*
> Design for a short-form video discovery experience, focused on frictionless browsing and creator discoverability.

**Agency Work (Pre-2021)** — grouped placeholder entry, single card linking to a generic "earlier work" note.

### Career timeline (Me page, fake)
- 2026 — Senior Product Designer, [Company]
- 2024 — Product Designer, [Company]
- 2022 — Product Designer, [Agency]
- 2020 — Junior Designer, [Agency]
- 2019 — BA/BFA Design, [University]

### Education
- [University Name] — BA/BFA in Design, 2019
- [Certification/Program] — UX Specialization, 2021

---

## 6. Build Order (for Codex, incremental commits after each step)

1. Scaffold Next.js + Tailwind project, set up design tokens (colors/type/spacing in `tailwind.config`)
2. Build global layout shell: nav, footer, logo, page wrapper
3. Build Home page: static layout first, then layer in interactive hero
4. Build Work page: grouped list, static (no interactivity yet)
5. Build `/work/[slug]` generic template, wire up fake data so all Work items route correctly
6. Build Me page: portrait, bio, education, resume button (timeline as static list for now)
7. Responsive pass across all pages (test at 375px, 768px, 1440px)
8. Add motion: scroll reveals, hover states, nav underline, page transitions
9. Upgrade Me page timeline to interactive shell
10. Final review pass against this spec

Commit after each numbered step with a message describing what was done.

---

## 7. Explicitly Out of Scope (v1)

- Real content/images
- CMS or data fetching
- Actual resume PDF
- SEO/meta tags polish
- Analytics
- Real deployment (decide later)
