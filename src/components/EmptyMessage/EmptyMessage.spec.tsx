import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EmptyMessage from '.';

describe('EmptyMessage Component', () => {
  it('should renders correctly', () => {
    render(<EmptyMessage />, { wrapper: BrowserRouter });

    expect(screen.getByTestId('empty-message')).toBeInTheDocument();
  });
});
