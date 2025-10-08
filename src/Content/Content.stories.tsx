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
