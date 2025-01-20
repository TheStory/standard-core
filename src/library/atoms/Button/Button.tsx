"use client";

import type { ButtonOwnProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";
import { LocalizedLink } from "standard-core/config/navigation";

const Button = ({
  href,
  target,
  label,
  variant = "contained",
  color = "primary",
  size = "large",
  disabled = false,
  onClick = () => {},
  component = LocalizedLink,
  sx,
}: {
  href?: string;
  target?: string;
  label?: string | null | ReactNode;
  variant?: ButtonOwnProps["variant"];
  color?: ButtonOwnProps["color"];
  size?: ButtonOwnProps["size"];
  disabled?: boolean;
  onClick?: () => void;
  component?: React.ElementType;
  sx?: SxProps<Theme>;
}) => (
  <MuiButton
    href={href}
    component={href ? component : "button"}
    target={target}
    variant={variant}
    color={color}
    size={size}
    disabled={disabled}
    onClick={onClick}
    sx={sx}
  >
    {label}
  </MuiButton>
);

export default Button;
