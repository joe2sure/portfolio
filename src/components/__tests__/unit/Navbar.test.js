import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from "../../Navbar";
// import { BrowserRouter as Router } from "react-router-dom";

test("render Navbar component", () => {
  render(<NavBar />);

  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  const skillsLink = screen.getByText(/Skill/i);
  expect(skillsLink).toBeInTheDocument();

  const projectLink = screen.getByText(/Project/i);
  expect(projectLink).toBeInTheDocument();
});
