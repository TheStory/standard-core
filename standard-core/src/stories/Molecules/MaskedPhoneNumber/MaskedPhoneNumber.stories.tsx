import Box from "@mui/material/Box";
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/nextjs";
import MaskedPhoneNumber from "@the-story/standard-core/molecules/MaskedPhoneNumber/MaskedPhoneNumber";

const meta: Meta<typeof MaskedPhoneNumber> = {
  title: "Molecules/MaskedPhoneNumber",
  component: MaskedPhoneNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    officePhoneNumber: { control: "text" },
    showPhoneButtonLabelTranslations: { control: "text" },
    maskDigits: { control: { type: "number", min: 0, step: 1 } },
    maskChar: { control: "text" },
  },
  args: {
    officePhoneNumber: "+1 415 555 2671",
    showPhoneButtonLabelTranslations: "show",
    maskDigits: 6,
    maskChar: "*",
  },
  decorators: [
    // @ts-ignore
    (Story: any) => (
      <Box sx={{ p: 2 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMask: Story = {
  args: {
    officePhoneNumber: "+48 600 700 800",
    maskDigits: 4,
    maskChar: "•",
    showPhoneButtonLabelTranslations: "pokaż",
  },
};
