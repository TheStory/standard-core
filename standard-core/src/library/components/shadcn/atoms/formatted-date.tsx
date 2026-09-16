"use client";

import type { APIDate } from "@the-story/standard-core/types";
import { useFormatter } from "next-intl";
import { useMemo } from "react";

function FormattedDate({ value }: { value?: APIDate }) {
  const formatter = useFormatter();
  const formatted = useMemo(
    () =>
      value
        ? formatter.dateTime(new Date(value), { dateStyle: "medium" })
        : null,
    [formatter, value],
  );

  return formatted ? (
    <span className="whitespace-nowrap">{formatted}</span>
  ) : null;
}

export { FormattedDate };
