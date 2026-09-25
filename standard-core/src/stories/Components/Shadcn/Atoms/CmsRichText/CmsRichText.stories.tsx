import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CmsRichText } from "@the-story/standard-core/components/shadcn/atoms/cms-rich-text";

const blocks = [
  {
    type: "heading",
    level: 2,
    children: [{ type: "text", text: "Made for everyday use" }],
  },
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "Rich text preserves editorial structure while applying shared presentation rules.",
      },
    ],
  },
  {
    type: "list",
    format: "unordered",
    children: [
      {
        type: "list-item",
        children: [{ type: "text", text: "Headings and paragraphs" }],
      },
      {
        type: "list-item",
        children: [{ type: "text", text: "Lists, links and quotes" }],
      },
    ],
  },
] as never;

const meta = {
  title: "Design System/Atoms/CmsRichText",
  component: CmsRichText,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CmsRichText renders structured editorial blocks supplied by the CMS.",
          classification: "Atom",
          implementation: "custom",
          shadcn: [],
          internal: ["Link"],
          contract:
            "Design a coherent content set for headings, paragraphs, lists, quotes, links and code. Individual element types may be excluded by a consuming layout.",
        }),
      },
    },
  },
  args: { blocks, className: "max-w-2xl" },
  argTypes: {
    blocks: { control: "object", description: "Structured CMS blocks." },
    exclude: {
      control: "object",
      description: "Element types suppressed by the consuming layout.",
    },
  },
} satisfies Meta<typeof CmsRichText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const EditorialContent: Story = {};
export const WithoutHeadings: Story = {
  args: { exclude: ["h2", "h3", "h4", "h5", "h6"] },
};
