import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Atoms from "@the-story/standard-core/components/shadcn/atoms";

const meta = {
  title: "Components/Shadcn/Atoms",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
  render: () => (
    <Atoms.Accordion type="single" collapsible className="w-80">
      <Atoms.AccordionItem value="one">
        <Atoms.AccordionTrigger>Accordion</Atoms.AccordionTrigger>
        <Atoms.AccordionContent>Accordion content</Atoms.AccordionContent>
      </Atoms.AccordionItem>
    </Atoms.Accordion>
  ),
};
export const Avatar: Story = {
  render: () => (
    <Atoms.Avatar>
      <Atoms.AvatarFallback>SC</Atoms.AvatarFallback>
    </Atoms.Avatar>
  ),
};
export const BackToTopButton: Story = {
  render: () => (
    <div className="h-[120vh]">
      <p>Scroll to reveal the button.</p>
      <Atoms.BackToTopButton />
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
export const Badge: Story = { render: () => <Atoms.Badge>Badge</Atoms.Badge> };
export const Breadcrumb: Story = {
  render: () => (
    <Atoms.Breadcrumb>
      <Atoms.BreadcrumbList>
        <Atoms.BreadcrumbItem>
          <Atoms.BreadcrumbLink href="#">Home</Atoms.BreadcrumbLink>
        </Atoms.BreadcrumbItem>
        <Atoms.BreadcrumbSeparator />
        <Atoms.BreadcrumbItem>
          <Atoms.BreadcrumbPage>Page</Atoms.BreadcrumbPage>
        </Atoms.BreadcrumbItem>
      </Atoms.BreadcrumbList>
    </Atoms.Breadcrumb>
  ),
};
export const Button: Story = {
  render: () => <Atoms.Button>Button</Atoms.Button>,
};
export const Card: Story = {
  render: () => (
    <Atoms.Card className="w-80">
      <Atoms.CardHeader>
        <Atoms.CardTitle>Card</Atoms.CardTitle>
        <Atoms.CardDescription>Card description</Atoms.CardDescription>
      </Atoms.CardHeader>
      <Atoms.CardContent>Card content</Atoms.CardContent>
    </Atoms.Card>
  ),
};
export const Checkbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Atoms.Checkbox id="checkbox" />
      <Atoms.Label htmlFor="checkbox">Checkbox</Atoms.Label>
    </div>
  ),
};
export const CmsCroppedImage: Story = {
  render: () => (
    <Atoms.CmsCroppedImage
      image={null}
      width={320}
      height={180}
      alt="CMS cropped image requires CMS data"
    />
  ),
};
export const CmsImage: Story = {
  render: () => <Atoms.CmsImage image={null} />,
};
export const CmsMarkdown: Story = {
  render: () => (
    <Atoms.CmsMarkdown
      markdown={"## Markdown\n\nText with **bold** content."}
    />
  ),
};
export const CmsRichText: Story = {
  render: () => (
    <Atoms.CmsRichText
      blocks={[
        {
          type: "paragraph",
          children: [{ type: "text", text: "Rich text from Strapi." }],
        },
      ]}
    />
  ),
};
export const CopyToClipboard: Story = {
  render: () => <Atoms.CopyToClipboard text="Copied from standard-core" />,
};
export const CroppedImage: Story = {
  render: () => (
    <Atoms.CroppedImage
      src="https://picsum.photos/640/360"
      width={320}
      height={180}
      alt="Example"
    />
  ),
};
export const CtaButton: Story = {
  render: () => (
    <Atoms.CtaButton button={{ label: "Call to action", url: "#" }} />
  ),
};
export const DropdownMenu: Story = {
  render: () => (
    <Atoms.DropdownMenu>
      <Atoms.DropdownMenuTrigger asChild>
        <Atoms.Button variant="outline">Open menu</Atoms.Button>
      </Atoms.DropdownMenuTrigger>
      <Atoms.DropdownMenuContent>
        <Atoms.DropdownMenuItem>First action</Atoms.DropdownMenuItem>
        <Atoms.DropdownMenuItem>Second action</Atoms.DropdownMenuItem>
      </Atoms.DropdownMenuContent>
    </Atoms.DropdownMenu>
  ),
};
export const FormattedDate: Story = {
  render: () => <Atoms.FormattedDate value="2026-09-16" />,
};
export const Input: Story = {
  render: () => <Atoms.Input className="w-80" placeholder="Input" />,
};
export const Label: Story = { render: () => <Atoms.Label>Label</Atoms.Label> };
export const Link: Story = {
  render: () => <Atoms.Link href="#">Link</Atoms.Link>,
};
export const Map: Story = {
  render: () => (
    <Atoms.Map
      embedCode="https://www.openstreetmap.org/export/embed.html"
      height={320}
      className="w-[640px] max-w-full"
    />
  ),
};
export const Pagination: Story = {
  render: () => (
    <Atoms.Pagination>
      <Atoms.PaginationContent>
        <Atoms.PaginationItem>
          <Atoms.PaginationPrevious href="#" />
        </Atoms.PaginationItem>
        <Atoms.PaginationItem>
          <Atoms.PaginationLink href="#" isActive>
            1
          </Atoms.PaginationLink>
        </Atoms.PaginationItem>
        <Atoms.PaginationItem>
          <Atoms.PaginationNext href="#" />
        </Atoms.PaginationItem>
      </Atoms.PaginationContent>
    </Atoms.Pagination>
  ),
};
export const Progress: Story = {
  render: () => <Atoms.Progress value={60} className="w-80" />,
};
export const Select: Story = {
  render: () => (
    <Atoms.Select>
      <Atoms.SelectTrigger className="w-80">
        <Atoms.SelectValue placeholder="Select an option" />
      </Atoms.SelectTrigger>
      <Atoms.SelectContent>
        <Atoms.SelectItem value="one">Option one</Atoms.SelectItem>
        <Atoms.SelectItem value="two">Option two</Atoms.SelectItem>
      </Atoms.SelectContent>
    </Atoms.Select>
  ),
};
export const Separator: Story = {
  render: () => <Atoms.Separator className="w-80" />,
};
export const Skeleton: Story = {
  render: () => <Atoms.Skeleton className="h-24 w-80" />,
};
export const SvgIcon: Story = {
  render: () => <Atoms.SvgIcon iconName="Star" size={40} />,
};
export const Textarea: Story = {
  render: () => <Atoms.Textarea className="w-80" placeholder="Textarea" />,
};
export const Tooltip: Story = {
  render: () => (
    <Atoms.TooltipProvider>
      <Atoms.Tooltip>
        <Atoms.TooltipTrigger asChild>
          <Atoms.Button variant="outline">Hover me</Atoms.Button>
        </Atoms.TooltipTrigger>
        <Atoms.TooltipContent>Tooltip content</Atoms.TooltipContent>
      </Atoms.Tooltip>
    </Atoms.TooltipProvider>
  ),
};
export const VideoPlayer: Story = {
  render: () => (
    <Atoms.VideoPlayer
      videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      videoPoster=""
      width={480}
      height={270}
      controls
    />
  ),
};
