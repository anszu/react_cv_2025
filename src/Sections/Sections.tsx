import { useDataContext } from 'src/Data/hooks/useDataContext';
import type { SectionType } from 'src/Data/types/SectionData';
import { LoadingSpinner } from 'src/shared/LoadingSpinner';
import { Section } from 'src/Sections/Section';

export const Sections = () => {
    const { sectionData: data, sectionLoading: loading } = useDataContext<{
        sectionData?: SectionType[];
        sectionLoading: boolean;
    }>();

    if (!data) return null;

    return (
        <div className="flex flex-col gap-8 print:gap-6 bg-white ">
            {loading && (
                <div className="flex w-full justify-center">
                    <LoadingSpinner />
                </div>
            )}
            {data.map((section: SectionType) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
};
