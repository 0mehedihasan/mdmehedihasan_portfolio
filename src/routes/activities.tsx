import { createFileRoute } from "@tanstack/react-router";

import {
  AwardsSection,
  CertificationsSection,
  ConferenceActivitiesSection,
  ExtracurricularSection,
  MembershipsSection,
  ReferencesSection,
} from "@/components/site/records";
import { CmsContentSection } from "@/components/site/cms-content";
import { publicContent } from "@/lib/content.functions";

export const Route = createFileRoute("/activities")({
  loader: () => publicContent(),
  head: () => ({
    meta: [
      { title: "Activities & Awards — Md. Mehedi Hasan" },
      {
        name: "description",
        content:
          "International conference roles, certifications, volunteering, honors, professional memberships and academic references for Md. Mehedi Hasan.",
      },
      {
        property: "og:title",
        content: "Activities & Awards — Md. Mehedi Hasan",
      },
      {
        property: "og:description",
        content:
          "Conference service, certifications, honors, memberships and references.",
      },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const content = Route.useLoaderData();
  const items = content.available ? content.items : [];
  const types = [
    "conference",
    "certification",
    "activity",
    "award",
    "membership",
  ] as const;
  return items.some((item) =>
    types.includes(item.type as (typeof types)[number]),
  ) ? (
    <>
      <CmsContentSection
        items={items}
        types={["conference"]}
        eyebrow="Conferences"
        title="Conference activities"
      />
      <CmsContentSection
        items={items}
        types={["certification"]}
        eyebrow="Certifications"
        title="Verified learning"
        tone="surface"
      />
      <CmsContentSection
        items={items}
        types={["activity"]}
        eyebrow="Activities"
        title="Leadership and volunteering"
      />
      <CmsContentSection
        items={items}
        types={["award"]}
        eyebrow="Awards"
        title="Recognition"
        tone="surface"
      />
      <CmsContentSection
        items={items}
        types={["membership"]}
        eyebrow="Memberships"
        title="Affiliations"
      />
    </>
  ) : (
    <>
      <ConferenceActivitiesSection />
      <CertificationsSection />
      <ExtracurricularSection />
      <AwardsSection />
      <MembershipsSection />
      <ReferencesSection />
    </>
  );
}
