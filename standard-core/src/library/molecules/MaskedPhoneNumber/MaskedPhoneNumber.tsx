"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useMaskedPhoneReveal } from "@the-story/standard-core/hooks/exports";
import type { APIString } from "@the-story/standard-core/types";

export interface MaskedPhoneNumberProps {
  officePhoneNumber: APIString;
  showPhoneButtonLabelTranslations?: string;
  maskDigits?: number;
  maskChar?: string;
}

const MaskedPhoneNumber = ({
  officePhoneNumber,
  showPhoneButtonLabelTranslations,
  maskDigits = 6,
  maskChar = "*",
}: MaskedPhoneNumberProps) => {
  const {
    revealed: showFullPhone,
    masked: maskedPhone,
    reveal,
  } = useMaskedPhoneReveal(officePhoneNumber, { maskDigits, maskChar });

  if (!officePhoneNumber) return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {showFullPhone ? (
        <Link href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</Link>
      ) : (
        <Typography variant="body1">{maskedPhone}</Typography>
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
