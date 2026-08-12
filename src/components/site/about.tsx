import { Section, Tag } from "@/components/site/section";
import { aboutParagraphs, careerInterests, graduateInterests, researchInterests } from "@/content/cv";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Research-driven, data-focused, and teaching-shaped"
      description="A concise professional profile assembled from my academic CV."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="space-y-6">
          <div className="card-surface p-5">
            <h3 className="text-lg">Career interests</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {careerInterests.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-5">
            <h3 className="text-lg">MSc / PhD interests</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {graduateInterests.map((g) => (
                <Tag key={g}>{g}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ResearchInterestsSection() {
  return (
    <Section
      id="research-interests"
      tone="surface"
      eyebrow="Research Interests"
      title="Where my work is focused"
      description="Areas I actively work in and want to pursue at MSc/PhD level."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {researchInterests.map((r) => (
          <li key={r.title} className="card-surface p-5">
            <h3 className="text-base font-medium">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
