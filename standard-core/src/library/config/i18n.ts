export const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en";
const defaultLocales = ["en", "pl"] as const;
export const locales: readonly string[] =
  process.env.NEXT_PUBLIC_LOCALES?.split(",") ?? defaultLocales;
export const localePrefix = process.env.NEXT_PUBLIC_LOCALE_PREFIX ?? "always";

export type Locales = (typeof locales)[number];
