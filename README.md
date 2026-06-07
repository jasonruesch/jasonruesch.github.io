# jasonruesch.github.io

Personal website for **Jason Ruesch** — software developer and designer. A fast,
accessible single-page app deployed to GitHub Pages.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 8** for dev/build tooling
- **Tailwind CSS v4** (CSS-first `@theme` tokens in [`src/index.css`](src/index.css) — no config file)
- **React Router 7** with file-based routing via [`@evolonix/react-router-next`](https://www.npmjs.com/package/@evolonix/react-router-next)
- **ESLint** + **Prettier** for linting and formatting

## Getting started

Requires the Node version pinned in [`.nvmrc`](.nvmrc) (Node 24). With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
npm install
npm run dev
```

The dev server prints a local URL (default http://localhost:5173).

## Scripts

| Script                    | What it does                                           |
| ------------------------- | ------------------------------------------------------ |
| `npm run dev`             | Start the Vite dev server with HMR                     |
| `npm run build`           | Type-check (`tsc -b`) and build to `dist/`             |
| `npm run preview`         | Serve the production build locally                     |
| `npm run lint`            | Run ESLint                                             |
| `npm run format`          | Format all files with Prettier                         |
| `npm run format:check`    | Verify formatting (CI gate)                            |
| `npm run typegen`         | Generate route types (runs automatically via prebuild) |
| `npm run generate:splash` | Regenerate the iOS PWA splash screens                  |

## Routing

Routes are file-based (Next.js-style) under [`src/app/`](src/app/): a folder with a
`page.tsx` becomes a route, `layout.tsx` wraps its children, and `not-found.tsx`
handles 404s. Current pages:

- `/` — Home ([`src/app/page.tsx`](src/app/page.tsx))
- `/about` — About ([`src/app/about/page.tsx`](src/app/about/page.tsx))
- `/projects` — Projects ([`src/app/projects/page.tsx`](src/app/projects/page.tsx)), driven by the data in [`src/app/projects/_lib/projects.ts`](src/app/projects/_lib/projects.ts)
- `/contact` — Contact ([`src/app/contact/page.tsx`](src/app/contact/page.tsx))

Reusable UI primitives live in [`src/app/_components/`](src/app/_components/) and
shared hooks/utilities in [`src/app/_lib/`](src/app/_lib/).

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which installs dependencies, runs `format:check` + `lint` + `build`, and publishes
`dist/` to GitHub Pages using the official Pages actions. The workflow can also be run
manually from the Actions tab (`workflow_dispatch`).

[`public/404.html`](public/404.html) plus a redirect snippet in [`index.html`](index.html)
implement the [SPA fallback for GitHub Pages](https://github.com/rafgraph/spa-github-pages)
so deep links resolve to client-side routes.

Dependencies and GitHub Actions are kept up to date weekly via
[Dependabot](.github/dependabot.yml).
