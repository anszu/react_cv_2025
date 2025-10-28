import type { Meta, StoryObj } from '@storybook/react';
import { Content } from 'src/Content/Content';
import type { SectionId } from 'src/Data/types/SectionData';

const meta: Meta<typeof Content> = {
    title: 'Content',
    component: Content,
};

export default meta;

type Story = StoryObj<typeof Content>;

export const Default: Story = {
    args: {
        contentId: 'non_existent_section' as unknown as SectionId,
    },
};

export const Heading: Story = {
    args: {
        contentId: 'heading',
    },
};

export const Contact: Story = {
    args: {
        contentId: 'contact',
    },
};

export const Summary: Story = {
    args: {
        contentId: 'summary',
    },
};

export const Skills: Story = {
    args: {
        contentId: 'skills',
    },
};

export const Experience: Story = {
    args: {
        contentId: 'experience',
    },
};

export const Education: Story = {
    args: {
        contentId: 'education',
    },
};

export const Projects: Story = {
    args: {
        contentId: 'projects',
    },
};

export const Certificates: Story = {
    args: {
        contentId: 'certificates',
    },
};

export const Volunteering: Story = {
    args: {
        contentId: 'volunteering',
    },
};

export const Referees: Story = {
    args: {
        contentId: 'referees',
    },
};
