"use client";

import {
  MuiTelInput,
  type MuiTelInputInfo,
  type MuiTelInputProps,
  matchIsValidTel,
} from "mui-tel-input";
import { useLocale } from "next-intl";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, Extract<keyof T, K>>
  : never;

export type PhoneInputProps = DistributiveOmit<MuiTelInputProps, "onChange"> & {
  locale?: string;
  onChange?: (value: string) => void;
};

export const isValidPhoneNumber = (value: string) => matchIsValidTel(value);

export const normalizeAutofilledPhone = (
  value: string,
  info: MuiTelInputInfo,
) => {
  const { countryCallingCode, nationalNumber } = info;

  if (
    isValidPhoneNumber(value) ||
    !countryCallingCode ||
    !nationalNumber?.startsWith(countryCallingCode)
  )
    return value;

  const normalizedValue = `+${countryCallingCode}${nationalNumber.slice(countryCallingCode.length)}`;

  return isValidPhoneNumber(normalizedValue) ? normalizedValue : value;
};

const PhoneInput = ({ locale, onChange, ...props }: PhoneInputProps) => {
  const activeLocale = useLocale();

  return (
    <MuiTelInput
      {...props}
      langOfCountryName={locale ?? activeLocale}
      onChange={(value, info) =>
        onChange?.(normalizeAutofilledPhone(value, info))
      }
    />
  );
};

export default PhoneInput;
