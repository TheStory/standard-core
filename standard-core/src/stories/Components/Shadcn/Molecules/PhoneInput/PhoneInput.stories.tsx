import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@the-story/standard-core/components/shadcn/atoms/label";
import { PhoneInput } from "@the-story/standard-core/components/shadcn/molecules/phone-input";

const meta = {
  title: "Design System/Molecules/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "PhoneInput collects a telephone number with appropriate keyboard and autocomplete semantics.",
          classification: "Molecule",
          implementation: "custom",
          shadcn: ["Input"],
          contract:
            "Provide empty, filled, focus-visible, invalid and disabled states. Preserve international prefixes and never reformat user input while typing.",
        }),
      },
    },
  },
  args: { placeholder: "+48 123 456 789", className: "w-80" },
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    onChange: {
      control: false,
      description: "Returns the current string value.",
    },
  },
} satisfies Meta<typeof PhoneInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone number</Label>
        <PhoneInput id="phone" placeholder="+48 123 456 789" />
      </div>
      <PhoneInput value="invalid" aria-invalid="true" readOnly />
      <PhoneInput disabled placeholder="Disabled" />
    </div>
  ),
};
