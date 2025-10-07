import Box from "@mui/material/Box";
import type { SxProps } from "@mui/material/styles";
import { constructCroppedImageUrl } from "@thestory/standard-core/atoms/CroppedImage/CroppedImage";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const fullSizeStyles = {
  width: "100%",
  height: "100%",
};

export interface VideoPlayerProps {
  videoSrc: string;
  videoPoster: string;
  cover?: boolean;
  width?: number;
  height?: number;
  sx?: SxProps;
  controls?: boolean; // show native controls
  muted?: boolean; // default true
  loop?: boolean; // default false
  playing?: boolean; // controlled playing state
}

export type VideoPlayerHandle = {
  play: () => Promise<void> | void;
  pause: () => void;
  stop: () => void; // pause and reset to 0
  toggle: () => Promise<void> | void;
  setCurrentTime: (seconds: number) => void;
  getCurrentTime: () => number;
  getElement: () => HTMLVideoElement | null;
};

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  (
    {
      width,
      height,
      videoSrc,
      videoPoster,
      cover,
      sx,
      controls,
      muted = true,
      loop = false,
      playing,
    },
    ref,
  ) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const play = () => videoRef.current?.play();
    const pause = () => videoRef.current?.pause();
    const stop = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        try {
          videoRef.current.currentTime = 0;
        } catch (_) {
          // noop
        }
      }
    };
    const toggle = () => {
      if (!videoRef.current) return;
      if (videoRef.current.paused) {
        return videoRef.current.play();
      }
      videoRef.current.pause();
    };
    const setCurrentTime = (seconds: number) => {
      if (videoRef.current) {
        try {
          videoRef.current.currentTime = seconds;
        } catch (_) {
          // noop
        }
      }
    };
    const getCurrentTime = () => videoRef.current?.currentTime ?? 0;

    useImperativeHandle(ref, () => ({
      play,
      pause,
      stop,
      toggle,
      setCurrentTime,
      getCurrentTime,
      getElement: () => videoRef.current,
    }));

    // Sync with controlled `playing` prop
    useEffect(() => {
      if (playing === undefined) return; // uncontrolled
      if (!videoRef.current) return;
      if (playing) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        videoRef.current.play().catch(() => {
          /* ignore */
        });
      } else {
        videoRef.current.pause();
      }
    }, [playing]);

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          "& video": {
            ...fullSizeStyles,
            ...(cover
              ? {
                  objectPosition: "center",
                  objectFit: "cover",
                }
              : {}),
          },
          ...sx,
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          poster={
            videoPoster
              ? constructCroppedImageUrl({
                  url: videoPoster,
                  width: width || 640,
                  height: height || 360,
                })
              : undefined
          }
          width={width}
          height={height}
          muted={muted}
          loop={loop}
          controls={controls}
        />
      </Box>
    );
  },
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
