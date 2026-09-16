"use client";

import { useCallback, useState } from "react";

export function useCopyToClipboard(timeout = 2500) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const copy = useCallback(
    async (text: string) => {
      if (!navigator.clipboard) return false;
      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        window.setTimeout(() => setCopiedText(null), timeout);
        return true;
      } catch {
        setCopiedText(null);
        return false;
      }
    },
    [timeout],
  );
  return [copiedText, copy] as const;
}
