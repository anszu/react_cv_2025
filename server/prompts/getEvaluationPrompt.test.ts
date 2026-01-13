import { getEvaluationPrompt } from './getEvaluationPrompt';

describe('getEvaluationPrompt', () => {
    it('should generate the correct prompt', () => {
        const cvData = JSON.stringify({
            name: 'John Doe',
            experience: '5 years in software development',
        });
        const jobDescription = 'Looking for a software developer in Germany.';

        const prompt = getEvaluationPrompt(cvData, jobDescription);

        expect(prompt).toContain(cvData);
        expect(prompt).toContain(jobDescription);
        expect(prompt).toContain("Evaluate the candidate's fit for this job.");
    });
});
