import type { Meta, StoryObj } from "@storybook/react";
import CmsImage from "standard-core/atoms/CmsImage/CmsImage";

const meta: Meta<typeof CmsImage> = {
  title: "Atoms/CmsImage",
  component: CmsImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "object" },
    fill: { control: "boolean" },
    sizes: { control: "text" },
  },
  args: {
    image: {
      data: {
        //@ts-ignore
        attributes: {
          url: "https://storybook.js.org/images/placeholders/350x150.png",
          width: 350,
          height: 150,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
