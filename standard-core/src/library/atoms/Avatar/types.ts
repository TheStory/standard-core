import type { APIBoolean, APIString } from "@the-story/standard-core/types";

export interface AvatarProps {
  backgroundColor?: "amber" | "purple" | "amberDark";
  disableBorder?: APIBoolean;
  value?: APIString;
}
