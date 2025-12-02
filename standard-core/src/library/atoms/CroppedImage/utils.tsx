import type { Format } from "@imgproxy/imgproxy-js-core";
import { generateImageUrl } from "@imgproxy/imgproxy-node";
import type { ImageResizeOption } from "@the-story/standard-core/types";

interface ConstructCroppedImageUrlParams {
  url: string;
  width?: number;
  height?: number;
  dpr?: number;
  resizingType?: ImageResizeOption;
  format?: Format | undefined;
}

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
