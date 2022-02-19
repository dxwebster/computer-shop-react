import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '.';

describe('Button Component', () => {
  it('should renders correctly', () => {
    render(<Button isProgressive={false}>Olá</Button>, { wrapper: BrowserRouter });

    expect(screen.getByText('Olá')).toBeInTheDocument();
  });
});
