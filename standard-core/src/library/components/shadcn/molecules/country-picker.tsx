"use client";

import { Label } from "../atoms/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import isoCountries from "i18n-iso-countries";
import deCountries from "i18n-iso-countries/langs/de.json";
import enCountries from "i18n-iso-countries/langs/en.json";
import plCountries from "i18n-iso-countries/langs/pl.json";
import { useLocale } from "next-intl";
import { useMemo } from "react";

isoCountries.registerLocale(deCountries);
isoCountries.registerLocale(enCountries);
isoCountries.registerLocale(plCountries);

type CountryOption = { code: string; label: string; phone?: string };
type CountryPickerProps = {
  countries?: readonly CountryOption[];
  excludedCountryCodes?: readonly string[];
  locale?: string;
  value?: string;
  onChange?: (countryCode: string) => void;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
};

function CountryPicker({
  countries,
  excludedCountryCodes = [],
  locale,
  value,
  onChange,
  label = "Choose a country",
  required,
  disabled,
  id = "country",
  name,
}: CountryPickerProps) {
  const activeLocale = useLocale();
  const options = useMemo(() => {
    if (countries) return countries;
    const language = ["de", "en", "pl"].includes(locale ?? activeLocale)
      ? (locale ?? activeLocale)
      : "en";
    const excluded = new Set(
      excludedCountryCodes.map((code) => code.toUpperCase()),
    );
    return Object.entries(isoCountries.getNames(language))
      .map(([code, countryLabel]) => ({ code, label: countryLabel }))
      .filter(({ code }) => !excluded.has(code))
      .sort((a, b) => a.label.localeCompare(b.label, language));
  }, [activeLocale, countries, excludedCountryCodes, locale]);

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>
      <Select
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        name={name}
      >
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.label} ({country.code})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export { CountryPicker };
export type { CountryOption, CountryPickerProps };
