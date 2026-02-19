import type { Meta, StoryObj } from '@storybook/react';
import { DataContext } from 'src/Data/DataContext';
import { Section } from 'src/Sections/Section';
import { SectionId } from 'src/Data/types/SectionData';

const meta: Meta<typeof Section> = {
    title: 'Sections/Section',
    component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

const mockProviderValue = {
    contentData: {},
    contentError: null,
    contentLoading: false,
    sectionData: [],
    sectionLoading: false,
    sectionError: null,
};

export const Default: Story = {
    args: {
        id: SectionId.HEADING,
        title: 'Header',
        icon: '📚',
    },
};

export const LoadingContent: Story = {
    render: () => (
        <DataContext.Provider
            value={{ ...mockProviderValue, contentLoading: true }}
        >
            <Section id={SectionId.EXPERIENCE} title="Experience" icon="😎" />
        </DataContext.Provider>
    ),
};
