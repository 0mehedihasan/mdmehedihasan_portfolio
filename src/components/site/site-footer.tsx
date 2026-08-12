import { Link } from "@tanstack/react-router";

import { person } from "@/content/cv";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="container-page grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-serif text-lg">{person.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Research Assistant at AMIRL. Machine learning, explainable AI, and healthcare AI research.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            <a className="link-underline" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
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
          <Link to="/login" className="text-muted-foreground hover:text-foreground">
            Admin
          </Link>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
