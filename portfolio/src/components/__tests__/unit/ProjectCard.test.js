import React from "react";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "../../ProjectCard";

test("renders ProjectCard component", () => {
  const project = {
    title: "E-Commerce Web Application (amazon clone)",
    description: "React.js, Node.js, MongoDB",
    imgUrl: "/path/to/image.png",
  };
  render(<ProjectCard {...project} />);
  const title = screen.getByText(project.title);
  expect(title).toBeInTheDocument();
  const description = screen.getByText(project.description);
  expect(description).toBeInTheDocument();
});
