import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar } from "@thestory/standard-core/atoms/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#ccc" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: {
        type: "select",
        options: ["amber", "purple", "amberDark"],
      },
      description: "Background color of the avatar",
    },
    disableBorder: {
      control: "boolean",
      description: "Disables the border around the avatar",
      defaultValue: false,
    },
    value: {
      control: "text",
      description: "Text displayed inside the avatar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Amber: Story = {
  args: {
    backgroundColor: "amber",
    disableBorder: false,
    value: "A",
  },
};

export const Purple: Story = {
  args: {
    backgroundColor: "purple",
    disableBorder: false,
    value: "P",
  },
};

export const AmberDark: Story = {
  args: {
    backgroundColor: "amberDark",
    disableBorder: false,
    value: "D",
  },
};

export const WithoutBorder: Story = {
  args: {
    backgroundColor: "purple",
    disableBorder: true,
    value: "B",
  },
};

export const CustomText: Story = {
  args: {
    backgroundColor: "amber",
    disableBorder: false,
    value: "CT",
  },
};
