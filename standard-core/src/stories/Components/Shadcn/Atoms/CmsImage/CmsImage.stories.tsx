import { exampleCmsImage } from "../../../../fixtures/example-image";
import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CmsImage } from "@the-story/standard-core/components/shadcn/atoms/cms-image";

const exampleImage = exampleCmsImage as unknown as NonNullable<
  Parameters<typeof CmsImage>[0]["image"]
>;

const meta = {
  title: "Design System/Atoms/CmsImage",
  component: CmsImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "CmsImage renders responsive media supplied by the CMS and preserves its alternative text and dimensions.",
          classification: "Atom",
          implementation: "custom",
          shadcn: [],
          contract:
            "Designs define image ratio, crop intent and responsive size. Decorative images use empty alternative text; meaningful images require an editorial description.",
        }),
      },
    },
  },
  args: {
    image: exampleImage,
  },
} satisfies Meta<typeof CmsImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Fill: Story = {
  render: () => (
    <div className="relative h-64 w-96 overflow-hidden rounded-lg">
      <CmsImage image={exampleImage} fill sizes="384px" />
    </div>
  ),
};
