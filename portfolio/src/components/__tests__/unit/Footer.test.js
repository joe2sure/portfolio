import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../../Footer";

test("renders Footer component", () => {
  render(<Footer />);

  const copyrightText = screen.getByText(
    /Joe's Copyright 2024. All Rights Reserved/i
  );
  expect(copyrightText).toBeInTheDocument();

  const logo = screen.getByAltText(/Logo/i);
  expect(logo).toBeInTheDocument();

  const socialIcon = screen.getAllByRole("img");
  expect(socialIcon.length).toBe(4); // 3 social icons +1 logo
});
