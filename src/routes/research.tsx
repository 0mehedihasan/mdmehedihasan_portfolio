import { createFileRoute } from "@tanstack/react-router";

import { ResearchInterestsSection } from "@/components/site/about";
import { ExperienceSection } from "@/components/site/experience";
import { ResearchProjectsSection } from "@/components/site/research";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Research interests, assistantship work at AMIRL, and applied machine learning research projects by Md. Mehedi Hasan.",
      },
      { property: "og:title", content: "Research — Md. Mehedi Hasan" },
      { property: "og:description", content: "Research interests, AMIRL work and applied ML research projects." },
    ],
  }),
  component: () => (
    <>
      <ResearchInterestsSection />
      <ExperienceSection />
      <ResearchProjectsSection />
    </>
  ),
});
