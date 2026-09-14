import VideoPlayer from "../library/atoms/VideoPlayer/VideoPlayer";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

const renderVideoPlayer = (playing: boolean) => {
  const markup = renderToStaticMarkup(
    <VideoPlayer
      videoSrc="/video.mp4"
      videoPoster=""
      playing={playing}
      muted
    />,
  );

  return markup.match(/<video[^>]*>/)?.[0] ?? "";
};

describe("VideoPlayer", () => {
  it("renders the native mobile autoplay attributes when playing", () => {
    const video = renderVideoPlayer(true);

    expect(video).toMatch(/auto[Pp]lay=""/);
    expect(video).toMatch(/plays[Ii]nline=""/);
    expect(video).toContain('preload="metadata"');
    expect(video).toContain('muted=""');
  });

  it("does not render autoplay when playing is false", () => {
    const video = renderVideoPlayer(false);

    expect(video).not.toMatch(/auto[Pp]lay/);
    expect(video).toMatch(/plays[Ii]nline=""/);
    expect(video).toContain('preload="metadata"');
    expect(video).toContain('muted=""');
  });
});
