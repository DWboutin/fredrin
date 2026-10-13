import { render, screen } from "@testing-library/react";

import { Chapter } from "./Chapter";

const props = { id: "summary", index: "01", label: "Summary", title: "Fifteen years on the web." };

it("is a region named by its level 2 heading", () => {
  render(<Chapter {...props}>Body</Chapter>);
  const region = screen.getByRole("region", { name: "Fifteen years on the web." });
  expect(region).toHaveAttribute("id", "summary");
  expect(region).toContainElement(screen.getByRole("heading", { level: 2 }));
});

it("renders its label and children", () => {
  render(<Chapter {...props}>Body</Chapter>);
  expect(screen.getByText("Summary")).toBeInTheDocument();
  expect(screen.getByText("Body")).toBeInTheDocument();
});

it("hides the decorative index from assistive technology", () => {
  render(<Chapter {...props}>Body</Chapter>);
  expect(screen.getByText("01")).toHaveAttribute("aria-hidden", "true");
});
