import type { ContentType } from 'src/Data/types/ContentData';
type ContactData = ContentType['contact'];

export const Contact = ({ data }: { data: ContactData }) => (
    <div className="space-y-4">
        {data.name && <h3>{data.name}</h3>}
        {data.phone && <div>{data.phone}</div>}
        <address className="not-italic">
            {data?.links.map((link, id) => (
                <div key={`${link.label}-${id}`} className="flex">
                    <div className="min-w-32 mr-4">{link.label}: </div>
                    <a
                        href={link.url}
                        className="underline overflow-hidden text-ellipsis hover:text-blue-500 hover:no-underline"
                    >
                        {link.url}
                    </a>
                </div>
            ))}
        </address>
    </div>
);
