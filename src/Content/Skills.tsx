import { List } from 'src/shared/List';
import type { SkillsData } from 'src/Data/schemas/SkillsSchema';

export const Skills = ({ data }: { data: SkillsData }) => (
    <List>
        {data.map((item, index) => (
            <li key={index}>
                <h3 className="font-bold">{item.label}:</h3>
                <p>{item.text}</p>
            </li>
        ))}
    </List>
);
