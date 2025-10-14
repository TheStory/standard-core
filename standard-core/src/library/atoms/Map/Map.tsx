import type { APIString } from "@thestory/standard-core/types";
import { extractUrlFromText } from "@thestory/standard-core/utils/extractUrlFromText";

import { Root } from "./Root";
import type { MapBox } from "./types";

interface GoogleEmbedMapProps extends MapBox {
  embedCode?: APIString;
}

const Map = ({ embedCode, ...rest }: GoogleEmbedMapProps) => {
  if (!embedCode) return null;

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
