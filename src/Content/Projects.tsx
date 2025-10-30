import type { ContentType } from 'src/Data/types/ContentData';
type ProjectsData = ContentType['projects'];

export const Projects = ({ data }: { data: ProjectsData }) => (
    <div>
        {data.map((p, i) => (
            <div key={`${p.name}-${i}`}>
                <h3 className="font-bold">{p.name}</h3>
                {p.link && (
                    <a
                        href={p.link}
                        className="block mb-4 underline hover:text-blue-500 hover:no-underline"
                    >
                        {p.link}
                    </a>
                )}
                <p className="italic text-sm">{p.description}</p>
            </div>
        ))}
    </div>
);
