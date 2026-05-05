# Accessibility checklist (WCAG 2.2 AA)

Use this checklist before merging major UI or content changes.

## 1) Keyboard and focus behavior

- [ ] Verify complete page navigation with keyboard only (`Tab`, `Shift+Tab`, `Enter`, `Space`, arrow keys as needed).
- [ ] Ensure focus indicators are always visible and high contrast.
- [ ] Confirm tab order follows the visual/logical reading order.
- [ ] On mobile menu/drawer flows, confirm:
  - [ ] Focus moves into the menu when it opens.
  - [ ] Focus does not escape to background content while open.
  - [ ] `Escape` closes the menu.
  - [ ] Focus returns to the opener button after close.

## 2) Landmarks and semantic structure

- [ ] Ensure each page has one clear primary heading (`h1`).
- [ ] Verify heading levels are in logical order.
- [ ] Confirm landmark navigation works (`header`, `main`, `footer`, navigation regions).
- [ ] Check link text is meaningful out of context.

## 3) Screen reader pass

- [ ] Navigate by headings and landmarks with a screen reader (NVDA/VoiceOver).
- [ ] Confirm icon buttons/controls have meaningful accessible names.
- [ ] Validate tables announce headers correctly and remain understandable.
- [ ] Ensure status or state changes are announced when relevant.

## 4) Color and contrast

- [ ] Validate text contrast in hero/spotlight areas with image overlays.
- [ ] Validate small or muted text (footer and metadata text) against WCAG AA thresholds.
- [ ] Confirm contrast remains sufficient in both desktop and mobile layouts.

## 5) Motion and reduced-motion preferences

- [ ] Enable reduced-motion at OS/browser level and verify motion-heavy sections reduce animation.
- [ ] Ensure no essential information is conveyed only through animation.

## 6) Navigation and interaction details

- [ ] Validate hash/anchor links move users to meaningful targets.
- [ ] Confirm the "Back to top" pattern behaves consistently and does not create focus confusion.
- [ ] Ensure all interactive elements are reachable and operable on touch + keyboard.

## 7) Automated checks required

Run these before merge:

```bash
npm run lint
npm run typecheck
npm run test:a11y:components
npm run test:a11y:e2e
```

If a known accessibility issue cannot be fixed in the same PR:

- [ ] Create a follow-up issue with scope and remediation date.
- [ ] Document the temporary exception in the PR description.
