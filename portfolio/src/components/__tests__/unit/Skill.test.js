import React from "react";
import { render, screen } from "@testing-library/react";
import { Skill } from "../../Skill";

test("renders Skill component", () => {
  render(<Skill />);
  const heading = screen.getByText(/Skills/i);
  expect(heading).toBeInTheDocument();
  // const webDevelopment = screen.getByText(/Web Development/i);
  // expect(webDevelopment).toBeInTheDocument();
});
