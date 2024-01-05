import { render, screen } from '@testing-library/react';
import About from './About';

test('About_test_1', () => {
  render(<About/>);
  const linkElement = screen.getByText(/shinel/i);
  expect(linkElement).toBeInTheDocument();
});
test('About_test_2', () => {
  render(<About/>);
  const linkElement = screen.getByText(/727822tucs212/i);
  expect(linkElement).toBeInTheDocument();
});
