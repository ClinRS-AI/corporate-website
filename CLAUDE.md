# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 3001
npm run build      # Static export to out/ (output: export; for GitHub Pages)
npm run start      # Preview out/ locally (after build; static server port 3001)
npm run lint       # ESLint (next config)
npm run typecheck  # TypeScript type check (no emit)
```

There are no tests currently in this project.

## Architecture

Next.js 16 App Router site with React 19, TypeScript (strict), and Tailwind CSS v3.

**Routing** — uses the `app/` directory (App Router). `app/layout.tsx` is the root layout; it wraps all pages in `SiteLayout` and sets site-wide `<Metadata>`.

**Component structure:**
- `components/SiteLayout.tsx` — full-page shell: gradient background, noise texture overlay, centered `max-w-3xl` column, and a decorative top bar. All pages render inside its `<main>`.
- `components/SiteHeader.tsx` — standalone header component (not currently used in layout; available for use on pages).
- `app/page.tsx` — the single home page. Contains a hero section, a 3-column feature card grid, and a contact footer with a placeholder form (`#contact` anchor).

**Styling** — Tailwind utility classes only; `globals.css` sets base resets and body defaults. Config in `tailwind.config.cjs` scans `app/**` and `components/**`.

**Images** — served from `public/`; use Next.js `<Image>` component (already used for the logo).

**TypeScript** — `allowJs: false`, `strict: true`, `moduleResolution: bundler`. Next.js env types path is `.next/types/**/*.ts` and `.next/dev/types/**/*.ts`.
