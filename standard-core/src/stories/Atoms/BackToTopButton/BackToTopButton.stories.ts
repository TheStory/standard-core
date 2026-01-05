import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BackToTopButton } from "@the-story/standard-core/atoms/BackToTopButton";

const meta: Meta<typeof BackToTopButton> = {
  title: "Atoms/BackToTopButton",
  component: BackToTopButton,
  parameters: {
    docs: {
      story: {
        height: "80px",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    sx: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sx: {},
  },
};

export const CustomStyle: Story = {
  args: {
    sx: { backgroundColor: "red" },
  },
};
