# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev                  # Start dev server on port 3001
npm run build                # Static export to out/ (output: export; for GitHub Pages)
npm run start                # Preview out/ locally (after build; static server port 3001)
npm run lint                 # ESLint (next config)
npm run typecheck            # TypeScript type check (no emit)
npm run test:a11y:components # Jest + jest-axe a11y tests for individual components (tests/components/)
npm run test:a11y:e2e        # Playwright + axe-core a11y tests against rendered routes (tests/a11y/)
npm run test:quality         # lint + typecheck + both a11y suites
```

**Testing** — there are no functional/unit tests; testing is focused on accessibility:
- `tests/components/*.a11y.test.tsx` — Jest + `jest-axe`, renders individual components in jsdom (config: `jest.config.mjs`).
- `tests/a11y/routes.spec.ts` — Playwright + `@axe-core/playwright`, runs a WCAG scan against each route listed in `routesToTest`. New pages should be added to that list.
- `tests/a11y/mobile-menu.spec.ts` — Playwright a11y check for the mobile nav drawer's open state.
- Playwright tests require Chromium to be installed once via `npx playwright install chromium`.

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
