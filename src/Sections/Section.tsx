import type { SectionType } from 'src/Data/types/SectionData';

export const Section = ({ id, title, icon }: SectionType) => {
    return (
        <div key={id}>
            {icon}
            {title}
        </div>
    );
};
