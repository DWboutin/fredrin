import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { experiences } from "@/content/resume";
import { ExperienceEntry } from "./ExperienceEntry";

const meta = {
  title: "About/ExperienceEntry",
  component: ExperienceEntry,
  args: experiences[1],
} satisfies Meta<typeof ExperienceEntry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutCompanyOrContext: Story = { args: experiences[4] };

export const NoHighlights: Story = { args: { highlights: [] } };

export const LongContent: Story = { args: experiences[0] };
