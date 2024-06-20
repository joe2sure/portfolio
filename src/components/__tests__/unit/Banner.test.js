import React from "react";
import { render, screen } from "@testing-library/react";
import { Banner } from "../../Banner";

test("render Banner component", () => {
  render(<Banner />);
  const welcomeText = screen.getByText(/Welcome to Joe's Space/i);
  expect(welcomeText).toBeInTheDocument();

  const heading = screen.getByText(/Hi! I'm Joe,/i);
  expect(heading).toBeInTheDocument();

  // const button = screen.getByText(/Let's Connect/i);
  // expect(button).toBeInTheDocument();
});
