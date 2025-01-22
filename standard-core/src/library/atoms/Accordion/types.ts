import { ReactNode } from "react";

export interface AccordionItem {
  label: ReactNode | string;
  overline?: string;
  content: ReactNode | string;
}
