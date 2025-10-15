import type { ContentType } from 'src/Data/types/ContentData';
type ContactData = ContentType['contact'];

export const Contact = ({ data }: { data: ContactData }) => (
    <div className="space-y-4">
        {data.name && <h3>{data.name}</h3>}
        {data.phone && <div>{data.phone}</div>}
        <address className="not-italic">
            {data?.links.map((link, id) => (
                <div key={`${link.label}-${id}`} className="flex">
                    <div className="min-w-32 max-w-64 overflow-hidden mr-4 text-ellipsis">
                        {link.label}:{' '}
                    </div>
                    <a
                        href={link.url}
                        className="underline hover:text-blue-500 hover:no-underline max-w-64 overflow-hidden text-ellipsis"
                    >
                        {link.url}
                    </a>
                </div>
            ))}
        </address>
    </div>
);
