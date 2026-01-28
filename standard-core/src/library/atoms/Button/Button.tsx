"use client";

import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { LocalizedLink } from "@the-story/standard-core/config/navigation";
import type { HTMLAttributeAnchorTarget } from "react";

type ButtonProps = MuiButtonProps & {
  target?: HTMLAttributeAnchorTarget;
};

const Button = ({
  type = "button",
  href,
  target,
  children,
  variant = "contained",
  color = "primary",
  size = "large",
  disabled = false,
  onClick,
  onMouseEnter,
  component = LocalizedLink,
  endIcon = null,
  startIcon = null,
  sx,
  className,
  rel,
}: ButtonProps) => (
  <MuiButton
    type={type}
    href={href || undefined}
    component={href ? component : "button"}
    target={target}
    variant={variant}
    color={color}
    size={size}
    disabled={disabled}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    sx={sx}
    endIcon={endIcon}
    startIcon={startIcon}
    className={className}
    rel={rel}
  >
    {children}
  </MuiButton>
);

export default Button;
