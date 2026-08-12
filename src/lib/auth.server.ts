/** Server-only admin session helpers (HMAC-signed cookie, no database). */

const COOKIE = "mmh_admin";
const MAX_AGE_REMEMBER = 60 * 60 * 24 * 30;
const MAX_AGE_SESSION = 60 * 60 * 8;

function secret(): string {
  return process.env["SESSION_SECRET"] ?? process.env["ADMIN_PASSWORD"] ?? "mmh-portfolio-dev-secret";
}

function b64url(bytes: Uint8Array): string {
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return b64url(new Uint8Array(sig));
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export function adminEmail(): string {
  return process.env["ADMIN_EMAIL"] ?? "mdmehedihasansr@gmail.com";
}

export function isAuthConfigured(): boolean {
  return Boolean(process.env["ADMIN_PASSWORD"]);
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  const expectedPassword = process.env["ADMIN_PASSWORD"];
  if (!expectedPassword) return false;
  return (
    email.trim().toLowerCase() === adminEmail().trim().toLowerCase() && safeEqual(password, expectedPassword)
  );
}

export async function createSessionCookie(remember: boolean): Promise<string> {
  const maxAge = remember ? MAX_AGE_REMEMBER : MAX_AGE_SESSION;
  const expires = Date.now() + maxAge * 1000;
  const payload = `${adminEmail()}|${expires}`;
  const value = `${b64url(new TextEncoder().encode(payload))}.${await sign(payload)}`;
  return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=${maxAge}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`;
}

export async function readSession(cookieHeader: string | null | undefined): Promise<{ email: string } | null> {
  if (!cookieHeader) return null;
  const raw = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE}=`));
  if (!raw) return null;
  const [encoded, sig] = raw.slice(COOKIE.length + 1).split(".");
  if (!encoded || !sig) return null;
  let payload: string;
  try {
    payload = new TextDecoder().decode(
      Uint8Array.from(atob(encoded.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)),
    );
  } catch {
    return null;
  }
  if (!safeEqual(sig, await sign(payload))) return null;
  const [email, expires] = payload.split("|");
  if (!email || !expires || Number(expires) < Date.now()) return null;
  return { email };
}
