import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main page with hero section', () => {
    render(<App />);
    // Check for a headline from your Hero component
    // Using a regex to be flexible with the exact text
    expect(screen.getByRole('heading', { name: /Master a new language/i })).toBeInTheDocument();
  });
});
