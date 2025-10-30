import { useEffect, useState } from 'react';
import type { ContentData } from 'src/Data/types/ContentData';
import type { SectionData } from 'src/Data/types/SectionData';

type DataType = ContentData | SectionData;

export const useData = <T = DataType>(dataSrc: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    import.meta.env.BASE_URL + 'json/' + dataSrc,
                );

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
