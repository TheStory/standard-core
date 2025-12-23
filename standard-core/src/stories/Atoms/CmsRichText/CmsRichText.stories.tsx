// @ts-ignore
import type { Meta, StoryObj } from "@storybook/nextjs";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
import CmsRichText from "@the-story/standard-core/atoms/CmsRichText/CmsRichText";

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
      text: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
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
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        },
      ],
    },
    {
      type: "list-item",
      children: [
        {
          type: "text",
          text: "Aliquam tincidunt mauris eu risus",
        },
      ],
    },
    {
      type: "list-item",
      children: [
        {
          type: "text",
          text: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
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
  paragraph,
  list,
  paragraph,
  code,
  paragraph,
  paragraph,
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
