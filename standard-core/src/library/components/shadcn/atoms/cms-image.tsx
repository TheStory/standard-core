import type { APINumber, APIString } from "../../../types";
import { cmsMediaUrl } from "../../../utils/cmsMediaUrl";
import type { Data } from "@strapi/strapi";
import Image, { type ImageProps } from "next/image";

type BaseUploadedImageProps = {
  url?: APIString;
  alternativeText?: APIString;
  width?: APINumber;
  height?: APINumber;
  fill?: boolean;
} & Omit<ImageProps, "src" | "alt" | "width" | "height" | "id">;

function BaseUploadedImage({
  url,
  alternativeText,
  width,
  height,
  fill = false,
  ...props
}: BaseUploadedImageProps) {
  if (!url) return null;
  return (
    <Image
      src={cmsMediaUrl(url)}
      alt={alternativeText ?? ""}
      width={!fill && width && height ? width : undefined}
      height={!fill && width && height ? height : undefined}
      fill={fill || !width || !height}
      {...props}
    />
  );
}

function CmsImage({
  image,
  fill = false,
  sizes,
}: {
  image: Data.ContentType<"plugin::upload.file"> | null;
  fill?: boolean;
  sizes?: string;
}) {
  return image?.url ? (
    <BaseUploadedImage {...image} fill={fill} sizes={sizes} />
  ) : null;
}

export { BaseUploadedImage, CmsImage };
export type { BaseUploadedImageProps };
