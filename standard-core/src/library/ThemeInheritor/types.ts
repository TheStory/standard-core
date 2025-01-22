import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

export interface ThemeInheritorProps {
  theme: Theme;
  children: ReactNode;
}

export default ThemeInheritorProps;
