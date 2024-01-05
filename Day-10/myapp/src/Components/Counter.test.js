import { render, screen } from '@testing-library/react';
import  Counter from './Counter';

test('Counter_test_1', () => {
  render(<Counter/>);
  const linkElement = screen.getByText(/0/);
  expect(linkElement).toBeInTheDocument();
});
test('Counter_test_2', () => {
  render(<Counter/>);
  const inc=screen.getByText('+');
  const linkElement=screen.getByText(/0/)
  fireEvent.click(inc);
  expect(linkElement).toHaveTextContent('1');
});
test('Counter_test_3', () => {
  render(<Counter/>);
  const inc=screen.getByText('-');
  const linkElement=screen.getByText(/0/)
  fireEvent.click(inc);
  expect(linkElement).toHaveTextContent('-1');
});

