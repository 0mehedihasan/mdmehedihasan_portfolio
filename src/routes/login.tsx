import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Section } from "@/components/site/section";
import { adminLogin } from "@/lib/content.functions";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin Sign In — Md. Mehedi Hasan" },
      { name: "description", content: "Private administration sign-in for the portfolio content manager." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus(null);
    try {
      await adminLogin({ data: { email, password } });
      window.location.href = "/admin";
    } catch {
      setStatus("Sign in failed. Check your credentials and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Section eyebrow="Administration" title="Sign in" description="Restricted area for content management.">
      <form onSubmit={onSubmit} className="card-surface grid max-w-md gap-4 p-6">
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        {status ? <p className="text-sm text-destructive">{status}</p> : null}
        <button
          type="submit"
          disabled={busy}
          className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </Section>
  );
}
