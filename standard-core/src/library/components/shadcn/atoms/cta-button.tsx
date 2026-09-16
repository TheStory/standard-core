import type { APINullable, APIString } from "../../../types";
import { cn } from "../utils/cn";
import { ArrowRight } from "lucide-react";

import { Button } from "./button";

type CtaButtonProps = {
  button?:
    | {
        label?: APIString;
        overline?: APIString;
        url?: APIString;
        variant?: "default" | "line";
        rel?: string;
        target?: string;
        className?: string;
      }
    | APINullable;
};

function CtaButton({ button }: CtaButtonProps) {
  if (!button) return null;
  return (
    <Button
      asChild
      variant={button.variant === "line" ? "outline" : "secondary"}
      className={cn("h-auto items-start", button.className)}
    >
      <a href={button.url ?? undefined} rel={button.rel} target={button.target}>
        <span className="grid text-left">
          {button.overline && (
            <span className="text-xs text-muted-foreground">
              {button.overline}
            </span>
          )}
          <span className="flex items-center gap-2">
            {button.label}
            <ArrowRight />
          </span>
        </span>
      </a>
    </Button>
  );
}

export { CtaButton };
export type { CtaButtonProps };
