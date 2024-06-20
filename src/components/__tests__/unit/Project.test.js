import React from "react";
import { screen, render } from "@testing-library/react";
import { Project } from "../../Project";

test("render Project component", () => {
  render(<Project />);

  // Use a more specific query or expect multiple elements
  const headings = screen.getAllByText(/Projects/i);
  expect(headings.length).toBeGreaterThan(0); // Ensure at least one element is found

  const firstProject = screen.getByText(
    /E-Commerce Web Application \(amazon clone\)/i
  );
  expect(firstProject).toBeInTheDocument();
});
