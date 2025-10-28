import type { ContentType } from 'src/Data/types/ContentData';
type SkillsData = ContentType['skills'];

export const Skills = ({ data }: { data: SkillsData }) => (
    <div>
        {data?.map((item, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-bold">{item.label}:</h3>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
);
