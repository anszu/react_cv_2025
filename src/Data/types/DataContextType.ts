import type { ContentData } from 'src/Data/types/ContentData';
import type { SectionData } from 'src/Data/types/SectionData';

export type DataContextType = {
    data: ContentData | SectionData | null;
    error: Error | null;
    loading: boolean;
};
