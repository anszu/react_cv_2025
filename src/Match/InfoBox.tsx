import { LoadingSpinner } from 'src/shared/LoadingSpinner';

type Props = {
    serverError?: string | null;
    loading?: boolean;
    validationError?: string | null;
};

export const InfoBox = ({ serverError, loading, validationError }: Props) => (
    <div data-testid="match-info">
        {validationError && !loading && (
            <span className="italic text-red-500">{validationError}</span>
        )}
        {serverError && !loading && (
            <span className="italic text-red-500">{serverError}</span>
        )}
        {loading && (
            <span className="flex items-center italic text-gray-500">
                <LoadingSpinner size="sm" />
                <span className="ml-2">Analysing the match... 💼🤖</span>
            </span>
        )}
    </div>
);
