import type { Meta, StoryObj } from '@storybook/react';
import { DataContext } from 'src/Data/DataContext';
import { SectionId } from 'src/Data/types/SectionData';
import { Sections } from 'src/Sections/Sections';

const meta: Meta<typeof Sections> = {
    title: 'Sections',
    component: Sections,
};

export default meta;

type Story = StoryObj<typeof Sections>;

const mockProviderValue = {
    contentData: {},
    contentError: null,
    contentLoading: false,
    sectionData: [],
    sectionLoading: false,
    sectionError: null,
};

const mockSectionData = [
    {
        id: SectionId.HEADING,
        title: 'CV with empty content',
    },
    {
        id: SectionId.CONTACT,
    },
    {
        id: SectionId.SUMMARY,
    },
    {
        id: SectionId.EDUCATION,
    },
    {
        id: SectionId.EXPERIENCE,
    },
    {
        id: SectionId.PROJECTS,
    },
    {
        id: SectionId.REFEREES,
    },
    {
        id: SectionId.SKILLS,
    },
    {
        id: SectionId.VOLUNTEERING,
    },
];

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

export const EmptyContent: Story = {
    render: () => (
        <DataContext.Provider
            value={{ ...mockProviderValue, sectionData: [...mockSectionData] }}
        >
            <Sections />
        </DataContext.Provider>
    ),
};
