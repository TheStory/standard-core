import { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "standard-core/atoms/SvgIcon/SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  title: "Atoms/SvgIcon",
  component: SvgIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    url: { control: "text" },
    //@ts-ignore
    fontSize: {
      control: "select",
      options: ["inherit", "small", "medium", "large", "xl", "3xl"],
    },
    disableMask: { control: "boolean" },
    sx: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://icons.storyline.cloud/v1/facebook.svg",
    //@ts-ignore
    fontSize: "3xl",
  },
};
