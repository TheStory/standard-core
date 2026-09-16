import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CopyToClipboard,
  CountryPicker,
  CtaButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FormattedDate,
  Input,
  Label,
  Link,
  MaskedPhoneNumber,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PhoneInput,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@the-story/standard-core/components/shadcn";

const meta = {
  title: "Components/Shadcn/All components",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <TooltipProvider>
      <div className="grid max-w-4xl gap-10">
        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Buttons and badges</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Core components</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#core-components">Localized link</Link>
            <FormattedDate value="2026-09-16" />
            <CopyToClipboard text="Text copied from standard-core" />
            <MaskedPhoneNumber officePhoneNumber="+48 123 456 789" />
          </div>
          <div className="grid max-w-md gap-4">
            <CountryPicker
              countries={[
                { code: "PL", label: "Poland" },
                { code: "DE", label: "Germany" },
              ]}
            />
            <PhoneInput placeholder="Phone number" />
            <CtaButton
              button={{
                label: "Call to action",
                overline: "Optional overline",
                url: "#core-components",
              }}
            />
          </div>
        </section>

        <Separator />

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Form controls</h2>
          <div className="grid max-w-md gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Write a message" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one">Option one</SelectItem>
                <SelectItem value="two">Option two</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Content</h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>
                Default shadcn card description.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={64} />
            </CardContent>
            <CardFooter className="justify-between">
              <Avatar>
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip content</TooltipContent>
              </Tooltip>
            </CardFooter>
          </Card>
          <Accordion type="single" collapsible className="max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion item</AccordionTrigger>
              <AccordionContent>
                Default accordion content without project styling.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Skeleton className="h-24 max-w-md" />
        </section>

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Navigation</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Current page</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-fit">
                Open menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>First action</DropdownMenuItem>
              <DropdownMenuItem>Second action</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>
    </TooltipProvider>
  ),
};
