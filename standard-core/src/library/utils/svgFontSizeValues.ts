const customSvgFontSizeValues = JSON.parse(
  process.env.NEXT_PUBLIC_SVG_FONT_SIZE_VALUES || "{}",
);
export const svgFontSizeValues = {
  inherit: (customSvgFontSizeValues.inherit as string) ?? "inherit",
  small: (customSvgFontSizeValues.small as string) ?? "20px",
  medium: (customSvgFontSizeValues.medium as string) ?? "24px",
  large: (customSvgFontSizeValues.large as string) ?? "36px",
  xl: (customSvgFontSizeValues.xl as string) ?? "56px",
  "3xl": (customSvgFontSizeValues["3xl"] as string) ?? "72px",
} as const;
