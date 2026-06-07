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
    tone: "from-emerald-500 to-emerald-400",
  },
  {
    name: "Web Application",
    tagline: "A full-featured product, front to back.",
    body: "A production web application covering the full frontend stack — authentication, data fetching, state management, and a polished, responsive UI built to scale with the team behind it.",
    tech: ["React", "TypeScript", "REST / GraphQL", "Testing"],
    tone: "from-blue-500 to-sky-400",
  },
];
