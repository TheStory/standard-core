import Image, { type ImageProps } from "next/image";
import type { APIResponse } from "standard-core/types";
import { cmsMediaUrl } from "standard-core/utils/cmsMediaUrl";

type BaseUploadImageProps = {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  fill?: boolean;
} & Omit<ImageProps, "src" | "alt">;

export const BaseUploadedImage = ({
  url,
  alternativeText,
  width,
  height,
  fill = false,
  ...props
}: BaseUploadImageProps) => {
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
  image: APIResponse<"plugin::upload.file">;
  fill?: boolean;
  sizes?: string;
};

const CmsImage = ({ image, fill = false, sizes }: UploadedImageProps) => {
  const { data } = image;

  if (!data) {
    return null;
  }

  const { attributes: imageData } = data;

  return <BaseUploadedImage sizes={sizes} {...imageData} fill={fill} />;
};

export default CmsImage;
