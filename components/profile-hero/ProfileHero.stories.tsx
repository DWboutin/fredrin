import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProfileHero } from "./ProfileHero";

const meta = {
  title: "About/ProfileHero",
  component: ProfileHero,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "About me",
    name: "Mikael Boutin",
    role: "Senior Frontend Engineer · React / Next.js / TypeScript",
    location: "Quebec, Canada (Remote)",
    photoSrc: "/mikael-boutin.jpg",
    photoAlt: "Portrait of Mikael Boutin",
    ctaLabel: "Get in touch",
    ctaHref: "#contact",
    cue: "Scroll to read the story",
    ghost: "100",
  },
} satisfies Meta<typeof ProfileHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    name: "Marie-Élisabeth de Montmorency-Laval",
    role: "Principal Frontend Engineer and Design Systems Architect · React / Next.js / TypeScript / React Native",
  },
};
