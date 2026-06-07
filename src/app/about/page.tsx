import { Card } from "../_components/card";
import { Eyebrow } from "../_components/eyebrow";
import { useDocumentTitle } from "../_lib/use-document-title";

const VALUES = [
  {
    title: "Craft",
    body: "I sweat the details others skip — accessibility, performance, and the small interactions that make software feel considered. The polish is the product.",
    tone: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Clarity",
    body: "I write code and interfaces the next person can understand on day one. The best solution is usually the simplest one that holds up under pressure.",
    tone: "from-blue-500 to-sky-400",
  },
  {
    title: "Curiosity",
    body: "I like learning how things work, from a new framework to a design constraint. Every project is a chance to get a little sharper at the craft.",
    tone: "from-fuchsia-500 to-fuchsia-400",
  },
];

export default function About() {
  useDocumentTitle("About");
  return (
    <>
      <section className="px-safe-lg mx-auto max-w-6xl py-20">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          A developer who designs, and a designer who ships.
        </h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5 text-lg text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Jason Ruesch, a software developer and designer who
              builds for the web. I spend my days turning ideas and designs into
              fast, accessible, maintainable applications — and I genuinely
              enjoy every layer of that work, from the data model to the last
              pixel.
            </p>
            <p>
              My background sits at the intersection of engineering and design,
              which means I&apos;m equally comfortable architecting a component
              library, untangling a gnarly state-management problem, or refining
              a layout until it feels effortless. I care about the people who
              use what I build and the people who maintain it after me.
            </p>
            <p>
              When I&apos;m not shipping product work, I&apos;m usually
              exploring new tools, sharpening my eye for design, or tidying up
              the patterns that made a project go smoothly so the next one goes
              even better.
            </p>
          </div>
          <aside
            aria-label="Jason Ruesch at a glance"
            className="rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              <img
                src="/logo.svg"
                alt=""
                aria-hidden="true"
                className="h-[1em] w-[1em]"
              />
              <span className="font-display font-bold">Jason Ruesch</span>
            </div>
            <div className="mt-6 space-y-1 border-t border-zinc-200 pt-6 text-base font-medium tracking-tight text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
              <p>Frontend engineering.</p>
              <p>Design systems.</p>
              <p>End-to-end craft.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="px-safe-lg mx-auto max-w-6xl py-20">
          <Eyebrow>Values</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            What I care about.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <Card key={v.title} accent={v.tone}>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {v.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
