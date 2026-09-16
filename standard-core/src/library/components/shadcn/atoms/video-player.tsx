"use client";

import { cmsMediaUrl } from "../../../utils/cmsMediaUrl";
import { constructCroppedImageUrl } from "../../../utils/constructCroppedImageUrl";
import { cn } from "../utils/cn";
import { Pause, Play } from "lucide-react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { Button } from "./button";

type VideoPlayerProps = {
  videoSrc: string;
  videoPoster: string;
  cover?: boolean;
  width?: number;
  height?: number;
  className?: string;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  playing?: boolean;
  preload?: "none" | "metadata" | "auto";
};
type VideoPlayerHandle = {
  play: () => Promise<void> | void;
  pause: () => void;
  stop: () => void;
  toggle: () => Promise<void> | void;
  setCurrentTime: (seconds: number) => void;
  getCurrentTime: () => number;
  getElement: () => HTMLVideoElement | null;
};

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  (
    {
      videoSrc,
      videoPoster,
      cover,
      width,
      height,
      className,
      controls = false,
      muted = true,
      loop = false,
      playing,
      preload = "metadata",
    },
    ref,
  ) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [paused, setPaused] = useState(true);
    const play = () => videoRef.current?.play();
    const pause = () => videoRef.current?.pause();
    const stop = () => {
      pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    };
    const toggle = () => (videoRef.current?.paused ? play() : pause());

    useImperativeHandle(ref, () => ({
      play,
      pause,
      stop,
      toggle,
      setCurrentTime: (seconds) => {
        if (videoRef.current) videoRef.current.currentTime = seconds;
      },
      getCurrentTime: () => videoRef.current?.currentTime ?? 0,
      getElement: () => videoRef.current,
    }));

    useEffect(() => {
      if (playing === undefined) return;
      if (playing) void play()?.catch(() => undefined);
      else pause();
    }, [playing]);

    return (
      <div className={cn("relative flex justify-center", className)}>
        <video
          ref={videoRef}
          src={cmsMediaUrl(videoSrc)}
          poster={
            videoPoster
              ? constructCroppedImageUrl({
                  url: cmsMediaUrl(videoPoster),
                  width: width ?? 640,
                  height: height ?? 360,
                })
              : undefined
          }
          width={width}
          height={height}
          className={cn("size-full", cover && "object-cover object-center")}
          muted={muted}
          loop={loop}
          controls={controls}
          autoPlay={playing === true}
          playsInline
          preload={preload}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onEnded={() => setPaused(true)}
        />
        {!controls && (
          <Button
            type="button"
            size="icon-lg"
            className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full"
            aria-label={paused ? "Play video" : "Pause video"}
            onClick={() => void toggle()}
          >
            {paused ? <Play /> : <Pause />}
          </Button>
        )}
      </div>
    );
  },
);

VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
export type { VideoPlayerHandle, VideoPlayerProps };
