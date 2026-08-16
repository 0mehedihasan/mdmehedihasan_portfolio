import { createFileRoute } from "@tanstack/react-router";

import { Markdown } from "@/components/markdown";
import { Section } from "@/components/site/section";
import { publicContent } from "@/lib/content.functions";

export const Route = createFileRoute("/notes")({
  loader: () => publicContent(),
  head: () => ({
    meta: [
      { title: "Notes — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Research notes and writing by Md. Mehedi Hasan on machine learning, explainable AI and healthcare data science.",
      },
      { property: "og:title", content: "Notes — Md. Mehedi Hasan" },
      {
        property: "og:description",
        content: "Research notes on machine learning and explainable AI.",
      },
    ],
  }),
  component: NotesPage,
});

function NotesPage() {
  const result = Route.useLoaderData();
  const notes = result.available
    ? result.items.filter(
        (item) => item.type === "article" || item.type === "tutorial",
      )
    : [];

  return (
    <Section
      eyebrow="Notes"
      title="Research notes"
      description="Short write-ups on methods, papers and experiments."
    >
      {notes.length ? (
        <ol className="grid gap-5">
          {notes.map((note) => (
            <li key={note.path}>
              <article className="card-surface p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="eyebrow">{note.type}</p>
                    <h2 className="mt-2 text-xl leading-snug">{note.title}</h2>
                  </div>
                  {note.date ? (
                    <time className="font-mono text-xs text-muted-foreground">
                      {note.date}
                    </time>
                  ) : null}
                </div>
                {note.summary ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {note.summary}
                  </p>
                ) : null}
                {note.body ? (
                  <div className="mt-5 border-t border-border pt-5">
                    <Markdown>{note.body}</Markdown>
                  </div>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <p className="card-surface p-6 text-sm text-muted-foreground">
          No notes published yet. Published articles and tutorials from the
          admin dashboard will appear here automatically.
        </p>
      )}
    </Section>
  );
}
