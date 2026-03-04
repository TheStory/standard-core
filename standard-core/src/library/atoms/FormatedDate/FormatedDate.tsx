"use client";

import Box from "@mui/material/Box";
import type { APIDate } from "@the-story/standard-core/types";
import { useFormatter } from "next-intl";
import { useMemo } from "react";

interface FormattedDateProps {
  value?: APIDate;
}

const FormattedDate = ({ value }: FormattedDateProps) => {
  const dateFormatter = useFormatter();

  const formatted = useMemo(() => {
    if (!value) return null;
    return dateFormatter.dateTime(new Date(value), {
      dateStyle: "medium",
    });
  }, [dateFormatter, value]);

  if (!formatted) return null;

  return (
    <Box
      component="span"
      className="formatted-date"
      sx={{ whiteSpace: "nowrap" }}
    >
      {formatted}
    </Box>
  );
};

export default FormattedDate;
