import type { ContentType } from 'src/Data/types/ContentData';
import { Subtitle } from 'src/shared/Subtitle';

type VolunteeringData = ContentType['volunteering'];

export const Volunteering = ({ data }: { data: VolunteeringData }) => (
    <div>
        {data.map((v, i) => (
            <div key={`${v.organization}-${i}`}>
                <h3 className="font-bold">{v.role}</h3>
                <Subtitle optionalClasses="mb-4">
                    {v.organization} ({v.period})
                </Subtitle>
                <ul className="italic text-sm">
                    {v.tasks.map((t, j) => (
                        <li key={j}>{t}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);
