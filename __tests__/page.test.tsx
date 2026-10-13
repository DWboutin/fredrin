import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("renders the home page heading", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});
