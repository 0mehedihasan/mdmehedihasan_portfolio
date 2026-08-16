import { createFileRoute } from "@tanstack/react-router";

import { ResearchProjectsSection } from "@/components/site/research";
import { SkillsSection } from "@/components/site/records";
import { CmsContentSection } from "@/components/site/cms-content";
import { publicContent } from "@/lib/content.functions";

export const Route = createFileRoute("/projects")({
  loader: () => publicContent(),
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
  component: ProjectsPage,
});

function ProjectsPage() {
  const content = Route.useLoaderData();
  const items = content.available ? content.items : [];
  return items.some(
    (item) => item.type === "project" || item.type === "skills",
  ) ? (
    <>
      <CmsContentSection
        items={items}
        types={["project"]}
        eyebrow="Projects"
        title="Research projects"
      />
      <CmsContentSection
        items={items}
        types={["skills"]}
        eyebrow="Technical skills"
        title="Tools and technologies"
        tone="surface"
      />
    </>
  ) : (
    <>
      <ResearchProjectsSection />
      <SkillsSection />
    </>
  );
}
