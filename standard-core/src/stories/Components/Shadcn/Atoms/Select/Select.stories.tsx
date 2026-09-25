import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@the-story/standard-core/components/shadcn/atoms/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@the-story/standard-core/components/shadcn/atoms/select";

const meta = {
  title: "Design System/Atoms/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose: "Select lets users choose one value from a predefined list.",
          classification: "Atom",
          shadcn: [
            "Select",
            "SelectTrigger",
            "SelectValue",
            "SelectContent",
            "SelectGroup",
            "SelectLabel",
            "SelectItem",
            "SelectSeparator",
          ],
          contract:
            "Provide placeholder, selected, open, highlighted, disabled, invalid and small/default size states. Long lists remain scrollable.",
        }),
      },
    },
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="material">Material</Label>
      <Select>
        <SelectTrigger id="material" className="w-full">
          <SelectValue placeholder="Choose material" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Wood</SelectLabel>
            <SelectItem value="oak">Oak</SelectItem>
            <SelectItem value="ash">Ash</SelectItem>
            <SelectItem value="walnut">Walnut</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <Select defaultValue="oak">
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="oak">Oak</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
      </Select>
      <Select>
        <SelectTrigger className="w-full" aria-invalid="true">
          <SelectValue placeholder="Invalid" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="oak">Oak</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
