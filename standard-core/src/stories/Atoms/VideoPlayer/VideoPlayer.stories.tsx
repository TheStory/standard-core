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
    showPlayPauseMobile: { control: "boolean" },
    showPlayPauseDesktop: { control: "boolean" },
    sx: { control: "object" },
  },
  args: {
    width: 640,
    height: 360,
    videoSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoPoster: "https://storybook.js.org/images/placeholders/350x150.png",
    controls: false,
    muted: true,
    loop: false,
    cover: false,
    showPlayPauseMobile: true,
    showPlayPauseDesktop: true,
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

export const HideOnMobile: Story = {
  name: "Hide Play/Pause on Mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  args: {
    showPlayPauseMobile: false,
  },
};

export const HideOnDesktop: Story = {
  name: "Hide Play/Pause on Desktop",
  args: {
    showPlayPauseDesktop: false,
  },
};

export const BothHidden: Story = {
  name: "Hide Play/Pause on Both",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  args: {
    showPlayPauseMobile: false,
    showPlayPauseDesktop: false,
  },
};
