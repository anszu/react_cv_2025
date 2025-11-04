import type { SectionType } from 'src/Data/types/SectionData';
import { Content } from 'src/Content/Content';

export const Section = ({ id, title, icon }: SectionType) => {
    const iconElement = icon ? <div className="mr-4">{icon}</div> : null;

    return (
        <section key={id}>
            {title && (
                <div className="text-xl print:text-lg font-semibold mb-4 flex text-gray-900">
                    {iconElement}
                    <h2>{title}</h2>
                </div>
            )}
            <div className="text-gray-700">
                <Content sectionId={id} />
            </div>
        </section>
    );
};
