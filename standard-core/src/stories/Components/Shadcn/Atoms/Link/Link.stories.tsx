import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Link } from "@the-story/standard-core/components/shadcn/atoms/link";
import { ExternalLink } from "lucide-react";

const meta = {
  title: "Design System/Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Link navigates to internal, localized or external destinations.",
          classification: "Atom",
          shadcn: ["Link styling"],
          contract:
            "Links are visually distinguishable from body text, provide hover and focus-visible states, and external destinations may include a supporting icon.",
        }),
      },
    },
  },
  args: { href: "#link-example", children: "Read more" },
  argTypes: {
    href: {
      control: "text",
      description: "Internal, localized, anchor or external destination.",
    },
    target: { control: "text" },
    rel: { control: "text" },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Internal: Story = {};
export const External: Story = {
  render: () => (
    <Link href="https://ui.shadcn.com">
      Shadcn documentation <ExternalLink className="ml-1 inline size-4" />
    </Link>
  ),
};
