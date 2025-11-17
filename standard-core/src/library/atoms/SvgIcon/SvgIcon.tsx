import Box from "@mui/material/Box";
import type { SvgIconOwnProps } from "@mui/material/SvgIcon";
import type { SxProps, Theme } from "@mui/material/styles";
import { svgFontSizeValues } from "@thestory/standard-core/utils/svgFontSizeValues";

interface SvgIconProps {
  sx?: SxProps<Theme>;
  iconName?: string;
  fontSize?: SvgIconOwnProps["fontSize"];
  disableMask?: boolean;
  url?: string;
}

const SvgIcon = ({
  sx,
  iconName,
  fontSize = "medium",
  disableMask = false,
  url,
}: SvgIconProps) => {
  const fontSizeValue =
    svgFontSizeValues[fontSize as keyof typeof svgFontSizeValues] ?? null;

  const baseIconsPath =
    process.env.NEXT_PUBLIC_ICON_CDN_URL ?? "https://icons.storyline.cloud/v2/";

  const backgroundColor =
    !disableMask && sx && typeof sx === "object" && "color" in sx
      ? (sx as any).color
      : undefined;

  // Determine the final image URL. Prefer explicit `url` prop; otherwise use `iconName`.
  const imgUrl =
    url ?? (iconName ? `${baseIconsPath}${iconName}.svg` : undefined);

  // If neither `url` nor `iconName` provided, render nothing to avoid invalid URLs.
  if (!imgUrl) {
    return null;
  }

  return (
    <Box
      sx={{
        width: fontSizeValue,
        maxWidth: fontSizeValue,
        height: fontSizeValue,
        ...(disableMask
          ? {
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : {
              backgroundColor: backgroundColor ?? "text.primary",
              maskImage: `url(${imgUrl})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }),
        margin: "0 auto",
        ...sx,
      }}
    />
  );
};

export default SvgIcon;
