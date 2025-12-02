import type { Data } from "@strapi/strapi";
import type { APINumber, APIString } from "@the-story/standard-core/types";
import { cmsMediaUrl } from "@the-story/standard-core/utils/cmsMediaUrl";
import Image, { type ImageProps } from "next/image";

type BaseUploadImageProps = {
  url?: APIString;
  alternativeText?: APIString;
  width?: APINumber;
  height?: APINumber;
  fill?: boolean;
} & Omit<ImageProps, "src" | "alt" | "width" | "height" | "id">;

export const BaseUploadedImage = ({
  url,
  alternativeText,
  width,
  height,
  fill = false,
  ...props
}: BaseUploadImageProps) => {
  if (!url) return null;

  let baseProps: Partial<ImageProps> = {
    ...props,
  };

  if (!width || !height || fill) {
    baseProps = {
      src: cmsMediaUrl(url),
      sizes: baseProps.sizes,
      fill,
      style: {
        objectFit: "cover",
        objectPosition: "center",
      },
    };
  } else {
    baseProps = {
      src: cmsMediaUrl(url),
      width,
      height,
    };
  }

  if (!baseProps.src) return null;

  const { src, ...restProps } = baseProps;

  return <Image src={src} {...restProps} alt={alternativeText || ""} />;
};

type UploadedImageProps = {
  image: Data.ContentType<"plugin::upload.file"> | null;
  fill?: boolean;
  sizes?: string;
};

const CmsImage = ({ image, fill = false, sizes }: UploadedImageProps) => {
  if (!image || !image.url) {
    return null;
  }

  return <BaseUploadedImage sizes={sizes} {...image} fill={fill} />;
};

export default CmsImage;
