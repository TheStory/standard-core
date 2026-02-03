import { CtaButton, type CtaButtonProps } from "../CtaButton";
import Stack from "@mui/material/Stack";

import { AccordionList, type AccordionListProps } from "./AccordionList";

export interface AccordionProps extends AccordionListProps, CtaButtonProps {}

const Accordion = ({
  button,
  items,
  disableIcon,
  disableGutters,
  sx,
  useContrastColors,
}: AccordionProps) => (
  <Stack data-testid="accordion" direction="column" spacing={4}>
    <AccordionList
      items={items}
      disableIcon={disableIcon}
      disableGutters={disableGutters}
      sx={sx}
      useContrastColors={useContrastColors}
    />
    {button && <CtaButton button={button} />}
  </Stack>
);

export default Accordion;
