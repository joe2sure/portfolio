import React from "react";
import { render, screen } from "@testing-library/react";
import { MailchimpForm } from "../../MailchimpForm";

test("renders MailchimpForm component", () => {
  render(<MailchimpForm />);

  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  expect(emailInput).toBeInTheDocument();

  const submitButton = screen.getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
