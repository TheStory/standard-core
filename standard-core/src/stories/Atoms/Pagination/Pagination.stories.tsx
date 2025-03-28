import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "@thestory/standard-core/atoms/Pagination/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Atoms/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    totalPages: {
      control: { type: "number", min: 1, max: 20 },
      description: "Total number of pages.",
    },
    sx: {
      control: "object",
      description: "Styles for the pagination component.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 5,
  },
};
