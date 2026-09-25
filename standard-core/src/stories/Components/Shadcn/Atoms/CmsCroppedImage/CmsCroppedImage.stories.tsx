import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CmsCroppedImage } from "@the-story/standard-core/components/shadcn/atoms/cms-cropped-image";

const meta = {
  title: "Design System/Atoms/CmsCroppedImage",
  component: CmsCroppedImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CmsCroppedImage adapts CMS media to responsive cropped-image slots.",
          classification: "Atom",
          implementation: "custom",
          shadcn: [],
          internal: ["CroppedImage"],
          contract:
            "Designs may provide one shared crop or distinct xs and lg dimensions. Missing CMS media intentionally renders nothing.",
        }),
      },
    },
  },
  argTypes: {
    width: { description: "Shared width or responsive xs/lg widths." },
    height: { description: "Shared height or responsive xs/lg heights." },
    image: { control: false, description: "CMS upload media object." },
  },
} satisfies Meta<typeof CmsCroppedImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const MissingMedia: Story = {
  args: { image: null, width: 480, height: 300 },
  parameters: {
    docs: {
      description: {
        story: "The component renders no placeholder when CMS media is absent.",
      },
    },
  },
};
