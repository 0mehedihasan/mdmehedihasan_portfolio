import { createFileRoute } from "@tanstack/react-router";

import { PublicationsSection } from "@/components/site/research";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "Peer-reviewed conference and journal publications by Md. Mehedi Hasan in explainable AI and healthcare machine learning.",
      },
      { property: "og:title", content: "Publications — Md. Mehedi Hasan" },
      { property: "og:description", content: "Peer-reviewed publications in explainable and healthcare AI." },
    ],
  }),
  component: () => <PublicationsSection />,
});
