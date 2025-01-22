import { ThemeProvider } from "@mui/material/styles";
import type { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import type { DefaultTheme } from "@mui/system";
import React from "react";

export default function ThemeInheritor<Theme = DefaultTheme>({
  theme,
  ...props
}: ThemeProviderProps<Theme>): React.JSX.Element {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
