import { useState } from 'react';
import { LoadingSpinner } from 'src/shared/LoadingSpinner';

// @todo this poc still needs some refactoring: https://github.com/anszu/react_cv_2025/issues/57

export const Match = () => {
    const [loading, setLoading] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState(false);
    const [jobDescription, setJobDescription] = useState('');

    const toggleInput = () => {
        setShowInput((prev) => !prev);
        if (!showInput) {
            setJobDescription('');
            setResult('');
            setError(false);
        }
    };

    const handleClick = async () => {
        if (!jobDescription.trim()) {
            setError(true);
            setResult('Please provide a job description!');
            return;
        }

        setError(false);
        setLoading(true);

        try {
            const cvData = await fetch(
                `${import.meta.env.BASE_URL}json/content.json`,
            ).then((r) => {
                if (!r.ok) throw new Error('Failed to load CV data');
                return r.json();
            });

            const response = await fetch(
                'https://react-cv-2025.onrender.com/api/ask',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cvData, jobDescription }),
                },
            );

            if (!response.ok) {
                throw new Error('Server responded with an error');
            }

            const data = await response.json();
            setResult(data.answer);
        } catch (err) {
            console.error(err);
            setError(true);
            setResult(
                'An error occurred on the server. Please try again later.',
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={toggleInput}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer w-full"
            >
                <span>🧠</span> Wondering if this CV is your next perfect match?
                Let’s check it out!
            </button>

            <div
                className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
                    showInput
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here..."
                    className="w-full p-2 border border-gray-300 rounded h-32 mb-2 mt-2"
                />
                <div className="flex flex-row justify-between items-center">
                    <div className="mr-4">
                        {error && !loading && (
                            <span className="italic text-red-500">
                                {result}
                            </span>
                        )}
                        {loading && (
                            <span className="flex items-center italic text-gray-500">
                                <LoadingSpinner size="sm" />
                                <span className="ml-2">
                                    Analysing the match... 💼🤖
                                </span>
                            </span>
                        )}
                    </div>
                    <button
                        onClick={handleClick}
                        disabled={loading}
                        className={`text-sm self-end font-semibold py-2 px-4 rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ${
                            loading
                                ? 'opacity-50 cursor-not-allowed'
                                : 'cursor-pointer'
                        }`}
                    >
                        Check Match
                    </button>
                </div>
            </div>
            {!error && !loading && result && (
                <p className="mt-4 italic text-gray-700">{result}</p>
            )}
        </div>
    );
};
