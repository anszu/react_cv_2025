type Props = {
    onClick: () => void;
    loading: boolean;
};

export const MatchButton = ({ onClick, loading }: Props) => (
    <button
        data-testid="match-button"
        onClick={onClick}
        disabled={loading}
        className={`text-sm self-end font-semibold py-2 px-4 rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
    >
        Check Match
    </button>
);
