import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import type { SxProps } from "@mui/system";
import Link from "@the-story/standard-core/atoms/Link/Link";
import type { ContrastAware } from "@the-story/standard-core/types";

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
        className="accordion-item"
        defaultExpanded={index === 0}
        disableGutters={disableGutters}
        elevation={0}
        square
        sx={{
          mx: "auto",
          color: useContrastColors ? "primary.contrastText" : "text.primary",
          backgroundColor: "transparent",
          "&.MuiAccordion-root:before": {
            backgroundColor: useContrastColors ? alpha("#FFF", 0.3) : "divider",
            height: 2,
          },
          ...sx,
        }}
      >
        <AccordionSummary
          component="div"
          className="accordion-item-summary"
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
          className="accordion-item-details"
          sx={{
            pt: 0,
            px: 0,
            maxWidth: "648px",
          }}
        >
          {item.content}
        </AccordionDetails>
        <Stack
          className="accordion-item-links"
          flexDirection="row"
          flexWrap="wrap"
          columnGap={1}
        >
          {item?.links?.map((link, index) => (
            <Link key={`link-${index}`} href={link.url || ""}>
              {link.label}
            </Link>
          ))}
        </Stack>
      </MuiAccordion>
    ))}
  </div>
);
