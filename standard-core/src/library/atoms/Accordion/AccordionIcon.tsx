import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import type { SvgIconProps } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const ExpandIcon = ({ color = "primary" }: SvgIconProps) => (
  <Box
    sx={{
      ".Mui-expanded & > * > .collapsIconWrapper": {
        display: "none",
      },
      ".expandIconWrapper": {
        display: "none",
      },
      ".Mui-expanded & > * > .expandIconWrapper": {
        display: "block",
      },
    }}
  >
    <IconButton>
      <RemoveIcon className="expandIconWrapper" color={color} />
      <AddIcon className="collapsIconWrapper" color={color} />
    </IconButton>
  </Box>
);
