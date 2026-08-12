import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { cvUrl, person } from "@/content/cv";

const nav = [
  { label: "Research", to: "/research", hash: undefined },
  { label: "Projects", to: "/projects", hash: undefined },
  { label: "Publications", to: "/publications", hash: undefined },
  { label: "Activities", to: "/activities", hash: undefined },
  { label: "Experience", to: "/", hash: "experience" as string | undefined },
  { label: "Engineering", to: "/", hash: "engineering" as string | undefined },
  { label: "Writing", to: "/notes", hash: undefined },
  { label: "About", to: "/", hash: "about" as string | undefined },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Md. Mehedi Hasan — home"
        >
          <span className="font-mono text-sm font-semibold tracking-[.12em]">
            MEHEDI HASAN
          </span>
          <span className="hidden border-l border-border pl-2 font-mono text-[.6rem] tracking-[.1em] text-muted-foreground sm:block">
            RESEARCHER / ML ENGINEER
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="px-2 py-2 font-mono text-[.64rem] tracking-wide text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 font-mono text-[.62rem] tracking-[.1em] text-[#73d4a5] xl:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#73d4a5]" /> RESEARCH
            / ENGINEERING
          </span>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-border px-3 py-2 font-mono text-[.65rem] tracking-wide transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Download CV
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-border bg-card lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <div className="container-page grid gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-md bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Download Academic CV
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
