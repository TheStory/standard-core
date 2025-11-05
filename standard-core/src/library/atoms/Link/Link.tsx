"use client";

import type { LinkProps as MuiLinkProps } from "@mui/material/Link";
import MuiLink from "@mui/material/Link";
import {
  LocalizedLink,
  type LinkProps as LocalizedLinkProps,
} from "@thestory/standard-core/config/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

type LinkType = LocalizedLinkProps & MuiLinkProps;

const Link = ({ children, href, onClick, ...props }: LinkType) => {
  const pathname = usePathname();
  const locale = useLocale();
  const isExternal = href?.startsWith("http");

  let setRel = isExternal ? "noopener noreferrer nofollow" : undefined;
  let setTarget = isExternal ? "_blank" : undefined;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (typeof href === "string") {
      const [targetPath, hash] = href.split("#");

      const normalizedPathname = pathname.startsWith(`/${locale}`)
        ? "/" + pathname.replace(new RegExp(`^/${locale}/?`), "")
        : pathname;

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
      href={href}
      component={LocalizedLink as any}
      rel={setRel}
      target={setTarget}
      onClick={handleClick}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
