import { render, screen } from "@testing-library/react";

import { ProfileHero } from "./ProfileHero";

const props = {
  eyebrow: "About me",
  name: "Mikael Boutin",
  role: "Senior Frontend Engineer",
  location: "Quebec, Canada (Remote)",
  photoSrc: "/mikael-boutin.jpg",
  photoAlt: "Portrait of Mikael Boutin",
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
  cue: "Scroll to read the story",
  ghost: "100",
};

it("renders the name as the page heading inside the banner", () => {
  render(<ProfileHero {...props} />);
  expect(screen.getByRole("banner")).toContainElement(
    screen.getByRole("heading", { level: 1, name: "Mikael Boutin" }),
  );
  expect(screen.getByText("Senior Frontend Engineer")).toBeInTheDocument();
  expect(screen.getByText("Quebec, Canada (Remote)")).toBeInTheDocument();
});

it("gives the portrait a text alternative", () => {
  render(<ProfileHero {...props} />);
  expect(screen.getByRole("img", { name: "Portrait of Mikael Boutin" })).toBeInTheDocument();
});

it("links the call to action to its target", () => {
  render(<ProfileHero {...props} />);
  expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "#contact");
});

it("hides the decorative figure from assistive technology", () => {
  render(<ProfileHero {...props} />);
  expect(screen.getByText("100")).toHaveAttribute("aria-hidden", "true");
});
