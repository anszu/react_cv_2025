import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoBox } from 'src/Match/InfoBox';

const meta: Meta<typeof InfoBox> = {
    title: 'Match/InfoBox',
    component: InfoBox,
};

export default meta;

type Story = StoryObj<typeof InfoBox>;

export const Default: Story = {};

export const Loading: Story = {
    render: () => <InfoBox loading />,
};

export const ValidationError: Story = {
    render: () => <InfoBox validationError="Please provide text!" />,
};

export const ServerError: Story = {
    render: () => <InfoBox serverError="An error occured on the server!" />,
};
