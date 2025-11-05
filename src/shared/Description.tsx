type Props = {
    description: string;
};

export const Description = ({ description }: Props) => (
    <p className={`italic text-sm`}>{description}</p>
);
