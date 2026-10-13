import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("renders the home page heading", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1, name: "Mikael Boutin" })).toBeInTheDocument();
});

it("covers every section of the resume in one main landmark", () => {
  render(<Home />);
  const names = screen.getAllByRole("region").map((region) => region.getAttribute("id"));
  expect(names).toEqual(["summary", "proof", "experience", "skills", "projects", "education"]);
  expect(screen.getAllByRole("main")).toHaveLength(1);
});

it("offers email, LinkedIn and GitHub, and no phone number", () => {
  render(<Home />);
  expect(screen.getByRole("link", { name: /Email/ })).toHaveAttribute(
    "href",
    "mailto:mikaelboutin.dw@gmail.com",
  );
  expect(screen.getByRole("link", { name: /LinkedIn/ })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /GitHub/ })).toBeInTheDocument();
  expect(document.body).not.toHaveTextContent("581");
});
