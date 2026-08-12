import { createFileRoute } from "@tanstack/react-router";

import {
  AboutSection,
  ResearchInterestsSection,
} from "@/components/site/about";
import { ContactCv } from "@/components/site/contact-cv";
import {
  EducationSection,
  ExperienceSection,
} from "@/components/site/experience";
import { Hero } from "@/components/site/hero";
import { ResearchWorkbench } from "@/components/site/workbench";
import { AwardsSection, SkillsSection } from "@/components/site/records";
import {
  PublicationsSection,
  ResearchProjectsSection,
} from "@/components/site/research";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md. Mehedi Hasan — AI & Machine Learning Researcher" },
      {
        name: "description",
        content:
          "Portfolio of Md. Mehedi Hasan: research assistant at AMIRL working on machine learning, explainable AI and healthcare AI, with publications, projects and academic CV.",
      },
      {
        property: "og:title",
        content: "Md. Mehedi Hasan — AI & Machine Learning Researcher",
      },
      {
        property: "og:description",
        content:
          "Research, publications, projects and academic CV of Md. Mehedi Hasan.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ResearchInterestsSection />
      <ResearchWorkbench />
      <ExperienceSection />
      <EducationSection />
      <PublicationsSection />
      <ResearchProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <ContactCv />
    </>
  );
}
