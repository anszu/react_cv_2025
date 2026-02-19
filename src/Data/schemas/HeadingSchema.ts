import { z } from 'zod';

export const HeadingSchema = z.object({
    title: z.string(),
    subtitle: z.string().optional(),
});

export type HeadingData = z.infer<typeof HeadingSchema>;
