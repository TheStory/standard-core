import Box from "@mui/material/Box";
import type { SvgIconOwnProps } from "@mui/material/SvgIcon";
import type { SxProps, Theme } from "@mui/material/styles";
import { svgFontSizeValues } from "@thestory/standard-core/utils/svgFontSizeValues";

interface SvgIconProps {
  sx?: SxProps<Theme>;
  url: string;
  fontSize?: SvgIconOwnProps["fontSize"];
  disableMask?: boolean;
}

const SvgIcon = ({
  sx,
  url,
  fontSize = "medium",
  disableMask = false,
}: SvgIconProps) => {
  const fontSizeValue =
    svgFontSizeValues[fontSize as keyof typeof svgFontSizeValues] ?? null;

  const backgroundColor =
    !disableMask && sx && typeof sx === "object" && "color" in sx
      ? (sx as any).color
      : undefined;

  return (
    <Box
      sx={{
        width: fontSizeValue,
        maxWidth: fontSizeValue,
        height: fontSizeValue,
        ...(disableMask
          ? {
              backgroundImage: `url(${url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : {
              backgroundColor: backgroundColor ?? "text.primary",
              maskImage: `url(${url})`,
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
