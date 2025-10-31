import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// API endpoint
app.post('/api/ask', async (req, res) => {
    const { cvData, jobDescription } = req.body;

    if (!cvData || !jobDescription) {
        return res
            .status(400)
            .json({ error: 'CV data or job description missing.' });
    }

    try {
        const prompt = `
Here is the candidate's CV:
${JSON.stringify(cvData)}

Here is the job description:
${jobDescription}

Evaluate the candidate's fit for this job.
Write a short, lively summary (max 5-6 sentences) highlighting strengths relevant to this role.
Be slightly enthusiastic and humorous — a medium level of praise that is clearly playful but still professional.
If the job description isn't for Germany, mention that the candidate is applying from abroad and will need to handle the visa process.
If the job description is for a position in New Zealand, highlight that the candidate is very interested in relocating there.
End with a single line giving a match score from 0 to 10.
`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `
You are a professional AI career assistant.
Compare the candidate's CV to the provided job description.
Provide a concise evaluation in English and include a match score from 0 to 10.
Always focus on relevant skills and experience.
`,
                },
                { role: 'user', content: prompt },
            ],
        });

        const answer =
            completion.choices[0].message?.content ?? 'No answer generated.';
        res.json({ answer });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            error: error.message || 'Error contacting OpenAI API',
        });
    }
});

app.listen(3001, () => {
    console.log('✅ Server running on http://localhost:3001');
});
