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
}: AccordionProps) => (
  <Stack direction="column" spacing={2}>
    <AccordionList
      items={items}
      disableIcon={disableIcon}
      disableGutters={disableGutters}
      sx={sx}
    />
    {button && <CtaButton button={button} />}
  </Stack>
);

export default Accordion;
