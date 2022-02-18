import { render, fireEvent, waitFor } from '@testing-library/react';
import ButtonProgressive from '.';

const mockedNavigator = jest.fn();

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as any),
  useNavigate: () => mockedNavigator
}));

describe('ButtonProgressive Component', () => {
  it('should renders correctly', () => {
    const { getByText } = render(<ButtonProgressive title="Olá" navigation="/" />);

    expect(getByText('Olá')).toBeInTheDocument();
  });

  it('receive active class when click it', () => {
    const { getByRole } = render(<ButtonProgressive title="Olá" navigation="/" />);

    const button = getByRole('button');

    fireEvent.click(button);

    waitFor(() => expect(button).toHaveClass('active'), { timeout: 200 });
  });
});
