import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
    typographyVariant: {
      control: "select",
      options: [
        "body1",
        "body2",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
      ],
    },
  },
  args: {
    officePhoneNumber: "+1 415 555 2671",
    showPhoneButtonLabelTranslations: "show",
    maskDigits: 6,
    maskChar: "*",
    typographyVariant: "body1",
  },
  decorators: [
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

export const WithTypographyVariant: Story = {
  args: {
    officePhoneNumber: "+1 415 555 2671",
    typographyVariant: "h6",
    showPhoneButtonLabelTranslations: "show number",
  },
};
