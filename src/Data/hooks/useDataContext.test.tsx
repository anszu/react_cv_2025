import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDataContext } from './useDataContext';
import { DataContext } from 'src/Data/DataContext';

describe('useDataContext', () => {
    it('should throw an error if used outside of a DataProvider', () => {
        expect(() => renderHook(() => useDataContext())).toThrowError(
            'useDataContext must be used within a DataProvider',
        );
    });

    it('should return the context value when used inside a DataProvider', () => {
        const mockValue = {
            contentData: null,
            contentError: null,
            contentLoading: false,
            sectionData: null,
            sectionError: null,
            sectionLoading: false,
        };

        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <DataContext.Provider value={mockValue}>
                {children}
            </DataContext.Provider>
        );

        const { result } = renderHook(
            () => useDataContext<typeof mockValue>(),
            { wrapper },
        );

        expect(result.current).toEqual(mockValue);
    });
});
