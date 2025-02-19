import { extractUrlFromText } from "@thestory/standard-core/utils/extractUrlFromText";

import { Root } from "./Root";
import type { MapBox } from "./types";

interface GoogleEmbedMapProps extends MapBox {
  embedCode: string;
}

const Map = ({ embedCode, ...rest }: GoogleEmbedMapProps) => {
  const locationFromIFrame = extractUrlFromText(embedCode);

  if (!locationFromIFrame) return null;

  return (
    <Root {...rest}>
      <iframe
        src={locationFromIFrame}
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
        allowFullScreen={false}
      />
    </Root>
  );
};

export default Map;
