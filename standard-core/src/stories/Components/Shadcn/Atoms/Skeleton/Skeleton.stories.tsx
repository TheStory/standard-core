import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "@the-story/standard-core/components/shadcn/atoms/skeleton";

const meta = {
  title: "Design System/Atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose: "Skeleton reserves layout space while content is loading.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Skeleton"],
          contract:
            "Skeleton geometry should approximate the final content without presenting readable placeholder text.",
        }),
      },
    },
  },
} satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Text: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  ),
};
export const Card: Story = {
  render: () => (
    <div className="grid w-80 gap-4 rounded-xl border p-6">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-full" />
    </div>
  ),
};
