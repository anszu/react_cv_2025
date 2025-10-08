import type { ContentType } from 'src/Data/types/ContentData';
type TldrData = ContentType['summary'];

export const Tldr = ({ data }: { data: TldrData }) => <p>{data}</p>;
