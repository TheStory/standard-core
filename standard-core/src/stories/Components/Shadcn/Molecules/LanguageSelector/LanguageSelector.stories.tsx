import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LanguageSelector } from "@the-story/standard-core/components/shadcn/molecules/language-selector";

const meta = {
  title: "Design System/Molecules/LanguageSelector",
  component: LanguageSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "LanguageSelector displays the active locale and navigates to an equivalent localized page.",
          classification: "Molecule",
          implementation: "custom",
          shadcn: [
            "Button",
            "DropdownMenu",
            "DropdownMenuTrigger",
            "DropdownMenuContent",
            "DropdownMenuItem",
          ],
          internal: ["Link"],
          contract:
            "The trigger combines a language icon and uppercase locale code. The menu lists every configured locale and preserves the current route when possible.",
        }),
      },
    },
  },
} satisfies Meta<typeof LanguageSelector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
