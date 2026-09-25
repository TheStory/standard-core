import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BaseUploadedImage } from "@the-story/standard-core/components/shadcn/atoms/cms-image";

const meta = {
  title: "Design System/Atoms/CmsImage",
  component: BaseUploadedImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CmsImage renders responsive media supplied by the CMS and preserves its alternative text and dimensions.",
          classification: "Atom",
          shadcn: [],
          contract:
            "Designs define image ratio, crop intent and responsive size. Decorative images use empty alternative text; meaningful images require an editorial description.",
        }),
      },
    },
  },
  args: {
    url: "https://picsum.photos/640/400",
    alternativeText: "Wooden furniture in a bright interior",
    width: 640,
    height: 400,
  },
} satisfies Meta<typeof BaseUploadedImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Fill: Story = {
  render: () => (
    <div className="relative h-64 w-96 overflow-hidden rounded-lg">
      <BaseUploadedImage
        url="https://picsum.photos/640/400"
        alternativeText="Example interior"
        fill
        sizes="384px"
        className="object-cover"
      />
    </div>
  ),
};
