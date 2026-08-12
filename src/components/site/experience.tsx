import { ExternalLink } from "lucide-react";

import { Section } from "@/components/site/section";
import { education, experience } from "@/content/cv";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Research & teaching timeline"
      description="Research and teaching roles held at AMIRL and BUBT."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-6 -left-[1.72rem] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent sm:-left-[2.22rem]"
            />
            <article className="card-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl">{item.role}</h3>
                <p className="font-mono text-xs tracking-wide text-muted-foreground">
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium">{item.org}</p>
              {item.meta ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.meta}
                </p>
              ) : null}
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {item.bullets.map((b) => (
                  <li key={b.slice(0, 24)} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                >
                  {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section
      id="education"
      tone="surface"
      eyebrow="Education"
      title="Academic background"
    >
      <div className="grid gap-4">
        {education.map((e) => (
          <article
            key={e.degree}
            className={`card-surface p-5 sm:p-6 ${e.featured ? "border-accent/40 ring-1 ring-accent/20" : ""}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className={e.featured ? "text-xl" : "text-lg"}>{e.degree}</h3>
              <p className="font-mono text-xs tracking-wide text-muted-foreground">
                {e.period}
              </p>
            </div>
            <p className="mt-1 text-sm">{e.institution}</p>
            <p className="mt-2 inline-flex rounded-md bg-highlight px-2.5 py-1 font-mono text-xs text-highlight-foreground">
              {e.result}
            </p>
            {e.notes.length ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {e.notes.join(" · ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
