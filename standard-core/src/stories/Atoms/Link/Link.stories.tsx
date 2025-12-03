import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/nextjs";
import Link from "@the-story/standard-core/atoms/Link/Link";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the link",
    },
    href: {
      control: "text",
      description: "The URL that the link points to",
    },
    color: {
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "textPrimary",
        "textSecondary",
        "error",
      ],
      description: "The color of the link",
      defaultValue: "primary",
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always"],
      description: "When the link should be underlined",
      defaultValue: "hover",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Link",
    href: "#",
  },
};

export const SecondaryLink: Story = {
  args: {
    children: "Secondary Link",
    href: "#",
    color: "secondary",
  },
};

export const NoUnderline: Story = {
  args: {
    children: "No Underline Link",
    href: "#",
    underline: "none",
  },
};

export const CustomHref: Story = {
  args: {
    children: "Custom Href Link",
    href: "https://example.com",
    color: "textSecondary",
  },
};

export const CustomComponentLink: Story = {
  args: {
    children: (
      <Box
        component="span"
        sx={{ backgroundColor: "primary.main", color: "secondary.main", p: 2 }}
      >
        Custom Component Inside Link
      </Box>
    ),
    href: "#",
  },
};
