import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormattedDate } from "@the-story/standard-core/components/shadcn/atoms/formatted-date";

const meta = {
  title: "Design System/Atoms/FormattedDate",
  component: FormattedDate,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "FormattedDate presents a date according to the active locale.",
          classification: "Atom",
          shadcn: [],
          contract:
            "The date remains on one line and uses the locale medium-date format. Missing values render nothing.",
        }),
      },
    },
  },
  args: { value: "2026-09-25" },
  argTypes: {
    value: { control: "date", description: "ISO-compatible date value." },
  },
} satisfies Meta<typeof FormattedDate>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
