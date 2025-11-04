export const getEvaluationPrompt = (cvData: string, jobDescription: string) =>
    `
    Here is the candidate's CV:
    ${cvData}
    
    Here is the job description:
    ${jobDescription}
    
    Evaluate the candidate's fit for this job.
    Write a short, lively summary (max 5-6 sentences) highlighting strengths relevant to this role.
    Be slightly enthusiastic and humorous — a medium level of praise that is clearly playful but still professional.
    If the job description isn't for Germany, mention that the candidate is applying from abroad and will need to handle the visa process.
    If the job description is for a position in New Zealand, highlight that the candidate is very interested in relocating there.
    End with a single line giving a match score from 0 to 10.
    `;
