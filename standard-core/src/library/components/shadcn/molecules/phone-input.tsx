"use client";

import { Input } from "../atoms/input";
import type { ComponentProps } from "react";

type PhoneInputProps = Omit<
  ComponentProps<typeof Input>,
  "type" | "onChange"
> & {
  onChange?: (value: string) => void;
};

type PhoneInputInfo = {
  countryCallingCode?: string | null;
  nationalNumber?: string | null;
};

const isValidPhoneNumber = (value: string) =>
  /^\+?[1-9]\d{6,14}$/.test(value.replace(/[\s()-]/g, ""));

const normalizeAutofilledPhone = (value: string, info: PhoneInputInfo) => {
  const { countryCallingCode, nationalNumber } = info;
  const compactValue = value.replace(/[\s()-]/g, "");
  if (
    !countryCallingCode ||
    !nationalNumber?.startsWith(countryCallingCode) ||
    compactValue !== `+${countryCallingCode}${nationalNumber}`
  )
    return value;
  const normalized = `+${countryCallingCode}${nationalNumber.slice(countryCallingCode.length)}`;
  return isValidPhoneNumber(normalized) ? normalized : value;
};

function PhoneInput({ onChange, ...props }: PhoneInputProps) {
  return (
    <Input
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      onChange={(event) => onChange?.(event.target.value)}
      {...props}
    />
  );
}

export { PhoneInput, isValidPhoneNumber, normalizeAutofilledPhone };
export type { PhoneInputInfo, PhoneInputProps };
