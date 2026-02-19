import type { SummaryData } from 'src/Data/schemas/SummarySchema';

export const Summary = ({ data }: { data: SummaryData }) => (
    <p className="italic">{data}</p>
);
