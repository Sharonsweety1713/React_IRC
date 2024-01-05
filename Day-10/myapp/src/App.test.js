import { render, screen } from '@testing-library/react';
import App from './App';

test('test_1', () => {
  render(<App />);
  const linkElement = screen.getByText(/sharon/i);
  expect(linkElement).toBeInTheDocument();
});
