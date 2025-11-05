import type React from 'react';

type Props = {
    children: React.ReactNode;
    optionalClasses?: string;
};

export const Subtitle = ({ children, optionalClasses }: Props) => (
    <span
        className={`block text-sm text-gray-500 font-normal ${optionalClasses}`}
    >
        {children}
    </span>
);
