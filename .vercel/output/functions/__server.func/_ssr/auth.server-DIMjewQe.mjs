//#region node_modules/.nitro/vite/services/ssr/assets/auth.server-DIMjewQe.js
/** Server-only admin session helpers (HMAC-signed cookie, no database). */
var COOKIE = "mmh_admin";
var MAX_AGE_REMEMBER = 2592e3;
var MAX_AGE_SESSION = 28800;
function secret() {
	return process.env["SESSION_SECRET"] ?? process.env["ADMIN_PASSWORD"] ?? "mmh-portfolio-dev-secret";
}
function b64url(bytes) {
	let bin = "";
	bytes.forEach((b) => bin += String.fromCharCode(b));
	return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function sign(payload) {
	const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret()), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
	return b64url(new Uint8Array(sig));
}
function safeEqual(a, b) {
	if (a.length !== b.length) return false;
	let out = 0;
	for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return out === 0;
}
function adminEmail() {
	return process.env["ADMIN_EMAIL"] ?? "mdmehedihasansr@gmail.com";
}
function isAuthConfigured() {
	return Boolean(process.env["ADMIN_PASSWORD"]);
}
async function verifyCredentials(email, password) {
	const expectedPassword = process.env["ADMIN_PASSWORD"];
	if (!expectedPassword) return false;
	return email.trim().toLowerCase() === adminEmail().trim().toLowerCase() && safeEqual(password, expectedPassword);
}
async function createSessionCookie(remember) {
	const maxAge = remember ? MAX_AGE_REMEMBER : MAX_AGE_SESSION;
	const expires = Date.now() + maxAge * 1e3;
	const payload = `${adminEmail()}|${expires}`;
	return `${COOKIE}=${`${b64url(new TextEncoder().encode(payload))}.${await sign(payload)}`}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=${maxAge}`;
}
function clearSessionCookie() {
	return `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`;
}
async function readSession(cookieHeader) {
	if (!cookieHeader) return null;
	const raw = cookieHeader.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${COOKIE}=`));
	if (!raw) return null;
	const [encoded, sig] = raw.slice(10).split(".");
	if (!encoded || !sig) return null;
	let payload;
	try {
		payload = new TextDecoder().decode(Uint8Array.from(atob(encoded.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)));
	} catch {
		return null;
	}
	if (!safeEqual(sig, await sign(payload))) return null;
	const [email, expires] = payload.split("|");
	if (!email || !expires || Number(expires) < Date.now()) return null;
	return { email };
}
//#endregion
export { adminEmail, clearSessionCookie, createSessionCookie, isAuthConfigured, readSession, verifyCredentials };
