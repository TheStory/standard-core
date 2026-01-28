import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CtaButton } from "@the-story/standard-core/atoms/CtaButton";

const meta: Meta<typeof CtaButton> = {
  title: "Atoms/CtaButton",
  component: CtaButton,
  tags: ["autodocs"],
  argTypes: {
    button: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    button: {
      overline: "Lorem ipsum",
      label: "Lorem ipsum dolor sit amet",
      url: "/",
      variant: "default",
      rel: "noopener noreferrer",
      target: "_blank",
    },
  },
};

export const Line: Story = {
  args: {
    button: {
      overline: "Lorem ipsum",
      label: "Lorem ipsum dolor sit amet",
      url: "/",
      variant: "line",
      rel: "noopener noreferrer",
      target: "_blank",
    },
  },
};
