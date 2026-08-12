import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border py-16 sm:py-20", tone === "surface" && "bg-surface", className)}
    >
      <div className="container-page">
        <header className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-2 text-3xl sm:text-4xl">{title}</h2>
          {description ? <p className="mt-3 text-base text-muted-foreground">{description}</p> : null}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.68rem] tracking-wide uppercase",
        tone === "accent"
          ? "border-transparent bg-highlight text-highlight-foreground"
          : "border-border bg-surface text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}
