import { render, screen } from '@testing-library/react';
import App from './App';

it('Renderiza página', () => {
  render(<App />);
  const linkElement = screen.getByText(/Copa de filmes/i);
  expect(linkElement).toBeInTheDocument();
});
