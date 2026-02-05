import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormattedDate from "@the-story/standard-core/atoms/FormatedDate/FormatedDate";

const meta: Meta<typeof FormattedDate> = {
  title: "Atoms/FormatedDate",
  component: FormattedDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "date",
      description: "Date value to be formatted",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: new Date().toISOString(),
  },
};

export const NoValue: Story = {
  args: {
    value: undefined,
  },
};

export const CustomDate: Story = {
  args: {
    value: "2000-01-01T00:00:00Z",
  },
};
