import type { ContentType } from 'src/Data/types/ContentData';
type ExperienceData = ContentType['experience'];

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
                        <a
                            href={item.link}
                            className="underline hover:text-blue-500 hover:no-underline"
                        >
                            {item.company}
                        </a>
                    ) : (
                        <span>{item.company}</span>
                    )}
                    <span className="block text-sm text-gray-500 font-normal">
                        {item.location} • {item.period}
                    </span>
                </h3>

                {item.description && (
                    <p className="italic text-sm">{item.description}</p>
                )}

                <ul className="list-disc pl-4 print:last:mb-0">
                    {item.tasks.map((t, j) => (
                        <li key={j}>{t}</li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
);
