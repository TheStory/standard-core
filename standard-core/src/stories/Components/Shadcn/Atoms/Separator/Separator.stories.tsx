import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@the-story/standard-core/components/shadcn/atoms/separator";

const meta = {
  title: "Design System/Atoms/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Separator visually or semantically divides adjacent content groups.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Separator"],
          contract:
            "Support horizontal and vertical orientation. Decorative separators are ignored by assistive technology; semantic separators expose their role.",
        }),
      },
    },
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Direction of the dividing line.",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is purely visual.",
    },
  },
} satisfies Meta<typeof Separator>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <p>Materials</p>
      <Separator className="my-4" />
      <p>Dimensions</p>
    </div>
  ),
};
export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span>Overview</span>
      <Separator orientation="vertical" />
      <span>Details</span>
    </div>
  ),
};
