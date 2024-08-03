import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EmailJSForm } from '../../EmailjsForm';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({
  send: jest.fn().mockImplementation(() => Promise.resolve({ status: 200, text: 'OK' })),
}));

describe('EmailJSForm', () => {
  it('renders the Newsletter component', () => {
    render(<EmailJSForm />);
    expect(screen.getByText(/Subscribe to My Newsletter/)).toBeInTheDocument();
  });

  it('calls sendEmail function on form submission', async () => {
    const { send } = require('emailjs-com');
    
    await act(async () => {
      render(<EmailJSForm />);
    });

    const emailInput = screen.getByPlaceholderText('Email Address');
    const submitButton = screen.getByText('Submit');

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(send).toHaveBeenCalledWith(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      { to_email: 'test@example.com' },
      process.env.REACT_APP_EMAILJS_PUBLIC_kEY  // Ensure this is correctly spelled
    );
  });
});
