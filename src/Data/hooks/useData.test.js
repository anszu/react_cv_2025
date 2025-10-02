import { useData } from 'src/Data/hooks/useData';
import { renderHook, waitFor } from '@testing-library/react';

const mockFetch = (ok = true) => {
    return vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve('DATA'),
            statusText: ok ? 'SUCCESS' : 'ERROR',
            ok,
        }),
    );
};

describe('useData', () => {
    it('should fetch and return data correctly', async () => {
        global.fetch = mockFetch();

        const { result } = renderHook(() => useData('data'));

        await waitFor(() => {
            expect(result.current.data).toEqual('DATA');
        });
    });

    it('should set loading state correctly', async () => {
        global.fetch = mockFetch();
        const { result } = renderHook(() => useData('data'));

        expect(result.current.loading).toBe(true);

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });
    });

    it('should throw error when response is not ok', async () => {
        global.fetch = mockFetch(false);
        const { result } = renderHook(() => useData('data'));

        await waitFor(() => {
            expect(result.current.error.message).toEqual(
                'Error fetching data. Status: ERROR',
            );
        });
    });

    it('should set error when fetch throws', async () => {
        global.fetch = vi.fn(() => Promise.reject(new Error('Network error')));
        const { result } = renderHook(() => useData('data'));

        await waitFor(() => {
            expect(result.current.error.message).toEqual('Network error');
        });
    });
});
