import type { Meta, StoryObj } from "@storybook/react";
import LanguageSelector from "@thestory/standard-core/molecules/LanguageSelector/LanguageSelector";

const meta: Meta<typeof LanguageSelector> = {
  title: "Molecules/LanguageSelector",
  component: LanguageSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "white"],
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { color: "primary" },
};

export const Secondary: Story = {
  args: { color: "white" },
  parameters: {
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#271911" }],
    },
  },
};
