import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Newsletter } from "../../Newsletter";

test("render Newsletter component", () => {
  const status = "sending...";
  const message = "";
  const onValidated = jest.fn();
  render(
    <Newsletter status={status} message={message} onValidated={onValidated} />
  );

  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  expect(emailInput).toBeInTheDocument();
  const submitButton = screen.getByText(/submit/i);
  expect(submitButton).toBeInTheDocument();
});

test("Submit newsletter form", () => {
  const status = "sending...";
  const message = "";
  const onValidated = jest.fn();

  render(
    <Newsletter status={status} message={message} onValidated={onValidated} />
  );

  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  expect(emailInput.value).toBe("test@example.com");
  const submitButton = screen.getByText(/Submit/i);
  fireEvent.click(submitButton);
  expect(onValidated).toHaveBeenCalledWith({ Email: "test@example.com" });
});
