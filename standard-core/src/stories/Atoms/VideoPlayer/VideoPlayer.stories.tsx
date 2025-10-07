import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "@thestory/standard-core/atoms/VideoPlayer/VideoPlayer";

const meta: Meta<typeof VideoPlayer> = {
  title: "Atoms/VideoPlayer",
  component: VideoPlayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    cover: { control: "boolean" },
    controls: { control: "boolean" },
    muted: { control: "boolean" },
    loop: { control: "boolean" },
    playing: { control: "boolean" },
    sx: { control: "object" },
  },
  args: {
    width: 640,
    height: 360,
    videoSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoPoster: "https://storybook.js.org/images/placeholders/350x150.png",
    controls: true,
    muted: true,
    loop: false,
    cover: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Cover: Story = {
  args: {
    cover: true,
  },
};
