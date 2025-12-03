import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Accordion,
  type AccordionItem,
} from "@the-story/standard-core/atoms/Accordion";
import { CmsRichText } from "@the-story/standard-core/atoms/CmsRichText";
import type { CtaButtonProps } from "@the-story/standard-core/atoms/CtaButton";

const meta: Meta<typeof Accordion> = {
  title: "Atoms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: {
        type: "object",
      },
      description: "List of accordion items to display",
    },
    button: {
      control: {
        type: "object",
      },
      description: "CTA button configuration",
    },
    disableIcon: {
      control: "boolean",
      description: "Disables the icon in accordion items",
      defaultValue: false,
    },
    disableGutters: {
      control: "boolean",
      description: "Disables gutters in accordion items",
      defaultValue: false,
    },
    sx: {
      control: "object",
      description: "Custom styles for the accordion",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
      sx: {
        color: "primary.main",
        textDecoration: "none",
      },
    } as CtaButtonProps["button"],
    disableIcon: false,
    disableGutters: false,
  },
};

export const WithoutButton: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: undefined,
    disableIcon: false,
    disableGutters: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
    } as CtaButtonProps["button"],
    disableIcon: true,
    disableGutters: false,
  },
};

export const DisabledGutters: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        content: "Content for item 1",
        overline: "Overline 1",
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
      {
        label: "Item 3",
        content: "Content for item 3",
        overline: "Overline 3",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
    } as CtaButtonProps["button"],
    disableIcon: false,
    disableGutters: true,
  },
};

export const InverseColors: Story = {
  args: {
    items: [
      {
        label: "Lorem ipsum dolor sit amet",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      },
      {
        label: "Praesent dapibus, neque id cursus faucibus",
        content:
          "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
      },
      {
        label: "Phasellus ultrices nulla quis nibh",
        content:
          "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
    } as CtaButtonProps["button"],
    disableIcon: false,
    disableGutters: true,
    useContrastColors: true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "black", padding: "20px", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithLinks: Story = {
  args: {
    items: [
      {
        label: "Lorem ipsum dolor sit amet",
        content: (
          <CmsRichText
            blocks={[
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
                  },
                ],
              },
              {
                type: "list",
                format: "unordered",
                children: [
                  {
                    type: "list-item",
                    children: [
                      {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet",
                      },
                    ],
                  },
                  {
                    type: "list-item",
                    children: [
                      {
                        type: "text",
                        text: "Lorem psum dolor",
                      },
                    ],
                  },
                  {
                    type: "list-item",
                    children: [
                      {
                        type: "text",
                        text: "Sit amet lorem",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        ),
        overline: "Overline 1",
        links: [
          { id: 11, label: "MeineFläche", overline: null, url: "#" },
          { id: 12, label: "McClaim", overline: null, url: "#" },
        ],
      },
      {
        label: "Item 2",
        content: "Content for item 2",
        overline: "Overline 2",
      },
    ] as AccordionItem[],
    button: {
      label: "Load More",
      overline: "Explore more options",
      url: "https://example.com",
      sx: {
        color: "primary.main",
        textDecoration: "none",
      },
    } as CtaButtonProps["button"],
    disableIcon: false,
    disableGutters: false,
  },
};
