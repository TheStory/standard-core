"use client";

import {
  type Shadows,
  type TypographyVariant,
  createTheme,
} from "@mui/material";
import { Epilogue, Source_Serif_4 as SourceSerif } from "next/font/google";
import type { CSSProperties } from "react";
import { svgFontSizeValues } from "standard-core/utils/svgFontSizeValues";

import tokens from "./tokens.json";

const sourceSerifFont = SourceSerif({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
});

const epilogueFont = Epilogue({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
});

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    xl: true;
    "3xl": true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    inherit: true;
    xl: true;
    "3xl": true;
  }
}

// map figma font names to custom fonts

const tokensFontMap = {
  "Source Serif Pro": `"${sourceSerifFont.style.fontFamily}"`,
  Epilogue: epilogueFont.style.fontFamily,
};

// create theme from tokens

export const theStoryTheme = createTheme({
  palette: tokens.palette,
  shape: tokens.shape,
  shadows: tokens.shadows as Shadows,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
          },
        },
      ],
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: "xl" },
          style: {
            fontSize: svgFontSizeValues.xl,
          },
        },
        {
          props: { fontSize: "3xl" },
          style: {
            fontSize: svgFontSizeValues["3xl"],
          },
        },
      ],
      styleOverrides: {
        fontSizeSmall: {
          fontSize: svgFontSizeValues.small,
        },
        fontSizeMedium: {
          fontSize: svgFontSizeValues.medium,
        },
        fontSizeLarge: {
          fontSize: svgFontSizeValues.large,
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { size: "xl" },
          style: {
            fontSize: svgFontSizeValues.xl,
          },
        },
        {
          props: { size: "3xl" },
          style: {
            fontSize: svgFontSizeValues["3xl"],
          },
        },
      ],
      styleOverrides: {
        sizeSmall: {
          fontSize: svgFontSizeValues.small,
        },
        sizeMedium: {
          fontSize: svgFontSizeValues.medium,
        },
        sizeLarge: {
          fontSize: svgFontSizeValues.large,
        },
      },
    },
  },
});

Object.keys(theStoryTheme.typography).forEach((variant) => {
  function normalizeFontFamily(fontSpec: CSSProperties) {
    const fontFamily = fontSpec.fontFamily as keyof typeof tokensFontMap;
    const tokensFontMapElement = tokensFontMap[fontFamily];

    return {
      ...fontSpec,
      fontFamily: tokensFontMapElement,
    };
  }

  const typographyTokens = tokens.typography;

  if (variant in typographyTokens) {
    const typedVariant = variant as keyof typeof tokens.typography;
    const typographyElement = tokens.typography[typedVariant] as {
      mobile: CSSProperties;
      tablet?: CSSProperties;
      desktop?: CSSProperties;
    };

    let rwdFontSpec = {
      ...normalizeFontFamily(typographyElement.mobile),
    };

    if (typographyElement.tablet) {
      rwdFontSpec = {
        ...rwdFontSpec,
        [theStoryTheme.breakpoints.up("md")]: {
          ...normalizeFontFamily(typographyElement.tablet),
        },
      };
    }

    if (typographyElement.desktop) {
      rwdFontSpec = {
        ...rwdFontSpec,
        [theStoryTheme.breakpoints.up("lg")]: {
          ...normalizeFontFamily(typographyElement.desktop),
        },
      };
    }

    const typographyVariant = variant as TypographyVariant;
    theStoryTheme.typography[typographyVariant] = rwdFontSpec;
  }
});

// export colors list for Storybook

export const colors = theStoryTheme.palette;
