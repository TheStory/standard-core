import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  SvgIcon,
  iconNames,
} from "@the-story/standard-core/components/shadcn/atoms/svg-icon";

const meta = {
  title: "Design System/Atoms/SvgIcon",
  component: SvgIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "SvgIcon renders an icon from the shared icon service or an explicit SVG URL.",
          classification: "Atom",
          shadcn: [],
          contract:
            "Icons inherit text colour by default, remain decorative and use consistent named sizes. Product meaning must not rely on an icon alone.",
        }),
      },
    },
  },
  argTypes: {
    iconName: {
      control: "select",
      options: Object.keys(iconNames),
      description: "Name from the shared icon catalogue.",
    },
    size: { control: "text", description: "CSS or numeric square size." },
    disableMask: {
      control: "boolean",
      description: "Displays original SVG colours instead of currentColor.",
    },
    url: { control: "text" },
  },
  args: { iconName: "Star", size: 32 },
} satisfies Meta<typeof SvgIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Catalogue: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6">
      {Object.keys(iconNames).map((name) => (
        <div key={name} className="grid justify-items-center gap-2 text-xs">
          <SvgIcon iconName={name as keyof typeof iconNames} size={28} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
