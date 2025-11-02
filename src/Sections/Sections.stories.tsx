import type { Meta, StoryObj } from '@storybook/react';
import { DataContext } from 'src/Data/DataContext';
import { Sections } from 'src/Sections/Sections';

const meta: Meta<typeof Sections> = {
    title: 'Sections',
    component: Sections,
};

export default meta;

type Story = StoryObj<typeof Sections>;

const mockProviderValue = {
    contentData: [],
    contentError: null,
    contentLoading: false,
    sectionData: [],
    sectionLoading: false,
    sectionError: null,
};

export const Default: Story = {};

export const Loading: Story = {
    render: () => (
        <DataContext.Provider
            value={{ ...mockProviderValue, sectionLoading: true }}
        >
            <Sections />
        </DataContext.Provider>
    ),
};
