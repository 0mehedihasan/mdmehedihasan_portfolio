import { ExternalLink, FileText } from "lucide-react";

import { Section, Tag } from "@/components/site/section";
import { publications, researchProjects, softwareProjects } from "@/content/cv";

export function PublicationsSection() {
  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Peer-reviewed work"
      description="Conference and journal outputs, with review status stated explicitly."
    >
      <ol className="grid gap-4">
        {publications.map((p) => (
          <li key={p.title}>
            <article className="card-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Tag tone={p.status === "Published" ? "accent" : "default"}>{p.status}</Tag>
                {p.doi ? <span className="font-mono text-xs text-muted-foreground">DOI: {p.doi}</span> : null}
              </div>
              <h3 className="mt-3 text-xl leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
              <p className="mt-1 text-sm text-muted-foreground italic">{p.venue}</p>
              {p.links.length ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface"
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function ResearchProjectsSection() {
  return (
    <Section
      id="projects"
      tone="surface"
      eyebrow="Research Projects"
      title="Applied research work"
      description="AI and machine learning projects, connected to their publications where applicable."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {researchProjects.map((p) => (
          <article key={p.title} className="card-surface flex flex-col p-6">
            <h3 className="text-xl leading-snug">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.focus.map((f) => (
                <Tag key={f}>{f}</Tag>
              ))}
            </div>
            {p.linkedPublication ? (
              <p className="mt-4 rounded-md border-l-2 border-accent bg-highlight/40 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                Related publication: {p.linkedPublication}
              </p>
            ) : null}
            {p.links.length ? (
              <div className="mt-auto flex flex-wrap gap-3 pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                  >
                    {l.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-lg">Undergraduate software projects</h3>
        <p className="mt-1 text-sm text-muted-foreground">Earlier coursework and development work.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {softwareProjects.map((p) => (
            <li key={p.title} className="rounded-lg border border-border bg-background/60 p-4">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-sm font-medium">{p.title}</h4>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} on GitHub`}
                  className="text-muted-foreground hover:text-accent"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
