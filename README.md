# ClinRS AI — Corporate website

Public marketing site for [ClinRS AI](https://clinrs.ai): clinical research tooling, patient-centric design, security, and AI-assisted delivery. Built with the [Next.js App Router](https://nextjs.org/docs/app).

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | [React](https://react.dev/) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3 |
| Lint | [ESLint](https://eslint.org/) with [`eslint-config-next`](https://www.npmjs.com/package/eslint-config-next) |

## Repository layout

```
app/
  layout.tsx      # Root layout, site metadata (title, Open Graph, canonical base URL)
  page.tsx        # Home page (hero, feature columns, contact footer)
  globals.css     # Tailwind layers + global styles
components/
  SiteLayout.tsx  # Page shell (background, max-width container)
  SiteHeader.tsx  # Brand header (shared component; wire in as needed)
public/
  logo.svg        # Logo and other static assets
```

## Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** (ships with Node)

## Local development

```bash
npm install
npm run dev
```

The dev server listens on **port 3001** ([http://localhost:3001](http://localhost:3001)).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Run the production build locally |
| `npm run lint` | ESLint across the project |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |

## Continuous integration

[`.github/workflows/gitleaks.yml`](.github/workflows/gitleaks.yml) runs **[Gitleaks](https://github.com/gitleaks/gitleaks)** on push, pull requests, a weekly schedule, and manual dispatch to reduce the risk of committing secrets.

**GitHub Organizations:** Gitleaks-Action expects a free org license key in the `GITLEAKS_LICENSE` repository or organization secret. [Request a key](https://forms.gle/8e8xPF72nS3TiY7G9) and see the comments in the workflow file for details. Personal-account repositories do not require that secret.

## Configuration and secrets

- Do **not** commit API keys, tokens, or `.env` files with real values. Ignored patterns include `.env`, `.env.local`, and `.env.*.local` (see [`.gitignore`](.gitignore)).
- Site URL and sharing metadata are set in `app/layout.tsx` (`metadataBase`, Open Graph).

## License

### Source code

The application **source code in this repository** is licensed under the [MIT License](LICENSE).

`"private": true` in `package.json` only means the package is **not published to the npm registry**; it does not restrict making the GitHub repository public.

### Trademarks and branding

The **MIT License applies to the code**, not to the ClinRS AI company name, product name, or logos. Third parties who reuse the code **must not** imply your endorsement or confuse their product with ClinRS AI. **ClinRS AI**, **ClinRS**, and related marks may be trademarks of ClinRS Software LLC;

### Third-party and generated assets

- **npm dependencies** (Next.js, React, etc.) are licensed under their own terms; see each package’s `LICENSE` under `node_modules/` after install.
- **Images** created with **Google Gemini** are **not** covered by the MIT license above. Use and redistribution of those images must follow **Google’s applicable terms** for the product you used (for example [Google Terms of Service](https://policies.google.com/terms) and the terms for [Gemini / Google AI](https://ai.google.dev/gemini-api/terms) or consumer Gemini apps, as applicable). Google’s terms can change; **review the current version** before you publish.
