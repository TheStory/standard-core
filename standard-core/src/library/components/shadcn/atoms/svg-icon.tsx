import { cn } from "../utils/cn";
import type { CSSProperties } from "react";

const iconNames = {
  Facebook: "facebook",
  Instagram: "instagram",
  Linkedin: "linkedin",
  Tiktok: "tiktok",
  Twitter: "twitter",
  Youtube: "youtube",
  ContentCopy: "content-copy",
  Filter: "filter",
  OpenInNew: "open-in-new",
  Star: "star",
  StarBorder: "star-border",
  Google: "google",
  LocationOnFilled: "location-on-filled",
  MailFilled: "mail-filled",
  PhoneIphoneFilled: "phone-iphone-filled",
  ChevronDown: "chevron-down",
  ChevronRight: "chevron-right",
  ChevronLeft: "chevron-left",
  Calendar: "calendar",
} as const;

type SvgIconProps = {
  iconName?: keyof typeof iconNames;
  url?: string;
  size?: number | string;
  disableMask?: boolean;
  className?: string;
  style?: CSSProperties;
};

function SvgIcon({
  iconName,
  url,
  size = "1.5rem",
  disableMask = false,
  className,
  style,
}: SvgIconProps) {
  const base =
    process.env.NEXT_PUBLIC_ICON_CDN_URL ?? "https://icons.storyline.cloud/v2/";
  const source =
    url ?? (iconName ? `${base}${iconNames[iconName]}.svg` : undefined);
  if (!source) return null;

  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0", className)}
      style={{
        width: size,
        height: size,
        ...(disableMask
          ? { background: `center / contain no-repeat url(${source})` }
          : {
              backgroundColor: "currentColor",
              mask: `center / contain no-repeat url(${source})`,
            }),
        ...style,
      }}
    />
  );
}

export { SvgIcon, iconNames };
export type { SvgIconProps };
