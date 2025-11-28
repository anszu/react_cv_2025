type Props = {
    onClick: () => void;
};

export const CtaButton = ({ onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            data-testid="cta-button"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer w-full"
        >
            <span>🧠</span> Wondering if this CV is your next perfect match?
            Let’s check it out!
        </button>
    );
};
