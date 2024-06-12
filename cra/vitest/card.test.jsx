import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import Card from '../host/src/Card.jsx';

describe('Card component', () => {
  it('renders the correct text', () => {
    const text = 'I am host';
    render(<Card text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
