import type { Meta, StoryObj } from "@storybook/nextjs";
import Map from "@the-story/standard-core/atoms/Map/Map";

const defaultEmbedCode =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19501.821636949888!2d16.88213195!3d52.33908575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1723024430525!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>';

const meta: Meta<typeof Map> = {
  title: "Atoms/Map",
  component: Map,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    embedCode: {
      control: "text",
      description: "The embed code containing the iframe URL for the map",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    embedCode: defaultEmbedCode,
  },
};

export const NoEmbedCode: Story = {
  args: {
    embedCode: "",
  },
};
