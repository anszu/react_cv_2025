import type { ContentType } from 'src/Data/types/ContentData';
type CertificatesData = ContentType['certificates'];

export const Certificates = ({ data }: { data: CertificatesData }) => (
    <ul>
        {data.map((c, i) => (
            <li key={`${c.name}-${i}`}>
                {c.name} — {c.year}
            </li>
        ))}
    </ul>
);
