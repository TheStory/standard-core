"use client";

import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import {
  LocalizedLink,
  type LinkProps as LocalizedLinkProps,
} from "@thestory/standard-core/config/navigation";

type LinkType = LocalizedLinkProps & MuiLinkProps;

const Link = ({ children, ...props }: LinkType) => (
  <MuiLink {...props} component={LocalizedLink as any}>
    {children}
  </MuiLink>
);

export default Link;
