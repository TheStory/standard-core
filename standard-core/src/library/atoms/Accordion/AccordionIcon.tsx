import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const ExpandIcon = () => (
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
      <RemoveIcon className="expandIconWrapper" color="primary" />
      <AddIcon className="collapsIconWrapper" color="primary" />
    </IconButton>
  </Box>
);
