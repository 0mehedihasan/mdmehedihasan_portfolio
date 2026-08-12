import { createFileRoute } from "@tanstack/react-router";

import { ResearchProjectsSection } from "@/components/site/research";
import { SkillsSection } from "@/components/site/records";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Machine learning research projects and undergraduate software projects built by Md. Mehedi Hasan, with tools and technologies used.",
      },
      { property: "og:title", content: "Projects — Md. Mehedi Hasan" },
      {
        property: "og:description",
        content:
          "Research and software projects with the technologies behind them.",
      },
    ],
  }),
  component: () => (
    <>
      <ResearchProjectsSection />
      <SkillsSection />
    </>
  ),
});
