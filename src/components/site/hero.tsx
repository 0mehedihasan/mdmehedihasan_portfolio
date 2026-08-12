import { Link } from "@tanstack/react-router";
import { ArrowDownRight, Download } from "lucide-react";

import { cvUrl, person, profileImage } from "@/content/cv";

const domains = ["ML / DL", "XAI", "COMPUTER VISION", "GNN", "DATA", "SYSTEMS"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
        <div>
          <p className="eyebrow">
            Computer Science · AI Research · Machine Learning
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[.95] sm:text-6xl lg:text-7xl">
            {person.name}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-primary sm:text-3xl">
            Researcher and Machine Learning Engineer building intelligent
            systems across AI, data, and software engineering.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {person.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-85"
            >
              VIEW RESEARCH <ArrowDownRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs font-semibold tracking-wide hover:border-accent hover:text-accent"
            >
              VIEW PROJECTS
            </Link>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs font-semibold tracking-wide hover:border-accent hover:text-accent"
            >
              <Download className="h-3.5 w-3.5" /> CV
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-4">
            {domains.map((domain) => (
              <span
                key={domain}
                className="font-mono text-[.67rem] tracking-[.08em] text-muted-foreground"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[.8fr_1.2fr] lg:grid-cols-1">
          <div className="terminal order-2 p-5 sm:order-1 lg:order-2">
            <p className="font-mono text-[.65rem] tracking-[.16em] text-accent">
              RESEARCH WORKSTATION / STATUS
            </p>
            <div className="mt-4 space-y-2 terminal-line">
              <p>
                <strong>$</strong> whoami
              </p>
              <p className="pl-4">md.mehedi.hasan</p>
              <p>
                <strong>$</strong> research --current
              </p>
              <p className="pl-4">AI / ML / Computer Vision / GNN</p>
              <p>
                <strong>$</strong> status
              </p>
              <p className="pl-4 text-[#73d4a5]">
                Researching · Building · Publishing
              </p>
            </div>
          </div>
          <figure className="relative order-1 overflow-hidden border border-border bg-muted sm:order-2 lg:order-1">
            <img
              src={profileImage}
              alt="Portrait of Md. Mehedi Hasan"
              width={1152}
              height={1350}
              fetchPriority="high"
              className="aspect-[1.06] w-full object-cover object-top grayscale-[18%]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 font-mono text-[.65rem] tracking-[.12em] text-muted-foreground">
              RESEARCH ASSISTANT / AMIRL
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
