import { createFileRoute } from "@tanstack/react-router";

import {
  AwardsSection,
  CertificationsSection,
  ConferenceActivitiesSection,
  ExtracurricularSection,
  MembershipsSection,
  ReferencesSection,
} from "@/components/site/records";

export const Route = createFileRoute("/activities")({
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
  component: () => (
    <>
      <ConferenceActivitiesSection />
      <CertificationsSection />
      <ExtracurricularSection />
      <AwardsSection />
      <MembershipsSection />
      <ReferencesSection />
    </>
  ),
});
