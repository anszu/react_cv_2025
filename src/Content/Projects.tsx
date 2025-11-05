import type { ContentType } from 'src/Data/types/ContentData';
import { Description } from 'src/shared/Description';
import { Link } from 'src/shared/Link';
import { List } from 'src/shared/List';

type ProjectsData = ContentType['projects'];

export const Projects = ({ data }: { data: ProjectsData }) => (
    <List>
        {data.map((p, i) => (
            <li key={`${p.name}-${i}`}>
                <h3 className="font-bold">{p.name}</h3>
                {p.link && (
                    <Link href={p.link} optionalClasses="mb-4 block">
                        {p.link}
                    </Link>
                )}
                <Description description={p.description} />
            </li>
        ))}
    </List>
);
