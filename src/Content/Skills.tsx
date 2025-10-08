import type { ContentType } from 'src/Data/types/ContentData';
type SkillsData = ContentType['skills'];

export const Skills = ({ data }: { data: SkillsData }) => (
    <ul>
        {data.map((s, i) => (
            <li key={i}>{s}</li>
        ))}
    </ul>
);
