import { vi } from 'vitest';

vi.mock('openai', () => {
    class MockOpenAI {
        chat = {
            completions: {
                create: vi.fn().mockResolvedValue({
                    choices: [
                        {
                            message: { content: 'Mocked OpenAI response' },
                        },
                    ],
                }),
            },
        };
    }

    return {
        __esModule: true,
        default: MockOpenAI,
    };
});
