import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PhoneInput from "@the-story/standard-core/molecules/PhoneInput/PhoneInput";

const meta = {
  title: "Molecules/PhoneInput",
  component: PhoneInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    defaultCountry: "PL",
    forceCallingCode: true,
    focusOnSelectCountry: true,
    fullWidth: true,
    label: "Phone number",
    preferredCountries: ["PL", "DE", "GB"],
    variant: "standard",
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { value: "+48 535 111 426" },
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "Enter a valid phone number",
    value: "+48 123",
  },
};
