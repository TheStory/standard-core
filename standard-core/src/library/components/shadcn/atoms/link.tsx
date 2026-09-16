"use client";

import {
  LocalizedLink,
  type LinkProps as LocalizedLinkProps,
} from "../../../config/navigation";
import { useNormalizedPathname } from "../../../hooks";
import { isExternalLink } from "../../../utils/isExternalLink";
import { cn } from "../utils/cn";
import type { MouseEvent } from "react";
import { forwardRef } from "react";

type ShadcnLinkProps = LocalizedLinkProps & {
  className?: string;
  target?: string;
  rel?: string;
};

const Link = forwardRef<HTMLAnchorElement, ShadcnLinkProps>(
  ({ className, href, onClick, rel, target, ...props }, ref) => {
    const { normalizedPathname } = useNormalizedPathname();
    const external = typeof href === "string" && isExternalLink(href);

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented || typeof href !== "string") return;
      const [targetPath, hash] = href.split("#");
      if (targetPath === normalizedPathname && hash) {
        event.preventDefault();
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${hash}`);
      }
    };

    return (
      <LocalizedLink
        ref={ref}
        href={href}
        className={cn(
          "font-medium text-primary underline-offset-4 hover:underline",
          className,
        )}
        rel={rel ?? (external ? "noopener noreferrer nofollow" : undefined)}
        target={target ?? (external ? "_blank" : undefined)}
        onClick={handleClick}
        {...props}
      />
    );
  },
);

Link.displayName = "Link";

export { Link };
export type { ShadcnLinkProps };
