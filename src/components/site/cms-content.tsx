import { ExternalLink } from "lucide-react";

import { Markdown } from "@/components/markdown";
import { Section, Tag } from "@/components/site/section";
import type { ContentDoc, ContentTypeId } from "@/lib/content-schema";

type Props = {
  items: ContentDoc[];
  types: ContentTypeId[];
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  tone?: "default" | "surface";
};

function value(doc: ContentDoc, key: string) {
  const item = doc.frontmatter[key];
  return Array.isArray(item)
    ? item.join(", ")
    : item == null
      ? ""
      : String(item);
}

export function CmsContentSection({ items, types, ...section }: Props) {
  const records = items.filter((item) =>
    types.includes(item.type as ContentTypeId),
  );
  if (!records.length) return null;

  return (
    <Section {...section}>
      <ol className="grid gap-4">
        {records.map((record) => {
          const sourceUrl =
            value(record, "url") ||
            value(record, "github") ||
            value(record, "paper") ||
            value(record, "pdf") ||
            value(record, "credential_url");
          const subtitle =
            value(record, "authors") ||
            value(record, "organization") ||
            value(record, "institution") ||
            value(record, "issuer") ||
            value(record, "status");
          return (
            <li key={record.path}>
              <article className="card-surface p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="eyebrow">{record.type}</p>
                    <h3 className="mt-2 text-xl leading-snug">
                      {record.title}
                    </h3>
                  </div>
                  {record.date ? (
                    <time className="font-mono text-xs text-muted-foreground">
                      {record.date}
                    </time>
                  ) : null}
                </div>
                {subtitle ? (
                  <p className="mt-2 text-sm text-accent">{subtitle}</p>
                ) : null}
                {record.summary ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {record.summary}
                  </p>
                ) : null}
                {record.tags.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {record.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                ) : null}
                {record.body ? (
                  <div className="mt-5 border-t border-border pt-5">
                    <Markdown>{record.body}</Markdown>
                  </div>
                ) : null}
                {sourceUrl ? (
                  <a
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                    href={sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open link <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
