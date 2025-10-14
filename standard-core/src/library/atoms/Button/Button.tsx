"use client";

import type { ButtonOwnProps } from "@mui/material/Button";
import MuiButton from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import { LocalizedLink } from "@thestory/standard-core/config/navigation";
import type { APIString } from "@thestory/standard-core/types";
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
  onClick = () => {},
  component = LocalizedLink,
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
  onClick?: () => void;
  component?: ElementType;
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
    sx={sx}
  >
    {children}
  </MuiButton>
);

export default Button;
