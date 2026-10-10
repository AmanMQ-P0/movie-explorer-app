import { z } from 'zod';

export const searchSchema = z.object({
  query: z.string().trim().max(100, 'Search query is too long'),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
