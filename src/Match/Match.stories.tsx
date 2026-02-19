import type { Meta, StoryObj } from '@storybook/react-vite';
import { Match } from 'src/Match/Match';
import { within } from '@storybook/testing-library';
import { expect } from 'storybook/test';
import { DataContext } from 'src/Data/DataContext';

const mockProviderValue = {
    contentData: {},
    contentError: null,
    contentLoading: false,
    sectionData: [],
    sectionLoading: false,
    sectionError: null,
};

const meta: Meta<typeof Match> = {
    component: Match,
    title: 'Match',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Opened: Story = {
    play: async ({ canvasElement, userEvent }) => {
        const canvas = within(canvasElement);

        const button = await canvas.findByTestId('cta-button');
        const container = await canvas.findByTestId('match-container');

        expect(container).toHaveAttribute('aria-hidden', 'true');

        await userEvent.click(button);

        expect(container).toHaveAttribute('aria-hidden', 'false');
    },
};

export const CheckMatch: Story = {
    play: async ({ canvasElement, userEvent }) => {
        const canvas = within(canvasElement);

        const button = await canvas.findByTestId('cta-button');

        await userEvent.click(button);

        const matchButton = await canvas.findByTestId('match-button');
        const input = await canvas.findByTestId('match-input');

        await userEvent.type(
            input,
            'We are looking for a skilled software engineer with experience in React and TypeScript.',
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));

        await userEvent.click(matchButton);
    },
};

export const ToggleCtaButton: Story = {
    play: async ({ canvasElement, userEvent }) => {
        const canvas = within(canvasElement);

        const button = await canvas.findByTestId('cta-button');

        await userEvent.click(button);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        await userEvent.click(button);
    },
};

export const ToggleCtaWithResult: Story = {
    play: async ({ canvasElement, userEvent }) => {
        const canvas = within(canvasElement);

        const button = await canvas.findByTestId('cta-button');

        await userEvent.click(button);

        const matchButton = await canvas.findByTestId('match-button');
        const input = await canvas.findByTestId('match-input');

        await userEvent.type(
            input,
            'We are looking for a skilled software engineer with experience in React and TypeScript.',
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));

        await userEvent.click(matchButton);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        await userEvent.click(button);
    },
};

export const ValidationError: Story = {
    play: async ({ canvasElement, userEvent }) => {
        const canvas = within(canvasElement);

        const button = await canvas.findByTestId('cta-button');

        await userEvent.click(button);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const matchButton = await canvas.findByTestId('match-button');

        await userEvent.click(matchButton);
    },
};

export const CvError: Story = {
    render: () => (
        <DataContext.Provider
            value={{
                ...mockProviderValue,
                contentError: 'Error' as unknown as Error,
            }}
        >
            <Match />
        </DataContext.Provider>
    ),
    play: async ({ canvasElement, userEvent }) => {
        const canvas = within(canvasElement);

        const button = await canvas.findByTestId('cta-button');

        await userEvent.click(button);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const matchButton = await canvas.findByTestId('match-button');

        await userEvent.click(matchButton);
    },
};
