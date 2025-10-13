import type { APIString } from "@thestory/standard-core/types";
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
