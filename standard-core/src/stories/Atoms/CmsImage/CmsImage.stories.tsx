import type { Meta, StoryObj } from "@storybook/nextjs";
import CmsImage from "@thestory/standard-core/atoms/CmsImage/CmsImage";

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
      id: 0,
      documentId: "abc",
      url: "https://storybook.js.org/images/placeholders/350x150.png",
      width: 350,
      height: 150,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
