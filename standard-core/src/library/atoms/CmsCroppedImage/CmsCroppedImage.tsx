import type { SxProps } from "@mui/material/styles";
import type { Data } from "@strapi/strapi";
import { CroppedImage } from "@the-story/standard-core/atoms/CroppedImage";
import type { ImageResizeOption } from "@the-story/standard-core/types";
import { cmsMediaUrl } from "@the-story/standard-core/utils/cmsMediaUrl";

type DifferentWidths = number | { xs: number; lg: number } | null;

interface CmsCroppedImageProps {
  image?: Data.ContentType<"plugin::upload.file"> | null;
  width?: DifferentWidths;
  height?: DifferentWidths;
  cover?: boolean;
  resizingType?: ImageResizeOption;
  sx?: SxProps;
  loading?: "lazy" | "eager";
}

const CmsCroppedImage = ({
  image,
  width,
  height,
  cover = false,
  resizingType = "fill",
  sx,
  loading,
}: CmsCroppedImageProps) => {
  if (!image) return null;

  const { url, alternativeText } = image as {
    url?: unknown;
    alternativeText?: unknown;
  };

  const safeUrl: string | null | undefined =
    typeof url === "string" ? url : null;
  const safeAlt: string | null | undefined =
    typeof alternativeText === "string" ? alternativeText : undefined;

  let setMobileWidth;
  let setDesktopWidth;
  let setDesktopHeight;
  let setMobileHeight;

  if (width) {
    if (typeof width === "object") {
      setMobileWidth = width.xs;
      setDesktopWidth = width.lg;
    } else {
      setMobileWidth = width;
      setDesktopWidth = width;
    }
  }

  if (height) {
    if (typeof height === "object") {
      setMobileHeight = height.xs;
      setDesktopHeight = height.lg;
    } else {
      setMobileHeight = height || setMobileWidth;
      setDesktopHeight = height || setDesktopWidth;
    }
  }

  if (
    setMobileWidth !== setDesktopWidth ||
    setMobileHeight !== setDesktopHeight
  ) {
    return (
      <>
        <CroppedImage
          src={cmsMediaUrl(safeUrl)}
          width={setMobileWidth}
          height={setMobileHeight}
          cover={cover}
          alt={safeAlt}
          resizingType={resizingType}
          sx={sx}
          loading={loading}
          mobileOnly
        />
        <CroppedImage
          src={cmsMediaUrl(safeUrl)}
          width={setDesktopWidth}
          height={setDesktopHeight}
          cover={cover}
          alt={safeAlt}
          resizingType={resizingType}
          sx={sx}
          loading={loading}
          desktopOnly
        />
      </>
    );
  }

  return (
    <CroppedImage
      src={cmsMediaUrl(safeUrl)}
      width={setMobileWidth}
      height={setMobileHeight}
      cover={cover}
      alt={safeAlt}
      resizingType={resizingType}
      sx={sx}
      loading={loading}
    />
  );
};

export default CmsCroppedImage;
