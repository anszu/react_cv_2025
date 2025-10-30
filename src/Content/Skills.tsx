import type { ContentType } from 'src/Data/types/ContentData';
type SkillsData = ContentType['skills'];

export const Skills = ({ data }: { data: SkillsData }) => (
    <ul className="flex flex-col gap-4">
        {data?.map((item, index) => (
            <li key={index}>
                <h3 className="font-bold">{item.label}:</h3>
                <p>{item.text}</p>
            </li>
        ))}
    </ul>
);
