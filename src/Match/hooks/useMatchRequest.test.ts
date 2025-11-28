import { renderHook, act } from '@testing-library/react';
import { useMatchRequest } from 'src/Match/hooks/useMatchRequest';
import { server } from 'src/mocks/server';
import { http, HttpResponse } from 'msw';
import { vi } from 'vitest';

const cvData = { name: 'Testuser' };

describe('useMatchRequest', () => {
    it('should fetch and return data correctly', async () => {
        const { result } = renderHook(() => useMatchRequest(cvData));

        await act(async () => {
            await result.current.run('test');
        });

        expect(result.current.result).toContain(
            'Based on the provided CV and job description',
        );
        expect(result.current.error).toBe(null);
    });

    it('sets error when response is not ok', async () => {
        server.use(
            http.post('http://localhost:3001/api/ask', () =>
                HttpResponse.text('Error', { status: 500 }),
            ),
        );

        const { result } = renderHook(() => useMatchRequest(cvData));

        await act(async () => {
            await result.current.run('test');
        });

        expect(result.current.error).toBeTruthy();
        expect(result.current.result).toBe('');
        expect(result.current.loading).toBe(false);
    });

    it('handles thrown fetch errors', async () => {
        vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('network'));

        const { result } = renderHook(() => useMatchRequest(cvData));

        await act(async () => {
            await result.current.run('test');
        });

        expect(result.current.error).toBeTruthy();
        expect(result.current.result).toBe('');
        expect(result.current.loading).toBe(false);
    });

    it('uses VITE_API_URL_PROD when in PROD', async () => {
        vi.unstubAllEnvs();

        vi.stubEnv('PROD', true);
        vi.stubEnv('VITE_API_URL_PROD', 'http://dev.test/api');

        const { result } = renderHook(() => useMatchRequest({}));

        let usedUrl = '';
        server.use(
            http.post('http://dev.test/api', ({ request }) => {
                usedUrl = request.url;
                return HttpResponse.json({ answer: 'ok' });
            }),
        );

        await act(async () => {
            await result.current.run('test');
        });

        expect(usedUrl).toBe('http://dev.test/api');
    });
});
