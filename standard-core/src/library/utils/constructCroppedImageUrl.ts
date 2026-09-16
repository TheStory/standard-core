import type { ImageResizeOption } from "../types";
import type { Format } from "@imgproxy/imgproxy-js-core";
import { generateImageUrl } from "@imgproxy/imgproxy-node";

type Params = {
  url: string;
  width?: number;
  height?: number;
  dpr?: number;
  resizingType?: ImageResizeOption;
  format?: Format;
};

export const constructCroppedImageUrl = ({
  url,
  width,
  height,
  dpr = 1,
  resizingType = "fill",
  format = "webp",
}: Params) =>
  generateImageUrl({
    endpoint: `${process.env.NEXT_PUBLIC_IMAGE_PROXY}/`,
    url,
    options: {
      resizing_type: resizingType,
      width,
      height,
      enlarge: resizingType !== "fit",
      format,
      dpr,
    },
  });
