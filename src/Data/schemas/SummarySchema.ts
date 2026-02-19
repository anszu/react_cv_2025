import { z } from 'zod';

export const SummarySchema = z.string();

export type SummaryData = z.infer<typeof SummarySchema>;
