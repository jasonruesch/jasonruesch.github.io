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
    tagline: "A reusable component library and token set.",
    body: "An accessible, themeable component library built from design tokens — documented for engineers and designers alike, with a focus on consistency and developer experience.",
    tech: ["React", "TypeScript", "Design Tokens", "Storybook"],
    live: "https://jasonruesch.dev/design-system",
    repo: "https://github.com/jasonruesch/design-system",
    tone: "from-emerald-500 to-emerald-400",
  },
  {
    name: "Web Application",
    tagline: "A full-featured product, front to back.",
    body: "A production web application covering the full frontend stack — authentication, data fetching, state management, and a polished, responsive UI built to scale with the team behind it.",
    tech: ["React", "TypeScript", "REST / GraphQL", "Testing"],
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
    tagline: "Tooling that smooths the developer workflow.",
    body: "A command-line tool and supporting libraries that automate repetitive developer tasks — from code generation to release pipelines — with a focus on speed, clear output, and great ergonomics.",
    tech: ["Node.js", "TypeScript", "CLI", "Automation"],
    tone: "from-rose-500 to-pink-400",
  },
];
