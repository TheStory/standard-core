import type { SxProps } from "@mui/material/styles";
import { CroppedImage } from "@thestory/standard-core/atoms/CroppedImage";
import type { ImageResizeOption } from "@thestory/standard-core/types";
import { cmsMediaUrl } from "@thestory/standard-core/utils/cmsMediaUrl";

type DifferentWidths = number | { xs: number; lg: number };

interface CmsCroppedImageProps {
  image: any;
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
  let data;

  if (image.hasOwnProperty("data")) {
    data = image?.data;
  } else {
    data = image;
  }

  if (!data) return null;

  const { attributes } = data;

  if (!attributes) return null;

  const { url, alternativeText = "" } = attributes;

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
          src={cmsMediaUrl(url)}
          width={setMobileWidth}
          height={setMobileHeight}
          cover={cover}
          alt={alternativeText}
          resizingType={resizingType}
          sx={sx}
          loading={loading}
          mobileOnly
        />
        <CroppedImage
          src={cmsMediaUrl(url)}
          width={setDesktopWidth}
          height={setDesktopHeight}
          cover={cover}
          alt={alternativeText}
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
      src={cmsMediaUrl(url)}
      width={setMobileWidth}
      height={setMobileHeight}
      cover={cover}
      alt={alternativeText}
      resizingType={resizingType}
      sx={sx}
      loading={loading}
    />
  );
};

export default CmsCroppedImage;
