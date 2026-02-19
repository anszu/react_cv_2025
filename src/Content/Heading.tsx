import { useEffect } from 'react';
import type { HeadingData } from 'src/Data/schemas/HeadingSchema';

export const Heading = ({ data }: { data: HeadingData }) => {
    useEffect(() => {
        document.title = `${data.title}`;
    }, [data.title, data?.subtitle]);

    return (
        <header className="border-b border-gray-500 pb-4">
            <h1 className="text-3xl print:text-2xl font-bold">{data.title}</h1>
            <h2 className="text-gray-500 font-normal">{data?.subtitle}</h2>
        </header>
    );
};
