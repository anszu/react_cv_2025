import { z } from 'zod';

export const RefereesSchema = z.string();

export type RefereesData = z.infer<typeof RefereesSchema>;
