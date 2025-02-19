import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@thestory/standard-core/atoms/Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    target: { control: "text" },
    children: { control: "text", description: "Content inside the button" },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
      defaultValue: "contained",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "default"],
      defaultValue: "primary",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "large",
    },
    disabled: { control: "boolean", defaultValue: false },
    onClick: { action: "clicked" },
    component: {
      control: false,
      description: "Custom component to render the button",
    },
    sx: { control: false },
  },
  args: {
    onClick: action("button-click"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "outlined",
    color: "secondary",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
};
