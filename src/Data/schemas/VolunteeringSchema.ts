import { z } from 'zod';

export const VolunteeringSchema = z.array(
    z.object({
        organization: z.string(),
        role: z.string().optional(),
        period: z.string().optional(),
        tasks: z.array(z.string()).optional(),
    }),
);

export type VolunteeringData = z.infer<typeof VolunteeringSchema>;
