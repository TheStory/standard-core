import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@the-story/standard-core/components/shadcn/atoms/button";
import { ArrowRight } from "lucide-react";

const meta = {
  title: "Design System/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Button is the primary action control used to trigger an operation or navigate to
another destination. Use one visually dominant button per decision area.

### Design-system mapping

- **Classification:** Atom
- **Shadcn mapping:** Button

### Available variants

- default
- secondary
- outline
- ghost
- link
- destructive

### Available sizes

- xs, sm, default and lg for text buttons
- icon-xs, icon-sm, icon and icon-lg for icon-only buttons

### Design contract

Designs must provide every variant and size listed in the controls below. Each
variant needs default, hover, focus-visible and disabled states. Destructive is
reserved for irreversible or high-risk actions. Icon-only buttons require an
accessible label and must use one of the icon sizes.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Visual hierarchy and semantic intent of the action.",
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      table: {
        category: "Appearance",
        defaultValue: { summary: "default" },
      },
    },
    size: {
      description: "Control height, horizontal padding and icon dimensions.",
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      table: {
        category: "Appearance",
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      description:
        "Renders the child element as the control while preserving button styling and behavior.",
      control: "boolean",
      table: {
        category: "Composition",
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description:
        "Prevents interaction and applies the disabled visual state.",
      control: "boolean",
      table: { category: "State" },
    },
    children: {
      description: "Visible label and optional leading or trailing icon.",
      control: "text",
      table: { category: "Content" },
    },
    className: {
      description:
        "Optional styling extension. Product code should prefer supported variants and sizes.",
      control: "text",
      table: { category: "Advanced" },
    },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All supported visual variants. Their names form the shared contract between code and Figma.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Text-button sizes. Icon-only controls use the corresponding icon-xs, icon-sm, icon and icon-lg sizes.",
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button className="ring-ring/50 ring-[3px]">Focus visible</Button>
      <Button disabled>Disabled</Button>
      <Button aria-invalid="true">Invalid</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Reference states for design handoff. Hover remains available by interacting with any enabled example.",
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        Continue <ArrowRight />
      </Button>
      <Button size="icon" aria-label="Continue">
        <ArrowRight />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons may contain one supporting icon. Icon-only usage always requires an accessible label.",
      },
    },
  },
};

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a href="#button-documentation">Open documentation</a>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use asChild when an action must retain native link semantics while looking like a button.",
      },
    },
  },
};
