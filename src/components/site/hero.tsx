import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

import { cvUrl, person, profileImage, roles } from "@/content/cv";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="eyebrow">Academic &amp; Research Portfolio</p>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {person.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed font-medium text-accent sm:text-lg">
            {person.headline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {person.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Research{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/projects"
              className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              View Projects
            </Link>
            <Link
              to="/publications"
              className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Publications
            </Link>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-highlight"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {person.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground link-underline hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {person.location}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="card-surface overflow-hidden p-2">
            <img
              src={profileImage}
              alt="Portrait of Md. Mehedi Hasan, Research Assistant at AMIRL"
              width={1152}
              height={1350}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
          <dl className="card-surface mt-4 grid grid-cols-2 divide-x divide-border">
            <div className="p-4">
              <dt className="eyebrow">CGPA</dt>
              <dd className="mt-1 font-serif text-2xl">3.82/4.00</dd>
            </div>
            <div className="p-4">
              <dt className="eyebrow">Publications</dt>
              <dd className="mt-1 font-serif text-2xl">2</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
