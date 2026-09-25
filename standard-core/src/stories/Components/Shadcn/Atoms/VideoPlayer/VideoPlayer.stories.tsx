import { designSystemDocs } from "../../design-system-docs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VideoPlayer } from "@the-story/standard-core/components/shadcn/atoms/video-player";

const videoSrc =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const meta = {
  title: "Design System/Atoms/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: designSystemDocs({
          purpose:
            "VideoPlayer presents responsive video with either native controls or a simplified play/pause control.",
          classification: "Atom",
          implementation: "custom",
          shadcn: ["Button"],
          contract:
            "Define poster ratio, cover behaviour and play/pause states. Custom controls remain centred and keyboard accessible.",
        }),
      },
    },
  },
  args: {
    videoSrc,
    videoPoster: "",
    width: 640,
    height: 360,
    controls: false,
    muted: true,
    loop: false,
  },
  argTypes: {
    controls: { control: "boolean" },
    muted: { control: "boolean" },
    loop: { control: "boolean" },
    cover: { control: "boolean" },
    playing: { control: "boolean" },
    preload: { control: "radio", options: ["none", "metadata", "auto"] },
  },
} satisfies Meta<typeof VideoPlayer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const CustomControl: Story = {};
export const NativeControls: Story = { args: { controls: true } };
