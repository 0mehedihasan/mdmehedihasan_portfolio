import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email().max(255),
  password: z.string().min(1).max(200),
  remember: z.boolean().optional(),
});

export const saveSchema = z.object({
  type: z.string().min(1).max(40),
  slug: z.string().trim().max(90).optional().nullable(),
  frontmatter: z.record(
    z.string().max(120),
    z.union([
      z.string().max(4_000),
      z.array(z.string().max(400)).max(100),
      z.boolean(),
    ]),
  ),
  body: z.string().max(400_000),
  originalPath: z.string().max(300).optional().nullable(),
});

export const pathSchema = z.object({ path: z.string().min(3).max(300) });
export const revisionSchema = pathSchema.extend({
  ref: z.string().min(7).max(80),
});
export const commitSchema = z.object({ sha: z.string().min(7).max(80) });

export type SaveInput = z.infer<typeof saveSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type PathInput = z.infer<typeof pathSchema>;
