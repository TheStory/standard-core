import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CountryPicker from "@the-story/standard-core/molecules/CountryPicker/CountryPicker";

const meta = {
  title: "Molecules/CountryPicker",
  component: CountryPicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { id: "country-picker", fullWidth: false },
} satisfies Meta<typeof CountryPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectedCountries: Story = {
  args: {
    countries: [
      { code: "PL", label: "Poland", phone: "48" },
      { code: "DE", label: "Germany", phone: "49" },
    ],
  },
};

export const ExcludedCountries: Story = {
  args: { excludedCountryCodes: ["PL", "DE"] },
};
