"use client";

import { useNormalizedPathname } from "../../hooks";
import type { LinkProps as MuiLinkProps } from "@mui/material/Link";
import MuiLink from "@mui/material/Link";
import {
  LocalizedLink,
  type LinkProps as LocalizedLinkProps,
} from "@the-story/standard-core/config/navigation";
import { isExternalLink } from "@the-story/standard-core/utils/isExternalLink";
import type { MouseEvent } from "react";
import { forwardRef } from "react";

export type LinkComponentProps = LocalizedLinkProps & MuiLinkProps;

const Link = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, href, onClick, ...props }, ref) => {
    const { normalizedPathname } = useNormalizedPathname();
    const isExternal = isExternalLink(href);

    let setRel = isExternal ? "noopener noreferrer nofollow" : undefined;
    let setTarget = isExternal ? "_blank" : undefined;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;

      if (typeof href === "string") {
        const [targetPath, hash] = href.split("#");

        const isSamePage = targetPath === normalizedPathname && !!hash;

        if (isSamePage) {
          e.preventDefault();
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `#${hash}`);
          }
        }
      }
    };

    return (
      <MuiLink
        {...props}
        ref={ref}
        href={href}
        component={LocalizedLink as any}
        rel={setRel}
        target={setTarget}
        onClick={handleClick}
      >
        {children}
      </MuiLink>
    );
  },
);

Link.displayName = "Link";

export default Link;
