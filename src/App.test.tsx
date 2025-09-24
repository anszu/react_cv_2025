import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText(/CV App/i)).toBeInTheDocument();
  });
});
