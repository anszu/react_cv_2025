import type { ContentType } from 'src/Data/types/ContentData';
import { List } from 'src/shared/List';
type SkillsData = ContentType['skills'];

export const Skills = ({ data }: { data: SkillsData }) => (
    <List>
        {data?.map((item, index) => (
            <li key={index}>
                <h3 className="font-bold">{item.label}:</h3>
                <p>{item.text}</p>
            </li>
        ))}
    </List>
);
