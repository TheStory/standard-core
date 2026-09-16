import {
  type PhoneInputInfo,
  isValidPhoneNumber,
  normalizeAutofilledPhone,
} from "../library/components/shadcn/molecules/phone-input";
import { describe, expect, it } from "vitest";

const info = (overrides: Partial<PhoneInputInfo> = {}): PhoneInputInfo => ({
  countryCallingCode: "48",
  nationalNumber: "48535111426",
  ...overrides,
});

describe("PhoneInput", () => {
  it("recognizes a valid international phone number", () => {
    expect(isValidPhoneNumber("+48 535 111 426")).toBe(true);
  });

  it("removes a duplicated calling code produced by browser autofill", () => {
    expect(normalizeAutofilledPhone("+48 48 535 111 426", info())).toBe(
      "+48535111426",
    );
  });

  it("keeps the original value when autofill data cannot be normalized", () => {
    expect(
      normalizeAutofilledPhone(
        "+48 123",
        info({ countryCallingCode: null, nationalNumber: null }),
      ),
    ).toBe("+48 123");
  });
});
