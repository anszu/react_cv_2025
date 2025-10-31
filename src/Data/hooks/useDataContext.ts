import { useContext } from 'react';
import { DataContext } from 'src/Data/DataContext';

export const useDataContext = <T = unknown>(): T => {
    const context = useContext(DataContext) as T | null;

    if (context === null) {
        throw new Error('useDataContext must be used within a DataProvider');
    }

    return context;
};
