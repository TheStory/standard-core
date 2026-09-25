import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@the-story/standard-core/components/shadcn/atoms/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@the-story/standard-core/components/shadcn/atoms/card";

const meta = {
  title: "Design System/Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "Card groups related content and actions in a visually contained surface.",
          classification: "Atom",
          shadcn: [
            "Card",
            "CardHeader",
            "CardTitle",
            "CardDescription",
            "CardAction",
            "CardContent",
            "CardFooter",
          ],
          contract:
            "Header, content and footer are optional composition regions. Preserve consistent padding, border radius and action alignment.",
        }),
      },
    },
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Project consultation</CardTitle>
        <CardDescription>
          Discuss materials, dimensions and delivery.
        </CardDescription>
      </CardHeader>
      <CardContent>Available online or in the Warsaw studio.</CardContent>
      <CardFooter>
        <Button>Book a meeting</Button>
      </CardFooter>
    </Card>
  ),
};
export const WithHeaderAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Order summary</CardTitle>
        <CardDescription>Three products</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>Total: 4,800 PLN</CardContent>
    </Card>
  ),
};
