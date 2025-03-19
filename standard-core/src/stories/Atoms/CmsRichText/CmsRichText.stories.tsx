import type { Meta, StoryObj } from "@storybook/react";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
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

const heading1: {
  type: "heading";
  level: 1;
  children: [{ type: "text"; text: string }];
} = {
  type: "heading",
  level: 1,
  children: [
    {
      type: "text",
      text: "Heading 1",
    },
  ],
};
const heading2: {
  type: "heading";
  level: 2;
  children: [{ type: "text"; text: string }];
} = {
  type: "heading",
  level: 2,
  children: [
    {
      type: "text",
      text: "Heading 2",
    },
  ],
};
const heading3: {
  type: "heading";
  level: 3;
  children: [{ type: "text"; text: string }];
} = {
  type: "heading",
  level: 3,
  children: [
    {
      type: "text",
      text: "Heading 3",
    },
  ],
};
const heading4: {
  type: "heading";
  level: 4;
  children: [{ type: "text"; text: string }];
} = {
  type: "heading",
  level: 4,
  children: [
    {
      type: "text",
      text: "Heading 4",
    },
  ],
};
const heading5: {
  type: "heading";
  level: 5;
  children: [{ type: "text"; text: string }];
} = {
  type: "heading",
  level: 5,
  children: [
    {
      type: "text",
      text: "Heading 5",
    },
  ],
};
const heading6: {
  type: "heading";
  level: 6;
  children: [{ type: "text"; text: string }];
} = {
  type: "heading",
  level: 6,
  children: [
    {
      type: "text",
      text: "Heading 6",
    },
  ],
};

const paragraph: {
  type: "paragraph";
  children: [{ type: "text"; text: string }];
} = {
  type: "paragraph",
  children: [
    {
      type: "text",
      text: "This is a sample paragraph rendered by CmsRichText.",
    },
  ],
};

const quote: {
  type: "quote";
  children: [{ type: "text"; text: string }];
} = {
  type: "quote",
  children: [
    {
      type: "text",
      text: "This is a blockquote text, a styled quote.",
    },
  ],
};
const list: {
  type: "list";
  format: "unordered" | "ordered";
  children: { type: "list-item"; children: [{ type: "text"; text: string }] }[];
} = {
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
};

const code: { type: "code"; children: { type: "text"; text: string }[] } = {
  type: "code",
  children: [
    {
      type: "text",
      text: "const hello = 'world';",
    },
  ],
};

const sampleBlocksContent: BlocksContent = [
  heading1,
  paragraph,
  paragraph,
  heading2,
  paragraph,
  paragraph,
  heading3,
  paragraph,
  paragraph,
  heading4,
  paragraph,
  paragraph,
  heading5,
  paragraph,
  paragraph,
  heading6,
  paragraph,
  paragraph,
  quote,
  list,
  code,
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
