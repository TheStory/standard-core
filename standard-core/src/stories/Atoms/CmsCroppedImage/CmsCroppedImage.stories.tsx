import type { Meta, StoryObj } from "@storybook/nextjs";
import CmsCroppedImage from "@the-story/standard-core/atoms/CmsCroppedImage/CmsCroppedImage";

const meta: Meta<typeof CmsCroppedImage> = {
  title: "Atoms/CmsCroppedImage",
  component: CmsCroppedImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "object" },
    width: { control: "number" },
    height: { control: "number" },
    cover: { control: "boolean" },
    resizingType: {
      control: "select",
      options: ["fill", "fit", "fill-down", "force", "auto"],
    },
  },
  args: {
    width: 486,
    height: 672,
    image: {
      id: 0,
      documentId: "abc",
      url: "https://storybook.js.org/images/placeholders/350x150.png",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
