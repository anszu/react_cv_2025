import { z } from 'zod';

export const SkillsSchema = z.array(
    z.object({
        label: z.string(),
        text: z.string(),
    }),
);

export type SkillsData = z.infer<typeof SkillsSchema>;
