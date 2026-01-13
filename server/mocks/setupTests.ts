import { vi } from 'vitest';

vi.mock('openai', () => {
    return {
        default: vi.fn().mockImplementation(() => ({
            chat: {
                completions: {
                    create: vi.fn().mockResolvedValue({
                        choices: [
                            {
                                message: {
                                    content: 'Mocked OpenAI response',
                                },
                            },
                        ],
                    }),
                },
            },
        })),
    };
});
