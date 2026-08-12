import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email().max(255),
  password: z.string().min(1).max(200),
  remember: z.boolean().optional(),
});

export const saveSchema = z.object({
  type: z.string().min(1).max(40),
  title: z.string().trim().min(1).max(180),
  slug: z.string().trim().max(90).optional().nullable(),
  date: z.string().trim().max(40).optional().nullable(),
  tags: z.array(z.string().trim().max(40)).max(20).optional(),
  image: z.string().trim().max(500).optional().nullable(),
  summary: z.string().trim().max(400).optional().nullable(),
  abstract: z.string().trim().max(2_000).optional().nullable(),
  extra: z.record(z.string().max(120), z.string().max(4_000)).optional(),
  draft: z.boolean().optional(),
  body: z.string().max(400_000),
  originalPath: z.string().max(300).optional().nullable(),
});

export const pathSchema = z.object({ path: z.string().min(3).max(300) });

export type SaveInput = z.infer<typeof saveSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type PathInput = z.infer<typeof pathSchema>;
