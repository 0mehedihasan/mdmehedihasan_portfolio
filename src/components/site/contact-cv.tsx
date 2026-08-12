import { Download, Mail } from "lucide-react";

import { cvUrl, person } from "@/content/cv";

export function ContactCv() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface py-16 sm:py-20">
      <div className="container-page">
        <div className="card-surface flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Curriculum Vitae</p>
            <h2 className="mt-2 text-2xl sm:text-3xl">Download the full academic CV</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              The complete record of education, research experience, publications, activities, and awards. Open
              to research assistantships, data roles, and MSc/PhD opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Academic CV
            </a>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-background"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
