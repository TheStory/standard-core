import { Meta, StoryObj } from "@storybook/react";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import CmsRichText from "@thestory/standard-core/atoms/CmsRichText/CmsRichText";

const meta: Meta<typeof CmsRichText> = {
  title: "Atoms/CmsRichText",
  component: CmsRichText,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    blocks: {
      control: false,
      description:
        "Rich text blocks (content, paragraphs, headings, lists, etc.)",
    },
    globalDisableHeadings: {
      control: "boolean",
      defaultValue: false,
      description: "Disable headings in the component rendering",
    },
    exclude: {
      control: "object",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "list"],
      description: "Specify which blocks to exclude from rendering",
    },
    componentProps: {
      control: "object",
      description:
        "Override default component styles for different block elements",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CmsRichText>;

const sampleBlocksContent: BlocksContent = [
  {
    type: "paragraph",
    children: [
      {
        type: "text",
        text: "This is a sample paragraph rendered by CmsRichText.",
      },
    ],
  },
  {
    type: "heading",
    level: 1,
    children: [
      {
        type: "text",
        text: "Heading 1",
      },
    ],
  },
  {
    type: "quote",
    children: [
      {
        type: "text",
        text: "This is a blockquote text, a styled quote.",
      },
    ],
  },
  {
    type: "list",
    format: "unordered",
    children: [
      {
        type: "list-item",
        children: [
          {
            type: "text",
            text: "List item 1",
          },
        ],
      },
      {
        type: "list-item",
        children: [
          {
            type: "text",
            text: "List item 2",
          },
        ],
      },
    ],
  },
  {
    type: "code",
    children: [
      {
        type: "text",
        text: "const hello = 'world';",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    blocks: sampleBlocksContent,
  },
};

export const WithoutHeadings: Story = {
  args: {
    blocks: sampleBlocksContent,
    exclude: ["h1", "h2", "h3", "h4", "h5", "h6"],
    globalDisableHeadings: true,
  },
};

export const ExcludeParagraph: Story = {
  args: {
    blocks: sampleBlocksContent,
    exclude: ["p"],
  },
};

export const CustomComponentProps: Story = {
  args: {
    blocks: sampleBlocksContent,
    componentProps: {
      h1: {
        sx: {
          color: "red",
        },
      },
      p: {
        sx: {
          color: "red",
        },
      },
    },
  },
};
