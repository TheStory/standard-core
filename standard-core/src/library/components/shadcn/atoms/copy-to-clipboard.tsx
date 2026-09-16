"use client";

import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import { Check, Copy } from "lucide-react";

import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type CopyToClipboardProps = {
  text: string;
  copyLabel?: string;
  successLabel?: string;
};

function CopyToClipboard({
  text,
  copyLabel = "Copy",
  successLabel = "Copied",
}: CopyToClipboardProps) {
  const [copiedText, copy] = useCopyToClipboard();
  const label = copiedText ? successLabel : copyLabel;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={label}
          onClick={() => copy(text)}
        >
          {copiedText ? <Check /> : <Copy />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export { CopyToClipboard };
export type { CopyToClipboardProps };
