import {
  calculateGrossPrice,
  calculateNetPrice,
  formatPrice,
  getGrossPrice,
  roundPrice,
} from "../library/utils/priceUtils";
import { describe, expect, it } from "vitest";

describe("priceUtils", () => {
  it("reads gross prices from flat and nested price structures", () => {
    expect(getGrossPrice({ priceBrutto: 123 })).toBe(123);
    expect(getGrossPrice({ productPrice: { priceBrutto: 456 } })).toBe(456);
    expect(getGrossPrice({ priceBrutto: 0 })).toBe(0);
    expect(getGrossPrice(null)).toBeNull();
  });

  it("calculates gross and net prices using VAT", () => {
    expect(calculateGrossPrice(100, 23)).toBe(123);
    expect(calculateNetPrice(123, 23)).toBe(100);
    expect(calculateGrossPrice(100, 0)).toBe(100);
  });

  it("rounds monetary values to two decimal places", () => {
    expect(roundPrice(10.005)).toBe(10.01);
    expect(calculateGrossPrice(25, 23)).toBe(30.75);
  });

  it("rejects invalid prices and VAT percentages", () => {
    expect(() => calculateGrossPrice(-1, 23)).toThrow(/cannot be negative/);
    expect(() => calculateNetPrice(100, 101)).toThrow(/between 0 and 100/);
    expect(() => roundPrice(Number.NaN)).toThrow(/finite number/);
  });

  it("formats prices with an explicit currency", () => {
    expect(formatPrice(1230, "en-US", "USD")).toBe("$1,230.00");
  });
});
