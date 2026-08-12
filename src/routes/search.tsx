import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Section } from "@/components/site/section";
import {
  awards,
  conferenceActivities,
  publications,
  researchProjects,
  softwareProjects,
} from "@/content/cv";

type Item = {
  title: string;
  text: string;
  area: string;
  to: "/publications" | "/projects" | "/activities";
};

const index: Item[] = [
  ...publications.map((p) => ({
    title: p.title,
    text: `${p.authors} ${p.venue}`,
    area: "Publication",
    to: "/publications" as const,
  })),
  ...researchProjects.map((p) => ({
    title: p.title,
    text: `${p.summary} ${p.focus.join(" ")}`,
    area: "Research project",
    to: "/projects" as const,
  })),
  ...softwareProjects.map((p) => ({
    title: p.title,
    text: p.summary,
    area: "Software project",
    to: "/projects" as const,
  })),
  ...conferenceActivities.map((a) => ({
    title: a.role,
    text: `${a.event} ${a.detail}`,
    area: "Activity",
    to: "/activities" as const,
  })),
  ...awards.map((a) => ({
    title: a.title,
    text: `${a.issuer} ${a.detail}`,
    area: "Award",
    to: "/activities" as const,
  })),
];

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Search across publications, research projects, conference activities and awards of Md. Mehedi Hasan.",
      },
      { property: "og:title", content: "Search — Md. Mehedi Hasan" },
      {
        property: "og:description",
        content: "Search publications, projects, activities and awards.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return index;
    return index.filter((i) =>
      `${i.title} ${i.text} ${i.area}`.toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <Section eyebrow="Search" title="Find anything in this portfolio">
      <label htmlFor="q" className="sr-only">
        Search
      </label>
      <input
        id="q"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search publications, projects, activities…"
        className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <p className="mt-3 text-sm text-muted-foreground">
        {results.length} result(s)
      </p>
      <ul className="mt-5 grid gap-3">
        {results.map((r) => (
          <li key={`${r.area}-${r.title}`}>
            <Link
              to={r.to}
              className="card-surface block p-5 transition-colors hover:bg-surface"
            >
              <p className="eyebrow">{r.area}</p>
              <h3 className="mt-1 text-base font-medium">{r.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {r.text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
