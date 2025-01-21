import React from "react";
import { ThemeProvider} from "@mui/material/styles";
import {DefaultTheme} from "@mui/system";
import {ThemeProviderProps} from "@mui/material/styles/ThemeProvider";

export default function ThemeInheritor<Theme = DefaultTheme>({ theme, ...props }: ThemeProviderProps<Theme>): React.JSX.Element {
  return (
      <ThemeProvider theme={theme}>
          {props.children}
      </ThemeProvider>
  );
}