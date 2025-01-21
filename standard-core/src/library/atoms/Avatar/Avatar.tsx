"use client";

import MuiAvatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { amber, deepPurple } from "@mui/material/colors";

import type { AvatarProps } from "./types";

function getColor(backgroundColor: Required<AvatarProps["backgroundColor"]>) {
  switch (backgroundColor) {
    case "amber":
      return amber[400];
    case "purple":
      return deepPurple[600];
    case "amberDark":
      return amber[800];
  }
}

const Avatar = ({
  backgroundColor,
  disableBorder = false,
  value,
}: AvatarProps) => (
  <MuiAvatar
    sx={{
      border: disableBorder ? 0 : (theme) => `2px solid white`,
      width: "40px",
      height: "40px",
      textTransform: "uppercase",
      backgroundColor: getColor(backgroundColor),
    }}
    variant="circular"
  >
    <Typography
      sx={{
        fontFamily: "Epilogue",
        fontSize: 20,
        fontWeight: 400,
      }}
    >
      {value}
    </Typography>
  </MuiAvatar>
);

export default Avatar;