import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BackToTopButton } from "@the-story/standard-core/components/shadcn/atoms/back-to-top-button";

const meta = {
  title: "Design System/Atoms/BackToTopButton",
  component: BackToTopButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "BackToTopButton returns users to the beginning of a long page.",
          classification: "Atom",
          shadcn: ["Button"],
          contract:
            "The control appears only after meaningful scrolling, stays fixed in the lower corner and includes a text label plus upward arrow.",
        }),
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Localized accessible and visible label.",
    },
    className: { control: "text" },
  },
  args: { label: "Back to top" },
} satisfies Meta<typeof BackToTopButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ScrollToReveal: Story = {
  render: (args) => (
    <div className="min-h-[160vh] p-8">
      <p>Scroll down to reveal the control.</p>
      <div className="mt-[110vh]">End of example content</div>
      <BackToTopButton {...args} />
    </div>
  ),
};
