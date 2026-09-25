import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CountryPicker } from "@the-story/standard-core/components/shadcn/molecules/country-picker";

const countries = [
  { code: "PL", label: "Poland" },
  { code: "DE", label: "Germany" },
  { code: "GB", label: "United Kingdom" },
];
const meta = {
  title: "Design System/Molecules/CountryPicker",
  component: CountryPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CountryPicker provides a localized, searchable-sized country choice for forms.",
          classification: "Molecule",
          shadcn: [
            "Label",
            "Select",
            "SelectTrigger",
            "SelectValue",
            "SelectContent",
            "SelectItem",
          ],
          contract:
            "Combine a visible label and full-width select. Support required, selected, disabled and localized option states.",
        }),
      },
    },
  },
  args: { countries, label: "Country", required: false, disabled: false },
  argTypes: {
    countries: {
      control: "object",
      description:
        "Optional curated country list; otherwise locale data is used.",
    },
    excludedCountryCodes: { control: "object" },
    locale: { control: "select", options: ["en", "pl", "de"] },
    value: { control: "text" },
    label: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof CountryPicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Required: Story = { args: { required: true } };
export const Disabled: Story = { args: { disabled: true, value: "PL" } };
