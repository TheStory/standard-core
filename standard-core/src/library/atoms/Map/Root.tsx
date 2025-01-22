import Box, { type BoxProps } from "@mui/material/Box";

import type { MapBox } from "./types";

interface RootProps extends Omit<BoxProps, "height">, MapBox {}

export const Root = ({ children, height }: RootProps) => (
  <Box
    sx={{
      height,
      "& > iframe": {
        border: 0,
        display: "block",
        width: "100%",
        height: "100%",
      },
    }}
  >
    {children}
  </Box>
);
