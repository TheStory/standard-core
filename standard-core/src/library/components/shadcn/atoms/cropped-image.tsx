import type { APIString, ImageResizeOption } from "../../../types";
import { constructCroppedImageUrl } from "../../../utils/constructCroppedImageUrl";
import { cn } from "../utils/cn";
import type { ComponentProps } from "react";

type CroppedImageProps = Omit<ComponentProps<"img">, "src" | "alt"> & {
  src: string;
  width?: number;
  height?: number;
  cover?: boolean;
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  alt?: APIString;
  resizingType?: ImageResizeOption;
};

function CroppedImage({
  src,
  width,
  height,
  cover = false,
  desktopOnly = false,
  mobileOnly = false,
  resizingType = "fill",
  className,
  alt,
  ...props
}: CroppedImageProps) {
  const imageUrl = (dpr: number) =>
    constructCroppedImageUrl({ url: src, width, height, dpr, resizingType });

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageUrl(1)}
      srcSet={
        resizingType === "fit"
          ? undefined
          : `${imageUrl(2)} 2x, ${imageUrl(3)} 3x`
      }
      width={resizingType === "fit" ? undefined : width}
      height={resizingType === "fit" ? undefined : height}
      alt={alt ?? ""}
      className={cn(
        "block max-w-full border-0",
        cover && "size-full object-cover",
        desktopOnly && "hidden lg:block",
        mobileOnly && "block lg:hidden",
        className,
      )}
      {...props}
    />
  );
}

export { CroppedImage };
export type { CroppedImageProps };
