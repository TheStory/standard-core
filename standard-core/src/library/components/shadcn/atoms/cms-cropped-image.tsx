import { cmsMediaUrl } from "../../../utils/cmsMediaUrl";
import type { Data } from "@strapi/strapi";

import { CroppedImage, type CroppedImageProps } from "./cropped-image";

type ResponsiveSize = number | { xs: number; lg: number } | null;
type CmsCroppedImageProps = Omit<
  CroppedImageProps,
  "src" | "width" | "height"
> & {
  image?: Data.ContentType<"plugin::upload.file"> | null;
  width?: ResponsiveSize;
  height?: ResponsiveSize;
};

function resolveSize(value?: ResponsiveSize) {
  return typeof value === "object" && value
    ? value
    : { xs: value ?? undefined, lg: value ?? undefined };
}

function CmsCroppedImage({
  image,
  width,
  height,
  alt,
  ...props
}: CmsCroppedImageProps) {
  if (!image || typeof image.url !== "string") return null;
  const widths = resolveSize(width);
  const heights = resolveSize(height);
  const common = {
    ...props,
    src: cmsMediaUrl(image.url),
    alt:
      typeof alt === "string"
        ? alt
        : typeof image.alternativeText === "string"
          ? image.alternativeText
          : "",
  };

  if (widths.xs !== widths.lg || heights.xs !== heights.lg) {
    return (
      <>
        <CroppedImage
          {...common}
          width={widths.xs}
          height={heights.xs}
          mobileOnly
        />
        <CroppedImage
          {...common}
          width={widths.lg}
          height={heights.lg}
          desktopOnly
        />
      </>
    );
  }

  return <CroppedImage {...common} width={widths.xs} height={heights.xs} />;
}

export { CmsCroppedImage };
export type { CmsCroppedImageProps };
