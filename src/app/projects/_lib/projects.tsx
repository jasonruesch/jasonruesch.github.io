export interface Project {
  /** Project name shown as the card heading. */
  name: string;
  /** One-line headline shown under the name. */
  tagline: string;
  /** Longer description of the project. */
  body: string;
  /** Technologies / tools used, shown as tags. */
  tech: string[];
  /** Optional link to the live site. */
  live?: string;
  /** Optional link to the source repository. */
  repo?: string;
  /** Optional array of other links related to the project. */
  otherLinks?: { icon?: React.ReactNode; label: string; url: string }[];
  /** Tailwind gradient classes for the card's accent bar. */
  tone: string;
}

// Placeholder portfolio entries — replace with your real projects, links, and
// copy. The shape (name / tagline / body / tech / links / tone) is what the
// Projects page renders.
export const PROJECTS: Project[] = [
  {
    name: "Personal Website",
    tagline: "This site — a fast, accessible portfolio.",
    body: "A React 19 + Vite single-page app with file-based routing, a Tailwind v4 design system, light/dark theming, and PWA support. Deployed to GitHub Pages via GitHub Actions.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repo: "https://github.com/jasonruesch/jasonruesch.github.io",
    tone: "from-brand-500 via-fuchsia-500 to-accent-500",
  },
  {
    name: "Design System",
    tagline: "Atelier — a reusable component library and token set.",
    body: "An accessible, themeable component library built from design tokens: Radix UI primitives styled with Tailwind v4, light/dark and multi-brand theming via CSS variables, and components documented in Storybook and published to npm. It's the foundation the other apps here are built on.",
    tech: ["React", "TypeScript", "Design Tokens", "Storybook"],
    live: "https://jasonruesch.dev/design-system",
    repo: "https://github.com/jasonruesch/design-system",
    tone: "from-emerald-500 to-emerald-400",
  },
  {
    name: "Web Application",
    tagline: "TaskFlow — frontend depth, done right.",
    body: "A production-style task & project manager that goes deep on the front end: filesystem routing, a clean split between server cache and client UI state, optimistic updates, full keyboard and screen-reader accessibility, and a themeable, responsive interface built on the design system — covered by unit, component, and end-to-end tests.",
    tech: ["React", "TypeScript", "State Management", "Testing"],
    live: "https://jasonruesch.dev/web-application",
    repo: "https://github.com/jasonruesch/web-application",
    tone: "from-blue-500 to-sky-400",
  },
  {
    name: "Full-Stack Platform",
    tagline: "BookmarkVault — an end-to-end product with a real backend.",
    body: "A full-stack bookmark manager: save links into collections, tag and search them, and share collections publicly. A Fastify + Prisma + PostgreSQL backend serves both REST and GraphQL with JWT auth, deployed end to end on Fly.io — no mocks.",
    tech: ["Fastify", "Prisma", "PostgreSQL", "GraphQL"],
    live: "https://bookmarkvault.fly.dev",
    repo: "https://github.com/jasonruesch/full-stack-platform",
    tone: "from-amber-500 to-orange-400",
  },
  {
    name: "AI Assistant",
    tagline: "SourceSage — an LLM-powered app, built for real use.",
    body: "An AI-integrated application with streaming responses, tool use, and retrieval-augmented context — wrapping a large language model in a fast, accessible interface built on the design system.",
    tech: ["React", "TypeScript", "LLMs", "Streaming"],
    live: "https://sourcesage.fly.dev",
    repo: "https://github.com/jasonruesch/ai-assistant",
    tone: "from-violet-500 to-purple-400",
  },
  {
    name: "Developer Tooling",
    tagline: "Cobble — tooling that smooths the developer workflow.",
    body: "A command-line tool and a set of small, focused libraries that automate repetitive developer tasks — scaffolding code from templates, running project health checks, and cutting releases from conventional commits — with fast, clear, NO_COLOR-aware output. Built as a pnpm + Turborepo monorepo and published to npm.",
    tech: ["Node.js", "TypeScript", "CLI", "Automation"],
    repo: "https://github.com/jasonruesch/developer-tooling",
    tone: "from-rose-500 to-pink-400",
  },
  {
    name: "Real-Time Collaboration",
    tagline: "Coalesce — a multi-user whiteboard where edits never collide.",
    body: "A shared whiteboard where everyone edits the same canvas at once — shapes, sticky notes, and freehand drawing with live cursors and presence. Concurrent edits merge conflict-free via CRDTs, so the board stays consistent even after a client goes offline and reconnects, all synced over WebSockets and built on the design system.",
    tech: ["React", "TypeScript", "WebSockets", "CRDTs"],
    live: "https://coalesce.fly.dev",
    repo: "https://github.com/jasonruesch/real-time-collaboration",
    tone: "from-yellow-500 to-amber-400",
  },
  {
    name: "Pinochle: Two-Handed",
    tagline: "A native card duel for iPhone, iPad, Mac, and Apple TV.",
    body: "A Unity game bringing the classic two-handed pinochle rules to Apple platforms: three AI opponents ranging from an easygoing teacher to a card-counting shark, Game Center quick match and friend invites, and SharePlay to deal in over a FaceTime call. Full controller support and a focus-based interface make it at home on the living-room screen. Currently in App Store review.",
    tech: ["Unity", "C#", "Game Center", "SharePlay"],
    live: "https://jasonruesch.dev/pinochle/",
    tone: "from-teal-500 to-emerald-400",
    // otherLinks: [
    //   {
    //     icon: <AppleIcon />,
    //     label: "App Store",
    //     url: "https://apps.apple.com/pinochle-two-handed/id0000000000",
    //   },
    // ],
  },
  {
    name: "@evolonix/react-router-next",
    tagline: "Next.js-style filesystem routing for React Router 7.",
    body: "A published npm package that brings Next.js App Router conventions to React Router 7. A Vite plugin discovers your app/ route tree — nested layouts, route groups, and dynamic segments — and generates per-route typed params, so useRouteParams and link generation are fully type-safe. Ships a CLI so non-Vite bundlers (Rsbuild, Webpack) get the same types in prebuild or CI.",
    tech: ["React Router", "TypeScript", "Vite Plugin", "Type Generation"],
    live: "https://evolonix.com/react-router-next",
    repo: "https://github.com/evolonix/react-router-next/tree/main/packages/react-router-next",
    tone: "from-cyan-500 to-teal-400",
    // NOTE: this RR-next trio renders adjacently in the 2-col grid — keep these
    // three accents in distinct hue families (cyan / indigo / lime) so they
    // don't read as one block.
  },
  {
    name: "create-react-router-next",
    tagline: "Scaffold a routed React Router 7 app in seconds.",
    body: "An npm-create scaffolder that spins up a new React Router 7 app preconfigured with @evolonix/react-router-next — wiring up the Vite plugin, an example app/ route tree, and TypeScript so you can start building routes immediately instead of assembling boilerplate.",
    tech: ["CLI", "TypeScript", "Scaffolding", "React Router"],
    live: "https://www.npmjs.com/package/create-react-router-next",
    repo: "https://github.com/evolonix/react-router-next/tree/main/packages/create-react-router-next",
    tone: "from-indigo-500 to-blue-400",
  },
  {
    name: "eslint-plugin-react-router-next",
    tagline: "Lint rules that keep your route files honest.",
    body: "An ESLint plugin that enforces the filesystem-routing conventions of @evolonix/react-router-next — catching misnamed route files, invalid dynamic segments, and other convention slip-ups in the editor and CI, before they ever reach the router.",
    tech: ["ESLint", "TypeScript", "Linting", "React Router"],
    live: "https://www.npmjs.com/package/eslint-plugin-react-router-next",
    repo: "https://github.com/evolonix/react-router-next/tree/main/packages/eslint-plugin-react-router-next",
    tone: "from-lime-500 to-green-400",
  },
];
