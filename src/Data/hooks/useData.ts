import { useEffect, useState } from 'react';
import type { ContentData } from 'src/Data/types/ContentData';
import type { SectionsData } from 'src/Data/types/SectionsData';

type DataType = ContentData | SectionsData;

export const useData = (dataSrc: string) => {
    const [data, setData] = useState<DataType | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(dataSrc);

                if (!response.ok) {
                    throw Error(
                        `Error fetching data. Status: ${response.statusText}`,
                    );
                }

                const responseJson = await response.json();

                setData(responseJson);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dataSrc]);

    return { data, error, loading };
};
