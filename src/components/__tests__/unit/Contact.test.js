import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Contact } from "../../Contact";

test("render Contact component", () => {
  render(<Contact />);

  const heading = screen.getByText(/Get In Touch/i);
  expect(heading).toBeInTheDocument();

  const firstNameInput = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameInput).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  expect(emailInput).toBeInTheDocument();

  const messageTextarea = screen.getByPlaceholderText(/Message/i);
  expect(messageTextarea).toBeInTheDocument();
});

test("submit Contact form", async () => {
  render(<Contact />);
  const firstNameInput = screen.getByPlaceholderText(/First Name/i);
  fireEvent.change(firstNameInput, { target: { value: "John" } });
  expect(firstNameInput.value).toBe("John");

  const submitButton = screen.getByText(/send/i);
  fireEvent.click(submitButton);

  // Check the state of the button after the click event
  expect(submitButton.textContent).toBe("Sending...");
});
