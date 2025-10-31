import { useData } from 'src/Data/hooks/useData';
import { DataContext } from 'src/Data/DataContext';
import type { ReactNode } from 'react';
import type { SectionData } from 'src/Data/types/SectionData';
import type { ContentData } from 'src/Data/types/ContentData';

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const {
        data: sectionData,
        error: sectionError,
        loading: sectionLoading,
    } = useData<SectionData>('sections.json');

    const {
        data: contentData,
        error: contentError,
        loading: contentLoading,
    } = useData<ContentData>('content.json');

    return (
        <DataContext.Provider
            value={{
                sectionData,
                sectionError,
                sectionLoading,
                contentData,
                contentError,
                contentLoading,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
