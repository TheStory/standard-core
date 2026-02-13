import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box, { type BoxProps } from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const ExpandIcon = ({ color = "divider" }: BoxProps) => (
  <Box
    sx={{
      color,
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
    <IconButton color="inherit">
      <RemoveIcon className="expandIconWrapper" />
      <AddIcon className="collapsIconWrapper" />
    </IconButton>
  </Box>
);
