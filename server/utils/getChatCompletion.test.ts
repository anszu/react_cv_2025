import { vi } from 'vitest';

describe('getChatCompletion', () => {
    beforeEach(() => {
        vi.resetModules();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should return response from OpenAI', async () => {
        const { getChatCompletion } = await import('./getChatCompletion');

        const result = await getChatCompletion([
            { role: 'user', content: 'Hello' },
        ]);

        expect(result).toBe('Mocked OpenAI response');
    });

    it('should return null when no response is provided', async () => {
        const fakeClient = {
            chat: {
                completions: {
                    create: vi.fn().mockResolvedValue({ choices: [] }),
                },
            },
        };

        const { getChatCompletion } = await import('./getChatCompletion');

        const result = await getChatCompletion(
            [{ role: 'user', content: 'Hello' }],
            fakeClient as any,
        );

        expect(result).toBeNull();
    });
});
