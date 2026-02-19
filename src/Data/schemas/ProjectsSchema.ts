import { z } from 'zod';

export const ProjectsSchema = z.array(
    z.object({
        name: z.string(),
        description: z.string().optional(),
        link: z.string().optional(),
    }),
);

export type ProjectsData = z.infer<typeof ProjectsSchema>;
