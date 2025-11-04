import type { Meta, StoryObj } from '@storybook/react';
import { Content } from 'src/Content/Content';
import { DataContext } from 'src/Data/DataContext';
import { SectionId } from 'src/Data/types/SectionData';

const meta: Meta<typeof Content> = {
    title: 'Content',
    component: Content,
};

export default meta;

type Story = StoryObj<typeof Content>;

const mockProviderValue = {
    contentData: [],
    contentError: null,
    contentLoading: false,
    sectionData: [],
    sectionLoading: false,
    sectionError: null,
};

export const Loading: Story = {
    render: () => (
        <DataContext.Provider
            value={{ ...mockProviderValue, contentLoading: true }}
        >
            <Content sectionId={SectionId.EXPERIENCE} />
        </DataContext.Provider>
    ),
};

export const Heading: Story = {
    args: {
        sectionId: SectionId.HEADING,
    },
};

export const Contact: Story = {
    args: {
        sectionId: SectionId.CONTACT,
    },
};

export const Summary: Story = {
    args: {
        sectionId: SectionId.SUMMARY,
    },
};

export const Skills: Story = {
    args: {
        sectionId: SectionId.SKILLS,
    },
};

export const Experience: Story = {
    args: {
        sectionId: SectionId.EXPERIENCE,
    },
};

export const Education: Story = {
    args: {
        sectionId: SectionId.EDUCATION,
    },
};

export const Projects: Story = {
    args: {
        sectionId: SectionId.PROJECTS,
    },
};

export const Volunteering: Story = {
    args: {
        sectionId: SectionId.VOLUNTEERING,
    },
};

export const Referees: Story = {
    args: {
        sectionId: SectionId.REFEREES,
    },
};

export const NonExistentSectionId: Story = {
    args: {
        sectionId: 'non_existent_section' as unknown as SectionId,
    },
};
