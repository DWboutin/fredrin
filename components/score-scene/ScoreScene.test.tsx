import { render, screen, within } from "@testing-library/react";

import { ScoreScene } from "./ScoreScene";

const props = {
  id: "proof",
  label: "The proof",
  title: "From 88 to 100.",
  intro: "A performance overhaul.",
  scoreLabel: "Lighthouse Performance",
  scoreFrom: 88,
  scoreTo: 100,
  metrics: [
    { label: "First-load JavaScript", before: "1.58 MB", after: "116 kB", change: "93% less" },
    { label: "First Contentful Paint", change: "45% faster" },
  ],
};

it("is a region named by its heading", () => {
  render(<ScoreScene {...props} />);
  expect(screen.getByRole("region", { name: "From 88 to 100." })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: "From 88 to 100." })).toBeInTheDocument();
});

it("states the score change in text, not only through the animated dial", () => {
  render(<ScoreScene {...props} />);
  expect(screen.getByText(/Lighthouse Performance/)).toHaveTextContent(
    "Lighthouse Performance: from 88 to 100",
  );
});

it("rolls through every score between the two ends", () => {
  const { container } = render(<ScoreScene {...props} />);
  const strip = container.querySelector(".score-scene__strip");
  expect(strip?.children).toHaveLength(13);
  expect(strip).toHaveTextContent(/^88.*100$/);
});

it("renders one score when the range is empty or reversed", () => {
  const { container } = render(<ScoreScene {...props} scoreFrom={100} scoreTo={90} />);
  expect(container.querySelector(".score-scene__strip")?.children).toHaveLength(1);
});

it("lists each metric with its before, after and change", () => {
  render(<ScoreScene {...props} />);
  const full = screen.getByText("First-load JavaScript").closest("div") as HTMLElement;
  expect(within(full).getByRole("definition")).toHaveTextContent("1.58 MB→ to 116 kB, 93% less");
  const changeOnly = screen.getByText("First Contentful Paint").closest("div") as HTMLElement;
  expect(within(changeOnly).getByRole("definition")).toHaveTextContent(/^45% faster$/);
});

it("renders no metric when the list is empty", () => {
  render(<ScoreScene {...props} metrics={[]} />);
  expect(screen.queryByRole("term")).not.toBeInTheDocument();
});
