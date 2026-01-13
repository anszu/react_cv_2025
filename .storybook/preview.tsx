import type { Preview } from '@storybook/react-vite';
import React from 'react';
import 'src/index.css';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';
import { DataProvider } from '../src/Data/DataProvider';
import type { Decorator } from '@storybook/react';

const BASE_PATH =
    location.hostname === 'localhost'
        ? '/' // local
        : '/react_cv_2025/storybook/'; // GitHub pages

initialize({
    onUnhandledRequest: 'warn',
    serviceWorker: {
        url: `${BASE_PATH}mockServiceWorker.js`,
    },
});

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
    (Story) => (
        <div
            style={{
                backgroundColor: 'white',
                padding: '1rem',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <DataProvider>
                <Story />
            </DataProvider>
        </div>
    ),
];

export default preview;
