import { z } from "zod";

export const Project = z.object({
  name: z.string(),
  description: z.string().nullable(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  homepage: z.string().nullable(),
  html_url: z.string(),
  topics: z.array(z.string()),
});
