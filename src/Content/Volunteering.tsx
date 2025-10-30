import type { ContentType } from 'src/Data/types/ContentData';
type VolunteeringData = ContentType['volunteering'];

export const Volunteering = ({ data }: { data: VolunteeringData }) => (
    <div>
        {data.map((v, i) => (
            <div key={`${v.organization}-${i}`}>
                <h3 className="font-bold">{v.role}</h3>
                <p className="mb-4 text-sm text-gray-500">
                    {v.organization} ({v.period})
                </p>
                <ul className="italic text-sm">
                    {v.tasks.map((t, j) => (
                        <li key={j}>{t}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);
