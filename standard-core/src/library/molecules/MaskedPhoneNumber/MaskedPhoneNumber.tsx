"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import type { TypographyProps } from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import { useMaskedPhoneReveal } from "@the-story/standard-core/hooks";
import type { APIString } from "@the-story/standard-core/types";

export interface MaskedPhoneNumberProps {
  officePhoneNumber: APIString;
  showPhoneButtonLabelTranslations?: string;
  maskDigits?: number;
  maskChar?: string;
  typographyVariant?: TypographyProps["variant"];
}

const MaskedPhoneNumber = ({
  officePhoneNumber,
  showPhoneButtonLabelTranslations,
  maskDigits = 6,
  maskChar = "*",
  typographyVariant = "body1",
}: MaskedPhoneNumberProps) => {
  const {
    revealed: showFullPhone,
    masked: maskedPhone,
    reveal,
  } = useMaskedPhoneReveal(officePhoneNumber, { maskDigits, maskChar });

  if (!officePhoneNumber) return null;

  return (
    <Box
      className="masked-phone-number"
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      {showFullPhone ? (
        <Link
          href={`tel:${officePhoneNumber}`}
          sx={{ typography: typographyVariant }}
        >
          {officePhoneNumber}
        </Link>
      ) : (
        <Typography variant={typographyVariant}>{maskedPhone}</Typography>
      )}
      {!showFullPhone && (
        <Link
          onClick={(e) => {
            e.preventDefault();
            reveal();
          }}
          sx={{ cursor: "pointer" }}
        >
          {showPhoneButtonLabelTranslations || "show"}
        </Link>
      )}
    </Box>
  );
};

export default MaskedPhoneNumber;
