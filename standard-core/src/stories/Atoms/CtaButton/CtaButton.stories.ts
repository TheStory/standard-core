import type { Meta, StoryObj } from "@storybook/react";
import { CtaButton } from "@thestory/standard-core/atoms/CtaButton";

const meta: Meta<typeof CtaButton> = {
  title: "Atoms/CtaButton",
  component: CtaButton,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    button: {
      overline: "Lorem ipsum",
      label: "Lorem ipsum dolor sit amet",
      url: "/",
    },
  },
};
