import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { constructCroppedImageUrl } from "@thestory/standard-core/atoms/CroppedImage/CroppedImage";
import React from "react";

const fullSizeStyles = {
  width: "100%",
  height: "100%",
};
interface VideoPlayerProps {
  videoSrc: string;
  videoPoster: string;
  variant?: "default" | "fullSize";
  cover?: boolean;
  width?: number;
  height?: number;
  sx?: SxProps;
}

const VideoPlayer = ({
  width,
  height,
  videoSrc,
  videoPoster,
  cover,
  sx,
}: VideoPlayerProps) => {
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
        muted={true}
      />
    </Box>
  );
};

export default VideoPlayer;
