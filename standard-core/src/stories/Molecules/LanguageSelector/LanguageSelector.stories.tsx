import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LanguageSelector from "@the-story/standard-core/molecules/LanguageSelector/LanguageSelector";

const meta: Meta<typeof LanguageSelector> = {
  title: "Molecules/LanguageSelector",
  component: LanguageSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "white"],
    },
  },
  args: {},
  decorators: [
    (Story: any, { args }) => (
      <Box
        sx={{ p: 1, bgcolor: args.color === "white" ? "gray" : "transparent" }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { color: "primary" },
};

export const Secondary: Story = {
  args: { color: "white" },
};
