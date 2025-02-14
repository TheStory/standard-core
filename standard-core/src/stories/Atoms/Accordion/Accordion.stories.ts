import { Meta, StoryObj } from "@storybook/react";
import { Accordion, type AccordionItem } from "standard-core/atoms/Accordion";
import type { AccordionCtaButtonProps } from "standard-core/atoms/Accordion/AccordionCtaButton";

const meta: Meta<typeof Accordion> = {
  title: "Atoms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: {
        type: "object",
      },
      description: "List of accordion items to display",
    },
    button: {
      control: {
        type: "object",
      },
      description: "CTA button configuration",
    },
    disableIcon: {
      control: "boolean",
      description: "Disables the icon in accordion items",
      defaultValue: false,
    },
    disableGutters: {
      control: "boolean",
      description: "Disables gutters in accordion items",
      defaultValue: false,
    },
    sx: {
      control: "object",
      description: "Custom styles for the accordion",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
      sx: {
        color: "primary.main",
        textDecoration: "none",
      },
    } as AccordionCtaButtonProps["button"],
    disableIcon: false,
    disableGutters: false,
  },
};

export const WithoutButton: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: undefined,
    disableIcon: false,
    disableGutters: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
    } as AccordionCtaButtonProps["button"],
    disableIcon: true,
    disableGutters: false,
  },
};

export const DisabledGutters: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
      {
        label: "Item 3",
        content: "Content for item 3",
        overline: "Overline 3",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
    } as AccordionCtaButtonProps["button"],
    disableIcon: false,
    disableGutters: true,
  },
};
