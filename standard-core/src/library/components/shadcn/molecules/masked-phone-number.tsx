"use client";

import { useMaskedPhoneReveal } from "../../../hooks";
import type { APIString } from "../../../types";
import { Button } from "../atoms/button";

type MaskedPhoneNumberProps = {
  officePhoneNumber: APIString;
  showPhoneButtonLabelTranslations?: string;
  maskDigits?: number;
  maskChar?: string;
};

function MaskedPhoneNumber({
  officePhoneNumber,
  showPhoneButtonLabelTranslations = "show",
  maskDigits = 6,
  maskChar = "*",
}: MaskedPhoneNumberProps) {
  const { revealed, masked, reveal } = useMaskedPhoneReveal(officePhoneNumber, {
    maskDigits,
    maskChar,
  });
  if (!officePhoneNumber) return null;
  return (
    <div className="flex items-center gap-2">
      {revealed ? (
        <a
          href={`tel:${officePhoneNumber}`}
          className="font-medium hover:underline"
        >
          {officePhoneNumber}
        </a>
      ) : (
        <span>{masked}</span>
      )}
      {!revealed && (
        <Button type="button" variant="link" size="sm" onClick={reveal}>
          {showPhoneButtonLabelTranslations}
        </Button>
      )}
    </div>
  );
}

export { MaskedPhoneNumber };
export type { MaskedPhoneNumberProps };
