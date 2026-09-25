import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CopyToClipboard } from "@the-story/standard-core/components/shadcn/atoms/copy-to-clipboard";

const meta = {
  title: "Design System/Atoms/CopyToClipboard",
  component: CopyToClipboard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CopyToClipboard copies a supplied value and confirms success without changing context.",
          classification: "Atom",
          shadcn: ["Button", "Tooltip"],
          contract:
            "Provide copy and success icon states with localized accessible labels. Success feedback is temporary and must not shift layout.",
        }),
      },
    },
  },
  args: {
    text: "support@example.com",
    copyLabel: "Copy",
    successLabel: "Copied",
  },
  argTypes: {
    text: { control: "text", description: "Value written to the clipboard." },
    copyLabel: { control: "text" },
    successLabel: { control: "text" },
  },
} satisfies Meta<typeof CopyToClipboard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>support@example.com</span>
      <CopyToClipboard text="support@example.com" />
    </div>
  ),
};
