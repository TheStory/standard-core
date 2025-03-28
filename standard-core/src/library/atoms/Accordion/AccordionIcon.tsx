import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import type { SvgIconProps } from "@mui/material/SvgIcon";

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
