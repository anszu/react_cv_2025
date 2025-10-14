import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from 'src/App';

describe('App', () => {
    it('renders headline', async () => {
        render(<App />);
        expect(await screen.findByTestId('app')).toBeInTheDocument();
    });
});
