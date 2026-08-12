import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/site/section";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Research notes and writing by Md. Mehedi Hasan on machine learning, explainable AI and healthcare data science.",
      },
      { property: "og:title", content: "Notes — Md. Mehedi Hasan" },
      { property: "og:description", content: "Research notes on machine learning and explainable AI." },
    ],
  }),
  component: () => (
    <Section
      eyebrow="Notes"
      title="Research notes"
      description="Short write-ups on methods, papers and experiments."
    >
      <p className="card-surface p-6 text-sm text-muted-foreground">
        No notes published yet. New notes on explainable AI, medical imaging and model evaluation will appear here.
      </p>
    </Section>
  ),
});
