import type { APIString } from "@the-story/standard-core/types";
import { createElement } from "react";
import type { ReactElement } from "react";

export function simpleMarkdown(text: APIString): ReactElement | null {
  if (!text) return null;

  const parsed = String(text)
    .replace(/\|/g, "<br />")
    .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
    .replace(/_([^_]+)_/g, "<em>$1</em>");

  return createElement("span", {
    dangerouslySetInnerHTML: { __html: parsed },
  });
}
