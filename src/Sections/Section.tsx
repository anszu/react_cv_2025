import type { SectionType } from 'src/Data/types/SectionData';

export const Section = ({ id, title, icon }: SectionType) => {
    const iconElement = icon ? <div className="mr-4">{icon}</div> : null;

    return (
        <div key={id}>
            <div className="text-xl font-semibold mb-4 flex">
                {iconElement}
                <h2>{title}</h2>
            </div>
            <p className="text-gray-700">
                Das ist eine einfache, ruhige Karte mit etwas Schatten und
                sanften Rundungen.
            </p>
        </div>
    );
};
