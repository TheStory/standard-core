"use client";

import type { APIString } from "@the-story/standard-core/types";
import { useCallback, useMemo, useState } from "react";

export type UseMaskedPhoneRevealOptions = {
  maskDigits?: number; // how many digits from the end should be masked
  maskChar?: string; // character to use for masking
};

export type UseMaskedPhoneRevealReturn = {
  revealed: boolean;
  masked: APIString;
  reveal: () => void;
};

/**
 * Masks the last N numeric digits of a phone-like string, preserving
 * spacing and non-digit symbols. Only digits are replaced by maskChar.
 */
export const maskLastDigits = (
  phone: APIString,
  { maskDigits = 6, maskChar = "*" }: UseMaskedPhoneRevealOptions = {},
): APIString => {
  if (!phone) return phone;
  let toMask = Math.max(0, maskDigits);
  const chars = String(phone).split("");
  for (let i = chars.length - 1; i >= 0 && toMask > 0; i--) {
    const ch = chars[i];
    if (/\d/.test(ch)) {
      chars[i] = maskChar;
      toMask--;
    }
  }
  return chars.join("");
};

/**
 * Reusable hook providing masked phone text and a handler to reveal it.
 * Useful anywhere you want to hide part of the phone number until user action.
 */
export const useMaskedPhoneReveal = (
  phone: APIString,
  options: UseMaskedPhoneRevealOptions = {},
): UseMaskedPhoneRevealReturn => {
  const [revealed, setRevealed] = useState(false);

  const masked = useMemo(
    () => maskLastDigits(phone, options),
    [phone, options.maskDigits, options.maskChar],
  );

  const reveal = useCallback(() => setRevealed(true), []);

  return { revealed, masked, reveal };
};

export default useMaskedPhoneReveal;
