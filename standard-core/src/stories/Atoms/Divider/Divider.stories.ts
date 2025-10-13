import type { Meta, StoryObj } from "@storybook/nextjs";
import { Divider } from "@thestory/standard-core/atoms/Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    docs: {
      story: {
        height: "80px",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    light: {
      control: "boolean",
    },
    variant: {
      control: "radio",
      options: ["fullWidth", "inset", "middle"],
    },
    flexItem: {
      control: "boolean",
    },
    sx: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    light: false,
    sx: {},
    variant: "fullWidth",
    flexItem: false,
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    flexItem: true,
  },
};

export const Inset: Story = {
  args: {
    variant: "inset",
  },
};

export const Middle: Story = {
  args: {
    variant: "middle",
  },
};
