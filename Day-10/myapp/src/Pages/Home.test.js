import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home_test_1', () => {
  render(<Home />);
  const linkElement = screen.getByText(/srm/i);
  expect(linkElement).toBeInTheDocument();
});
test('Home_test_2', () => {
  render(<Home />);
  const linkElement = screen.getByText(/react_irc/i);
  expect(linkElement).toBeInTheDocument();
});
