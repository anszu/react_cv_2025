import type { Preview } from '@storybook/react-vite';
import React from 'react';
import 'src/index.css';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';
import { DataProvider } from '../src/Data/DataProvider';
import type { Decorator } from '@storybook/react';

initialize({ onUnhandledRequest: 'warn' });

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        msw: {
            handlers,
        },
        a11y: {
            test: 'todo',
        },
    },
};

export const loaders = [mswLoader];

export const decorators: Decorator[] = [
    (Story) =>
        React.createElement(DataProvider, null, React.createElement(Story)),
];

export default preview;
