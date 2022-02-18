import { render } from '@testing-library/react';
import EmptyMessage from '.';

describe('EmptyMessage Component', () => {
  it('should renders correctly', () => {
    const { getByText } = render(<EmptyMessage />);

    expect(getByText('Ver Produtos')).toBeInTheDocument();
  });
});
