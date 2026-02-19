import React from 'react';
import { Link } from 'src/shared/Link';
import { List } from 'src/shared/List';
import type { EducationData } from 'src/Data/schemas/EducationSchema';

export const Education = React.memo(({ data }: { data: EducationData }) => (
    <List>
        {data?.filter(Boolean).map((edu, i) => (
            <li key={`edu-${i}`}>
                <h3 className="font-bold">{edu.degree}</h3>
                {edu.link ? (
                    <Link href={edu.link}>{edu.school}</Link>
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
    </List>
));
