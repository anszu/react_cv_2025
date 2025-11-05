type Props = {
    href: string;
    children: React.ReactNode;
    optionalClasses?: string;
};

export const Link = ({ href, children, optionalClasses }: Props) => (
    <a
        href={href}
        className={`underline overflow-hidden text-ellipsis hover:text-blue-500 hover:no-underline ${optionalClasses}`}
    >
        {children}
    </a>
);
