"use client";

import type { ButtonOwnProps } from "@mui/material/Button";
import MuiButton from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import { LocalizedLink } from "@the-story/standard-core/config/navigation";
import type { APIString } from "@the-story/standard-core/types";
import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

const Button = ({
  type = "button",
  href,
  target,
  children,
  variant = "contained",
  color = "primary",
  size = "large",
  disabled = false,
  onClick = (e: any) => {},
  onMouseEnter = (e: any) => {},
  component = LocalizedLink,
  endIcon = null,
  startIcon = null,
  sx,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: APIString;
  target?: string;
  children?: ReactNode;
  variant?: ButtonOwnProps["variant"];
  color?: ButtonOwnProps["color"];
  size?: ButtonOwnProps["size"];
  disabled?: boolean;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  component?: ElementType;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  sx?: SxProps<Theme>;
}) => (
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
  >
    {children}
  </MuiButton>
);

export default Button;
