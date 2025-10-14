/// <reference types="vitest/config" />
import { defineConfig, defineProject } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
    typeof __dirname !== 'undefined'
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        exclude: ['node_modules', 'dist'],
        coverage: {
            provider: 'v8', // oder 'v8'
            reporter: ['text', 'lcov'],
            exclude: [
                'src/mocks/**',
                'src/**/*.stories.*',
                'src/**/handlers.*',
                'src/**/types/**',
                'eslint.config.js',
                'vitest.config.ts',
                'vite.config.ts',
                '.storybook',
                'dist',
                'src/main.tsx',
                'public',
            ],
        },
        projects: [
            // Unit / Integration Tests
            defineProject({
                test: {
                    globals: true,
                    environment: 'jsdom',
                    include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
                },
                resolve: {
                    alias: {
                        src: path.resolve(dirname, 'src'),
                    },
                },
            }),
            // Storybook Tests
            defineProject({
                plugins: [
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                        // Optional: storybookScript, storybookUrl, tags etc.
                    }),
                ],
                test: {
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [{ browser: 'chromium' }],
                    },
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
                optimizeDeps: {
                    include: [
                        'react',
                        'react-dom',
                        'react/jsx-dev-runtime',
                        '@storybook/react',
                        'markdown-to-jsx',
                    ],
                },
                resolve: {
                    alias: {
                        src: path.resolve(dirname, 'src'),
                    },
                },
            }),
        ],
    },
});
