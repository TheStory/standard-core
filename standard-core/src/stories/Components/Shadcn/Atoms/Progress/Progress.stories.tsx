import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "@the-story/standard-core/components/shadcn/atoms/progress";

const meta = {
  title: "Design System/Atoms/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose: "Progress communicates completion of a measurable process.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: ["Progress"],
          contract:
            "Values range from 0 to 100. Pair the bar with textual context whenever users need the exact value.",
        }),
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Completion percentage.",
    },
  },
  args: { value: 60, className: "w-80" },
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-5">
      <Progress value={0} />
      <Progress value={35} />
      <Progress value={70} />
      <Progress value={100} />
    </div>
  ),
};
