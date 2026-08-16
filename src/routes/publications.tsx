import { createFileRoute } from "@tanstack/react-router";

import { PublicationsSection } from "@/components/site/research";
import { CmsContentSection } from "@/components/site/cms-content";
import { publicContent } from "@/lib/content.functions";

export const Route = createFileRoute("/publications")({
  loader: () => publicContent(),
  head: () => ({
    meta: [
      { title: "Publications — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Peer-reviewed conference and journal publications by Md. Mehedi Hasan in explainable AI and healthcare machine learning.",
      },
      { property: "og:title", content: "Publications — Md. Mehedi Hasan" },
      {
        property: "og:description",
        content: "Peer-reviewed publications in explainable and healthcare AI.",
      },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const content = Route.useLoaderData();
  const items = content.available ? content.items : [];
  return items.some((item) => item.type === "publication") ? (
    <CmsContentSection
      items={items}
      types={["publication"]}
      eyebrow="Publications"
      title="Scholarly publications"
      description="Published work managed from the portfolio dashboard."
    />
  ) : (
    <PublicationsSection />
  );
}
