import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import CroppedImage from "@thestory/standard-core/atoms/CroppedImage/CroppedImage";

const meta: Meta<typeof CroppedImage> = {
  title: "Atoms/CroppedImage",
  component: CroppedImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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
    src: "https://storybook.js.org/images/placeholders/350x150.png",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (props) => (
    <Box sx={{ width: "300px", height: "200px", position: "relative" }}>
      <CroppedImage {...props} />
    </Box>
  ),
  args: {},
};
