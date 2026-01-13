import { systemPrompt } from './systemPrompt';

describe('systemPrompt', () => {
    it('should return the correct system prompt', () => {
        expect(systemPrompt).toMatchSnapshot();
    });
});
