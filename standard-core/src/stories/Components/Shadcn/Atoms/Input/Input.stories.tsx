import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@the-story/standard-core/components/shadcn/atoms/input";
import { Label } from "@the-story/standard-core/components/shadcn/atoms/label";

const meta = {
  title: "Design System/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Input collects a single line of textual, numeric or file data.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Input"],
          contract:
            "Provide empty, filled, placeholder, hover, focus-visible, invalid, disabled and file-input states. Pair with a visible Label.",
        }),
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "file"],
      description: "Native input data type.",
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: { type: "text", placeholder: "Enter a value", className: "w-80" },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="default-input">Name</Label>
        <Input id="default-input" placeholder="Your name" />
      </div>
      <Input value="Filled value" readOnly />
      <Input aria-invalid="true" value="Invalid value" readOnly />
      <Input disabled placeholder="Disabled" />
    </div>
  ),
};
