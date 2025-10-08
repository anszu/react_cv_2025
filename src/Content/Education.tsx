import type { ContentType } from 'src/Data/types/ContentData';
type EducationData = ContentType['education'];

export const Education = ({ data }: { data: EducationData }) => (
    <section>
        {data.map((edu, i) => (
            <div key={`${edu.school}-${i}`}>
                <strong>{edu.degree}</strong> — {edu.school} ({edu.year})
            </div>
        ))}
    </section>
);
