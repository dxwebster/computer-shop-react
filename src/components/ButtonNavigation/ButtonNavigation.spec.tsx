import { render, fireEvent, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ButtonNavigation from '.';

const mockedNavigator = jest.fn();

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as any),
  useNavigate: () => mockedNavigator
}));

describe('ButtonNavigation Component', () => {
  it('should renders correctly', () => {
    const { getByText } = render(<ButtonNavigation title="Olá" navigation="/" />);

    expect(getByText('Olá')).toBeInTheDocument();
  });

  it('should navigate to given route when click it', () => {
    const history = createMemoryHistory();

    render(<ButtonNavigation title="Olá" navigation="/" />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(history.location.pathname).toEqual('/');
  });
});
