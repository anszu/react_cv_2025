import type { Meta, StoryObj } from '@storybook/react';
import { Description } from 'src/shared/Description';
import { Link } from 'src/shared/Link';
import { List } from 'src/shared/List';
import { LoadingSpinner } from 'src/shared/LoadingSpinner';
import { Subtitle } from 'src/shared/Subtitle';

const meta: Meta = {
    title: 'Shared',
};

export default meta;

export const DescriptionElement: StoryObj<typeof Description> = {
    render: () => (
        <Description description="This is an example description rendered in italics and small text." />
    ),
};

export const LinkElement: StoryObj<typeof Link> = {
    render: () => (
        <>
            <Link href="https://example.com">This is an example link.</Link>
            &nbsp; with optional classes: &nbsp;
            <Link href="https://example.com" optionalClasses="text-blue-500">
                This is an example link.
            </Link>
        </>
    ),
};

export const ListElement: StoryObj<typeof List> = {
    render: () => (
        <>
            <List>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </List>
            &nbsp; with optional classes: &nbsp;
            <List optionalClasses="text-blue-500">
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </List>
        </>
    ),
};

export const LoadingSpinnerElement: StoryObj<typeof LoadingSpinner> = {
    render: () => (
        <>
            &nbsp; Small: &nbsp;
            <LoadingSpinner size="sm" />
            &nbsp; Medium: &nbsp;
            <LoadingSpinner size="md" />
            &nbsp; Large: &nbsp;
            <LoadingSpinner size="lg" />
        </>
    ),
};

export const SubtitleElement: StoryObj<typeof Subtitle> = {
    render: () => (
        <>
            <Subtitle>This is an example subtitle.</Subtitle>
            &nbsp; with optional classes: &nbsp;
            <Subtitle optionalClasses="bg-yellow-200">
                This is an example subtitle.
            </Subtitle>
        </>
    ),
};
