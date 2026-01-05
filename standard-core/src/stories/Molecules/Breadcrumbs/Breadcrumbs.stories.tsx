import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Crumbs from "@the-story/standard-core/molecules/Crumbs/Crumbs";

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
  decorators: [
    (Story: any) => (
      <div style={{ backgroundColor: "#271911", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
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
