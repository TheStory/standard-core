export type GrossPriceInput = {
  priceBrutto?: number | null;
  productPrice?: {
    priceBrutto?: number | null;
  } | null;
};

const assertFiniteNumber = (value: number, label: string) => {
  if (!Number.isFinite(value))
    throw new Error(`${label} must be a finite number`);
};

const assertPrice = (value: number, label: string) => {
  assertFiniteNumber(value, label);
  if (value < 0) throw new Error(`${label} cannot be negative`);
};

const assertVatPercent = (vatPercent: number) => {
  assertFiniteNumber(vatPercent, "VAT percentage");
  if (vatPercent < 0 || vatPercent > 100)
    throw new Error("VAT percentage must be between 0 and 100");
};

export const roundPrice = (value: number) => {
  assertFiniteNumber(value, "Price");
  return Math.round((value + Number.EPSILON) * 100) / 100;
};

export const calculateGrossPrice = (netPrice: number, vatPercent: number) => {
  assertPrice(netPrice, "Net price");
  assertVatPercent(vatPercent);
  return roundPrice(netPrice * (1 + vatPercent / 100));
};

export const calculateNetPrice = (grossPrice: number, vatPercent: number) => {
  assertPrice(grossPrice, "Gross price");
  assertVatPercent(vatPercent);
  return roundPrice(grossPrice / (1 + vatPercent / 100));
};

export const getGrossPrice = (
  price?: GrossPriceInput | null,
): number | null => {
  const grossPrice = price?.priceBrutto ?? price?.productPrice?.priceBrutto;

  return typeof grossPrice === "number" && Number.isFinite(grossPrice)
    ? grossPrice
    : null;
};

const getDefaultCurrency = () => process.env.NEXT_PUBLIC_CURRENCY || "PLN";

export const formatPrice = (
  price: number,
  locale = "pl_PL",
  currency = getDefaultCurrency(),
) =>
  price.toLocaleString(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
  });

export const getCurrencySymbol = (
  locale: string,
  currency = getDefaultCurrency(),
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
  })
    .formatToParts()
    .find((part) => part.type === "currency")?.value;
