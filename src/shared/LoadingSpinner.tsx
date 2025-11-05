type SpinnerSize = 'sm' | 'md' | 'lg';

const sizeClasses: Record<SpinnerSize, string> = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-8',
};

type Props = {
    size?: SpinnerSize;
};

export const LoadingSpinner = ({ size = 'md' }: Props) => (
    <div
        className={`${sizeClasses[size]} border-gray-300 border-t-blue-500 rounded-full animate-spin`}
        role="status"
        aria-label="Loading..."
    />
);
