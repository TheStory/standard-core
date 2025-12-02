"use client";

import { SvgIcon } from "../SvgIcon";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import type { SvgIconOwnProps } from "@mui/material/SvgIcon";
import Tooltip, { type TooltipProps } from "@mui/material/Tooltip";
import { svgFontSizeValues } from "@thestory/standard-core/utils/svgFontSizeValues";
import { useTranslations } from "next-intl";

import { useCopyToClipboard } from "./useCopyToClipboard";

interface CopyToClipboardProps {
  text: string;
  placement?: "top" | "bottom" | "left" | "right";
  iconSize?: SvgIconOwnProps["fontSize"];
  color?: string;
  // Additional props forwarded to MUI Tooltip
  tooltipProps?: TooltipProps;
  // Optional slotProps for MUI Tooltip
  slotProps?: TooltipProps["slotProps"];
}
const CopyToClipboard = ({
  text,
  placement = "top",
  iconSize = "small",
  color = "text.primary",
  tooltipProps,
  slotProps,
}: CopyToClipboardProps) => {
  const [copiedText, copy] = useCopyToClipboard();
  const t = useTranslations("settings.utils");

  return (
    <Tooltip
      {...tooltipProps}
      title={copiedText ? t("copySuccess") : t("copyIcon")}
      placement={placement}
      onClick={() => copy(text)}
      slotProps={slotProps}
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
            iconName="ContentCopy"
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
