import type { APIString } from "../../../types";
import { extractUrlFromText } from "../../../utils/extractUrlFromText";
import { cn } from "../utils/cn";

type MapProps = {
  embedCode?: APIString;
  height: number;
  className?: string;
};

function Map({ embedCode, height, className }: MapProps) {
  const src = embedCode ? extractUrlFromText(embedCode) : null;
  if (!src) return null;
  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <iframe
        title="Map"
        src={src}
        className="block size-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
        allowFullScreen={false}
      />
    </div>
  );
}

export { Map };
export type { MapProps };
