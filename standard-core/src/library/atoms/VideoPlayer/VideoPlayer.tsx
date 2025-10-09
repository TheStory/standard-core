import Box from "@mui/material/Box";
import type { SxProps } from "@mui/material/styles";
import { constructCroppedImageUrl } from "@thestory/standard-core/atoms/CroppedImage";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
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
  showPlayPauseMobile?: boolean; // show overlay button on mobile (default true)
  showPlayPauseDesktop?: boolean; // show overlay button on desktop (default true)
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
      showPlayPauseMobile = true,
      showPlayPauseDesktop = true,
    },
    ref,
  ) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [paused, setPaused] = useState(true);

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

    // keep paused state in sync with media events
    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      const onPlay = () => setPaused(false);
      const onPause = () => setPaused(true);
      const onEnded = () => setPaused(true);
      v.addEventListener("play", onPlay);
      v.addEventListener("pause", onPause);
      v.addEventListener("ended", onEnded);
      // initialize
      setPaused(v.paused);
      return () => {
        v.removeEventListener("play", onPlay);
        v.removeEventListener("pause", onPause);
        v.removeEventListener("ended", onEnded);
      };
    }, []);

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

    const showNativeControls = controls === true;

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
          controls={showNativeControls}
        />
        {!showNativeControls && (
          <Box
            component="button"
            type="button"
            aria-label={paused ? "Play video" : "Pause video"}
            onClick={toggle}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "none",
              display: {
                xs: showPlayPauseMobile ? "flex" : "none",
                md: showPlayPauseDesktop ? "flex" : "none",
              },
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "primary.contrastText",
              backgroundColor: "action.disabled",
              transition: "background-color .2s ease",
              "&:hover": { backgroundColor: "action.active" },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: 24,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {paused ? "▶" : "❚❚"}
            </Box>
          </Box>
        )}
      </Box>
    );
  },
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
