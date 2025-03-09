import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/system";
import type { ContrastAware } from "@thestory/standard-core/types";

import { ExpandIcon } from "./AccordionIcon";
import type { AccordionItem } from "./types";

export interface AccordionListProps extends ContrastAware {
  items: AccordionItem[];
  disableIcon?: boolean;
  disableGutters?: boolean;
  sx?: SxProps;
}

export const AccordionList = ({
  items,
  disableIcon = false,
  disableGutters = true,
  useContrastColors,
  sx,
}: AccordionListProps) => (
  <div>
    {items.map((item, index) => (
      <MuiAccordion
        key={`accordion-${index}`}
        defaultExpanded={index === 0}
        disableGutters={disableGutters}
        elevation={0}
        square
        sx={{
          mx: "auto",
          color: useContrastColors ? "primary.contrastText" : "text.primary",
          backgroundColor: "transparent",
          "&.MuiAccordion-root:before": {
            backgroundColor: useContrastColors
              ? "rgba(255, 255, 255, 0.4)"
              : "divider",
            height: 2,
          },
          ...sx,
        }}
      >
        <AccordionSummary
          sx={{
            height: "66px",
            my: 0,
            px: 0,
            "& .MuiAccordionSummary-content": {
              gap: 1,
            },
          }}
          expandIcon={
            !disableIcon && (
              <ExpandIcon color={useContrastColors ? "secondary" : "primary"} />
            )
          }
        >
          <Typography variant="h6">{item.label}</Typography>
          {item.overline && (
            <Typography
              variant="overline"
              alignSelf="center"
              sx={{
                ml: "auto",
                mr: 1,
              }}
            >
              {item.overline}
            </Typography>
          )}
        </AccordionSummary>

        <AccordionDetails
          sx={{
            pt: 0,
            px: 0,
            maxWidth: "648px",
          }}
        >
          {item.content}
        </AccordionDetails>
      </MuiAccordion>
    ))}
  </div>
);
