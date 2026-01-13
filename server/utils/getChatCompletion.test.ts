import { getChatCompletion } from './getChatCompletion';

describe('getChatCompletion', () =>
    it('should return response from OpenAI', async () => {
        const result = await getChatCompletion([
            { role: 'user', content: 'Hello' },
        ]);
        expect(result).toBe('Mocked OpenAI response');
    }));
