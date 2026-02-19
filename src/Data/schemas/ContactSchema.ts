import { z } from 'zod';

export const ContactSchema = z.object({
    name: z.string(),
    phone: z.string().optional(),
    links: z
        .array(
            z.object({
                label: z.string(),
                url: z.string(),
            }),
        )
        .optional(),
});

export type ContactData = z.infer<typeof ContactSchema>;
