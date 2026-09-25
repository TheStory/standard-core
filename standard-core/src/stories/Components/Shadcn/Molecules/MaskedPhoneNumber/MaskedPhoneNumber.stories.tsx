import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MaskedPhoneNumber } from "@the-story/standard-core/components/shadcn/molecules/masked-phone-number";

const meta = {
  title: "Design System/Molecules/MaskedPhoneNumber",
  component: MaskedPhoneNumber,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "MaskedPhoneNumber hides part of a phone number until the user explicitly reveals it.",
          classification: "Molecule",
          implementation: "custom",
          shadcn: ["Button"],
          contract:
            "Combine a stable masked value with a link-style reveal action. After reveal, display a callable telephone link and remove the action.",
        }),
      },
    },
  },
  args: {
    officePhoneNumber: "+48 123 456 789",
    showPhoneButtonLabelTranslations: "Show",
    maskDigits: 6,
    maskChar: "*",
  },
  argTypes: {
    officePhoneNumber: { control: "text" },
    showPhoneButtonLabelTranslations: { control: "text" },
    maskDigits: { control: { type: "range", min: 1, max: 10 } },
    maskChar: { control: "text" },
  },
} satisfies Meta<typeof MaskedPhoneNumber>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const ShortMask: Story = { args: { maskDigits: 3, maskChar: "•" } };
