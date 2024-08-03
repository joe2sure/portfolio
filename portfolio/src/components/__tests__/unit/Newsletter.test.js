import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Newsletter } from '../../Newsletter';

describe('Newsletter', () => {
  it('renders the form and input elements', () => {
    render(<Newsletter onValidated={() => {}} />);
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('displays error message for invalid email', () => {
    render(<Newsletter onValidated={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email Address');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  it('calls onValidated with valid email', () => {
    const mockOnValidated = jest.fn();
    render(<Newsletter onValidated={mockOnValidated} />);
    const emailInput = screen.getByPlaceholderText('Email Address');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(mockOnValidated).toHaveBeenCalledWith({ email: 'test@example.com' }, expect.any(Function));
  });
});
