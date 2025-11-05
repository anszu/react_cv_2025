type Props = {
    children: React.ReactNode;
    optionalClasses?: string;
    gap?: number;
};

export const List = ({ children, optionalClasses, gap = 4 }: Props) => (
    <ul className={`flex flex-col gap-${gap} ${optionalClasses}`}>
        {children}
    </ul>
);
