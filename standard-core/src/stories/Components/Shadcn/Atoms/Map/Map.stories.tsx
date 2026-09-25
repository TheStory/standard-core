import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Map } from "@the-story/standard-core/components/shadcn/atoms/map";

const meta = {
  title: "Design System/Atoms/Map",
  component: Map,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Map embeds a location supplied as an iframe URL or embed snippet.",
          classification: "Atom",
          implementation: "custom",
          shadcn: [],
          contract:
            "Designs define container height and responsive width. The embedded provider controls internal map visuals; surrounding layout must not depend on them.",
        }),
      },
    },
  },
  args: {
    embedCode: "https://www.openstreetmap.org/export/embed.html",
    height: 360,
    className: "max-w-4xl",
  },
  argTypes: {
    embedCode: {
      control: "text",
      description: "Map URL or provider embed code.",
    },
    height: { control: { type: "range", min: 200, max: 720, step: 20 } },
  },
} satisfies Meta<typeof Map>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
