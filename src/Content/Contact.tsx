import type { ContactData } from 'src/Data/schemas/ContactSchema';
import { Link } from 'src/shared/Link';

export const Contact = ({ data }: { data: ContactData }) => (
    <div>
        <h3>{data.name}</h3>
        {data.phone && <div>{data.phone}</div>}
        <address className="not-italic">
            {data.links?.map((link, id) => (
                <div key={`${link.label}-${id}`} className="flex">
                    <div className="min-w-32 mr-4">{link.label}: </div>
                    <Link href={link.url}>{link.url}</Link>
                </div>
            ))}
        </address>
    </div>
);
