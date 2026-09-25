import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@the-story/standard-core/components/shadcn/atoms/accordion";

const meta = {
  title: "Design System/Atoms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Accordion progressively reveals related content in a compact vertical list.",
          classification: "Atom",
          implementation: "shadcn",
          shadcn: [
            "Accordion",
            "AccordionItem",
            "AccordionTrigger",
            "AccordionContent",
          ],
          contract:
            "Provide closed, open, hover, focus-visible and disabled states. The trigger always includes a disclosure indicator.",
        }),
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="materials">
        <AccordionTrigger>What materials are available?</AccordionTrigger>
        <AccordionContent>
          Solid oak, ash and walnut are available.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="delivery">
        <AccordionTrigger>How does delivery work?</AccordionTrigger>
        <AccordionContent>
          Delivery is arranged after production.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-96" defaultValue={["one", "two"]}>
      <AccordionItem value="one">
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>First answer.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>Second answer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
