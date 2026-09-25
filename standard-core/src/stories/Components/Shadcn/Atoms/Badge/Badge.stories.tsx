import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@the-story/standard-core/components/shadcn/atoms/badge";

const meta = {
  title: "Design System/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose: "Badge communicates a short status, category or attribute.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Badge"],
          contract:
            "Keep labels short. Provide default, secondary, outline, ghost, link and destructive variants with legible contrast.",
        }),
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "link",
        "destructive",
      ],
      description: "Visual hierarchy and semantic intent.",
    },
    asChild: {
      control: "boolean",
      description: "Preserves badge appearance on a child element.",
    },
  },
  args: { children: "New", variant: "default" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};
