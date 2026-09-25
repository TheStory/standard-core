import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@the-story/standard-core/components/shadcn/atoms/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@the-story/standard-core/components/shadcn/atoms/tooltip";
import { Info } from "lucide-react";

const meta = {
  title: "Design System/Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Tooltip provides concise supporting information on hover or keyboard focus.",
          classification: "Atom",
          shadcn: [
            "Tooltip",
            "TooltipTrigger",
            "TooltipContent",
            "TooltipProvider",
          ],
          contract:
            "Content is brief and non-interactive. Tooltips supplement an accessible name; they never contain essential instructions available nowhere else.",
        }),
      },
    },
  },
} satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline" aria-label="More information">
          <Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent>More information</TooltipContent>
    </Tooltip>
  ),
};
export const Positions: Story = {
  render: () => (
    <div className="flex gap-16">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Top tooltip</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
};
