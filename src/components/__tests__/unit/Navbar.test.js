import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("render Navbar component", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  const skillsLink = screen.getByText(/Skill/i);
  expect(skillsLink).toBeInTheDocument();

  const projectLink = screen.getByText();
  expect(projectLink).toBeInTheDocument();
});
