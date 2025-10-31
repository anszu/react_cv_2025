import type { ContentData } from 'src/Data/types/ContentData';
import type { SectionData } from 'src/Data/types/SectionData';

export type DataContextType = {
    contentData: ContentData | null;
    contentError: Error | null;
    contentLoading: boolean;
    sectionData: SectionData | null;
    sectionError: Error | null;
    sectionLoading: boolean;
};
