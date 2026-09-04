import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CmsMarkdown from "@the-story/standard-core/atoms/CmsMarkdown/CmsMarkdown";

const meta = {
  title: "Atoms/CmsMarkdown",
  component: CmsMarkdown,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    sx: { maxWidth: 720, width: "min(720px, 90vw)" },
  },
  argTypes: {
    markdown: {
      control: "text",
      description: "Markdown received from a CMS text field.",
    },
  },
} satisfies Meta<typeof CmsMarkdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    markdown: `# Markdown from CMS

CmsMarkdown renders **bold text**, *italic text*, inline \`code\` and [links](https://example.com).

## Supported content

- headings and paragraphs
- ordered and unordered lists
- links, emphasis and code

1. Content is authored as Markdown.
2. The component applies the project typography and spacing.

> Blockquotes are visually separated from the surrounding content.

Use \`markdown\` controls to edit this example live.`,
  },
};

export const PaymentInstructions: Story = {
  args: {
    markdown: `## Bank transfer

Please transfer the **total order amount** using the following details:

- Account: \`PL00 0000 0000 0000 0000 0000 0000\`
- Recipient: The Story
- Reference: your order number

Your order will be processed after the payment is recorded. [Contact us](mailto:hello@example.com) if you need assistance.`,
  },
};
