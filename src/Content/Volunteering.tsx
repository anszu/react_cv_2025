import type { ContentType } from 'src/Data/types/ContentData';
type VolunteeringData = ContentType['volunteering'];

export const Volunteering = ({ data }: { data: VolunteeringData }) => (
    <section>
        {data.map((v, i) => (
            <div key={`${v.organization}-${i}`}>
                <strong>{v.role}</strong> — {v.organization} ({v.period})
                <ul>
                    {v.tasks.map((t, j) => (
                        <li key={j}>{t}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);
