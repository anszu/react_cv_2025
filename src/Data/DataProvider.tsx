import { useData } from 'src/Data/hooks/useData';
import { DataContext } from 'src/Data/DataContext';
import type { ReactNode } from 'react';

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const { data, error, loading } = useData('src/data/sections.json');
    return (
        <DataContext.Provider value={{ data, error, loading }}>
            {children}
        </DataContext.Provider>
    );
};
