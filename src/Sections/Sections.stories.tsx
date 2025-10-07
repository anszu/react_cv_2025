import type { Meta, StoryObj } from '@storybook/react';
import { Sections } from 'src/Sections/Sections';

const meta: Meta<typeof Sections> = {
    title: 'Sections',
    component: Sections,
};

export default meta;

type Story = StoryObj<typeof Sections>;

export const Default: Story = {};
