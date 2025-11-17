"use client";

import { SvgIcon } from "../SvgIcon";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import type { SvgIconOwnProps } from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { svgFontSizeValues } from "@thestory/standard-core/utils/svgFontSizeValues";
import { useTranslations } from "next-intl";

import { useCopyToClipboard } from "./useCopyToClipboard";

interface CopyToClipboardProps {
  text: string;
  placement?: "top" | "bottom" | "left" | "right";
  iconSize?: SvgIconOwnProps["fontSize"];
  color?: string;
}
const CopyToClipboard = ({
  text,
  placement = "top",
  iconSize = "small",
  color = "text.primary",
}: CopyToClipboardProps) => {
  const [copiedText, copy] = useCopyToClipboard();
  const t = useTranslations("settings.utils");

  const dupa = <T, K extends keyof T>(obj: T, key: K) => obj[key];

  return (
    <Tooltip
      title={copiedText ? t("copySuccess") : t("copyIcon")}
      placement={placement}
      onClick={() => copy(text)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:
            svgFontSizeValues[iconSize as keyof typeof svgFontSizeValues] ||
            svgFontSizeValues.small,
        }}
      >
        {copiedText ? (
          <CheckIcon
            sx={{
              fontSize: iconSize,
              color: color,
            }}
          />
        ) : (
          <SvgIcon
            fontSize={iconSize}
            iconName="content-copy"
            sx={{
              cursor: "pointer",
              color: color,
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
};

export default CopyToClipboard;
