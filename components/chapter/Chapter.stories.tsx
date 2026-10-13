import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Chapter } from "./Chapter";

const meta = {
  title: "About/Chapter",
  component: Chapter,
  parameters: { layout: "fullscreen" },
  args: {
    id: "summary",
    index: "01",
    label: "Summary",
    title: "Fifteen years on the web.",
    children: "Senior frontend engineer with 15 years of web development experience.",
  },
} satisfies Meta<typeof Chapter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = { args: { children: null } };

export const LongContent: Story = {
  args: {
    label: "AI engineering & independent projects",
    title: "A deliberately long chapter title that has to wrap over several lines without breaking the layout.",
    children: "Body content. ".repeat(120),
  },
};
