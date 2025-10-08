import type { Meta, StoryObj } from '@storybook/react';
import { Section } from 'src/Sections/Section';

const meta: Meta<typeof Section> = {
    title: 'Sections/Section',
    component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
    args: {
        id: 'heading',
        title: 'Header',
        icon: '📚',
    },
};
