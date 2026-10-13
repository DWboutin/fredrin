import { render, screen } from "@testing-library/react";

import { ExperienceEntry } from "./ExperienceEntry";

const props = {
  role: "Lead Frontend Developer",
  company: "Qohash",
  period: "Aug 2019 to Sep 2022",
  context: "Data security posture management platform",
  highlights: ["Led a team of 6 developers.", "Migrated Angular to React."],
};

it("names the entry by role and company in a level 3 heading", () => {
  render(<ExperienceEntry {...props} />);
  expect(
    screen.getByRole("heading", { level: 3, name: "Lead Frontend Developer · Qohash" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("article")).toBeInTheDocument();
});

it("renders the period, the context and one list item per highlight", () => {
  render(<ExperienceEntry {...props} />);
  expect(screen.getByText("Aug 2019 to Sep 2022")).toBeInTheDocument();
  expect(screen.getByText("Data security posture management platform")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
});

it("leaves out the company and the context when they are not given", () => {
  render(<ExperienceEntry role="Earlier Experience" period="2010 to 2018" highlights={[]} />);
  expect(screen.getByRole("heading", { level: 3, name: "Earlier Experience" })).toBeInTheDocument();
  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});
