import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { z } from 'zod';
import { systemPrompt } from './prompts/systemPrompt';
import { getEvaluationPrompt } from './prompts/getEvaluationPrompt';
import { getChatCompletion } from './utils/getChatCompletion';
import { errorHandler } from './middleware/errorHandler';
import { asyncHandler } from './utils/asyncHandler';
import OpenAI from 'openai';

const PORT = process.env.PORT || 3001;

const RequestSchema = z.object({
    cvData: z.record(z.string(), z.any()),
    jobDescription: z.string(),
});

export const app = express();
app.use(cors());
app.use(express.json());

// API endpoint
app.post(
    '/api/ask',
    asyncHandler(async (req: Request, res: Response) => {
        const parseResult = RequestSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({ error: 'Invalid request format' });
            return;
        }

        const { cvData, jobDescription } = parseResult.data;

        const messages: OpenAI.ChatCompletionMessageParam[] = [
            { role: 'system', content: systemPrompt },
            {
                role: 'user',
                content: getEvaluationPrompt(
                    JSON.stringify(cvData),
                    jobDescription,
                ),
            },
        ];

        const answer = await getChatCompletion(messages);

        if (!answer) {
            throw new Error('Empty response from OpenAI');
        }

        res.json({ answer });
    }),
);

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`✅ Server running`);
});
