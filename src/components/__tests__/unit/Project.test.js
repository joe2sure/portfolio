import React from "react";
import { screen, render } from "@testing-library/react";
import { Project } from "../../Project";

test("render Project component", () => {
  render(<Project />);

  const heading = screen.getByText(/Projects/i);
  expect(heading).toBeInTheDocument();

  const firstProject = screen.getByText(
    /E-Commerce Web Application (amazon clone)/i
  );
  expect(firstProject).toBeInTheDocument();
});
