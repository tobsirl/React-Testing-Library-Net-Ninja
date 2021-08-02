import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('renders the <Header /> component', () => {
  render(<Header title="Todo" />);

  const headingElement = screen.getByText(/todo/i);

  expect(headingElement).toBeInTheDocument();
});

it('renders the <Header /> component using getByRole', () => {
  render(<Header title="Todo" />);

  const headingElement = screen.getByRole('heading', { name: /todo/i });

  expect(headingElement).toBeInTheDocument();
});
