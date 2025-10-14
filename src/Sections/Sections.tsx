import { useData } from 'src/Data/hooks/useData';
import type { SectionType, SectionData } from 'src/Data/types/SectionData';
import { Section } from 'src/Sections/Section';

export const Sections = () => {
    const { data } = useData<SectionData>(
        '/Data/json/sections_anikaszuppa.json',
    );

    if (!data) return null;

    return (
        <div className="flex flex-col gap-10 md:gap-12">
            {data.map((section: SectionType) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
};
