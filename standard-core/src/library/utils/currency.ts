const formatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: process.env.NEXT_PUBLIC_CURRENCY ?? "PLN",
});

const currency = (value: number | null | undefined) => {
  if (typeof value === "undefined" || value === null) {
    return "";
  }

  return formatter.format(value);
};

export default currency;
