import { z } from 'zod';

export const ExperienceSchema = z.array(
    z.object({
        company: z.string(),
        description: z.string().optional(),
        link: z.string().optional(),
        position: z.string(),
        location: z.string().optional(),
        period: z.string(),
        tasks: z.array(z.string()).optional(),
    }),
);

export type ExperienceData = z.infer<typeof ExperienceSchema>;
