import type { ContentType } from 'src/Data/types/ContentData';
type ContactData = ContentType['contact'];

export const Contact = ({ data }: { data: ContactData }) => (
    <address>
        <div>{data.name}</div>
        <div>
            <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        <div>{data.phone}</div>
        {data.linkedin && (
            <div>
                <a href={data.linkedin}>{data.linkedin}</a>
            </div>
        )}
        {data.github && (
            <div>
                <a href={data.github}>{data.github}</a>
            </div>
        )}
    </address>
);
