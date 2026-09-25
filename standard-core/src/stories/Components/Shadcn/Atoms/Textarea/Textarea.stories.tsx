import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@the-story/standard-core/components/shadcn/atoms/label";
import { Textarea } from "@the-story/standard-core/components/shadcn/atoms/textarea";

const meta = {
  title: "Design System/Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose: "Textarea collects longer, multi-line text.",
          classification: "Atom",
          shadcn: ["Textarea"],
          contract:
            "Provide empty, filled, focus-visible, invalid and disabled states. The field grows with content and has a defined minimum height.",
        }),
      },
    },
  },
  args: { placeholder: "Describe your project", className: "w-96" },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = {
  render: () => (
    <div className="grid w-96 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Write a message" />
      </div>
      <Textarea aria-invalid="true" value="Invalid content" readOnly />
      <Textarea disabled placeholder="Disabled" />
    </div>
  ),
};
