import type { ContentType } from 'src/Data/types/ContentData';
import { Link } from 'src/shared/Link';

type ContactData = ContentType['contact'];

export const Contact = ({ data }: { data: ContactData }) => (
    <div>
        {data.name && <h3>{data.name}</h3>}
        {data.phone && <div>{data.phone}</div>}
        <address className="not-italic">
            {data?.links.map((link, id) => (
                <div key={`${link.label}-${id}`} className="flex">
                    <div className="min-w-32 mr-4">{link.label}: </div>
                    <Link href={link.url}>{link.url}</Link>
                </div>
            ))}
        </address>
    </div>
);
