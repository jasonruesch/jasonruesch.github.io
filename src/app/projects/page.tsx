import { AppLink } from "../_components/app-link";
import { Card } from "../_components/card";
import { Eyebrow } from "../_components/eyebrow";
import { GitHubIcon } from "../_components/icons";
import { useDocumentTitle } from "../_lib/use-document-title";
import { PROJECTS } from "./_lib/projects";

export default function Projects() {
  useDocumentTitle("Projects");
  return (
    <section className="px-safe-lg mx-auto max-w-6xl py-20">
      <Eyebrow>Projects</Eyebrow>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        Selected work.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        A few things I&apos;ve built and the tools behind them. Want to see more
        or talk about a project? <AppLink to="/contact">Get in touch.</AppLink>
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card key={project.name} accent={project.tone}>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {project.name}
            </h2>
            <p className="text-brand-700 dark:text-brand-300 mt-1 text-sm font-medium">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {project.body}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {(project.live || project.repo) && (
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                {project.live && (
                  <AppLink href={project.live} variant="external">
                    Visit site
                  </AppLink>
                )}
                {project.repo && (
                  <AppLink
                    href={project.repo}
                    variant="external"
                    icon={<GitHubIcon />}
                  >
                    Source
                  </AppLink>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
