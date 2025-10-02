import type { Format } from "@imgproxy/imgproxy-js-core";
import { generateImageUrl } from "@imgproxy/imgproxy-node";
import Box, { type BoxProps } from "@mui/material/Box";
import type { ImageResizeOption } from "@thestory/standard-core/types";

type ConstructCroppedImageUrlParams = {
  url: string;
  width?: number;
  height?: number;
  dpr?: number;
  resizingType?: ImageResizeOption;
  format?: Format | undefined;
};

export const constructCroppedImageUrl = ({
  url,
  width,
  height,
  dpr = 1,
  resizingType = "fill",
  format = "webp",
}: ConstructCroppedImageUrlParams) =>
  generateImageUrl({
    endpoint: `${process.env.NEXT_PUBLIC_IMAGE_PROXY}/`,
    url,
    options: {
      resizing_type: resizingType,
      width,
      height,
      enlarge: resizingType !== "fit",
      format: format,
      dpr,
    },
  });

interface CroppedImageProps extends BoxProps {
  src: string;
  width?: number;
  height?: number;
  cover?: boolean;
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  alt?: string;
  loading?: "lazy" | "eager";
  resizingType?: ImageResizeOption;
}

const CroppedImage = ({
  src,
  width,
  height,
  cover = false,
  desktopOnly = false,
  mobileOnly = false,
  loading = "lazy",
  resizingType = "fill",
  sx,
  ...props
}: CroppedImageProps) => {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <Box
      component="img"
      loading={loading}
      {...(resizingType !== "fit" && {
        srcSet: `${constructCroppedImageUrl({
          url: src,
          width,
          height,
          dpr: 2,
          resizingType,
        })} 2x, ${constructCroppedImageUrl({
          url: src,
          width,
          height,
          dpr: 3,
          resizingType,
        })} 3x`,
      })}
      src={constructCroppedImageUrl({
        url: src,
        width,
        height,
        dpr: 1,
        resizingType,
      })}
      {...(resizingType !== "fit" && { width, height })}
      sx={{
        maxWidth: "100%",
        display: "block",
        margin: 0,
        border: 0,
        ...(cover
          ? {
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }
          : {}),
        ...(desktopOnly
          ? {
              display: { xs: "none", lg: "block" },
            }
          : {}),
        ...(mobileOnly
          ? {
              display: { xs: "block", lg: "none" },
            }
          : {}),
        ...sx,
      }}
      {...props}
    />
  );
};

export default CroppedImage;
