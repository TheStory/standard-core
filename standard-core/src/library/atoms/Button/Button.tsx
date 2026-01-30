"use client";

import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { LocalizedLink } from "@the-story/standard-core/config/navigation";
import { isExternalLink } from "@the-story/standard-core/utils/isExternalLink";
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
}: ButtonProps) => {
  const isExternal = isExternalLink(href);
  const resolvedRel =
    rel ?? (isExternal ? "noopener noreferrer nofollow" : undefined);
  const resolvedTarget = target ?? (isExternal ? "_blank" : undefined);

  return (
    <MuiButton
      type={type}
      href={href || undefined}
      component={href ? component : "button"}
      target={resolvedTarget}
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
      rel={resolvedRel}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
