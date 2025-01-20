import type { Theme} from "@mui/material/styles";

export interface ThemeInheritorProps  {
  theme: Theme;
  children: React.ReactNode
}

export default ThemeInheritorProps;