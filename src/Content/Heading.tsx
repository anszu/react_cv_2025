import type { ContentType } from 'src/Data/types/ContentData';
type HeadingData = ContentType['heading'];

export const Heading = ({ data }: { data: HeadingData }) => (
    <header>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
    </header>
);
