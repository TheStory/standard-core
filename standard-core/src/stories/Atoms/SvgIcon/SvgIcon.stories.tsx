import { Meta, StoryObj } from "@storybook/nextjs";
import SvgIcon, { SvgIconName } from "@thestory/standard-core/atoms/SvgIcon/SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  title: "Atoms/SvgIcon",
  component: SvgIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    url: { control: "text" },
    // Expose iconName for enum-based usage in stories
    iconName: {
      control: "select",
      options: Object.keys(SvgIconName),
    },
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
    iconName: "Facebook",
    //@ts-ignore
    fontSize: "3xl",
  },
};
