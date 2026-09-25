import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CtaButton } from "@the-story/standard-core/components/shadcn/atoms/cta-button";

const meta = {
  title: "Design System/Atoms/CtaButton",
  component: CtaButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CtaButton presents a prominent navigational action with optional supporting overline.",
          classification: "Atom",
          implementation: "custom",
          shadcn: ["Button"],
          contract:
            "Support default and line variants, label-only and overline-plus-label content, and a trailing direction icon. The whole surface is one link.",
        }),
      },
    },
  },
  args: {
    button: {
      overline: "Need help?",
      label: "Book a consultation",
      url: "#consultation",
      variant: "default",
    },
  },
  argTypes: {
    button: {
      control: "object",
      description: "CTA content, destination and visual variant.",
    },
  },
} satisfies Meta<typeof CtaButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Line: Story = {
  args: {
    button: { label: "View all projects", url: "#projects", variant: "line" },
  },
};
