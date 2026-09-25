import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CmsMarkdown } from "@the-story/standard-core/components/shadcn/atoms/cms-markdown";

const markdown = `## Materials that age beautifully

Natural materials develop character over time.

- Solid oak
- Natural oil finish
- Repairable construction

> Good furniture should improve through use.

[Read the material guide](#materials)`;

const meta = {
  title: "Design System/Atoms/CmsMarkdown",
  component: CmsMarkdown,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CmsMarkdown renders editorial Markdown with the design system typography.",
          classification: "Atom",
          implementation: "custom",
          shadcn: ["Separator"],
          contract:
            "Design headings, paragraphs, lists, quotes, links, code and separators as one consistent rich-content set. Embedded HTML and Markdown images are not rendered.",
        }),
      },
    },
  },
  args: { markdown, className: "max-w-2xl" },
  argTypes: {
    markdown: {
      control: "text",
      description: "Markdown content from the CMS.",
    },
  },
} satisfies Meta<typeof CmsMarkdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const EditorialContent: Story = {};
export const Empty: Story = {
  args: { markdown: "" },
  parameters: {
    docs: {
      description: { story: "Empty Markdown intentionally renders nothing." },
    },
  },
};
