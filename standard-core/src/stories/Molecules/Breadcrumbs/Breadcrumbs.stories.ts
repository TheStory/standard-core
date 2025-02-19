import type { Meta, StoryObj } from "@storybook/react";
import Crumbs from "@thestory/standard-core/molecules/Crumbs/Crumbs";

const meta: Meta<typeof Crumbs> = {
  title: "Molecules/Crumbs",
  component: Crumbs,
  tags: ["autodocs"],
  argTypes: {
    crumbs: { control: "object" },
    sx: { control: "object" },
    lightVariant: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    crumbs: [
      { link: "Home", href: "/" },
      { link: "Category", href: "category" },
      { link: "Subcategory", href: "subcategory" },
    ],
    sx: {},
    lightVariant: false,
  },
};

export const LightVariant: Story = {
  args: {
    crumbs: [
      { link: "Home", href: "/" },
      { link: "Category", href: "category" },
      { link: "Subcategory", href: "subcategory" },
    ],
    sx: {},
    lightVariant: true,
  },
  parameters: {
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#271911" }],
    },
  },
};

export const CustomStyle: Story = {
  args: {
    crumbs: [
      { link: "Home", href: "/" },
      { link: "Category", href: "category" },
      { link: "Subcategory", href: "subcategory" },
    ],
    sx: { color: "red" },
    lightVariant: false,
  },
};
