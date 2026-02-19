import { z } from 'zod';

export const EducationSchema = z.array(
    z.object({
        degree: z.string().optional(),
        school: z.string().optional(),
        location: z.string().optional(),
        year: z.string().optional(),
        link: z.string().optional(),
    }),
);

export type EducationData = z.infer<typeof EducationSchema>;
