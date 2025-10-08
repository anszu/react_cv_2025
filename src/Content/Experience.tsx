import type { ContentType } from 'src/Data/types/ContentData';
type ExperienceData = ContentType['experience'];

export const Experience = ({ data }: { data: ExperienceData }) => (
    <section>
        {data.map((item, i) => (
            <article key={`${item.company}-${item.position}-${i}`}>
                <h3>
                    {item.position} — {item.company}
                </h3>
                <div>
                    {item.location} • {item.period}
                </div>
                <ul>
                    {item.tasks.map((t, j) => (
                        <li key={j}>{t}</li>
                    ))}
                </ul>
            </article>
        ))}
    </section>
);
