import { AppLink } from "./app-link";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="px-safe-lg pb-safe mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center dark:text-zinc-400">
        <p>&copy; {year} Jason Ruesch. Built with care.</p>
        <div className="flex items-center gap-4">
          <AppLink
            href="https://github.com/jasonruesch"
            variant="external"
            icon={<GitHubIcon />}
          >
            GitHub
          </AppLink>
          <AppLink
            href="https://www.linkedin.com/in/jasonruesch"
            variant="external"
            icon={<LinkedInIcon />}
          >
            LinkedIn
          </AppLink>
        </div>
      </div>
    </footer>
  );
}
