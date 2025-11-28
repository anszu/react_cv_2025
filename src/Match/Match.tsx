import { useState } from 'react';
import { useDataContext } from 'src/Data/hooks/useDataContext';
import { CtaButton } from 'src/Match/CtaButton';
import { MatchButton } from 'src/Match/MatchButton';
import { InfoBox } from 'src/Match/InfoBox';
import { useMatchRequest } from 'src/Match/hooks/useMatchRequest';

export const Match = () => {
    const [showInput, setShowInput] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);
    const [jobDescription, setJobDescription] = useState('');

    const { contentData: cvData, contentError } = useDataContext<any>();
    const { loading, error, result, run } = useMatchRequest(cvData);

    const toggleInput = () => {
        setShowInput((prev) => !prev);
        setJobDescription('');
    };

    const handleClick = () => {
        setValidationError(null);

        if (!cvData || contentError) {
            setValidationError(
                'Error loading CV data, please try again later.',
            );
            return;
        }

        if (!jobDescription.trim()) {
            setValidationError('Please enter a job description.');
            return;
        }

        run(jobDescription);
    };

    return (
        <div className="print:hidden">
            <CtaButton onClick={toggleInput} />
            <div
                data-testid="match-container"
                aria-hidden={!showInput}
                className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
                    showInput
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <textarea
                    data-testid="match-input"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here..."
                    className="w-full p-2 border border-gray-300 rounded h-32 mb-2 mt-2"
                />

                <div className="flex flex-row justify-between items-center gap-4">
                    <InfoBox
                        validationError={validationError}
                        serverError={error}
                        loading={loading}
                    />
                    <MatchButton onClick={handleClick} loading={loading} />
                </div>
            </div>

            {!error && !loading && result && (
                <p className="mt-4 italic text-gray-700">{result}</p>
            )}
        </div>
    );
};
