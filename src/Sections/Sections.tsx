import { useDataContext } from 'src/Data/hooks/useDataContext';
import type { SectionType } from 'src/Data/types/SectionData';
import { Section } from 'src/Sections/Section';

export const Sections = () => {
    const { sectionData: data } = useDataContext<{
        sectionData?: SectionType[];
    }>();

    if (!data) return null;

    return (
        <div className="flex flex-col gap-8 md:gap-10">
            {data.map((section: SectionType) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
};
