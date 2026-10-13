import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { metrics } from "@/content/resume";
import { ScoreScene } from "./ScoreScene";

const meta = {
  title: "About/ScoreScene",
  component: ScoreScene,
  parameters: { layout: "fullscreen" },
  args: {
    id: "proof",
    label: "The proof",
    title: "From 88 to a perfect 100.",
    intro: "A full performance overhaul of a production Web3 marketplace.",
    scoreLabel: "Lighthouse Performance",
    scoreFrom: 88,
    scoreTo: 100,
    metrics,
  },
} satisfies Meta<typeof ScoreScene>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoMetrics: Story = { args: { metrics: [] } };

export const LongContent: Story = {
  args: {
    title: "From a struggling 88 to a perfect 100, without rewriting the product from scratch.",
    metrics: [
      ...metrics,
      { label: "Time to Interactive on a mid-range Android phone over 4G", change: "71% faster" },
      { label: "Requests on first load", before: "214", after: "38", change: "82% fewer" },
    ],
  },
};
