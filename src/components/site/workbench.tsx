import { Section, Tag } from "@/components/site/section";
import { skillGroups } from "@/content/cv";

const pipeline = [
  "DATASET",
  "PREPROCESS",
  "REPRESENT",
  "MODEL",
  "EXPERIMENT",
  "XAI",
  "VALIDATE",
  "PUBLISH",
];

export function ResearchWorkbench() {
  return (
    <>
      <Section
        eyebrow="Research pipeline"
        title="From evidence to an engineered result"
        description="A disciplined workflow for data-driven research and model development."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="research-module bg-surface p-6">
            <p className="font-serif text-2xl leading-snug">
              Scientific computing is a process: data, method, experiment,
              validation, and clear reporting.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Each stage is designed to make model decisions and research claims
              more accountable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {pipeline.map((step, index) => (
              <div key={step} className="pipeline-step">
                <span className="block text-accent">0{index + 1}</span>
                <span className="mt-2 block">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section
        id="engineering"
        tone="surface"
        eyebrow="Engineering"
        title="Tools applied across research and delivery"
        description="Technology clusters drawn from documented projects, data workflows, and development experience."
      >
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.name} className="bg-card p-5">
              <p className="font-mono text-[.65rem] tracking-[.14em] text-accent">
                {group.name}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 border border-border text-center font-mono text-[.65rem] tracking-[.1em] text-muted-foreground sm:grid-cols-7">
          {[
            "CODE",
            "GIT",
            "BUILD",
            "TEST",
            "DEPLOY",
            "AUTOMATE",
            "ITERATE",
          ].map((item) => (
            <span
              key={item}
              className="border-b border-r border-border px-2 py-3 last:border-r-0 sm:border-b-0"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
