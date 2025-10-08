import type { ContentType } from 'src/Data/types/ContentData';
type SummaryData = ContentType['summary'];

export const Summary = ({ data }: { data: SummaryData }) => <p>{data}</p>;
