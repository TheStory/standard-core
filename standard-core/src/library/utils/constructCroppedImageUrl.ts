import type { ImageResizeOption } from "../types";
import { generateImageUrl } from "@imgproxy/imgproxy-node";

type Format =
  | "png"
  | "jpg"
  | "webp"
  | "avif"
  | "gif"
  | "ico"
  | "svg"
  | "bmp"
  | "tiff"
  | "mp4"
  | "best";

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
}: Params) => {
  const endpoint = process.env.NEXT_PUBLIC_IMAGE_PROXY;

  if (!endpoint) return url;

  return generateImageUrl({
    endpoint: `${endpoint.replace(/\/$/, "")}/`,
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
};
