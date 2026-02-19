import { Subtitle } from 'src/shared/Subtitle';
import type { VolunteeringData } from 'src/Data/schemas/VolunteeringSchema';

export const Volunteering = ({ data }: { data: VolunteeringData }) => (
    <div>
        {data.map((v, i) => (
            <div key={`${v.organization}-${i}`}>
                <h3 className="font-bold">{v.role}</h3>
                <Subtitle optionalClasses="mb-4">
                    {v.organization} ({v.period})
                </Subtitle>
                {v.tasks && (
                    <ul className="italic text-sm">
                        {v.tasks.map((t, j) => (
                            <li key={j}>{t}</li>
                        ))}
                    </ul>
                )}
            </div>
        ))}
    </div>
);
