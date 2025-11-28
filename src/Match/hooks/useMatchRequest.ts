import { useState } from 'react';

interface MatchResult {
    answer: string;
}

export const useMatchRequest = (cvData: any) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const baseUrl = import.meta.env.PROD
        ? import.meta.env.VITE_API_URL_PROD
        : import.meta.env.VITE_API_URL;

    const run = async (jobDescription: string) => {
        setError(null);
        setLoading(true);

        try {
            const response = await fetch(`${baseUrl}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cvData, jobDescription }),
            });

            if (!response.ok) {
                throw new Error('Server responded with an error');
            }

            const data: MatchResult = await response.json();
            setResult(data.answer);
        } catch (err) {
            console.error(err);
            setError(
                'An error occurred on the server. Please try again later.',
            );
            setResult('');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, result, run };
};
