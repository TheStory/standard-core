import type { APIString } from "@the-story/standard-core/types";
import type { ReactNode } from "react";

export interface AccordionItem {
  label?: ReactNode | APIString;
  overline?: APIString;
  content?: ReactNode | APIString;
  links?:
    | {
        label?: APIString;
        url?: APIString;
        overline?: APIString;
      }[]
    | null;
}
