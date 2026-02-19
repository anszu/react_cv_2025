import { Description } from 'src/shared/Description';
import { Link } from 'src/shared/Link';
import { Subtitle } from 'src/shared/Subtitle';
import type { ExperienceData } from 'src/Data/schemas/ExperienceSchema';

export const Experience = ({ data }: { data: ExperienceData }) => (
    <ul className="flex flex-col gap-6 print:gap-4">
        {data.map((item, i) => (
            <li
                key={`${item.company}-${item.position}-${i}`}
                className="flex flex-col gap-3 print:last:mb-0"
            >
                <h3 className="font-bold">
                    {item.position} —{' '}
                    {item.link ? (
                        <Link href={item.link}>{item.company}</Link>
                    ) : (
                        <span>{item.company}</span>
                    )}
                    <Subtitle>
                        {item.location} • {item.period}
                    </Subtitle>
                </h3>

                {item.description && (
                    <Description description={item.description} />
                )}
                {item.tasks && (
                    <ul className="list-disc pl-4 print:last:mb-0">
                        {item.tasks.map((t, j) => (
                            <li key={j}>{t}</li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
);
