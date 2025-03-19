import type { ReactNode } from "react";

export interface AccordionItem {
  label: ReactNode | string;
  overline?: string;
  content: ReactNode | string;
  links?: { label: string; url: string; overline?: string }[];
}
