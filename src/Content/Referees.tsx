import type { ContentType } from 'src/Data/types/ContentData';
type RefereesData = ContentType['referees'];

export const Referees = ({ data }: { data: RefereesData }) => <div>{data}</div>;
