import { useDataContext } from 'src/Data/hooks/useDataContext';
import type { SectionType } from 'src/Data/types/SectionData';
import { LoadingSpinner } from 'src/LoadingSpinner';
import { Section } from 'src/Sections/Section';

export const Sections = () => {
    const { sectionData: data, sectionLoading: loading } = useDataContext<{
        sectionData?: SectionType[];
        sectionLoading: boolean;
    }>();

    if (!data) return null;

    return (
        <div className="flex flex-col gap-8 md:gap-10">
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
