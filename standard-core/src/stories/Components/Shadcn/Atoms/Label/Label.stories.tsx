import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@the-story/standard-core/components/shadcn/atoms/input";
import { Label } from "@the-story/standard-core/components/shadcn/atoms/label";

const meta = {
  title: "Design System/Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose: "Label gives a form control a visible, accessible name.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Label"],
          contract:
            "Labels remain visible above or beside their control. Required status and supporting text must not rely on placeholder content.",
        }),
      },
    },
  },
  args: { children: "Email address" },
} satisfies Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithControl: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="label-email">Email address</Label>
      <Input id="label-email" type="email" placeholder="name@example.com" />
    </div>
  ),
};
