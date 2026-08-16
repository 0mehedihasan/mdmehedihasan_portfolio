import { createFileRoute } from "@tanstack/react-router";

import { ResearchInterestsSection } from "@/components/site/about";
import { ExperienceSection } from "@/components/site/experience";
import { ResearchProjectsSection } from "@/components/site/research";
import { CmsContentSection } from "@/components/site/cms-content";
import { publicContent } from "@/lib/content.functions";

export const Route = createFileRoute("/research")({
  loader: () => publicContent(),
  head: () => ({
    meta: [
      { title: "Research — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Research interests, assistantship work at AMIRL, and applied machine learning research projects by Md. Mehedi Hasan.",
      },
      { property: "og:title", content: "Research — Md. Mehedi Hasan" },
      {
        property: "og:description",
        content:
          "Research interests, AMIRL work and applied ML research projects.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const content = Route.useLoaderData();
  const items = content.available ? content.items : [];
  const usesCms = items.some((item) =>
    ["research", "research-interests", "experience", "project"].includes(
      item.type,
    ),
  );
  return usesCms ? (
    <>
      <CmsContentSection
        items={items}
        types={["research-interests", "research"]}
        eyebrow="Research"
        title="Research interests and work"
      />
      <CmsContentSection
        items={items}
        types={["experience"]}
        eyebrow="Experience"
        title="Research experience"
        tone="surface"
      />
      <CmsContentSection
        items={items}
        types={["project"]}
        eyebrow="Projects"
        title="Research projects"
      />
    </>
  ) : (
    <>
      <ResearchInterestsSection />
      <ExperienceSection />
      <ResearchProjectsSection />
    </>
  );
}
