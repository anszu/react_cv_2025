import { useState } from 'react';

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
            const cvData = await fetch('public/json/content.json').then((r) => {
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
                Let’s check it out! <span>🤖</span>
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
                    <p>
                        {error && !loading && (
                            <span className="italic text-red-500">
                                {result}
                            </span>
                        )}
                        {loading && (
                            <span className="mt-4 flex items-center italic text-gray-500">
                                <span className="loader mr-2"></span>
                                Analysing the match... 💼🤖
                            </span>
                        )}
                    </p>
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
            {/* CSS für Loader */}
            <style>{`
                .loader {
                    border: 3px solid #f3f3f3;
                    border-top: 3px solid #3498db;
                    border-radius: 50%;
                    width: 16px;
                    height: 16px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};
