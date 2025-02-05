import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/system";

import { ExpandIcon } from "./AccordionIcon";
import type { AccordionItem } from "./types";

export interface AccordionListProps {
  items: AccordionItem[];
  disableIcon?: boolean;
  disableGutters?: boolean;
  sx?: SxProps;
}

export const AccordionList = ({
  items,
  disableIcon = false,
  disableGutters = true,
  sx,
}: AccordionListProps) => {
  return (
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
            backgroundColor: "transparent",
            "&.MuiAccordion-root:before": {
              backgroundColor: "divider",
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
            }}
            expandIcon={!disableIcon && <ExpandIcon />}
          >
            <Typography variant="h6" color="text.primary">
              {item.label}
            </Typography>
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
};
