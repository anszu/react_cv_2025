import type { ContentType } from 'src/Data/types/ContentData';
type ProjectsData = ContentType['projects'];

export const Projects = ({ data }: { data: ProjectsData }) => (
    <section>
        {data.map((p, i) => (
            <div key={`${p.name}-${i}`}>
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                {p.link && <a href={p.link}>{p.link}</a>}
            </div>
        ))}
    </section>
);
