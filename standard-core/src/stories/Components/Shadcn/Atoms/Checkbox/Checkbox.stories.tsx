import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@the-story/standard-core/components/shadcn/atoms/checkbox";
import { Label } from "@the-story/standard-core/components/shadcn/atoms/label";

const meta = {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Checkbox lets users independently select one or more options.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Checkbox"],
          contract:
            "Provide unchecked, checked, indeterminate, hover, focus-visible, invalid and disabled states. Pair every checkbox with a visible label.",
        }),
      },
    },
  },
  argTypes: {
    checked: { control: "boolean", description: "Controlled selected state." },
    disabled: { control: "boolean", description: "Prevents interaction." },
    required: {
      control: "boolean",
      description: "Marks the field as required.",
    },
  },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = { args: { checked: false } };
export const States: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="invalid" aria-invalid="true" />
        <Label htmlFor="invalid">Invalid</Label>
      </div>
    </div>
  ),
};
