"use client";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import isoCountries from "i18n-iso-countries";
import deCountries from "i18n-iso-countries/langs/de.json";
import enCountries from "i18n-iso-countries/langs/en.json";
import plCountries from "i18n-iso-countries/langs/pl.json";
import { useLocale } from "next-intl";
import { useMemo } from "react";

isoCountries.registerLocale(deCountries);
isoCountries.registerLocale(enCountries);
isoCountries.registerLocale(plCountries);

export type CountryOption = {
  code: string;
  label: string;
  phone?: string;
};

export type CountryPickerProps = {
  countries?: readonly CountryOption[];
  excludedCountryCodes?: readonly string[];
  locale?: string;
  value?: string;
  onChange?: (countryCode: string) => void;
  label?: string;
  error?: boolean;
  helperText?: TextFieldProps["helperText"];
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
};

const CountryPicker = ({
  countries,
  excludedCountryCodes = [],
  locale,
  value = "",
  onChange,
  label = "Choose a country",
  error,
  helperText,
  required,
  disabled,
  fullWidth = true,
  id,
  name,
}: CountryPickerProps) => {
  const activeLocale = useLocale();
  const options = useMemo<readonly CountryOption[]>(() => {
    if (countries) return countries;

    const requestedLocale = (locale ?? activeLocale).split("-")[0];
    const countryLocale = ["de", "en", "pl"].includes(requestedLocale)
      ? requestedLocale
      : "en";
    const excludedCodes = new Set(
      excludedCountryCodes.map((code) => code.toUpperCase()),
    );
    return Object.entries(isoCountries.getNames(countryLocale))
      .map(([code, label]) => ({ code, label }))
      .filter((country) => !excludedCodes.has(country.code.toUpperCase()))
      .sort((first, second) =>
        first.label.localeCompare(second.label, countryLocale),
      );
  }, [activeLocale, countries, excludedCountryCodes, locale]);
  const selectedCountry =
    options.find(
      (country) => country.code.toUpperCase() === value.toUpperCase(),
    ) ?? null;

  return (
    <Autocomplete
      id={id}
      options={options}
      value={selectedCountry}
      disabled={disabled}
      fullWidth={fullWidth}
      autoHighlight
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, selected) =>
        option.code.toUpperCase() === selected.code.toUpperCase()
      }
      onChange={(_, country) => onChange?.(country?.code ?? "")}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <Box component="li" key={key} {...optionProps}>
            <Box
              component="img"
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
              sx={{ mr: 2, flexShrink: 0 }}
            />
            {option.label} ({option.code})
            {option.phone ? ` +${option.phone.replace(/^\+/, "")}` : ""}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          variant="standard"
          error={error}
          helperText={helperText}
          required={required}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export default CountryPicker;
