import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from './index';

describe('POST /api/ask', () => {
    it('returns 200 and answer for valid input', async () => {
        const res = await request(app)
            .post('/api/ask')
            .send({
                cvData: { name: 'Jane Doe', skills: ['React', 'TypeScript'] },
                jobDescription: 'Frontend Developer',
            });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('answer');
        expect(typeof res.body.answer).toBe('string');
        expect(res.body.answer.length).toBeGreaterThan(0);
    });

    it('returns 400 for invalid input', async () => {
        const res = await request(app).post('/api/ask').send({ foo: 'bar' });

        expect(res.status).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid request format' });
    });

    it('calls errorHandler on empty response', async () => {
        const getChatModule = await import('./utils/getChatCompletion');
        const spy = vi
            .spyOn(getChatModule, 'getChatCompletion')
            .mockResolvedValueOnce(null);

        const { app } = await import('./index');

        const res = await request(app)
            .post('/api/ask')
            .send({
                cvData: { name: 'Jane Doe' },
                jobDescription: 'Frontend Developer',
            });

        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty('error');

        spy.mockRestore();
    });
});
