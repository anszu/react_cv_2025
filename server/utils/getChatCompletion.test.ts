import { getChatCompletion } from './getChatCompletion';
import { vi } from 'vitest';

beforeEach(() => {
    vi.resetModules();
});

afterEach(() => {
    vi.restoreAllMocks();
});

describe('getChatCompletion', () => {
    it('should return response from OpenAI', async () => {
        const result = await getChatCompletion([
            { role: 'user', content: 'Hello' },
        ]);
        expect(result).toBe('Mocked OpenAI response');
    });
    it('should return null when no response is provided', async () => {
        vi.doMock('openai', () => {
            return {
                default: vi.fn().mockImplementation(() => ({
                    chat: {
                        completions: {
                            create: vi.fn().mockResolvedValue({ choices: [] }),
                        },
                    },
                })),
            };
        });

        const { getChatCompletion } = await import('./getChatCompletion');
        const result = await getChatCompletion([
            { role: 'user', content: 'Hello' },
        ]);
        expect(result).toBeNull();
    });
});
