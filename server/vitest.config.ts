import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        globals: true,
        setupFiles: ['mocks/setupTests.ts'],
        include: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
    },
});
