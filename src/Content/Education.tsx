import React from 'react';
import type { ContentType } from 'src/Data/types/ContentData';
type EducationData = ContentType['education'];

export const Education = React.memo(({ data }: { data: EducationData }) => {
    if (!data || data.length === 0) return null;

    return (
        <ul>
            {data.filter(Boolean).map((edu, i) => (
                <li key={`edu-${i}`} className="mb-4">
                    <strong>{edu.degree}</strong>
                    {edu.link ? (
                        <a
                            className="block underline hover:text-blue-500 hover:no-underline"
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {edu.school}
                        </a>
                    ) : (
                        <p>{edu.school}</p>
                    )}
                    <p>
                        {edu.location}
                        {edu.year && (
                            <>
                                {edu.location && ' — '}
                                <time dateTime={`${edu.year}-01-01`}>
                                    {edu.year}
                                </time>
                            </>
                        )}
                    </p>
                </li>
            ))}
        </ul>
    );
});
