import type { SectionType } from 'src/Data/types/SectionData';
import { Content } from 'src/Content/Content';

export const Section = ({ id, title, icon }: SectionType) => {
    const iconElement = icon ? <div className="mr-4">{icon}</div> : null;

    return (
        <div key={id}>
            <div className="text-xl font-semibold mb-4 flex">
                {iconElement}
                <h2>{title}</h2>
            </div>
            <div className="text-gray-700">
                <Content contentId={id} />
            </div>
        </div>
    );
};
