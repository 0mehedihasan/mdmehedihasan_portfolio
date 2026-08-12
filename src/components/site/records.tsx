import { Award, ExternalLink } from "lucide-react";

import { Section, Tag } from "@/components/site/section";
import {
  awards,
  certifications,
  conferenceActivities,
  extracurricular,
  languages,
  memberships,
  references,
  skillGroups,
} from "@/content/cv";

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="Tools and technologies">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.name} className="card-surface p-5">
            <h3 className="text-base font-medium">{g.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CertificationsSection() {
  return (
    <Section id="certifications" tone="surface" eyebrow="Training & Certifications" title="Verified learning">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <article key={c.title} className="card-surface p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-medium">{c.title}</h3>
              {c.issued ? <span className="font-mono text-xs text-muted-foreground">{c.issued}</span> : null}
            </div>
            <p className="mt-1 text-sm text-accent">{c.issuer}</p>
            {c.topics ? <p className="mt-2 text-sm text-muted-foreground">{c.topics}</p> : null}
            {c.credential ? <p className="mt-2 font-mono text-xs text-muted-foreground">{c.credential}</p> : null}
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
              >
                View certificate <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ConferenceActivitiesSection() {
  return (
    <Section
      id="conferences"
      eyebrow="International Conference, Congress & Symposium Activities"
      title="Organising and chairing roles"
      description="Reverse chronological record of international conference service."
    >
      <ol className="grid gap-4">
        {conferenceActivities.map((a) => (
          <li key={`${a.role}-${a.event}`}>
            <article className="card-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg leading-snug">{a.role}</h3>
                <p className="font-mono text-xs tracking-wide text-muted-foreground">{a.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium">{a.event}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              {a.highlights.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.highlights.map((h) => (
                    <Tag key={h} tone="accent">
                      {h}
                    </Tag>
                  ))}
                </div>
              ) : null}
              {a.url ? (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                >
                  Event link <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function ExtracurricularSection() {
  return (
    <Section
      id="extracurricular"
      tone="surface"
      eyebrow="Extracurricular Activities"
      title="Leadership and volunteering"
    >
      <ol className="grid gap-4 sm:grid-cols-2">
        {extracurricular.map((e) => (
          <li key={e.role}>
            <article className="card-surface h-full p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base leading-snug font-medium">{e.role}</h3>
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
              {e.url ? (
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                >
                  Link <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function AwardsSection() {
  return (
    <Section id="awards" eyebrow="Honors & Awards" title="Recognition">
      <div className="grid gap-4">
        {awards.map((a) => (
          <article
            key={a.title}
            className={`card-surface p-5 sm:p-6 ${a.featured ? "border-accent/40 ring-1 ring-accent/20" : ""}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="flex items-center gap-2 text-lg leading-snug">
                {a.featured ? <Award className="h-4 w-4 text-accent" aria-hidden="true" /> : null}
                {a.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{a.issued}</p>
            </div>
            <p className="mt-1 text-sm text-accent">{a.issuer}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            {a.highlights.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {a.highlights.map((h) => (
                  <Tag key={h} tone="accent">
                    {h}
                  </Tag>
                ))}
              </div>
            ) : null}
            {a.url ? (
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
              >
                Details <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function MembershipsSection() {
  return (
    <Section id="memberships" tone="surface" eyebrow="Professional Memberships & Languages" title="Affiliations">
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="card-surface p-5">
          <h3 className="text-base font-medium">Memberships</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {memberships.items.map((m) => (
              <li key={m} className="flex gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            IEEE Membership ID: {memberships.membershipId}
          </p>
        </div>
        <div className="card-surface p-5">
          <h3 className="text-base font-medium">Language skills</h3>
          <dl className="mt-3 space-y-3 text-sm">
            {languages.map((l) => (
              <div key={l.label}>
                <dt className="text-muted-foreground">{l.label}</dt>
                <dd className="font-medium">{l.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function ReferencesSection() {
  return (
    <Section id="references" eyebrow="References" title="Academic referees">
      <div className="grid gap-4 sm:grid-cols-3">
        {references.map((r) => (
          <article key={r.name} className="card-surface p-5">
            <h3 className="text-base font-medium">{r.name}</h3>
            <p className="mt-1 text-sm text-accent">{r.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.department}</p>
            <a href={`mailto:${r.email}`} className="mt-3 block text-sm link-underline break-all">
              {r.email}
            </a>
            {r.profile ? (
              <a
                href={r.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
              >
                Faculty profile <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
