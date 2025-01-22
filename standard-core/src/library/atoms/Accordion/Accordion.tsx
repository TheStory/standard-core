import Stack from "@mui/material/Stack";

import {
  AccordionCtaButton,
  type AccordionCtaButtonProps,
} from "./AccordionCtaButton";
import { AccordionList, type AccordionListProps } from "./AccordionList";

export interface AccordionProps
  extends AccordionListProps,
    AccordionCtaButtonProps {}

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
    {button && <AccordionCtaButton button={button} />}
  </Stack>
);

export default Accordion;
