import { a as stringType, i as recordType, n as booleanType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-validators-BUVAifjn.js
var loginSchema = objectType({
	email: stringType().trim().email().max(255),
	password: stringType().min(1).max(200),
	remember: booleanType().optional()
});
var saveSchema = objectType({
	type: stringType().min(1).max(40),
	title: stringType().trim().min(1).max(180),
	slug: stringType().trim().max(90).optional().nullable(),
	date: stringType().trim().max(40).optional().nullable(),
	tags: arrayType(stringType().trim().max(40)).max(20).optional(),
	image: stringType().trim().max(500).optional().nullable(),
	summary: stringType().trim().max(400).optional().nullable(),
	abstract: stringType().trim().max(2e3).optional().nullable(),
	extra: recordType(stringType().max(120), stringType().max(4e3)).optional(),
	draft: booleanType().optional(),
	body: stringType().max(4e5),
	originalPath: stringType().max(300).optional().nullable()
});
var pathSchema = objectType({ path: stringType().min(3).max(300) });
//#endregion
export { pathSchema as n, saveSchema as r, loginSchema as t };
