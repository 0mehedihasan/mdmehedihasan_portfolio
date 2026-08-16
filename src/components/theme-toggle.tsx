import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Mode = "light" | "dark" | "system";
const KEY = "mmh-theme";

function apply(mode: Mode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = mode === "dark" || (mode === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Mode | null) ?? "system";
    setMode(stored);
    apply(stored);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem(KEY) as Mode | null) === "system")
        apply("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const choose = (next: Mode) => {
    setMode(next);
    localStorage.setItem(KEY, next);
    apply(next);
  };

  return (
    <div
      className="inline-flex rounded-md border border-border bg-card p-0.5"
      role="group"
      aria-label="Color theme"
    >
      {[
        { value: "light" as const, label: "Light", Icon: Sun },
        { value: "dark" as const, label: "Dark", Icon: Moon },
        { value: "system" as const, label: "System", Icon: Monitor },
      ].map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => choose(value)}
          aria-pressed={mode === value}
          aria-label={`${label} theme`}
          title={`${label} theme`}
          className={`inline-flex h-7 w-7 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground ${mode === value ? "bg-highlight text-accent" : ""}`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
