import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CroppedImage } from "@the-story/standard-core/components/shadcn/atoms/cropped-image";

const meta = {
  title: "Design System/Atoms/CroppedImage",
  component: CroppedImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CroppedImage requests an image crop for a defined visual slot.",
          classification: "Atom",
          implementation: "custom",
          shadcn: [],
          contract:
            "Designs specify width, height, aspect ratio and fill or fit behaviour. Separate desktop and mobile crops are allowed when composition changes.",
        }),
      },
    },
  },
  argTypes: {
    resizingType: {
      control: "radio",
      options: ["fill", "fit"],
      description: "Crop or contain the source image.",
    },
    cover: { control: "boolean" },
    desktopOnly: { control: "boolean" },
    mobileOnly: { control: "boolean" },
  },
  args: {
    src: "https://picsum.photos/800/600",
    width: 480,
    height: 300,
    alt: "Example furniture",
    resizingType: "fill",
  },
} satisfies Meta<typeof CroppedImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Fit: Story = { args: { resizingType: "fit" } };
