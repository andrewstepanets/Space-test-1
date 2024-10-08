import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Test } from './test';
import { render } from '../test-utils/render-with-chakra';

describe('Test Component', () => {
  it('renders the cheapest 5 items by default', () => {
    render(<Test />);

    expect(screen.getByText(/Item A/i)).toBeInTheDocument();
    expect(screen.getByText(/Item B/i)).toBeInTheDocument();
    expect(screen.getByText(/Item G/i)).toBeInTheDocument();
    expect(screen.getByText(/Item D/i)).toBeInTheDocument();
    expect(screen.getByText(/Item C/i)).toBeInTheDocument();

    expect(screen.queryByText(/Item F/i)).not.toBeInTheDocument();
  });

  it('filters items by name', async () => {
    render(<Test />);

    await userEvent.type(
      screen.getByPlaceholderText(/Filter by name/i),
      'Item A'
    );

    expect(screen.getByText(/Item A/i)).toBeInTheDocument();
    expect(screen.queryByText(/Item B/i)).not.toBeInTheDocument();
  });

  it('shows "No items found" when there are no matches', async () => {
    render(<Test />);

    await userEvent.type(
      screen.getByPlaceholderText(/Filter by name/i),
      'Nonexistent'
    );

    expect(screen.getByText(/No items found/i)).toBeInTheDocument();
  });

  it('toggles between cheapest 5 items and all items', async () => {
    render(<Test />);

    await userEvent.click(screen.getByText(/Show All Items/i));

    expect(screen.getByText(/Item A/i)).toBeInTheDocument();
    expect(screen.getByText(/Item B/i)).toBeInTheDocument();
    expect(screen.getByText(/Item C/i)).toBeInTheDocument();
    expect(screen.getByText(/Item D/i)).toBeInTheDocument();
    expect(screen.getByText(/Item E/i)).toBeInTheDocument();
    expect(screen.getByText(/Item F/i)).toBeInTheDocument();
    expect(screen.getByText(/Item G/i)).toBeInTheDocument();
    expect(screen.getByText(/Item H/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText(/Show Cheapest 5/i));

    expect(screen.getByText(/Item A/i)).toBeInTheDocument();
    expect(screen.getByText(/Item B/i)).toBeInTheDocument();
    expect(screen.getByText(/Item G/i)).toBeInTheDocument();
    expect(screen.getByText(/Item D/i)).toBeInTheDocument();
    expect(screen.getByText(/Item C/i)).toBeInTheDocument();
    expect(screen.queryByText(/Item F/i)).not.toBeInTheDocument();
  });

  it('clears filter when toggling between views', async () => {
    render(<Test />);

    await userEvent.type(
      screen.getByPlaceholderText(/Filter by name/i),
      'Item A'
    );

    expect(screen.getByText(/Item A/i)).toBeInTheDocument();
    expect(screen.queryByText(/Item B/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText(/Show All Items/i));

    expect(screen.getByPlaceholderText(/Filter by name/i)).toHaveValue('');
    expect(screen.getByText(/Item A/i)).toBeInTheDocument();
    expect(screen.getByText(/Item F/i)).toBeInTheDocument();
  });
});
