import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cvUrl, person } from "@/content/cv";

const nav = [
  { label: "About", to: "/", hash: "about" as string | undefined },
  { label: "Research", to: "/research", hash: undefined },
  { label: "Publications", to: "/publications", hash: undefined },
  { label: "Projects", to: "/projects", hash: undefined },
  { label: "Activities", to: "/activities", hash: undefined },
  { label: "Notes", to: "/notes", hash: undefined },
  { label: "Search", to: "/search", hash: undefined },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Md. Mehedi Hasan — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-mono text-xs font-semibold text-primary-foreground">
            MH
          </span>
          <span className="hidden text-sm font-medium sm:block">{person.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Download CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
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
