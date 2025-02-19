import { generateImageUrl } from "@imgproxy/imgproxy-node";
import Box, { type BoxProps } from "@mui/material/Box";
import type { ImageResizeOption } from "@thestory/standard-core/types";

export const constructCroppedImageUrl = (
  url: string,
  width?: number,
  height?: number,
  dpr = 1,
  resizingType: ImageResizeOption = "fill",
) =>
  generateImageUrl({
    endpoint: `${process.env.NEXT_PUBLIC_IMAGE_PROXY}/`,
    url,
    options: {
      resizing_type: resizingType,
      width,
      height,
      enlarge: 1,
      format: "webp",
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
  let finalWidth = width as number | "auto";
  let finalHeight = height as number | "auto";

  if (resizingType === "fit" && width && height) {
    if (width < height) {
      finalWidth = "auto";
    } else {
      finalHeight = "auto";
    }
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <Box
      component="img"
      loading={loading}
      srcSet={`${constructCroppedImageUrl(
        src,
        width,
        height,
        2,
        resizingType,
      )} 2x, ${constructCroppedImageUrl(
        src,
        width,
        height,
        3,
        resizingType,
      )} 3x`}
      src={constructCroppedImageUrl(src, width, height, 1, resizingType)}
      width={finalWidth}
      height={finalHeight}
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
