import type { Meta, StoryObj } from "@storybook/react";
import { CopyToClipboard } from "standard-core/atoms/CopyToClipboard";

const meta: Meta<typeof CopyToClipboard> = {
  title: "Atoms/CopyToClipboard",
  component: CopyToClipboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    iconSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Copy this text",
    placement: "top",
    iconSize: "small",
    color: "text.primary",
  },
};

export const BottomPlacement: Story = {
  args: {
    text: "Copy this text",
    placement: "bottom",
    iconSize: "small",
    color: "text.primary",
  },
};

export const LargeIcon: Story = {
  args: {
    text: "Copy this text",
    placement: "top",
    iconSize: "large",
    color: "text.primary",
  },
};

export const CustomColor: Story = {
  args: {
    text: "Copy this text",
    placement: "top",
    iconSize: "small",
    color: "red",
  },
};
