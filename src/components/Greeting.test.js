import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Greeting } from './Greeting';

describe('Greeting component', () => {
  test('renders hello as a text', () => {
    render(<Greeting />);
    const helloElement = screen.getByText(/hello/i);
    expect(helloElement).toBeInTheDocument();
  });

  test('renders This is my greeting if button was not clicked', () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const greetingTextEl = screen.getByText('this is my greeting', {
      exact: false,
    });
    expect(greetingTextEl).toBeInTheDocument();
  });

  test('render changed if button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btn = screen.getByRole('button');
    userEvent.click(btn);

    // Assert
    const outputEl = screen.getByText('changed', {
      exact: false,
    });
    expect(outputEl).toBeInTheDocument();
  });

  test('does not render greeting after button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btn = screen.getByRole('button');
    userEvent.click(btn);

    // Assert
    const outputEl = screen.queryByText('greeting', {
      exact: false,
    });
    expect(outputEl).toBeNull();
  });
});
