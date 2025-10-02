import type { ContentData } from 'src/Data/types/ContentData';
import type { SectionsData } from 'src/Data/types/SectionsData';

export type DataContextType = {
    data: ContentData | SectionsData | null;
    error: Error | null;
    loading: boolean;
};
